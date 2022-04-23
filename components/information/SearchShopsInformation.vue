<template>
  <v-main class="main-background-color pb-10 pt-0">
    <v-container>
      <div class="main-wrapper">
        <span :class="header">古着屋検索結果一覧</span>
        <br class="d-flex d-sm-none">
        <div :class="mainContent">
          <div v-if="!isShopExist">
            ご指定の条件に該当する古着屋は見つかりませんでした。
            <br>検索条件を変更して、再度検索してください。
          </div>
          <div v-for="shop in shops">
            <ShopItem 
              :shop="shop"
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
    length: 0,
    totalVisible: 1,
    isShopExist: true
  }),
  props: {
    searchShops: {
      type: Array,
      default: []
    },
  },
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
    const conditions = this.$route.query;
    // 条件があれば
    if (Object.keys(conditions)) {
      this.$accessor.modules.shops.assignConditions(conditions);
    }
    await this.$accessor.modules.shops.searchShops();
    this.shops = this.$accessor.modules.shops.shops;
    this.isShopExist = this.shops.length !== 0;
    this.length = this.$accessor.modules.shops.pageLength;
    this.totalVisible = this.$accessor.modules.shops.totalVisible;
  },
  methods: {
    async changePage(page) {
      this.$accessor.modules.shops.setPage(page);
      this.$router.push({
        path: '/search',
        query: this.$accessor.modules.shops.conditions
      });
      await this.$accessor.modules.shops.searchShops();
      this.shops = this.$accessor.modules.shops.shops;
      this.isShopExist = this.shops.length !== 0;
      window.scrollTo({
        top: 0
      });
    }
  },
  watch: {
    searchShops: function(shops) {
      this.shops = shops;
      this.isShopExist = this.shops.length !== 0;
      this.length = this.$accessor.modules.shops.pageLength;
      this.totalVisible = this.$accessor.modules.shops.totalVisible;
    }
  }
}
</script>