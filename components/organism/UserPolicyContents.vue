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
          <div class="my-10 px-16">
            <div class="d-flex flex-row mb-6">
              <v-sheet
                class="mr-2"
                color="#9BD4CE"
                height="25"
                rounded
                width="25"
              ></v-sheet>
              <div :class="subHeader">第1条（適用）</div>
            </div>
              <div class="mt-5 px-4">
                <div :class="mainText">
                  <ol style="list-style-type: decimal">
                    <p><li>本規約は，ユーザーとフルギキタイ運営者（以下、「運営者」といいます。）との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li></p>
                    <p><li>運営者は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li></p>
                    <p><li>本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</li></p>
                  </ol>
                </div>
              </div>
          </div>

          <div class="my-10 px-16">
            <div class="d-flex flex-row mb-6">
              <v-sheet
                class="mr-2"
                color="#9BD4CE"
                height="25"
                rounded
                width="25"
              ></v-sheet>
              <div :class="subHeader">第2条（利用登録）</div>
            </div>
              <div class="mt-5 px-4">
                <div :class="mainText">
                  <ol style="list-style-type: decimal">
                    <p><li>本サービスにおいては，登録希望者が本規約に同意の上，運営者の定める方法によって利用登録を申請し，運営者がこの承認を登録希望者に通知することによって，利用登録が完了するものとします。</li></p>
                    <p><li>運営者は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。</li></p>                    <p><li>本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</li></p>
                  </ol>
                </div>
                <div class="mt-5 px-6">
                  <div :class="mainText">
                    <ol style="list-style-type: lower-roman">
                      <p><li>利用登録の申請に際して虚偽の事項を届け出た場合</li></p>
                      <p><li>本規約に違反したことがある者からの申請である場合</li></p>
                      <p><li>その他，運営者が利用登録を相当でないと判断した場合</li></p>
                    </ol>
                  </div>
                </div>
              </div>
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
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-2 mx-5'
      return 'main-content mt-6 mx-12'
    },
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mr-2'
      return 'font-weight-bold text-sm-h4 mr-5'
    },
    subHeader () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h6 ml-2'
      return 'font-weight-bold text-sm-h5 mr-5'
    },
    mainText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-1 ml-2 caption'
      return 'text-body-1 mr-5'
    }
  }
}
</script>