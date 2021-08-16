<template>
  <div class="main-wrapper">
    <div class="main-content">
      <div class="font-weight-bold" :class="header">
        古着屋を登録
      </div>
      <div :class="headerText">
        <div>入力項目の不明な箇所は未入力で登録できます。</div>
        <br v-if="this.$vuetify.breakpoint.xs">
        <div>一度登録した古着屋情報はログイン状態であれば誰でも編集可能です。</div>
        <br v-if="this.$vuetify.breakpoint.xs">
        <div>同じ古着屋が登録された場合、後から登録されたデータを削除しますのでご了承ください。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    header () {
      if (this.$vuetify.breakpoint.xs) return 'text-h5 mx-2 mb-5 pt-5'
      return 'text-h4 mx-4 my-10'
    },
    headerText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-5 pb-6'
      return 'text-body-1 mx-4 mb-10'
    }
  }
}
</script>