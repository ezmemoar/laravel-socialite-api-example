import { defineStore } from "pinia";
import { ref } from "vue";

export const authStore = defineStore("auth", () => {
  const data = ref([]);

  return { data };
});
