import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 4101,
      spaEntryPoints: ["./src/spa.tsx"],
    }),
  ],
  server: {
    hmr: false,
  },
});
