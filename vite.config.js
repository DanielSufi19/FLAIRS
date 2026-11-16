import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Forward /api calls to the Node.js backend while developing
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
