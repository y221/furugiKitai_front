<template>
  <div :class="termsWrapper">
    <div class="d-flex align-center flex-row mb-6">
      <TermsTitleBlock />
      <div :class="termsTitle">第{{index}}条（適用）</div>
    </div>
    <ol>
      <li
        v-for="(term, i) in terms"
        :key="i"
        :class="termsText"
      >
        {{ term }}
      </li>
    </ol>    
  </div>
</template>

<script>
export default {
  props: {
    i: Number,
    terms: Array
  },
  computed: {
    termsWrapper () {
      return 'pb-10'
    },
    termsTitle () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h6 mx-2'
      return 'font-weight-bold text-sm-h5 mx-4'
    },
    termsText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-1 mx-2 mb-5 caption'
      return 'text-body-1 mx-10 mb-5'
    },
    index () {
      return this.i + 1
    }
  }
}
</script>

<style>
ol {
  list-style-type: decimal;
}
</style>