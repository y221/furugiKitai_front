<template>
  <div>
    <Header :isTop="false" />
    <SearchForm
      @searchShops="searchShops"
      @assignCondition="assignCondition"
      :regions="regions"
    />
    <SearchShopsInformation />
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      regions: [],
      conditions: [],
      errored: false,
    }
  },
  async created() {
    try {
      await this.$accessor.modules.prefectures.fetchPrefecturesGroupByRegion();
      this.regions = this.$accessor.modules.prefectures.prefecturesGroupByRegion
    } catch (error) {
      // createdでエラーあったらエラー画面出した方がいいかも？
      this.errored = true

      // フロントエンドのログファイルってどうなってるんだろう...？,勉強がてら書き出してみる？
      console.error(error)
      console.error(error.response)
    }
  },
  methods: {
    assignCondition(keyValue) {
      this.$accessor.modules.shops.assignCondition(keyValue)
    },
    async searchShops() {
      await this.$accessor.modules.shops.searchShops()

      // 確認用。<SearchShopsInformation />と繋ぎ込む際に削除してください
      console.log(this.$accessor.modules.shops.shops)
      console.log(this.$accessor.modules.shops.shopsCount)
    }
  },
}
</script>