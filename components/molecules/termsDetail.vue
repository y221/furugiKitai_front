<template>
  <div :class="termsWrapper">
    <div class="d-flex align-center flex-row">
      <TermsTitleBlock />
      <div :class="termsTitle">第{{index}}条.({{ subject }})</div>
    </div>
    <ol>
      <li
        class="termsSeconds"
        v-for="(termsecond, i) in termseconds"
        :key="`first-${i}`"
        :class="termsText"
      >
        {{ termsecond }}
      </li>
      <li
        class="terms"
        v-for="(term, i) in terms"
        :key="`second-${i}`"
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
    terms: Array,
    termseconds: Array,
    subject: String,
  },
  computed: {
    termsWrapper () {
      if (this.$vuetify.breakpoint.xs) return 'pb-2 px-2 mt-4 mb-2'
      return 'pb-8 px-4 mb-4'
    },
    termsTitle () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-subtitle-1 mx-2 my-3'
      return 'font-weight-bold text-sm-h5 mx-1 my-5'
    },
    termsText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mb-5'
      return 'text-body-1 mb-5'
    },
    index () {
      return this.i + 1
    }
  }
}
</script>

<style>
ol {
  list-style-type: none;
}

.termsSeconds {
  padding-left: 0;
  margin-left: -1.5em;
}

.terms {
  padding-left: 1em;
  text-indent: -1.25em;
}
</style>