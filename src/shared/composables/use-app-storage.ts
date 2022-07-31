import { useStorage, type MaybeComputedRef, type StorageLike, type UseStorageOptions } from '@vueuse/core';

const DEFAULT_PREFIX = 'v-app:';

export function useAppStorage<T = unknown>(
  key: string,
  value: MaybeComputedRef<T>,
  options?: UseStorageOptions<T> & { storage?: StorageLike; prefix?: string },
) {
  return useStorage<T>(`${options?.prefix ?? DEFAULT_PREFIX}${key}`, value, options?.storage ?? localStorage, options);
}

export function useClearAppStorage() {
  function clear(prefix = DEFAULT_PREFIX) {
    const keys = Object.keys(window.localStorage);

    const keysToRemove = keys.filter((key) => key.startsWith(`${prefix}`));

    for (const key of keysToRemove) {
      window.localStorage.removeItem(key);
    }
  }

  function removeItem(key?: string, prefix = DEFAULT_PREFIX) {
    window.localStorage.removeItem(`${prefix}${key}`);
  }

  return { clear, removeItem };
}
