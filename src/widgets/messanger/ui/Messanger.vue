<script setup lang="ts">
import { SendBox } from "features/send-box";
import { useChatStore } from "../model/pinia/chat.pinia";
import { IMessage, Message } from "entities/message";
import { storeToRefs } from "pinia";
import { nextTick, onMounted, ref, watch } from "vue";
import { TypingIndicator } from "shared/ui/typing-indicator";
import { InfiniteLoader } from "shared/ui/Infinite-loader";
import { formatTimeMmHh } from "shared/lib/utils/formatTimeMmHh";
import { ApiClient, Endpoints } from "shared/api";

interface IProps {
  isReadonly?: boolean;
  chatId: string;
}

const props = defineProps<IProps>();

const chat = useChatStore();
const { messages } = storeToRefs(chat);

const messageSelect = ref<IMessage | null>(null);
const isAnswer = ref<boolean>(false);
const isChange = ref<boolean>(false);

watch(
  () => props.chatId,
  () => {
    chat.clearData();
    handleLaodData();
  }
);

const handleLaodData = async () => {
  let lastMeesageDate = messages.value[messages.value.length - 1]?.date;

  if (!lastMeesageDate) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    lastMeesageDate = date.toISOString().split("T")[0];
  }

  const data = await ApiClient({
    url: `${Endpoints.chats}${props.chatId}/hist?until_time=${lastMeesageDate}&amount=100`,
    method: "GET",
  });

  if (data.status === 200) {
    const messsages: IMessage[] = data.data.map((item: any) => {
      return {
        id: item.message_id,
        answerId: item.answered_message_id,
        typeAuthor: item.message_type_name,
        answerBody: item.answered_message_content,
        body: item.content,
        time: formatTimeMmHh(item.created_at),
        isBookmarked: item.bookmarked,
        date: item.created_at,
      };
    });

    chat.loadMessages(messsages);
  }
};

const clearMessageSelect = () => {
  isChange.value = false;
  messageSelect.value = null;
};

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

  clearMessageSelect();
};

const messagesContainer = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

watch(
  messages,
  () => {
    scrollToBottom();
  },
  { deep: true }
);

onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div
    class="flex flex-col gap-5 h-full overflow-y-auto"
    ref="messagesContainer"
  >
    <div class="w-full flex flex-col gap-2 items-center justify-center h-full">
      <div
        class="rounded-full w-48 h-48 p-10 flex items-center justify-center mt-2 bg-gray-400"
      >
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
      <h2 class="text-3xl text-black/50 sm: text-1xl">TaskHelper</h2>
      <p
        class="w-full max-w-[600px] text-center text-black/20 leading-6 sm: text-xs leading-4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam
        commodi dolor molestiae labore, ad praesentium magnam omnis quo
        voluptates fugit numquam magni facilis illum. Ex quos fugiat enim
        deleniti!
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
          v-on:close=""
          :type-author="item.typeAuthor"
          :orientation="item.typeAuthor === 'user' ? 'right' : 'left'"
          :time="item.time"
          :body="item.body"
          :is-bookmarked="item.isBookmarked"
          :answer-body="item.answerBody"
        />
      </div>
  </div>
<<<<<<< HEAD

=======
  <TypingIndicator class="ml-8" />
>>>>>>> 3b17dd9724b16bddd40969cf3402a0e44e760095
  <SendBox
    :is-readonly="props.isReadonly"
    v-on:close-message="clearMessageSelect"
    :message="messageSelect"
    :type-message="isAnswer ? 'answer' : isChange ? 'change' : undefined"
    v-on:submit="handleSendMessage"
    class="w-full"
  />
</template>

<style scoped></style>
