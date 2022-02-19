<template>
  <v-main class="main-background-color">
    <v-container>
      <v-col align="center">
        <p :class="subHeader">お気に入りの古着屋がみつかる検索サイト</p>
        <FurugiKitaiLogo 
          :height="height"
          :width="width"
        />
        <TopSearchButtons
          @searchShops="searchShops"
          @assignConditionPrefecture="assignConditionPrefecture"
          @assignConditionArea="assignConditionArea"
          :regions="regions"
          :prefectures="prefectures"
        />
        <TopSearchField
          @searchShops="searchShops"
          @changeKeyword="changeKeyword"
        />
      </v-col>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data () {
    return {
      regions: [],
      prefectures: [],
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
    changeKeyword(keyword) {
      this.$accessor.modules.shops.assignConditionKeyword(keyword);
    },
    assignConditionPrefecture(keyValue) {
      this.$accessor.modules.shops.assignConditionPrefectureIds(keyValue)
    },
    assignConditionArea(keyValue) {
      this.$accessor.modules.shops.assignConditionAreaIds(keyValue)
    },
    async searchShops() {
      // TODO:ここでページを1に設定する処理追加
      this.$router.push({
        path: '/search',
        query: this.$accessor.modules.shops.conditions
      });
    }
  },
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