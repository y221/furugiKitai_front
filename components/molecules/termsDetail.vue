<template>
  <div>
    <div :class="termsWrapper">
      <div class="d-flex align-center flex-row mb-6">
        <TermsTitleBlock />
        <div :class="termsTitle">第1条（適用）</div>
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
    <div :class="termsWrapper">
      <div class="d-flex align-center flex-row mb-6">
        <TermsTitleBlock />
        <div :class="termsTitle">第1条（適用）</div>
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
  </div>

</template>

<script>
export default {
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
    }
  },
  data() {
    return {
      terms:
        [
        '本規約は，ユーザーとフルギキタイ運営者（以下、「運営者」といいます。）との間の本サービスの利用に関わる一切の関係に適用されるものとします。',
        '運営者は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。',
        '本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。'
        ]
    }
  }  
}
</script>

<style>
ol {
  list-style-type: decimal;
}
</style>