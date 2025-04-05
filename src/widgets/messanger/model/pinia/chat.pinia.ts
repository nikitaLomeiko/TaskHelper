import { IMessage } from "entities/message";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatStore = defineStore("chat", () => {
  const messages = ref<IMessage[]>([]);

  const loadMessages = (data: IMessage[]) => {
    messages.value = [...messages.value, ...data];
  };

  const addMessage = (message: IMessage) => {
    messages.value.push(message);
  };

  const removeMessage = (id: string) => {
    messages.value = messages.value.filter((message) => message.id !== id);
  };

  const changeMessage = (id: string, body: string) => {
    const data = messages.value.find((message) => message.id === id);

    if (data) {
      data.body = body;
    }
  };

  const toggleBookmark = (id: string) => {
    const message = messages.value.find((message) => message.id === id);

    if (message) {
      message.isBookmarked = !message.isBookmarked;
    }
  };

  return {
    loadMessages,
    messages,
    addMessage,
    removeMessage,
    changeMessage,
    toggleBookmark,
  };
});
