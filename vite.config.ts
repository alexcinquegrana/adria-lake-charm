import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Sito statico: ogni pagina viene pre-renderizzata in HTML (cartella dist/client)
// e pubblicata su Netlify a ogni modifica del repository.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true, crawlLinks: true },
      pages: [{ path: "/sitemap.xml" }],
    }),
    viteReact(),
    tailwindcss(),
  ],
});
