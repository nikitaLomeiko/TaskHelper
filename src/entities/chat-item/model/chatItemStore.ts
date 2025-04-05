import { defineStore } from "pinia";
import { ref } from "vue";
import { IChatItem } from "../types/IChatItem";

export const useChatItemStore = defineStore("chatItemStore", () => {
  const chatItems = ref<IChatItem[]>();

  function deleteChat(id: string) {
    chatItems.value =
      chatItems.value?.filter((chatItem) => chatItem.id !== id) ?? []; // Возвращаем пустой массив если chatItems.value === undefined
  }

  function updateChatItem(id: string, newChatItem: IChatItem) {
    chatItems.value =
      chatItems.value?.map((chatItem) =>
        chatItem.id === id ? newChatItem : chatItem
      ) ?? []; // Возвращаем пустой массив если chatItems.value === undefined
  }

  return { chatItems, updateChatItem, deleteChat };
});
