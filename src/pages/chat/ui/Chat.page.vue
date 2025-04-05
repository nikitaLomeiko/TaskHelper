<script setup lang="ts">
import { Messanger } from "widgets/messanger";
import { SideBar, useSideBarStore } from "widgets/SideBar";
import { Header } from "widgets/Header";
import { useChatItemStore } from "entities/chat-item";
import { storeToRefs } from "pinia";

const sideBarStore = useSideBarStore();
const chatItemStore = useChatItemStore();
const {chatItems} = storeToRefs(chatItemStore)
</script>

<template>
  <SideBar />
  <div
    :style="{ 'margin-left': sideBarStore.visible ? '20rem' : '0' }"
    class="px-4 flex flex-col gap-10 h-screen transition-all"
    :class="{ 'bg-gray-50': sideBarStore.visible }"
  >
    <Header :title="chatItems[0].title" chat-id="13"/>
    <Messanger />
  </div>
</template>

<style scoped></style>
