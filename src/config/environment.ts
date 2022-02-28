/**
 * Refer to [vite docs](https://vitejs.dev/guide/env-and-mode.html#env-files)
 * if you want to make use of .env files.
 */

type EnvironmentMode = 'development' | 'production';

const environment = {
  production: import.meta.env.PROD,
  mode: import.meta.env.MODE as EnvironmentMode,
} as const;

export default environment;
