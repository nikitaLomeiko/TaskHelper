<script setup lang="ts">
import { Messanger } from "widgets/messanger";
import { Sidebar } from "widgets/ui";
import { useSideBarStore } from "widgets/ui/SideBar/store/SideBarStore";

const sideBarStore = useSideBarStore();
</script>

<template>
  <Sidebar />
  <div
    :style="{ 'margin-left': sideBarStore.visible ? '20rem' : '0' }"
    class="p-10 flex flex-col gap-10 h-screen transition-all"
    :class="{ 'bg-gray-50': sideBarStore.visible }"
  >
    <Messanger/>
  </div>
</template>

<style scoped></style>
