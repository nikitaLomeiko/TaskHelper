import { defineStore } from "pinia";
import { ref } from "vue";
import { IChatItem } from "../types/IChatItem";

export const useChatItemStore = defineStore("chatItemStore", () => {
  const chatItems = ref<IChatItem[]>([
    {
      id: "13",
      content: "dasdasd",
      title: "new chat",
    },
  ]);

  function deleteChat(id: string) {
    chatItems.value =
      chatItems.value.filter((chatItem) => chatItem.id !== id) ?? []; // Возвращаем пустой массив если chatItems.value === undefined
  }

  function updateChatItem(id: string, title: string) {
    const data = chatItems.value.find((item) => item.id === id);

    if (data) {
      data.title = title;
    }
  }

  return { chatItems, updateChatItem, deleteChat };
});
