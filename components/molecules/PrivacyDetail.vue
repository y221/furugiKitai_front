<template>
  <div :class="privacyWrapper">
    <div class="d-flex align-center flex-row">
      <TitleBlock />
      <div :class="sectionTitle">第{{section}}条.({{ term }})</div>
    </div>
    <ol>
      <li
        class="ml-n5"
        v-for="(text, index) in texts"
        :key="`text-${index}`"
        :class="sentence"
      >
        {{ text }}
      </li>
      <li
        class="numbers pl-4"
        v-for="(number, index) in numbers"
        :key="`number-${index}`"
        :class="sentence"
      >
        {{ number }}
      </li>
    </ol>    
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    term: String,
    texts: Array,
    numbers: Array,
  },
  computed: {
    privacyWrapper () {
      if (this.$vuetify.breakpoint.xs) return 'pb-2 px-2 mt-4 mb-2'
      return 'pb-8 px-4 mb-4'
    },
    sectionTitle () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-subtitle-1 mx-2 my-3'
      return 'font-weight-bold text-sm-h5 mx-1 my-5'
    },
    sentence () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mb-5'
      return 'text-body-1 mb-5'
    },
    section () {
      return this.index + 1
    }
  }
}
</script>

<style>
ol {
  list-style-type: none;
}

.numbers {
  text-indent: -0.9em;
}
</style>