<template>
  <div>
    <v-row>
    <p class="ml-3 main-text-color" :class="shopName">{{ name }}</p>
    <v-chip
      outlined
      small
      active
      color="chip_color"
      text-color="chip_color"
      class="mb-4 mr-4 mt-4 ml-auto"
      :to="to"
    >
      情報修正
    </v-chip>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="6"
      >
        <p :class="this.$vuetify.breakpoint.xs ? 'sub-text-color caption mb-0' : 'sub-text-color'">
          {{ gender }}
        </p>
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
  data: () => ({
    shopId: ''
  }),
  props: {
    name: String,
    gender: String
  },
  mounted() {
    this.shopId = this.$route.params.shopId;
  },
  computed: {
    shopName () {
      if (this.$vuetify.breakpoint.xs) return 'text-h5 font-weight-medium pt-3 mb-0'
      return 'text-h4 font-weight-medium'
    },
    btn () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold caption'
      return 'font-weight-bold'
    },
    to () {
      return `/shops/${this.shopId}/edit`
    }
  }
}
</script>