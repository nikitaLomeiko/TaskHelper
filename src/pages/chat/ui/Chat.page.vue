<!-- <script setup lang="ts">
import { Messanger } from "widgets/messanger";
import { SideBar, useSideBarStore } from "widgets/SideBar";
import { Header } from "widgets/Header";
import { useWindowSize } from "@vueuse/core";
import { RouteParams, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { IChatItem } from "entities/chat-item/types/IChatItem";
import { useChatItemStore } from "entities/chat-item";
import { storeToRefs } from "pinia";

const sideBarStore = useSideBarStore();
const chatItemStore = useChatItemStore()
const {chatItems} = storeToRefs(chatItemStore)

const { width } = useWindowSize();

const route = useRoute();
const chatId = ref("");

const findedChat = ref<IChatItem | null>(null);

watch(
  () => route.params,
  () => {
    chatId.value = (route.params as RouteParams).id as string;
    findedChat.value = chatItems.value.find((item) => String(item.id) === chatId.value) || null;
  }
);
</script>

<template>
  <SideBar />
  <div
    :style="width > 768 && { 'margin-left': sideBarStore.visible ? '20rem' : '0' }"
    class="px-4 flex flex-col gap-10 h-screen transition-all"
    :class="{ 'bg-gray-50': sideBarStore.visible }"
  >
    <Header :title="findedChat?.name || 'не известно'" :chat-id="chatId" />
    <Messanger :chat-id="chatId" :is-readonly="findedChat?.isReadOnly" />
  </div>
</template>

<style scoped></style> -->
<script setup lang="ts">
import { Messanger } from "widgets/messanger";
import { SideBar, useSideBarStore } from "widgets/SideBar";
import { Header } from "widgets/Header";
import { useChatItemStore } from "entities/chat-item";
import { storeToRefs } from "pinia";
import { useWindowSize } from "@vueuse/core";

const sideBarStore = useSideBarStore();
const chatItemStore = useChatItemStore();
const { chatItems } = storeToRefs(chatItemStore);

const { width } = useWindowSize();
</script>

<template>
  <SideBar />
  <div
    :style="
      width > 768 && { 'margin-left': sideBarStore.visible ? '20rem' : '0' }
    "
    class="px-4 flex flex-col gap-10 h-screen transition-all"
    :class="{ 'bg-gray-50': sideBarStore.visible }"
  >
    <Header :title="chatItems[0].title" chat-id="13" />
    <Messanger />
  </div>
</template>

<style scoped></style>
