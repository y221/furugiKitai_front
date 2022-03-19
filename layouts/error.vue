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
            <div :class="this.$vuetify.breakpoint.xs ? 'text-h4 font-weight-bold' : 'text-h3 font-weight-bold'">{{ message1 }}</div>
          </div>
          <p :class="this.$vuetify.breakpoint.xs ? 'text-caption mt-4' : 'text-body-1 mt-4'">{{ message2 }}<br v-if="this.$vuetify.breakpoint.xs">{{ message3 }}</p>
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
      message1: '',
      message2: '',
      message3: ''
    }
  },
  mounted () {
    const messages = {
      400: [
        'BAD REQUEST',
        'お探しのページは見つかりませんでした。',
        'ご指定のURLが間違っている可能性があります。'
      ],
      401: [
        'UNAUTHORIZED',
        'アクセスしようとしたページは表示できませんでした。',
        ''
      ],
      403: [
        'FORBIDDEN PAGE',
        'アクセスしようとしたページは表示できませんでした。',
        ''
      ],
      404: [
        'PAGE NOT FOUND',
        'お探しのページは見つかりませんでした。',
        'ご指定のURLが間違っている可能性があります。'
      ],
      410: [
        'BAD REQUEST',
        'お探しのページは見つかりませんでした。',
        'ご指定のURLが間違っている可能性があります。'
      ],
      500: [
        'INTERNAL SERVER ERROR',
        'サーバーエラーが発生しました。',
        '再度時間をおいてアクセスしてください。'
      ],
      503: [
        'INTERNAL SERVER ERROR',
        'サーバーエラーが発生しました。',
        '再度時間をおいてアクセスしてください。'
      ],
    };

    if (messages[this.error.statusCode]) {
      const [message1, message2, message3] = messages[this.error.statusCode]
      this.message1 = message1
      this.message2 = message2
      this.message3 = message3
      return
    }
  }
}
</script>