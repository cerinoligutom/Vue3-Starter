import { RouteName } from '@/shared/constants/route-name';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: RouteName.DEMO },
    },
  ],
});

export default router;
