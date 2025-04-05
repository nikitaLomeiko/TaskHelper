import { createApp } from "vue";
import App from "app/App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { router } from "app/providers/routing";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: "p",
        darkModeSelector: "light",
        cssLayer: false,
      },
    },
  })
  .use(pinia)
  .use(router)
  .mount("#app");
