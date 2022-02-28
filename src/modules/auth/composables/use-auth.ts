import { useClearAppStorage } from '@/shared/composables/use-app-storage';
import { useCookies } from '@vueuse/integrations/useCookies';

export function useAuth() {
  const cookieName = 'email';
  const cookies = useCookies([]);
  const { clear } = useClearAppStorage();

  function isAuthenticated() {
    return cookies.get(cookieName) !== undefined;
  }

  async function login(email: string, password: string) {
    // TODO: Implement login
    // Do auth request with your API
    console.info({ email, password });

    cookies.set(cookieName, email, {
      maxAge: 60 * 60 * 24 * 7, // 1 week,
    });

    // Simulate 2s delay
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  async function logout() {
    // TODO: Implement logout
    // Do auth request with your API

    cookies.remove(cookieName);
    clear();
  }

  return {
    isAuthenticated,
    login,
    logout,
  };
}
