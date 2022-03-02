<template>
  <div class="flex h-full items-center justify-center">
    <div class="grid gap-y-spacer rounded bg-surface p-spacer shadow-lg">
      <h1>
        {{ $t('hello') }},
        <span class="text-brand-accent underline">{{ email }}</span>
      </h1>

      <div class="flex flex-col rounded bg-background p-spacer text-on-background">
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
