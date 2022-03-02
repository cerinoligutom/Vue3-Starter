<template>
  <button class="bg-transparent text-2xl text-brand-main" @click="theme = theme === 'dark' ? 'light' : 'dark'">
    <Icon :icon="theme === 'dark' ? sunIcon : moonIcon" />
  </button>
</template>

<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import sunIcon from '@iconify-icons/akar-icons/sun';
import moonIcon from '@iconify-icons/akar-icons/moon';

const theme = useColorMode({
  selector: 'html', // put on html
  attribute: 'class', // as a class
  modes: {
    light: 'light-theme', // the key (e.g. 'light', 'dark') is the internal value
    dark: 'dark-theme', // the value (e.g. 'light-theme', 'dark-theme') will be the class name
  },
  storageKey: 'theme',
});
</script>

<style lang="postcss" scoped></style>
