<template>
  <div>
    <p :class="shopName">Circus Vintage</p>
    <v-row>
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="6"
      >
        <p :class="gender">レディース・メンズ</p>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="6"
        :align="this.$vuetify.breakpoint.xs ? 'start' : 'end'"
        :class="this.$vuetify.breakpoint.xs ? 'pt-0' : '' "
      >
        <v-btn
          depressed
          color="primary"
          outlined
          :class="btn"
        >
          お気に入り 117
        </v-btn>
        <v-btn
          depressed
          color="secondary"
          :class="btn"
        >
          クチコミ投稿
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    shopName () {
      if (this.$vuetify.breakpoint.xs) return 'text-h5 font-weight-medium main-text-color pt-3 mb-0'
      return 'text-h4 font-weight-medium main-text-color'
    },
    gender () {
      if (this.$vuetify.breakpoint.xs) return 'sub-text-color caption mb-0'
      return 'sub-text-color'
    },
    btn () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold caption'
      return 'font-weight-bold'
    }
  }
}
</script>