<template>
  <div>
    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        md="6"
        class="mt-4"
      >
        <v-textarea
          solo
          flat
          outlined
          color="grey"
          :label="label"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-col align="center">
      <v-btn
        class="mx-auto"
          color="primary"
        depressed
        rounded
        width="200px"
      >
        送信
      </v-btn>
    </v-col>
  </div>
</template>
<script>
export default {
  computed: {
    label () {
      return 'おおばやしさんへのコメント'
    },
    height () {
      if (this.$vuetify.breakpoint.xs) return '40'
      return '57'
    }
  }
}
</script>