<template>
  <v-main class="main-background-color">
    <v-container>
      <div :class="mainContent">
        <div class="main-wrapper">
          <div class="my-10 px-16">
            <div :class="header">利用規約</div>
          </div>
          <div class="my-10 px-16">
            <div :class="mainText">この利用規約（以下，「本規約」といいます。）は，フルギキタイ（以下，「本サービス」といいます。）のご利用にあたり、この利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に同意いただいた上で，本サービスを利用できるものとします。</div>
          </div>
          <termsDetail />
        </div>
      </div>
    </v-container>
  </v-main>  
</template>

<script>
export default {
  computed: {
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-4 mx-5'
      return 'main-content mt-6 mx-12'
    },
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mr-2'
      return 'font-weight-bold text-sm-h4 mr-5'
    },
    mainText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-1 ml-2 caption'
      return 'text-body-1 mr-5'
    }
  }
}
</script>