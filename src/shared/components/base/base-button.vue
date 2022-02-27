<template>
  <button class="py-2 rounded-md px-spacer bg-brand-main text-on-brand-main focus:ring focus:ring-brand-main/50">
    <slot></slot>
  </button>
</template>

<style lang="postcss" scoped>
button {
  &:disabled {
    @apply bg-background text-on-background cursor-not-allowed;
  }
}
</style>
