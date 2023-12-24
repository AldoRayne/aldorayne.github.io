// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github-pages/',
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@pinia/nuxt", "nuxt-icon"],
  css: ["~/assets/css/main.css"],
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
