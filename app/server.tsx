// noinspection JSUnusedGlobalSymbols
import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server';
import { createServerEntry } from '@tanstack/react-start/server-entry';
import { handlers, getSession, buildLogoutUrl } from './auth.server';

const tanstackHandler = createStartHandler(defaultStreamHandler);

/**
 * Vite's CORS middleware calls res.setHeader('Vary', 'Origin') before srvx's
 * sendNodeResponse calls res.writeHead(). When writeHead receives a flat
 * ['set-cookie', v1, 'set-cookie', v2] array while the response already has a
 * setHeader entry, Node.js header-merge mode keeps only the last value for
 * each duplicate key — earlier Set-Cookie headers are silently dropped.
 *
 * Fix: move every Set-Cookie value onto the underlying Node.js ServerResponse
 * via setHeader() (which supports string[] and preserves all cookies), then
 * return a stripped Web Response so writeHead never sees 'set-cookie' and
 * cannot overwrite what we already set.
 */
function withCookiesFixed(request: Request, response: Response): Response {
  const cookies = response.headers.getSetCookie();
  if (cookies.length === 0) return response;

  type NodeResLike = {
    setHeader: (name: string, value: string[]) => void;
  };
  const nodeRes = (
    request as unknown as { runtime?: { node?: { res?: NodeResLike } } }
  )?.runtime?.node?.res;

  if (!nodeRes || typeof nodeRes.setHeader !== 'function') return response;

  nodeRes.setHeader('Set-Cookie', cookies);

  const strippedHeaders = new Headers();
  for (const [key, value] of response.headers) {
    if (key.toLowerCase() !== 'set-cookie') strippedHeaders.append(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: strippedHeaders,
  });
}

/**
 * Intercepts Auth.js API routes before TanStack Start's page router handles
 * them. Without this, TanStack Start would render its own 404 page for all
 * /api/auth/* paths since they are not declared as file-based page routes.
 */
async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;

  // POST /api/auth/logout → initiate the RP-initiated logout flow
  // against the IdP. Mirrors the implementation in the other seven
  // examples: load the session for the id_token_hint, generate a
  // state, store it in a Path-scoped logout_state cookie, then
  // redirect to Zitadel's end_session_endpoint. The /logout/callback
  // handler below validates the state on return.
  if (pathname === '/api/auth/logout') {
    if (request.method !== 'POST') {
      return new Response(null, { status: 405, headers: { Allow: 'POST' } });
    }
    const session = await getSession(request);
    if (!session?.idToken) {
      return new Response('No valid session or ID token found', {
        status: 400,
      });
    }
    const { url: idpLogoutUrl, state } = await buildLogoutUrl(session.idToken);
    return new Response(null, {
      status: 302,
      headers: {
        Location: idpLogoutUrl,
        'Set-Cookie': `logout_state=${state}; HttpOnly; SameSite=Lax; Path=/api/auth/logout/callback`,
      },
    });
  }

  // GET /api/auth/logout/callback → validate state then clear authjs.*
  // cookies + the path-scoped logout_state cookie. The logout_state
  // cookie was set with Path=/api/auth/logout/callback when the
  // RP-initiated logout flow started; the same Path attribute is
  // required when clearing so the browser actually drops it.
  //
  // Validates the `state` query parameter against the `logout_state`
  // cookie before clearing cookies, mirroring the pattern used by the
  // other seven example apps. This prevents an attacker from triggering
  // an unwanted logout via a crafted /api/auth/logout/callback link.
  if (pathname === '/api/auth/logout/callback') {
    const state = url.searchParams.get('state');
    const cookieHeader = request.headers.get('Cookie') ?? '';
    const cookies = Object.fromEntries(
      cookieHeader
        .split(';')
        .filter(Boolean)
        .map((c: string) => {
          const [k, ...v] = c.trim().split('=');
          return [k.trim(), v.join('=')];
        }),
    );
    const logoutStateCookie = cookies['logout_state'];

    if (state && logoutStateCookie && state === logoutStateCookie) {
      const responseHeaders = new Headers({ Location: '/logout/success' });
      responseHeaders.append('Clear-Site-Data', '"cookies"');
      responseHeaders.append(
        'Set-Cookie',
        'logout_state=; Max-Age=0; HttpOnly; SameSite=Lax; Path=/api/auth/logout/callback',
      );
      for (const name of Object.keys(cookies)) {
        if (name.includes('authjs.')) {
          responseHeaders.append('Set-Cookie', `${name}=; Max-Age=0; Path=/`);
        }
      }
      return withCookiesFixed(
        request,
        new Response(null, { status: 302, headers: responseHeaders }),
      );
    } else {
      const errorUrl = new URL('/logout/error', url);
      errorUrl.searchParams.set(
        'reason',
        'Invalid or missing state parameter.',
      );
      return new Response(null, {
        status: 302,
        headers: { Location: errorUrl.pathname + errorUrl.search },
      });
    }
  }

  // All other /api/auth/* routes → Auth.js
  if (pathname.startsWith('/api/auth/')) {
    if (request.method === 'GET')
      return withCookiesFixed(request, await handlers.GET({ request }));
    if (request.method === 'POST')
      return withCookiesFixed(request, await handlers.POST({ request }));
  }

  // Public API endpoint — no authentication required.
  if (pathname === '/api/unprotected') {
    return Response.json({ ok: true });
  }

  // Session-protected API endpoints — return 403 when unauthenticated.
  if (pathname === '/api/secured' || pathname === '/api/protected/middleware') {
    const session = await getSession(request);
    if (!session) return Response.json({ error: 'Forbidden' }, { status: 403 });
    return Response.json({ ok: true });
  }

  // Everything else → TanStack Start SSR router
  return tanstackHandler(request);
}

export default createServerEntry({
  fetch: handleRequest,
});
