<template>
    <v-col align="center" class="text-h5 mb-15">
      <p class="mb-0 mt-16">
        {{text}}が完了しました。
      </p>
      <p class="mb-16">
        ご協力ありがとうございます。
      </p>
        <v-btn
          depressed
          color="secondary"
          class="mb-10"
          :class="btn"
          :width="width"
          :height="height"
          to="/"
        >
          トップへ戻る
        </v-btn>
    </v-col>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    width () {
      if (this.$vuetify.breakpoint.xs) return '125'
      return '176'
    },
    height () {
      if (!this.$vuetify.breakpoint.xs) return '52'
    },
    btn () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold caption'
      return 'font-weight-bold'
    }
  }
}
</script>