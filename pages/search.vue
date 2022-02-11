<template>
  <div>
    <Header :isTop="false" />
    <SearchForm
      @searchShops="searchShops"
      @assignConditionPrefecture="assignConditionPrefecture"
      @assignConditionArea="assignConditionArea"
      :regions="regions"
      :prefectures="prefectures"
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
      prefectures: [],
      conditions: [],
      shops: [],
    }
  },
  async created() {
    try {
      await this.$accessor.modules.prefectures.fetchPrefecturesGroupByRegion();
      await this.$accessor.modules.areas.fetchAreasGroupByPrefecture();
      this.regions = this.$accessor.modules.prefectures.prefecturesGroupByRegion
      this.prefectures = this.$accessor.modules.areas.areasGroupByPrefecture
    } catch (error) {
      // ここでエラー対応
      console.error(error)
      console.error(error.response)
    }
  },
  methods: {
    assignConditionPrefecture(keyValue) {
      this.$accessor.modules.shops.assignConditionPrefectureIds(keyValue)
    },
    assignConditionArea(keyValue) {
      this.$accessor.modules.shops.assignConditionAreaIds(keyValue)
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