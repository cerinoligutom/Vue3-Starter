<template>
  <component :is="layout" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { LayoutName } from './shared/constants/layout-name';

const route = useRoute();
const layout = computed(() => {
  if (route.meta.layout) {
    return route.meta.layout;
  }

  return route.path === '/' ? LayoutName.NO_LAYOUT : LayoutName.DEFAULT_LAYOUT;
});
</script>
