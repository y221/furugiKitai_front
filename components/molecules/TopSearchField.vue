<template>
　<v-row
    class="mt-5 mb-sm-15"
    justify="center"
  >
    <div :class="textField">
      <v-text-field
        placeholder="店舗名・キーワード"
        filled
        rounded
        :dense="this.$vuetify.breakpoint.xs"
      >
      </v-text-field>
    </div>
    <v-btn
      depressed
      large
      color="accent"
      dark
      rounded
      class="font-weight-bold"
      :height="height"
      
      @click='test()'
    >
      検索
    </v-btn>
  </v-row>
</template>
<script>
export default {
  computed: {
    textField () {
      if (this.$vuetify.breakpoint.xs) return ''
      return 'text-field'
    },
    height () {
      if (this.$vuetify.breakpoint.xs) return '40'
      return '57'
    }
  },
  methods: {
    async test() {
      console.log('test');
      const ip = await this.$axios.$get(
        `/`
      );
      console.log(ip);
    }
  } 
}
</script>
<style scoped>
.text-field {
  width:450px;
}
</style>