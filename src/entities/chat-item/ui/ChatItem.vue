<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  isChanged: boolean;
}>();

const flag = ref(false);
</script>

<template>
  <div class="container-chats flex items-center gap-10">
    <div class="chat">{{ el.title }}</div>
    <div
      class="icon"
      @click="propisChanged = !props.isChanged"
      style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255)"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="40px"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        ></path>
      </svg>
      <transition name="fade">
        <div class="btn-chat" v-if="flag"></div>
      </transition>
    </div>
  </div>
</template>

<style></style>
