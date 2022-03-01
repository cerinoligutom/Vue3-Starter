<template>
  <div class="flex items-center justify-center h-full">
    <div class="grid rounded shadow-lg gap-y-spacer bg-surface p-spacer">
      <h1>
        {{ $t('hello') }},
        <span class="underline text-brand-accent">{{ email }}</span>
      </h1>

      <div class="flex flex-col rounded bg-background text-on-background p-spacer">
        <div>Environment:</div>
        <pre>{{ environment }}</pre>
      </div>

      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row">
          <LanguageSwitcher class="mr-2" />
          <ThemeSwitcher class="mr-2" />
        </div>
        <BaseButton @click="tryLogout()">{{ $t('logout') }}</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import environment from '@/config/environment';
import { useAuth } from '@/modules/auth/composables/use-auth';
import { BaseButton } from '@/shared/components/base';
import ThemeSwitcher from '@/shared/components/theme-switcher.vue';
import LanguageSwitcher from '@/shared/components/language-switcher.vue';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useRouter } from 'vue-router';

const router = useRouter();
const { logout } = useAuth();
const cookies = useCookies([]);

const email = cookies.get('email');

async function tryLogout() {
  await logout();

  router.push('/');
}
</script>
