<template>
  <div>
    <v-app-bar
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
      >
        フルギキタイとは?
      </v-btn>
      <v-btn
        text
        v-if="!$vuetify.breakpoint.xs"
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
      <v-btn
        :class="btn"
        text
        v-if="!$vuetify.breakpoint.xs"
        to="login"
      >
        ログイン
      </v-btn>
      <v-btn
        text
        v-if="!$vuetify.breakpoint.xs"
      >
        新規登録
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-btn text>✕</v-btn>
          <v-divider class="my-4"></v-divider>
          <v-btn
            depressed
            color="secondary"
            outlined
            class="font-weight-bold caption ml-5"
          >
            ログイン
          </v-btn>
          <v-btn
            depressed
            color="secondary"
            class="font-weight-bold caption"
          >
            新規登録
          </v-btn>
          <v-divider class="my-4"></v-divider>
          <v-list-item class="ml-4">
            <v-list-item-title>フルギキタイとは？</v-list-item-title>
          </v-list-item>
          <v-list-item class="ml-4">
            <v-list-item-title>古着屋登録</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  props: {
    isTop: {
      type: Boolean,
      required: true
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
    }
  }
}
</script>
<style>
.logo-wrapper {
  margin-right:48px;
}
</style>