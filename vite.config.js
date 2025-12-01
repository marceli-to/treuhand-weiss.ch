// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
const path = require('path');

const host = 'treuhand-weiss.ch.test';

export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './resources/js/')
    },
  },
  server: {
    cors: {
      origin: [`https://${host}`],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true
    },
  },
  plugins: [
    vue(),
    laravel({
      input: [
        'resources/js/app.js',
        //'resources/js/form/contact.js',
      ],
      refresh: true,
    }),
  ],
});