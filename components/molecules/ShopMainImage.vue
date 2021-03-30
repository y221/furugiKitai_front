<template>
  <v-img
    width="500"
    :aspect-ratio="4/3"
    src="/images/shop.jpg"
  >
  </v-img>
</template>
<script>
export default {
  computed: {
    height () {
      if (this.$vuetify.breakpoint.xs) return '230'
      return '372'
    },
  }
}
</script>