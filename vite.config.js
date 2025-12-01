import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/portfolio/", // correct for project repo
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "docs", // <- important change
  },
});
