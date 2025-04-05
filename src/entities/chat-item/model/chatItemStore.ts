import { defineStore } from "pinia";
import { ref } from "vue";
import { IChatItem } from "../types/IChatItem";

export const useChatItemStore = defineStore("chatItemStore", () => {
  const chatItems = ref<IChatItem>();

  // function deleteChat (id: number) {
  //   chatItems.value = chatItems.value.filter(chatItem => chatItem.id !== id)
  // }

  // function updateChatItem (id: number, newChatItem: any) {
  //   chatItems.value = chatItems.value.map(chatItem => {
  //     if (chatItem.id === id) {
  //       return newChatItem

  // }

  return { chatItems };
});
