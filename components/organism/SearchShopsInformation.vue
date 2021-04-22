<template>
  <v-main class="main-background-color pb-10 pt-0">
    <v-container>
      <div class="main-wrapper">
        <span :class="header">古着屋検索結果一覧</span>
        <br class="d-flex d-sm-none">
        <div :class="mainContent">
          <div v-for="n in 5">
            <ShopItem 
              :id="n"
            />
          </div>
          <div class="text-center my-10">
            <v-pagination
              v-model="page"
              :length="15"
              :total-visible="5"
              circle
              color="chip_color"
              :class="this.$vuetify.breakpoint.xs ? 'mb-6' : ''"
            ></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    page: 1
  }),
  computed: {
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 ml-2'
      return 'font-weight-bold text-sm-h4 mr-5'
    },
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-2 pb-2'
      return 'main-content mt-6'
    }
  }
}
</script>