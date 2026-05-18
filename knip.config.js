module.exports = {
  ignoreDependencies: [
    '@commitlint/config-conventional',
    '@zitadel/tanstack-auth',
  ],
  rules: {
    unresolved: 'off',
  },
  entry: [
    'app/router.tsx',
    'app/client.tsx',
    'app/server.tsx',
    'app/session.ts',
    'app/auth.server.ts',
    'app/routes/**/*',
    'app/lib/**/*',
  ],
  ignore: ['commitlint.config.js', 'app/routeTree.gen.ts'],
};
