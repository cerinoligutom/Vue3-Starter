<template>
  <div class="grid rounded-lg shadow-lg w-96 gap-y-spacer bg-surface text-on-surface p-spacer">
    <h2 class="text-2xl text-center text-brand-main">Vue3 Starter</h2>

    <form class="grid gap-y-spacer" @submit.prevent="tryLogin()">
      <BaseInput v-model="form.email" label="Email" type="text" :error="v$.email.$errors[0]?.$message" />
      <BaseInput v-model="form.password" label="Password" type="password" :error="v$.password.$errors[0]?.$message" />

      <BaseCheckbox v-model="form.remember" label="Remember me" />

      <BaseButton :disabled="isSubmitting || v$.$invalid" type="submit">Login</BaseButton>
    </form>

    <div class="flex items-center justify-end">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BaseButton, BaseCheckbox, BaseInput } from '@/shared/components/base';
import ThemeSwitcher from '@/shared/components/theme-switcher.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouteName } from '@/shared/constants/route-name';
import { useAuth } from '../composables/use-auth';

import type { ValidationArgs } from '@vuelidate/core';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

interface ILoginForm {
  email: string;
  password: string;
  remember: boolean;
}

const { login } = useAuth();
const router = useRouter();
const isSubmitting = ref(false);

const form = reactive<ILoginForm>({
  email: '',
  password: '',
  remember: false,
});

const rules: ValidationArgs = {
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

    router.push({ name: RouteName.DEMO });
  } catch {
    isSubmitting.value = false;
  }
}
</script>
