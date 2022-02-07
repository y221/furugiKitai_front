<template>
  <div>
    <Header :isTop="false" />
    <SearchForm
      @searchShops="searchShops"
      @assignCondition="assignCondition"
      :regions="regions"
    />
    <SearchShopsInformation :searchShops="shops"/>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      regions: [],
      conditions: [],
      shops: [],
    }
  },
  async created() {
    try {
      await this.$accessor.modules.prefectures.fetchPrefecturesGroupByRegion();
      this.regions = this.$accessor.modules.prefectures.prefecturesGroupByRegion
    } catch (error) {
      // ここでエラー対応
      console.error(error)
      console.error(error.response)
    }
  },
  methods: {
    assignCondition(keyValue) {
      this.$accessor.modules.shops.assignConditionPrefectureIds(keyValue)
    },
    async searchShops() {
      await this.$accessor.modules.shops.searchShops()

      // 確認用。<SearchShopsInformation />と繋ぎ込む際に削除してください
      this.shops = this.$accessor.modules.shops.shops;
      console.log(this.$accessor.modules.shops.shopsCount)
    }
  },
}
</script>