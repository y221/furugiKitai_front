<template>
  <v-main class="main-background-color">
    <v-container>
      <div class="main-wrapper">
        <div :class="mainContent">
          <v-col>
            <div :class="title">
              お問い合わせ
            </div>
            <div :class="description">
              下記フォームを入力し、プライバシーポリシーをご確認の上「送信」ボタンを押してください。運営の都合上、返信には数日〜数週間などお時間を頂く場合がございますので、予めご了承ください。
            </div>
              <v-row class="formLine">
                <v-col
                  cols="auto"
                  class="d-flex align-center"
                  :class="fieldsName"
                >
                  <div>
                    メールアドレス
                  </div>
                </v-col>
                <v-col
                  cols="auto"
                  class="d-flex align-center"
                  :class="required"
                >
                  <RequiredMark />
                </v-col>
                <v-col
                  cols="12"
                  md="auto"
                  :class="textField"
                >
                  <v-text-field
                    placeholder="例：フルギ　キタイ"
                    outlined
                    class="text-body-2"
                  ></v-text-field>
                </v-col>
              </v-row>
            <v-divider></v-divider>
          </v-col>
        </div>
      </div>
    </v-container>
  </v-main>  
</template>

<script>
export default {
  computed: {
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-4 pb-8'
      return 'main-content mt-6 mx-12'
    },
    title () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mx-2 my-5 pt-5'
      return 'font-weight-bold text-sm-h4 mx-4 my-10'
    },
    description () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10'
      return 'text-body-1 mx-4 mb-12'
    },
    formLine () {
      if (this.$vuetify.breakpoint.xs) return 'px-1 mt-3'
      return 'mx-2 pt-3'
    },
    fieldsName () {
      if (this.$vuetify.breakpoint.xs) return 'text-button font-weight-bold px-2 ml-1'
      return 'text-body-2 font-weight-bold'
    },
    required () {
      if (this.$vuetify.breakpoint.xs) return 'text-caption text-center mx-n4'
      return 'text-caption text-center '
    },
    textField () {
      if (this.$vuetify.breakpoint.xs) return 'mt-n6 mb-n3'
      return 'mt-5 mb-n3'
    }
  }
}
</script>



