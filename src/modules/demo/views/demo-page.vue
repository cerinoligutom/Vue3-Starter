<template>
  <div class="flex items-center justify-center h-full">
    <div class="flex flex-col rounded shadow-lg bg-surface p-spacer">
      <h1 class="mb-spacer">
        Welcome,
        <span class="underline text-brand-accent">{{ email }}</span>
      </h1>
      <div class="flex flex-row justify-between">
        <ThemeSwitcher />
        <BaseButton @click="tryLogout()">Logout</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from '@/modules/auth/composables/use-auth';
import { BaseButton } from '@/shared/components/base';
import ThemeSwitcher from '@/shared/components/theme-switcher.vue';
import { useAppStorage } from '@/shared/composables/use-app-storage';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = useAppStorage<string | null>('email', null);
const { logout } = useAuth();

async function tryLogout() {
  await logout();

  router.push('/');
}
</script>

<style lang="postcss" scoped></style>
