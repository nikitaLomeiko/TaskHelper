<script setup lang="ts">
import { Message } from "entities/message";
import { SendBox } from "features/send-box";
import { SideBar } from "widgets/SideBar";
import { useSideBarStore } from "widgets/SideBar/store";

const sideBarStore = useSideBarStore();
</script>

<template>
  <SideBar />
  <div
    :style="{ 'margin-left': sideBarStore.visible ? '20rem' : '0' }"
    class="p-10 flex flex-col gap-10"
  >
    <Message
      v-on:delete="() => null"
      v-on:bookmark="() => null"
      v-on:answer="() => null"
      orientation="left"
      type-author="bot"
      time="14:21"
      body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius tenetur ipsa molestiae? Ducimus laboriosam, quidem nisi dolores eius modi. Maiores nostrum omnis distinctio necessitatibus, illum quo culpa sit nemo.
"
    />
    <div class="w-full flex justify-end">
      <Message
        class=""
        v-on:delete="() => null"
        v-on:bookmark="() => null"
        v-on:answer="() => null"
        orientation="right"
        type-author="user"
        time="14:21"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius tenetur ipsa molestiae? Ducimus laboriosam, quidem nisi dolores eius modi. Maiores nostrum omnis distinctio necessitatibus, illum quo culpa sit nemo.
    "
      />
    </div>
    <Message
      v-on:delete="() => null"
      v-on:bookmark="() => null"
      v-on:answer="() => null"
      orientation="left"
      type-author="bot"
      time="14:21"
      body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius tenetur ipsa molestiae? Ducimus laboriosam, quidem nisi dolores eius modi. Maiores nostrum omnis distinctio necessitatibus, illum quo culpa sit nemo.
"
    />
    <SendBox
      message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nam commodi aspernatur perspiciatis officia sit quisquam distinctio? Quod, ex! Deserunt beatae ex dolorum quis a enim vel possimus aliquid! Molestiae!
"
    />
    <SendBox
      message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nam commodi aspernatur perspiciatis officia sit quisquam distinctio? Quod, ex! Deserunt beatae ex dolorum quis a enim vel possimus aliquid! Molestiae!
"
    />
  </div>
  >>>>>>> nikita-dev
</template>

<style scoped>
@media (max-width: 768px) {
  .sidebar {
    position: fixed; /* Возвращаем overlay на мобильных */
    z-index: 1000;
  }
}
</style>
