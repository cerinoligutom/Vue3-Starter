import { useAppStorage, useClearAppStorage } from '@/shared/composables/use-app-storage';
import { useCookies } from '@vueuse/integrations/useCookies';

export function useAuth() {
  const cookieName = 'isAuthenticated';
  const cookies = useCookies([]);
  const emailStorage = useAppStorage<string | null>('email', null);
  const { clear } = useClearAppStorage();

  function isAuthenticated() {
    return cookies.get(cookieName) === true;
  }

  async function login(email: string, password: string) {
    // TODO: Implement login
    // Do auth request with your API
    console.info({ email, password });

    cookies.set(cookieName, true, {
      maxAge: 60 * 60 * 24 * 7, // 1 week,
    });

    emailStorage.value = email;

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
