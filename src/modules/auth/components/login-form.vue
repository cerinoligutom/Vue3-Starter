<template>
  <div class="grid w-96 gap-y-spacer rounded-lg bg-surface p-spacer text-on-surface shadow-lg">
    <h2 class="text-center text-2xl text-brand-main">Vue3 Starter</h2>

    <form class="grid gap-y-spacer" @submit.prevent="tryLogin()">
      <BaseInput v-model="form.email" label="Email" type="text" :error="v$.email.$errors[0]?.$message" />
      <BaseInput v-model="form.password" label="Password" type="password" :error="v$.password.$errors[0]?.$message" />

      <BaseCheckbox v-model="form.remember" :label="$t('remember-me')" />

      <BaseButton :disabled="isSubmitting || v$.$invalid" type="submit">{{ $t('login') }}</BaseButton>
    </form>

    <div class="flex items-center justify-end">
      <LanguageSwitcher class="mr-2" />
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton, BaseCheckbox, BaseInput } from '@/shared/components/base';
import ThemeSwitcher from '@/shared/components/theme-switcher.vue';
import LanguageSwitcher from '@/shared/components/language-switcher.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouteName } from '@/shared/constants/route-name';
import { useAuth } from '../composables/use-auth';

import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import { useAppStorage } from '@/shared/composables/use-app-storage';

interface ILoginForm {
  email: string;
  password: string;
  remember: boolean;
}

const { login } = useAuth();
const router = useRouter();
const isSubmitting = ref(false);
const emailStorage = useAppStorage<string>('email', '', { prefix: 'remember:' });

const form = reactive<ILoginForm>({
  email: emailStorage.value,
  password: '',
  remember: !!emailStorage.value,
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
};

const v$ = useVuelidate(rules, form, { $lazy: true });

async function tryLogin() {
  isSubmitting.value = true;
  const isValid = await v$.value.$validate();

  if (!isValid) {
    isSubmitting.value = false;
    return;
  }

  try {
    await login(form.email, form.password);

    emailStorage.value = form.remember ? form.email : '';

    router.push({ name: RouteName.DEMO });
  } catch {
    isSubmitting.value = false;
  }
}
</script>

<fluent locale="en">
remember-me = Remember me
</fluent>

<fluent locale="fil">
remember-me = Tandaan ako
</fluent>
