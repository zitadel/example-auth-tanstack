import { T as TSS_SERVER_FUNCTION, c as createServerFn, b as getStartContext } from "../server.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@auth/core";
import "@auth/core/errors";
import "@auth/core/providers/zitadel";
import "openid-client";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const fetchSession_createServerFn_handler = createServerRpc({
  id: "06bf63aa78f39b038d0e9ab2f3c3fbcdec13644d2f497bc2283101a979cb61e4",
  name: "fetchSession",
  filename: "app/session.ts"
}, (opts) => fetchSession.__executeServer(opts));
const fetchSession = createServerFn({
  method: "GET"
}).handler(fetchSession_createServerFn_handler, async () => {
  const ctx = getStartContext({
    throwIfNotFound: false
  });
  if (!ctx) return null;
  const {
    getSession
  } = await import("../server.js").then((n) => n.a);
  return getSession(ctx.request);
});
export {
  fetchSession_createServerFn_handler
};
