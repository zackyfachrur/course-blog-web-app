import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    WEB_API_PORT: 9000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@type": path.resolve(__dirname, "./src/utils/types"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@img": path.resolve(__dirname, "./public"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
});
