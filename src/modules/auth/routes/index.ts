import { LayoutName } from '@/shared/constants/layout-name';
import { RouteName } from '@/shared/constants/route-name';
import type { RouteRecordRaw } from 'vue-router';
import { useAuth } from '../composables/use-auth';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: RouteName.LOGIN,
    meta: {
      layout: LayoutName.NO_LAYOUT,
    },
    component: () => import('../views/login-page.vue'),
    beforeEnter() {
      const { isAuthenticated } = useAuth();

      return isAuthenticated() ? { name: RouteName.DEMO } : true;
    },
  },
];

export default routes;
