<script setup lang="ts">
import ChatItem from "entities/chat-item/ui/chat-item.vue";
import { ref } from "vue";

const props = defineProps<{
  title: string;
}>();

const flag = ref(false);
const deleteChat = () => {};
const changeChat = () => {};

const items = {};
</script>

<template>
  <div class="cont-header flex w-[100%] justify-between px-10 md:gap-[10em]">
    <h1 class="title">dasdas</h1>
    <div
      class="icon"
      @click="flag = !flag"
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
        <ChatItem
          :delete-chat="deleteChat"
          :change-chat="changeChat"
          v-if="flag === true"
        />
      </transition>
    </div>
  </div>
</template>

<style scoped>
.icon {
  position: relative;
  /* border: 1px solid red; */
  cursor: pointer;
  display: flex;
  align-items: center;
}

.cont-header {
  border-bottom: 1px solid rgb(84, 84, 84);
  gap: 65vw;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
