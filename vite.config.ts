import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      api: `${path.resolve(__dirname, "./src/apps/api/")}`,
      components: `${path.resolve(__dirname, "./src/apps/components/")}`,
      contexts: `${path.resolve(__dirname, "./src/apps/contexts/")}`,
      hooks: `${path.resolve(__dirname, "./src/apps/hooks/")}`,
      interfaces: `${path.resolve(__dirname, "./src/apps/interfaces/")}`,
      providers: `${path.resolve(__dirname, "./src/apps/providers/")}`,
      utils: `${path.resolve(__dirname, "./src/apps/utils/")}`,
      services: `${path.resolve(__dirname, "./src/apps/services/")}`,
      views: `${path.resolve(__dirname, "./src/apps/views/")}`,
    },
  },
});
