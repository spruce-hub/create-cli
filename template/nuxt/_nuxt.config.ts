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
  css: ['~/assets/scss/base.scss'],
  <%_ if(module.filter((depsObj) => depsObj && depsObj.name && depsObj.name === '@element-plus/nuxt').length > 0) { _%>
  modules: ['@spruce-hub/nuxt-route', '@spruce-hub/nuxt-fetch', '@element-plus/nuxt'],
  elementPlus: {
    importStyle: 'scss',
  },
  <%_ } else { _%>
  modules: ['@spruce-hub/nuxt-route', '@spruce-hub/nuxt-fetch'],
  <%_ } _%>
  nuxtRoute: {
    // 需要鉴权的路由
    authPath: ['/presonal/*', '/product/**'],
    // 登录页面的路由
    loginPath: '/login',
    // 记录 token 的 cookie name
    tokenName: 'access_token',
    // 登录成功之后不可重定向至以下路由，
    excludePath: ['/login', '/register'],
  },
  runtimeConfig: {
    nuxtFetch: {
      // 需要代理的路由前缀
      baseApi: '/api',
      // 目标服务地址
      apiHostUrl: 'https://api.online.dev.fyunshan.com',
      apiHostEnv: 'API_HOST',
      // 从 cookie 中获取名为 access_token 的值并写入请求头 Authorization 中
      authorization: 'access_token',
    },
  },
  plugins: [],
  devServer: {
    port: 3000,
  },
})
