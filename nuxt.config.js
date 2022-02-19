export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'furugiKitai_front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/common.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    '@nuxtjs/auth',
    'nuxt-basic-auth-module',
  ],
  fontawesome: {
    component: 'fa'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'http://host.docker.internal',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },

  // authモジュール
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/callback',
      home: '/users/me'
    },
    strategies: {
      google: {
        _scheme: 'oauth2',
        authorization_endpoint: process.env.GOOGLE_AUTH_ENDPOINT,
        userinfo_endpoint: process.env.GOOGLE_AUTH_USERINFO_ENDPOINT,
        scope: [
          'email',
          'profile',
          'openid',
        ],
        access_type: undefined,
        access_token_endpoint: undefined,
        response_type: 'token',
        token_type: 'Bearer',
        client_id: process.env.GOOGLE_AUTH_CLIENT_ID,
        token_key: 'access_token'
      },
      line: {
        _scheme: 'oauth2',
        authorization_endpoint: process.env.LINE_AUTH_ENDPOINT,
        access_token_endpoint: process.env.LINE_AUTH_ACCESS_TOKEN_ENDPOINT,
        userinfo_endpoint: process.env.LINE_AUTH_USERINFO_ENDPOINT,
        client_secret : process.env.LINE_AUTH_CLIENT_SECRET,
        scope: [
          'profile',
          'openid',
        ],
        response_type: 'code',
        grant_type: 'authorization_code',
        token_type: 'Bearer',
        client_id: process.env.LINE_AUTH_CLIENT_ID,
        token_key: 'access_token'
      }
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  basic: {
    name: process.env.BASIC_AUTH_NAME,
    pass: process.env.BASIC_AUTH_PASS,
    enabled: process.env.ENABLE_BASIC_AUTH === 'true'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      /typed-vuex/,
    ]
  },
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#E9C402',
          secondary: '#9BD4CE',
          accent: '#DA5824',
          main_background: '#FBF8F4',
          chip_color: '#887C6C',
          line_image: '#00b900'
        }
      }
    },
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP']
    }
  },
  publicRuntimeConfig: {
    googleApiKey: process.env.GOOGLE_API_KEY
  }
}
