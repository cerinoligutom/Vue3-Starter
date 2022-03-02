<template>
  <div class="flex items-center">
    <input v-model="modelValue" type="checkbox" v-bind="$attrs" />
    <label class="ml-2 block text-sm">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script lang="ts">
// https://vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script

// declare additional options
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core';

interface IProps {
  modelValue: boolean;
  label: string;
}
const props = defineProps<IProps>();

interface IEmits {
  (e: 'update:modelValue', modelValue: string): void;
}
const emit = defineEmits<IEmits>();

const modelValue = useVModel(props, 'modelValue', emit);
</script>

<style lang="postcss" scoped></style>
