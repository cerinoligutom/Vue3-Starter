import { LayoutName } from '@/shared/constants/layout-name';
import { RouteName } from '@/shared/constants/route-name';
import { createRouter, createWebHistory } from 'vue-router';
import { requiresAuthNavGuard } from './nav-guards/requires-auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: RouteName.LOGIN },
      meta: {
        layout: LayoutName.NO_LAYOUT,
      },
    },
  ],
});

router.beforeEach(requiresAuthNavGuard);

export default router;
