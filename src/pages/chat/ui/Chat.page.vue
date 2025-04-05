<script setup lang="ts">
import { Messanger } from "widgets/messanger";
import { SideBar, useSideBarStore } from "widgets/SideBar";
import { Header } from "widgets/Header";

const sideBarStore = useSideBarStore();
</script>

<template>
  <SideBar />
  <div
    :style="{ 'margin-left': sideBarStore.visible ? '20rem' : '0' }"
    class="px-4 flex flex-col gap-10 h-screen transition-all"
    :class="{ 'bg-gray-50': sideBarStore.visible }"
  >
    <Header title="chat.txt" />
    <Messanger />
  </div>
</template>

<style scoped></style>
