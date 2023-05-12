<template>
  <button class="rounded-md bg-brand-main px-spacer py-2 text-on-brand-main focus:ring focus:ring-brand-main/50">
    <slot></slot>
  </button>
</template>

<style lang="postcss" scoped>
button {
  &:disabled {
    @apply cursor-not-allowed bg-background text-on-background;
  }
}
</style>
