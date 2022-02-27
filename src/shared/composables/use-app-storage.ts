import { useStorage, type MaybeRef } from '@vueuse/core';

const PREFIX = 'v-app:';

export function useAppStorage<T = unknown>(key: string, value: MaybeRef<T>) {
  return useStorage<T>(`${PREFIX}${key}`, value);
}

export function useClearAppStorage() {
  function clear() {
    const keys = Object.keys(window.localStorage);

    const keysToRemove = keys.filter((key) => key.startsWith(`${PREFIX}`));

    for (const key of keysToRemove) {
      window.localStorage.removeItem(key);
    }
  }

  function removeItem(key?: string) {
    window.localStorage.removeItem(`${PREFIX}${key}`);
  }

  return { clear, removeItem };
}
