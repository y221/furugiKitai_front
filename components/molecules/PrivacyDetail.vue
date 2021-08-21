<template>
  <div :class="wrapper">
    <v-row class="d-flex align-center">
      <v-col cols="1" lg="1">
        <TitleBlock />
      </v-col>
      <v-col cols="11" lg="auto">  
        <div :class="article" class="font-weight-bold">
          第{{section}}条.({{ term }})
        </div>
      </v-col>
    </v-row>
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
        class="numbers pl-2"
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
    wrapper () {
      if (this.$vuetify.breakpoint.xs) return 'mx-1 my-6'
      return 'mx-4 my-12'
    },
    article () {
      if (this.$vuetify.breakpoint.xs) return 'text-subtitle-1 mx-n1 my-3'
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-sm-h5 my-5 ml-n6'
      return 'text-sm-h5 my-5 ml-n11'
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