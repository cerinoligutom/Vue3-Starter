import type { App } from 'vue';
import { LayoutName } from '@/shared/constants/layout-name';

import NoLayout from './no-layout.vue';
import DefaultLayout from './default-layout.vue';

// https://router.vuejs.org/guide/advanced/meta.html#typescript
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: LayoutName;
  }
}

export default (app: App<Element>) => {
  app.component(LayoutName.NO_LAYOUT, NoLayout);
  app.component(LayoutName.DEFAULT_LAYOUT, DefaultLayout);
};
