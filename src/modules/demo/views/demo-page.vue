<template>
  <div>{{ componentName }} component works!</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const componentName = ref<string>('FooPage');
</script>

<style lang="postcss" scoped></style>
