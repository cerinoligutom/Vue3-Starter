/**
 * Refer to [vite docs](https://vitejs.dev/guide/env-and-mode.html#env-files)
 * if you want to make use of .env files.
 */

const environment = {
  production: import.meta.env.PROD,
  mode: import.meta.env.MODE as 'development' | 'production',
} as const;

export default environment;
