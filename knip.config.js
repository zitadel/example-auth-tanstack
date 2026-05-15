module.exports = {
  ignoreDependencies: ['@commitlint/config-conventional'],
  entry: [
    'app/router.tsx',
    'app/client.tsx',
    'app/server.tsx',
    'app.config.ts',
    'app/routes/**/*',
    'app/lib/**/*',
  ],
  ignore: ['commitlint.config.js', 'app.config.timestamp_*.js'],
};
