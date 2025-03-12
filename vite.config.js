// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
const path = require('path');

export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './resources/js/')
    },
  },
  server: {
    https: true,
    hmr: {
      host: 'treuhand-weiss.ch.test',
      protocol: 'https'
    },
    cors: {
      origin: ['https://treuhand-weiss.ch.test'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true
    },
  },
  plugins: [
    vue(),
    laravel([
      'resources/js/app.js',
      //'resources/js/form/contact.js',
    ]),
  ],
});