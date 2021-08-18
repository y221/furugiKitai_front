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
            <div v-for="shop in shops">
              <ShopItem 
                :shop="shop"
                :prefectures="prefectures"
              />
            </div>
            <v-col align="center">
              <v-btn
                class="mx-auto my-6"
                color="primary"
                depressed
                rounded
                width="200px"
                to="/search"
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
  data: () => ({
    shops: [],
    prefectures: []
  }),
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
  },
  async mounted() {
    const getPrefectures = this.$accessor.modules.shops.getPrefectures();
    const shopParameters = getShopParameters();
    const getShops = this.$accessor.modules.shops.getShops(shopParameters);
    await Promise.all([getPrefectures, getShops]);
    this.prefectures = this.$accessor.modules.shops.convertedPrefectures
    this.shops = this.$accessor.modules.shops.shops;
  }
}

const getShopParameters = () => {
  return {
    'limit': '5',
    'page': '1',
    'orderby': 'id',
    'order': 'DESC'
  }
}
</script>