<template>
  <div class="w-full h-screen flex justify-center items-center">
    <NCard class="basis-2/4">
      <NSpace vertical :size="20">
        <Text size="xl" class="flex items-center">
          Vue 3 template
          <NIcon>
            <SearchFilled />
          </NIcon>
        </Text>
        <div>
          <Text>Library used in this template:</Text>
          <ul class="list-disc">
            <li>
              <Text
                size="sm"
                tag="a"
                target="_blank"
                href="https://typescriptlang.org"
                class="text-primary-style"
                >Typescript</Text
              >, for language
            </li>
            <li>
              <Text
                size="sm"
                tag="a"
                target="_blank"
                href="https://router.vuejs.org"
                class="text-primary-style"
                >Vue Router</Text
              >, for routing
            </li>
            <li>
              <Text
                size="sm"
                tag="a"
                target="_blank"
                href="https://pinia.vuejs.org"
                class="text-primary-style"
                >Pinia</Text
              >, for state management
            </li>
            <li>
              <Text
                size="sm"
                tag="a"
                target="_blank"
                href="https://tailwindcss.com"
                class="text-primary-style"
                >Tailwind CSS</Text
              >, for css framework
            </li>
            <li>
              <Text
                size="sm"
                tag="a"
                target="_blank"
                href="https://axios-http.com/"
                class="text-primary-style"
                >Axios</Text
              >, for API fetcher
            </li>
            <li>
              <Text
                size="sm"
                tag="a"
                target="_blank"
                href="https://naiveui.com"
                class="text-primary-style"
                >Naive UI</Text
              >, for UI library
            </li>
            <li>
              <Text
                size="sm"
                tag="a"
                target="_blank"
                href="https://naiveui.com"
                class="text-primary-style"
                >XIcons Material</Text
              >, for Icons
            </li>
          </ul>
        </div>
        <NButton
          type="primary"
          class="!w-full"
          @click="message.info(`Let's Gooo!!`)"
        >
          Start Now
        </NButton>
      </NSpace>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import { NButton, NCard, NIcon, NSpace } from "naive-ui";
import Text from "../components/Text.vue";
import { useNaiveDiscrete } from "../composables/useNaiveDiscrete";
import { SearchFilled } from "@vicons/material";

const { message } = useNaiveDiscrete();
</script>
