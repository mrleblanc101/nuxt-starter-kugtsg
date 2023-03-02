// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    langDir: 'i18n/',
    locales: [
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-CA',
        file: 'fr.json',
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-CA',
        file: 'en.json',
      },
    ],
    vueI18n: {
      legacy: false,
      fallbackWarn: false,
      missingWarn: false,
      formatFallbackMessages: true,
    },
  },
});
