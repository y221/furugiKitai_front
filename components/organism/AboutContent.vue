<template>
  <v-main class="main-background-color">
    <v-container>
      <div class="main-wrapper">
        <div :class="mainContent">
          <AboutDetailTop />
          <AboutDetailVision />
          <AboutDetailTeams />
          <div :class="header">
            利用規約
          </div>
          <div :class="headerText">
            この利用規約（以下、「本規約」といいます。）は、フルギキタイ（以下、「本サービス」といいます。）のご利用にあたり、この利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に同意いただいた上で、本サービスを利用できるものとします。
          </div>
          <div :class="footer">
            運営者
          </div>
          <div :class="footerText">
            フルギキタイ運営チーム
          </div>
        </div>
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
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mx-2 my-5 pt-5'
      return 'font-weight-bold text-sm-h4 mx-4 my-10'
    },
    headerText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10'
      return 'text-body-1 mx-4 mb-12'
    },
    footer () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-subtitle-1 mx-2 pt-5'
      return 'font-weight-bold text-sm-h7 mx-4'
    },
    footerText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10 pb-16'
      return 'text-body-1 mx-4 mb-12'      
    }
  }
}
</script>



