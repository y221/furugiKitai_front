<template>
  <v-main class="main-background-color">
    <v-container>
      <div class="main-wrapper">
        <v-col align="center">
          <div :class="mainContent">
            <AboutDetailTop />
            <AboutDetailVision 
              
            />
            <v-row>
            <AboutDetailTeams 
              :names='names'
              :twitters='twitters'
              :profiles='profiles'
            />
            </v-row>
          </div>
        </v-col>
      </div>
    </v-container>
  </v-main>  
</template>

<script>
export default {
  computed: {
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-4'
      return 'main-content mt-6 mx-12'
    },
    subTitle () {
      if (this.$vuetify.breakpoint.xs) return 'text-h5 font-weight-bold'
      return 'text-h5 font-weight-bold'
    }
  },
  data() {
    return {
      names:[
        'Hidetsugu',
        'Tsutsui',
        'Mashino',
        'Tomohiro'
      ],
      twitters:[
        '@bayashiiiiii',
        '@221',
        '@kabutomushi',
        '@gapao'
      ],
      profiles:[
        '社会人一歩手前',
        'フルギの伝道師',
        'サイタマ地方に生息する伝説のポケモン',
        'ヒュッゲしたい'
      ]
    }
  }
}
</script>



