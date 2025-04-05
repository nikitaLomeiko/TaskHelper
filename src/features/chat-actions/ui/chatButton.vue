<script setup lang="ts">
import Button from "primevue/button";

const props = defineProps<{
  funcDelete: () => void;
  funcChange: () => void;
}>();
</script>

<template>
  <Button @click="props.funcDelete" label="Изменить" />
  <Button @click="props.funcChange" label="Удалить" />
</template>

<style></style>
