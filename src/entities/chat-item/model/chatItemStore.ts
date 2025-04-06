import { defineStore } from "pinia";
import { ref } from "vue";
import { IChatItem } from "../types/IChatItem";

export const useChatItemStore = defineStore("chatItemStore", () => {
  const chatItems = ref<IChatItem[]>([
    {
      id: "general",
      name: "General",
      isNoDelete: true,
      isReadOnly: false,
    },
    {
      id: "bookmark",
      name: "Избранное",
      isNoDelete: true,
      isReadOnly: true,
    },
    {
      id: "support",
      name: "Поддрежка",
      isNoDelete: true,
      isReadOnly: false,
    },
  ]);

  const loadChats = (chats: IChatItem[]) => {
    chatItems.value = [...chatItems.value, ...chats];
  };

  const addNewChat = () => {
    const newId = Math.random().toString(36);
    chatItems.value.push({ id: newId, name: `Новый чат#${newId}` });
  };

  function deleteChat(id: string) {
    chatItems.value = chatItems.value.filter((chatItem) => chatItem.id !== id) ?? []; // Возвращаем пустой массив если chatItems.value === undefined
  }

  function updateChatItem(id: string, title: string) {
    const data = chatItems.value.find((item) => item.id === id);
    if (data) {
      data.name = title;
    }
  }

  return { chatItems, updateChatItem, deleteChat, loadChats, addNewChat };
});
