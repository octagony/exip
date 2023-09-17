import solid from "solid-start/vite";
import suidPlugin from "@suid/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [suidPlugin(), solid({ ssr: false })],
  build: {
    target: "esnext",
  },
});
