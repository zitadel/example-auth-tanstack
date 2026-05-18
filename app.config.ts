import { defineConfig } from '@tanstack/react-start/config';
import tailwindcss from '@tailwindcss/vite';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      port: Number(process.env.PORT) || 3000,
      headers: {
        'X-Frame-Options': 'DENY',
        'Content-Security-Policy':
          "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';",
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    },
  },
  server: {
    preset: 'node-server',
  },
});
