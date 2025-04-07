<template>
    <div class="typing-indicator">
      <div class="dots-container">
        <div 
          v-for="i in 3" 
          :key="i" 
          class="dot" 
          :style="getDotStyle(i)"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const activeDot = ref(1);
  let animationInterval: number;
  
  const getDotStyle = (dotNumber: number) => ({
    opacity: dotNumber <= activeDot.value ? 1 : 0.3,
    transform: `translateY(${dotNumber <= activeDot.value ? '-3px' : '0'})`
  });
  
  onMounted(() => {
    animationInterval = window.setInterval(() => {
      activeDot.value = activeDot.value % 3 + 1;
    }, 400);
  });
  
  onBeforeUnmount(() => {
    clearInterval(animationInterval);
  });
  </script>
  
  <style scoped>
  .typing-indicator {
    display: inline-block;
    padding: 8px 12px;
    background-color: #f0f0f0;
    border-radius: 18px;
  }
  
  .dots-container {
    display: flex;
    gap: 4px;
    align-items: center;
    height: 20px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
    background-color: #555;
    border-radius: 50%;
    transition: 
      opacity 0.3s ease-in-out, 
      transform 0.3s ease-in-out;
  }
  </style>