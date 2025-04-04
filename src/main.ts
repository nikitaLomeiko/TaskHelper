import { createApp } from "vue";
import App from "app/App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

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
  .mount("#app");
