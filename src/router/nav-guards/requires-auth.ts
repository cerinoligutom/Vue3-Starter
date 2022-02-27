import { useAuth } from '@/modules/auth/composables/use-auth';
import { RouteName } from '@/shared/constants/route-name';
import type { NavigationGuard } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
  }
}

export const requiresAuthNavGuard: NavigationGuard = (to) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated()) {
      return true;
    } else {
      return { name: RouteName.LOGIN };
    }
  }
  return true;
};
