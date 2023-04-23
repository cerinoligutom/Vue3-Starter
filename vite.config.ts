import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { SFCFluentPlugin } from 'unplugin-fluent-vue/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    SFCFluentPlugin({
      // define messages in SFCs
      blockType: 'fluent', // default 'fluent' - name of the block in SFCs
      checkSyntax: true, // default true - whether to check syntax of the messages
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
