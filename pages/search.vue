<template>
  <div>
    <Header :isTop="false" />
    <SearchForm
      @searchShops="searchShops"
      @changeKeyword="changeKeyword"
      @assignConditionPrefecture="assignConditionPrefecture"
      @assignConditionArea="assignConditionArea"
      @assignConditionGender="assignConditionGender"
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
      console.error(error)
    }
  },
  methods: {
    changeKeyword(text) {
      this.$accessor.modules.shops.assignConditionKeyword(text);
    },
    assignConditionPrefecture(keyValue) {
      this.$accessor.modules.shops.assignConditionPrefectureIds(keyValue)
    },
    assignConditionArea(keyValue) {
      this.$accessor.modules.shops.assignConditionAreaIds(keyValue)
    },
    assignConditionGender(keyValue) {
      this.$accessor.modules.shops.assignConditionGenders(keyValue)
    },
    async searchShops() {
      this.$accessor.modules.shops.setPage(1);
      this.$router.push({
        path: '/search',
        query: this.$accessor.modules.shops.conditions
      });
      await this.$accessor.modules.shops.searchShops()
      this.shops = this.$accessor.modules.shops.shops;
    }
  },
}
</script>