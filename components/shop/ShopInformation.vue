<template>
  <v-main class="main-background-color">
    <v-container>
      <div class="main-wrapper">
        <div :class="mainContent">
          <ShopHeader
            :name="this.shop.name"
            :gender="this.shop.gender"
            :shop="this.shop"
          />
          <v-tabs
            v-model="tab"
            color="accent"
            :class="this.$vuetify.breakpoint.xs ? 'mt-2' : ''"
          >
            <v-tab
              v-for="item in items"
              :key="item.key"
              :class="tabFont"
            >
              {{ item.text }}
              <span
                class="blue-grey lighten-5 py-1 px-2 ml-1 review-count"
                v-if="item.key === 'review'"
              >
                {{ shop.reviewCount }}
              </span>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab" :class="this.$vuetify.breakpoint.xs ? '' : 'mb-16'">
            <v-tab-item
              key="shopInformation"
              :class="this.$vuetify.breakpoint.xs ? 'pt-0 pb-6' : ''"
            >
              <ShopDetail
                :shop="this.shop"
              />
            </v-tab-item>
            <v-tab-item key="review">
              <ShopReviews />
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({
    shop: {},
    tab: null,
    reviewCount: 345,
    items: {
      shopInformation: {
        text: '店舗情報',
        key: 'shopInformation'  
      },
      review: {
        text: 'クチコミ',
        key: 'review'  
      }
    }
  }),
  computed: {
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-2'
      return 'main-content mt-9'
    },
    tabFont () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold caption'
      return 'font-weight-bold'
    }
  },
  async created() {
    await this.$accessor.modules.shops.getShop(this.$route.params.shopId);
    this.shop = this.$accessor.modules.shops.shop;
  }
}
</script>
<style>
.review-count{
  border-radius: 4px;
}
</style>