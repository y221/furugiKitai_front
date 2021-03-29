<template>
  <v-main class="main-background-color">
    <v-container>
      <v-col align="center">
        <p :class="subHeader">お気に入りの古着屋がみつかる検索サイト</p>
        <FurugiKitaiLogo 
          :height="height"
          :width="width"
        />
        <TopSearchButtons />
        <TopSearchField />
      </v-col>
    </v-container>
  </v-main>
</template>
<script>
export default {
  computed: {
    height () {
      if (this.$vuetify.breakpoint.xs) return '129'
      return '258'
    },
    width () {
      if (this.$vuetify.breakpoint.xs) return '212.5'
      return '425'
    },
    subHeader () {
      if (this.$vuetify.breakpoint.xs) return 'mt-sm-16 mb-sm-11 caption'
      return 'mt-sm-16 mb-sm-11'
    }
  }
}
</script>