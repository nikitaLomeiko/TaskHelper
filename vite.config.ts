import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      app: "/src/app",
      pages: "/src/pages",
      widgets: "/src/widgets",
      features: "/src/features",
      entities: "/src/entities",
      shared: "/src/shared",
    },
  },
});
