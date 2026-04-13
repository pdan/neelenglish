import { defineConfig } from "vite";
export default defineConfig({
  base: "/",
  server: {
    host: true,       // or '0.0.0.0' to allow access from other devices
    port: 5173,       // set your desired port (default is 5173)
  },
});