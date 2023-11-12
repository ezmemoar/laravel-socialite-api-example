<template>
  <div class="w-full h-screen flex items-center justify-center">
    <NCard class="!w-[50%]">
      <div class="flex flex-col gap-3">
        <NButton type="primary" @click="login('google')" :loading="loading">
          Login With Google
        </NButton>
      </div>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { NButton, NCard } from "naive-ui";
import { useRoute } from "vue-router";
import { axios } from "../plugins/axios";

const route = useRoute();

const login = async (provider: string) => {
  const res = await axios
    .get<{ url: string }>(`/api/auth/${provider}`);

  if (res.data?.url) {
    window.location.href = res.data.url;
  }
};

onMounted(async () => {
  // * Cuma butuh code nya aja, kirim ke api callback
  if (route.params.provider && route.query.code) {
    await axios.get(`/api/auth/${route.params.provider}/callback`, {
      params: {
        code: route.query.code,
      },
    });
  }
});
</script>
