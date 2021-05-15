<template>
  <v-main class="main-background-color">
    <v-container>
      <div :class="mainContent">
        <div class="main-wrapper">
          <div class="my-10 px-16">
            <div :class="header">利用規約</div>
            <div :class="mainText">この利用規約（以下，「本規約」といいます。）は，フルギキタイ（以下，「本サービス」といいます。）のご利用にあたり、この利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に同意いただいた上で，本サービスを利用できるものとします。</div>
          </div>
          <div class="my-16 mx-4 px-16">
            <div v-for="(terms, i) of termsList" :key="i">
              <TermsDetail
                :terms='terms'
                :i='i'
              />
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-main>  
</template>

<script>
export default {
  data() {
    return {
      termsList:
        [
          [
            '本規約は，ユーザーとフルギキタイ運営者（以下、「運営者」といいます。）との間の本サービスの利用に関わる一切の関係に適用されるものとします。',
            '運営者は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。',
            '本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。'
          ],
          [
            '２条の中身だよおおおおおおおおおおおおお',
            'ああああああああああああああああああああ'
          ],
          [
            '3条の中身だよおおおおおおおおおおおお',
            'いいいいいいいいいいいいいいいいいいい',
            'ううううううううううううううううううう',
            'えええええええええええええええええええ'
          ]
        ],
    }
  },
  computed: {
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-4 mx-5'
      return 'main-content mt-6 mx-12'
    },
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mx-2'
      return 'font-weight-bold text-sm-h4 mx-4 my-10'
    },
    mainText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-1 mx-2 caption'
      return 'text-body-1 mx-4'
    }
  }
}
</script>