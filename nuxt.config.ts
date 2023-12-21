// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@pinia/nuxt", "nuxt-icon", "nuxt-swiper"],
  css: ["~/assets/css/main.css"],
  swiper: {
    modules: ["free-mode", "mousewheel"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["types/*.ts"],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
});
