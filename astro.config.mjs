// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.quatuormemoire.com",
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true
    },
  },

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs({ entrypoint: '/src/entrypoint' })]
});