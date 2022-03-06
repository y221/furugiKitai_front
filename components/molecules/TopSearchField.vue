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
        v-model="text"
        @change="changeKeyword(text)"
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
      @click='search()'
    >
      検索
    </v-btn>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  },
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
    async search() {
      this.$emit('searchShops')
    },
    changeKeyword(text) {
      this.$emit('changeKeyword', text);
    }
  }
}
</script>
<style scoped>
.text-field {
  width:450px;
}
</style>