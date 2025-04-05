<script setup lang="ts">
import { SendBox } from "features/send-box";
import { useChatStore } from "../model/pinia/chat.pinia";
import { IMessage, Message } from "entities/message";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const chat = useChatStore();
const { messages } = storeToRefs(chat);

const messageSelect = ref<IMessage | null>(null);
const isAnswer = ref<boolean>(false);
const isChange = ref<boolean>(false);

const handleAnswerMessage = (message: IMessage) => {
  isAnswer.value = true;
  messageSelect.value = message;
};

const handleChangeMessage = (message: IMessage) => {
  isChange.value = true;
  messageSelect.value = message;
};

const handleSendMessage = (message: IMessage) => {
  if (isChange.value) {
    chat.changeMessage(messageSelect.value?.id || "", message.body);
  } else {
    chat.addMessage(message);
  }

  isAnswer.value = false;
  messageSelect.value = null;
};
</script>

<template>
  <div class="flex flex-col gap-5 h-full justify-end">
    <div class="w-full flex flex-col gap-2 items-center justify-center h-full">
      <div class="rounded-full w-48 h-48 p-10 flex items-center justify-center mt-2 bg-gray-400">
        <svg
          class="size-48 fill-white"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 640 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"
          ></path>
        </svg>
      </div>
      <h2 class="text-3xl text-black/50">TaskHelper</h2>
      <p class="w-full max-w-[600px] text-center text-black/20 leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam commodi dolor molestiae labore, ad
        praesentium magnam omnis quo voluptates fugit numquam magni facilis illum. Ex quos fugiat enim deleniti!
      </p>
    </div>
    <div
      v-for="(item, index) in messages"
      class="w-full flex"
      :class="item.typeAuthor === 'user' ? 'justify-end' : 'justify-start'"
    >
      <Message
        :key="index"
        v-on:delete="() => chat.removeMessage(item.id)"
        v-on:bookmark="() => chat.toggleBookmark(item.id)"
        v-on:answer="() => handleAnswerMessage(item)"
        v-on:change="() => handleChangeMessage(item)"
        :type-author="item.typeAuthor"
        :orientation="item.typeAuthor === 'user' ? 'right' : 'left'"
        :time="item.time"
        :body="item.body"
        :is-bookmarked="item.isBookmarked"
        :answer-body="item.answerBody"
      />
    </div>
  </div>
  <SendBox
    :message="messageSelect"
    :type-message="isAnswer ? 'answer' : isChange ? 'change' : undefined"
    v-on:submit="handleSendMessage"
    class="w-full"
  />
</template>

<style scoped></style>
