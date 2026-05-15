import { createFileRoute, redirect } from '@tanstack/react-router';
import { getSession } from '~/auth.server';
import type { Session } from '@auth/core/types';

export const Route = createFileRoute('/profile')({
  beforeLoad: async ({ context }) => {
    const session = context.session as Session | null;
    if (!session) {
      throw redirect({ to: '/auth/login' });
    }
    return { session };
  },
  component: ProfilePage,
});

function ProfilePage() {
  const { session } = Route.useRouteContext();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Your Profile</h1>
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Session Information
          </h2>
          <div className="rounded-lg bg-gray-900 p-6">
            <pre className="overflow-x-auto text-sm leading-relaxed text-green-400">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>
        <a
          href="/api/auth/signout"
          className="mt-6 inline-block rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
        >
          Sign Out
        </a>
      </div>
    </main>
  );
}
