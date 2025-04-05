<script setup lang="ts">
import Button from "primevue/button";

const props = defineProps<{
  func: any;
  name: string;
}>();
</script>

<template>
  <Button @click="func" :label="name" />
</template>

<style>
Button {
  width: 10em;
  background-color: rgb(83, 242, 83);
}
</style>
