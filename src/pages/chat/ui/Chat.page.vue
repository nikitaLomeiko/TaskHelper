<script setup lang="ts">
import { Messanger } from "widgets/messanger";
import { SideBar, useSideBarStore } from "widgets/SideBar";
import { Header } from "widgets/Header";
import { useChatItemStore } from "entities/chat-item";
import { storeToRefs } from "pinia";
import { useWindowSize } from "@vueuse/core";
import { RouteParams, useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const sideBarStore = useSideBarStore();
const chatItemStore = useChatItemStore();
const { chatItems } = storeToRefs(chatItemStore);

const { width } = useWindowSize();

const route = useRoute();
const chatId = ref("");

onMounted(() => {
  chatId.value = (route.params as RouteParams).id as string;
});
</script>

<template>
  <SideBar />
  <div
    :style="width > 768 && { 'margin-left': sideBarStore.visible ? '20rem' : '0' }"
    class="px-4 flex flex-col gap-10 h-screen transition-all"
    :class="{ 'bg-gray-50': sideBarStore.visible }"
  >
    <Header :title="chatItems.find(item => item.id === chatId)?.title || 'не известно'" :chat-id="chatId" />
    <Messanger />
  </div>
</template>

<style scoped></style>
