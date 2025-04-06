import { defineStore } from "pinia";
import { ref } from "vue";
import { IChatItem } from "../types/IChatItem";

export const useChatItemStore = defineStore("chatItemStore", () => {
  const chatItems = ref<IChatItem[]>([
    {
      id: "general",
      title: "General",
      isNoDelete: true,
      isReadOnly: false,
    },
    {
      id: "bookmark",
      title: "Избранное",
      isNoDelete: true,
      isReadOnly: true,
    },
    {
      id: "support",
      title: "Поддрежка",
      isNoDelete: true,
      isReadOnly: false,
    },
  ]);

  const loadChats = (chats: IChatItem[]) => {
    chatItems.value = [...chatItems.value, ...chats];
  };

  const addNewChat = () => {
    const newId = Math.random().toString(36);
    chatItems.value.push({ id: newId, title: `Новый чат#${newId}` });
  };

  function deleteChat(id: string) {
    chatItems.value = chatItems.value.filter((chatItem) => chatItem.id !== id) ?? []; // Возвращаем пустой массив если chatItems.value === undefined
  }

  function updateChatItem(id: string, title: string) {
    const data = chatItems.value.find((item) => item.id === id);
    if (data) {
      data.title = title;
    }
  }

  return { chatItems, updateChatItem, deleteChat, loadChats, addNewChat };
});
