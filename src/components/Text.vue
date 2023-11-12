<template>
  <component
    :is="tag"
    :class="{
      'text-sm': size === 'xs',
      'text-base': size === 'sm',
      'text-lg': size === 'md',
      'text-2xl': size === 'lg',
      'text-3xl': size === 'xl',
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tag: "span" | "a" | "p" | "div";
    size: "xs" | "sm" | "md" | "lg" | "xl";
  }>(),
  {
    size: "md",
    tag: "p",
  },
);
</script>
