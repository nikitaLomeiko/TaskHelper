<script setup lang="ts">
import { useChatItemStore } from "entities/chat-item";
import { chatButton } from "features/chat-actions";
import { ref } from "vue";

const props = defineProps<{
  title: string;
  chatId: string;
}>();

const chatItemStore = useChatItemStore();
const isChanged = ref<boolean>(false)
const value = ref<string>(props.title)

const handleSumbit = () => {
  if(value.value?.trim().length !== 0){
    chatItemStore.updateChatItem(props.chatId, value.value)
    value.value = "";
    isChanged.value = false;
  }
}

</script>

<template>
  <div class="cont-header flex w-[100%] justify-between px-10 md:gap-[10em]">
    <div v-if="!isChanged" class="flex flex-row items-center justify-between w-full">
      <h1 class="!text-lg">{{ props.title }}</h1>
      <chatButton :func-change="() => isChanged = true" :func-delete="() => chatItemStore.deleteChat(props.chatId)" />
    </div>
    <div v-else class="flex flex-row items-center gap-2 py-3">
      <input v-model="value" class="border rounded-md px-4 py-1 w-full" type="text" />
      <button
        @click="handleSumbit"
        class="bg-green-600 text-white px-4 py-1 rounded-md cursor-pointer transition-colors hover:bg-green-700"
      >
        изменить
      </button>
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
