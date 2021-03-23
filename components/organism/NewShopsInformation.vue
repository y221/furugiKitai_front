<template>
  <v-main class="main-background-color pb-10 pt-0">
    <v-container>
        <div class="main-wrapper">
          <span :class="header">新着古着屋</span>
          <br class="d-flex d-sm-none">
          <span :class="subHeader">みんなでつくるデータベース。</span>
          <br class="d-flex d-sm-none">
          <span :class="subHeader">情報は誰でも登録することができます。</span>
          <div :class="mainContent">
            <div v-for="n in 5">
              <ShopItem />
            </div>
            <v-col align="center">
              <v-btn
                class="mx-auto my-6"
          　    color="primary"
                depressed
                rounded
                width="200px"
              >
                もっと見る
              </v-btn>
            </v-col>
          </div>
        </div>
    </v-container>
  </v-main>
</template>
<script>
export default {
  computed: {
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 ml-2'
      return 'font-weight-bold text-sm-h4 mr-5'
    },
    subHeader () {
      if (this.$vuetify.breakpoint.xs) return 'text-body1 ml-2 caption'
      return 'text-body1'
    },
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-2'
      return 'main-content mt-6'
    }
  }
}
</script>