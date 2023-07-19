/* global defineNuxtConfig */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '<%= name %>',
      htmlAttrs: {
        lang: 'zh-cn',
      },
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content: '<%= name %>,<%= description %>',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '<%= name %>,<%= description %>',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'robots',
          name: 'robots',
          content: process.env.NUXT_ENV_MODE === 'test' ? 'none' : 'all',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['@spruce-hub/chalk/dist/index.css', '~/assets/scss/chalk.scss'],
  modules: [
    [
      '@element-plus/nuxt',
      {
        importStyle: 'scss',
      },
    ],
    [
      '@spruce-hub/nuxt-route',
      {
        authPath: ['/order', '/personal/'],
        loginPath: '/login',
        cookieName: 'access_token',
        excludePath: ['/login', '/register'],
      },
    ],
    [
      '@spruce-hub/nuxt-fetch',
      {
        apiBase: '/api',
        apiHostEnv: 'API_HOST',
        apiHostUrl: 'https://api.fyunshan.com/',
        cookieName: 'access_token',
      },
    ],
  ],
  plugins: [],
  devServer: {
    port: 3000,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@spruce-hub/chalk/scss/mixin.scss" as chalk; 
            @use "@/assets/scss/element-plus.scss" as element;
            @use "@/assets/scss/common.scss" as common;
            `,
        },
      },
    },
  },
})
