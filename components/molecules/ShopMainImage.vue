<template>
  <v-img
    width="500"
    :aspect-ratio="4/3"
    :src="this.imageUrl"
  >
  </v-img>
</template>
<script>
export default {
  props: {
    imageUrl: String
  },
  computed: {
    height () {
      if (this.$vuetify.breakpoint.xs) return '230'
      return '372'
    },
  }
}
</script>