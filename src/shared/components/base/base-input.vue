<template>
  <div class="flex flex-col">
    <label>{{ label }}</label>
    <input v-model="modelValue" class="w-full" v-bind="$attrs" :class="{ 'has-error': !!error }" />
    <span v-if="error" class="text-red-400">{{ error }}</span>
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
import type { Ref } from 'vue';

interface IProps {
  modelValue: string;
  label: string;
  error?: string | Ref<string>;
}
const props = defineProps<IProps>();

const emit = defineEmits<IEmits>();
interface IEmits {
  (e: 'update:modelValue', modelValue: string): void;
}
const modelValue = useVModel(props, 'modelValue', emit);
</script>
