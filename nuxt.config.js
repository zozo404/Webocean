export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Webocean',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to Webocean, you can discover the latest news and photos related to the marine world. But you can also buy specialized kits!' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Logo.png' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lexend:wght@300&family=Rubik+Doodle+Shadow&display=swap"
      }
    ]
  },
  script: [
    {
      src: "https://kit.fontawesome.com/5d5fd51001.js",
      crossorigin: "anonymous"
    }
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // font-awesome
    "@plugins/font-awesome"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // nuxt-image
    "@nuxt/image"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxt/image',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  sanity: {
    projectId: "4qizwmnw",
    minimal: true
  },
  image: {
    sanity: {
      projectId: "4qizwmnw"
    }
  },
  generate: {
    fallback: true,
  },
}
