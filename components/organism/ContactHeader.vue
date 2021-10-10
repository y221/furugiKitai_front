<template>
  <div class="main-wrapper">
    <div class="main-content" :class="this.$vuetify.breakpoint.mdAndDown ? 'mt-4' : 'mt-6 mx-12'">
      <div :class="header" class="font-weight-bold">
        お問い合わせ
      </div>
      <div :class="preface">
        下記フォームを入力し、<nuxt-link to='/privacy'>プライバシーポリシー</nuxt-link>をご確認の上「送信する」ボタンを押してください。<br v-if="this.$vuetify.breakpoint.xs">運営の都合上、返信には数日から数週間などお時間を頂く場合がございますので、予めご了承ください。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    header () {
      if (this.$vuetify.breakpoint.xs) return 'text-h5 mx-2 my-5 pt-5'
      return 'text-sm-h4 mx-4 my-10'
    },
    preface () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-5 pb-6'
      return 'text-body-1 mx-4 mb-12'
    }
  }
}
</script>
