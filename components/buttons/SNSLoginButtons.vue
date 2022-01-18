<template>
  <v-col cols="9">
    <v-btn
      @click.stop="authenticate"
      block
      color="line_image"
      depressed
      medium
      class="py-5 white--text text-h6"
    ><fa :icon="faLine" class="mr-2" />LINE</v-btn>
  </v-col>
</template>

<script>
import { faLine } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faLine() {
      return faLine
    },
  },
  methods: {
    authenticate() {
      this.$auth.loginWith('line')
    }
  }
}
</script>

<style scoped>
</style>