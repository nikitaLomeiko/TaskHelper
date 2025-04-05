import { defineStore } from "pinia";
import { ref } from "vue";

export const useSideBarStore = defineStore("sidebar", () => {
  const visible = ref(true);

  return { visible };
});
