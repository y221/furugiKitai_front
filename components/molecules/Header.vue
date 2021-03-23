<template>
  <div>
    <v-app-bar
      color='main_background'
      dense
      flat
    >
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
      <v-spacer></v-spacer>
      <v-btn
        :class="btn"
        text
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
          <v-list-item>
            <v-list-item-title>フルギキタイとは？</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>古着屋登録</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>ログイン</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>新規登録</v-list-item-title>
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
  computed: {
    btn () {
      if (this.$vuetify.breakpoint.xs) return 'caption'
      return ''
    }
  }
}
</script>
<style>

</style>