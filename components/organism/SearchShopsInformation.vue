<template>
  <v-main class="main-background-color pb-10 pt-0">
    <v-container>
      <div class="main-wrapper">
        <span :class="header">古着屋検索結果一覧</span>
        <br class="d-flex d-sm-none">
        <div :class="mainContent">
          <div v-for="shop in shops">
            <ShopItem 
              :shop="shop"
              :prefectures="prefectures"
            />
          </div>
          <div class="text-center my-10">
            <v-pagination
              v-model="page"
              :length="length"
              :total-visible="totalVisible"
              circle
              color="chip_color"
              :class="this.$vuetify.breakpoint.xs ? 'mb-6' : ''"
              @input = "changePage(page)"
            ></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </v-main>
</template>
<script>
const displayNumber = 10;
export default {
  data: () => ({
    page: 1,
    shops: [],
    prefectures: [],
    length: 1,
    totalVisible: 1
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
  },
  async mounted() {
    const getPrefectures = this.$accessor.modules.shops.getPrefectures();
    const shopParameters = getShopParameters('1');
    const getShops = this.$accessor.modules.shops.getShops(shopParameters);
    await Promise.all([getPrefectures, getShops]);
    this.prefectures = this.$accessor.modules.shops.convertedPrefectures
    this.shops = this.$accessor.modules.shops.shops;
    this.length = getPageLength(this.$accessor.modules.shops.shopsCount, displayNumber);
    this.totalVisible = getTotalVisible(this.length);
  },
  methods: {
    async changePage(page) {
      const shopParameters = getShopParameters(page);
      await this.$accessor.modules.shops.getShops(shopParameters);
      this.shops = this.$accessor.modules.shops.shops;
      window.scrollTo({
        top: 0
      });
    }
  }
}
const getShopParameters = (page) => {
  return {
    'limit': '10',
    'page': page,
    'orderby': 'created_at',
    'order': 'DESC'
  }
}
const getPageLength = (count, page) => {
  return Math.ceil(count / page);
}
const getTotalVisible = (length) => {
  console.log(length)
  return length >= 5 ? 5 : length;
}
</script>