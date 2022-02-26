import { LayoutName } from '@/shared/constants/layout-name';
import { RouteName } from '@/shared/constants/route-name';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/demo',
    name: RouteName.DEMO,
    meta: {
      layout: LayoutName.DEFAULT_LAYOUT,
    },
    component: () => import('../views/demo-page.vue'),
  },
];

export default routes;
