<template>
  <component :is="layout" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { LayoutName } from '@/shared/constants/layout-name';

const route = useRoute();
const layout = computed(() => route.meta.layout || LayoutName.DEFAULT_LAYOUT);
</script>

<style lang="postcss" scoped></style>
