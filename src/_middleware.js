import { sequence } from "astro:middleware";
import { middleware } from "astro:i18n";

export const onRequest = sequence(
  middleware({
    redirectToDefaultLocale: false,
    prefixDefaultLocale: true
  })
)