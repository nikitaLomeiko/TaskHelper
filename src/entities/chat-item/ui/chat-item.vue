<script setup lang="ts">
import { chatButton } from "features/chat-actions";

const props = defineProps<{ changeChat: any; deleteChat: any }>();
const emit = defineEmits(["changeChat", "deleteChat"]);
</script>

<template>
  <div class="cont-chat-item">
    <!-- <Button @click="$emit('changeChat')" label="Изменить" />
    <Button @click="$emit('deleteChat')" label="Удалить" /> -->
    <chatButton :func="changeChat" :name="'Изменить'" />
    <chatButton :func="deleteChat" :name="'Удалить'" />
  </div>
</template>

<style scoped>
.cont-chat-item {
  cursor: default;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3em;
  justify-content: center;
  width: 13vw;
  height: 20vh;
  opacity: 0.9;
  border-radius: 1em;
  position: absolute;
  top: 3em;
  left: -12em;
  background-color: rgb(194, 194, 194);
}
</style>
