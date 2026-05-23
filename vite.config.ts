import path from 'path';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const allowedHosts = ['desktop-ends73h.tail1acb65.ts.net'];

    return {
      base: mode === 'production' ? '/interview-speaking/' : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts,
      },
      preview: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts,
      },
      plugins: [],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
