<template>
  <NConfigProvider :theme-overrides="customTheme">
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from "naive-ui";
import { customTheme } from "./plugins/naiveUi";
</script>
