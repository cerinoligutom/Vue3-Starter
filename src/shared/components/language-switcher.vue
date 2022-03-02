<template>
  <div>
    <button v-if="currentLanguage === SupportedLanguage.FIL" @click="toEnglish()">English</button>
    <button v-else @click="toFilipino()">Filipino</button>
  </div>
</template>

<script lang="ts" setup>
import { useLanguage } from '../composables/use-language';
import { SupportedLanguage } from '../constants/supported-language';

const { changeLanguage, currentLanguage } = useLanguage();

const toEnglish = () => {
  changeLanguage(SupportedLanguage.EN);
};

const toFilipino = () => {
  changeLanguage(SupportedLanguage.FIL);
};
</script>

<style lang="postcss" scoped>
button {
  @apply rounded border border-brand-main px-spacer;
  @apply hover:bg-brand-main hover:text-on-brand-main;
}
</style>
