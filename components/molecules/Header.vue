<template>
  <div>
    <v-app-bar
      :app="this.$vuetify.breakpoint.xs && !isTop"
      color='main_background'
      dense
      flat
    >
    <nuxt-link
      v-if="!isTop"
      to="/"
    >
      <FurugiKitaiLogo
        class="mt-6 mr-2" 
        :height="height"
        :width="width"
        v-if="!$vuetify.breakpoint.xs"
      />
    </nuxt-link>
    　<v-app-bar-nav-icon
        @click="drawer = true"
        v-if="$vuetify.breakpoint.xs"
      >
      </v-app-bar-nav-icon>
      <v-btn
        text
        v-if="!$vuetify.breakpoint.xs"
        to='/about'
      >
        フルギキタイとは?
      </v-btn>
      <v-btn
        text
        v-if="!$vuetify.breakpoint.xs && this.$auth.loggedIn"
        to='/shops/new'
      >
        古着屋登録
      </v-btn>
      <v-col
        align="center"
        v-if="!isTop"
        class="logo-wrapper"
      >
      <nuxt-link
        
        to="/"
      >
        <FurugiKitaiLogo
          class="" 
          :height="height"
          :width="width"
          v-if="$vuetify.breakpoint.xs"
        />
      </nuxt-link>
      </v-col>
      <v-spacer v-if="isTop"></v-spacer>
      <!-- 未ログイン時に出るボタン -->
      <v-btn
        :class="btn"
        text
        v-if="!$vuetify.breakpoint.xs"
        v-show="!isLoggedIn"
        to='/login'
      >
        ログイン
      </v-btn>
      <v-btn
        text
        v-if="!$vuetify.breakpoint.xs"
        v-show="!isLoggedIn"
        to='/login'
      >
        新規登録
      </v-btn>
      <!-- ログイン中に出るボタン -->
      <v-btn
        text
        v-if="!$vuetify.breakpoint.xs"
        v-show="isLoggedIn"
        to='/users/me'
      >
        マイページ
      </v-btn>
      <v-btn
        :class="btn"
        text
        v-if="!$vuetify.breakpoint.xs"
        v-show="isLoggedIn"
        @click="logout"
      >
        ログアウト
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-btn
            @click="drawer = !drawer"
            text
          >
            ✕
          </v-btn>
          <v-divider class="my-4"></v-divider>
          <!-- 未ログイン時に出るボタン -->
          <v-btn
            depressed
            color="secondary"
            outlined
            class="font-weight-bold caption ml-5"
            v-show="!isLoggedIn"
            to='/login'
          >
            ログイン
          </v-btn>
          <v-btn
            depressed
            color="secondary"
            class="font-weight-bold caption"
            v-show="!isLoggedIn"
            to='/users/new'
          >
            新規登録
          </v-btn>
          <!-- ログイン中に出るボタン -->
          <v-btn
            depressed
            color="secondary"
            outlined
            class="font-weight-bold caption ml-5"
            v-show="isLoggedIn"
            to='/users/mypage'
          >
            マイページ
          </v-btn>
          <v-btn
            depressed
            color="secondary"
            class="font-weight-bold caption"
            v-show="isLoggedIn"
            @click="logout"
          >
            ログアウト
          </v-btn>
          <v-divider class="my-4"></v-divider>
            <v-list-item class="ml-4" v-for="menu in menus" :key="menu.title" :to="menu.url" v-if="isDisplay(menu.key)">
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-fade-transition>
      <v-alert v-if="displayMessage" dense light icon=" " color="secondary" type="warning" style="z-index:100; opacity:0.8; position:absolute; width:100%;">
        <div class="main-wrapper text-center">{{ message }}</div>
      </v-alert>
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  props: {
    isTop: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      drawer: null,
      group: null,
      menus: [
        { title: 'フルギキタイとは', url: '/about', key: 'about'},
        { title: '古着屋登録', url: '/shops/new', key: 'shopNew' },
        { title: 'お問い合わせ', url: '/contact', key: 'contact' }
      ],
      displayMessage: false
    }
  },
  computed: {
    btn () {
      if (this.$vuetify.breakpoint.xs) return 'caption'
      return ''
    },
    height () {
      if (this.$vuetify.breakpoint.xs) return '34'
      return '68'
    },
    width () {
      if (this.$vuetify.breakpoint.xs) return '54'
      return '106'
    },
    isLoggedIn () {
      return this.$auth.loggedIn
    },
    message() {
      return this.$store.getters['modules/messages/message']
    },
  },
  methods: {
    async logout () {
      this.$accessor.modules.users.logoutUser();
    },
    isDisplay(key) {
      if (key !== 'shopNew') {
        return true;
      }
      return this.$auth.loggedIn
    }
  },
  watch: {
    message: {
      handler: function(value) {
        if (value.length !== 0) {
          this.displayMessage = true;
          setTimeout(function(){
            this.displayMessage = '';
            this.$accessor.modules.messages.setMessage('');
          }.bind(this), 5000);
        } 
      },
      deep: true,
      immediate: true
    }
  },
}
</script>
<style>
.logo-wrapper {
  margin-right:48px;
}
.message {
  z-index:100;
  opacity:0.8;
  position:absolute;
  width:100%;
}
</style>