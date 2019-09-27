
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Y. Jer 的虚拟笔记',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }, // iOS浏览器禁止缩放
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'keywords', name: '严小飞,Y.jer,博客', content: '严小飞，Y.jer' },
      { hid: 'description', name: 'description', content: '严小飞的博客' },
      { name: 'renderer', content: 'webkit' }, // 强制让360浏览器使用Webkit内核
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    {src:'~/plugins/loading', ssr:false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  * Nuxt.js modules, Doc: https://axios.nuxtjs.org/usage
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  /**
   * 配置代理
   */
  proxy: {
    '/api': {
      target: 'http://47.99.247.50:8080', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', //将 /api 替换掉
      },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
