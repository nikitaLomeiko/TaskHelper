<template>
  <div ref="loaderTrigger" class="loader-trigger"></div>
  <slot></slot>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = withDefaults(
  defineProps<{
    isLoading?: boolean;
    triggerHeight?: number;
    rootMargin?: string;
    threshold?: number;
  }>(),
  {
    isLoading: false,
    triggerHeight: 100,
    rootMargin: "0px",
    threshold: 0.1,
  }
);

const emit = defineEmits<{
  (e: "load-more"): void;
}>();

const loaderTrigger = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

// Инициализация Intersection Observer
const initObserver = () => {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !props.isLoading) {
          emit("load-more");
        }
      });
    },
    {
      root: null,
      rootMargin: props.rootMargin,
      threshold: props.threshold,
    }
  );

  if (loaderTrigger.value) {
    observer.observe(loaderTrigger.value);
  }
};

// Переинициализация при изменении параметров
watch(
  () => [props.rootMargin, props.threshold],
  () => {
    initObserver();
  }
);

onMounted(() => {
  initObserver();
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.loader-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.loading-indicator {
  padding: 1rem;
  color: #666;
  font-size: 0.9em;
}
</style>
