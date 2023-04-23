/// <reference types="vite/client" />

import type { App } from 'vue';
import type { Router } from 'vue-router';

declare global {
  interface IModuleOptions {
    app: App<Element>;
    router: Router;
  }

  interface IModuleFn {
    (moduleOptions: IModuleOptions): void;
  }
}
