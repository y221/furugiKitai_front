<template>
  <div>
    <div :class="subTitle">
      フルギキタイ運営チーム
    </div>
    <v-col align="center">
    <v-row>
    <div
      class="d-flex flex-wrap"
      v-for="name in names"
      :key="name"
      :class="nameStyle"
    >
    {{ name }}
    </div>
    </v-row>
    <v-row>
    <div
      v-for="twitter in twitters"
      :key="twitter"
      :class="snsLink"
    >
    {{ twitter }}
    </div>  
    </v-row>
    <v-row>
    <div
      v-for="profile in profiles"
      :key="profile"
      :class="profileStyle"
    >
    {{ profile }}
    </div> 
    </v-row>   
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    names: Array,
    twitters: Array,
    profiles: Array,
  },
  computed: {
    subTitle () {
      if (this.$vuetify.breakpoint.xs) return 'secondary--text text-h5 font-weight-bold'
      return 'secondary--text text-h5 font-weight-bold mt-10'
    },
    nameStyle () {
      if (this.$vuetify.breakpoint.xs) return 'secondary--text text-h5 font-weight-bold'
      return 'text-h6 font-weight-bold'
    },
    snsLink () {
      if (this.$vuetify.breakpoint.xs) return 'secondary--text text-h5 font-weight-bold'
      return 'text-subtitle-2 text-decoration-underline font-weight-bold'
    },
    profileStyle () {
      if (this.$vuetify.breakpoint.xs) return 'secondary--text text-h5 font-weight-bold'
      return 'text-caption'
    }
  }
}
</script>


