import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite';
import preprocess from 'svelte-preprocess';
import routify from '@roxi/routify/vite-plugin';
import {svelte} from '@sveltejs/vite-plugin-svelte';

const production = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: production ? '/svelte-admin-ui/' : '/',
  clearScreen: false,
  server: {port: 1337},
  plugins: [
    VitePWA({
      useCredentials: true,
      includeAssets: ['favicon.ico', 'favicon.svg','robots.txt','apple-touch-icon.png'],
      manifest: {
        name: 'svelte-admin-ui',
        short_name: 'admin-ui',
        description: 'svelte admin ui powered by dooboolab',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    routify(),
    svelte({
      emitCss: true,
      compilerOptions: {dev: !production},
      extensions: ['.svelte'],
      preprocess: preprocess({
        postcss: true,
        sourceMap: !production,
      }),
      hot: !production,
    }),
  ],
});
