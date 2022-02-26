<template>
  <div class="fill-height">
    <Header :isTop="false" />
    <v-main class="main-background-color" align="center">
      <v-container>
        <v-img
          class="mt-8 mb-12 mx-auto"
          alt="shoot"
          :max-height="this.$vuetify.breakpoint.xs ? '225' : '406'"
          :max-width="this.$vuetify.breakpoint.xs ? '149' : '269'"
          src="/images/404.png"
        ></v-img>
          <div class="grey--text text--darken-3">
            <div :class="this.$vuetify.breakpoint.xs ? 'text-h2 font-weight-bold' : 'text-h1 font-weight-bold'">{{ error.statusCode }}</div>
            <div :class="this.$vuetify.breakpoint.xs ? 'text-h4 font-weight-bold' : 'text-h3 font-weight-bold'">{{ message }}</div>
          </div>
          <p :class="this.$vuetify.breakpoint.xs ? 'text-caption mt-4' : 'text-body-1 mt-4'">{{ explainUp }}<br v-if="this.$vuetify.breakpoint.xs">{{ explainDown }}</p>
        <v-btn
          class="mx-auto my-10 font-weight-bold"
          color="primary"
          depressed
          rounded
          width="200px"
          to="/"
        >
          トップページに戻る
        </v-btn>
      </v-container>
    </v-main>
    <Footer />
  </div>
</template>

<script>
export default {
  props: ['error'],
  data () {
    return {
      message: '',
      explainUp: '',
      explainDown: ''
    }
  },
  mounted () {
    if (this.error.statusCode === 400) {
      this.message = 'BAD REQUEST'
      this.explainUp = 'お探しのページは見つかりませんでした。'
      this.explainDown = 'ご指定のURLが間違っている可能性があります。'
    }
    if (this.error.statusCode === 401) {
      this.message = 'UNAUTHORIZED'
      this.explainUp = 'アクセスしようとしたページは表示できませんでした。'
      this.explainDown = ''
    }
    if (this.error.statusCode === 403) {
      this.message = 'FORBIDDEN PAGE'
      this.explainUp = 'アクセスしようとしたページは表示できませんでした。'
      this.explainDown = ''
    }
    if (this.error.statusCode === 404) {
      this.message = 'PAGE NOT FOUND'
      this.explainUp = 'お探しのページは見つかりませんでした。'
      this.explainDown = '移動または削除された可能性があります。'
    }
    if (this.error.statusCode === 410) {
      this.message = 'PAGE NOT FOUND'
      this.explainUp = 'お探しのページは見つかりませんでした。'
      this.explainDown = '移動または削除された可能性があります。'
    }
    if (this.error.statusCode === 500) {
      this.message = 'INTERNAL SERVER ERROR'
      this.explainUp = 'サーバーエラーが発生しました。'
      this.explainDown = '再度時間をおいてアクセスしてください。'
    }
    if (this.error.statusCode === 503) {
      this.message = 'SERVICE UNAVAIABLE'
      this.explainUp = 'サーバーエラーが発生しました。'
      this.explainDown = '再度時間をおいてアクセスしてください。'
    }
  }
}
</script>