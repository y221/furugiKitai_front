<template>
      <div class="main-wrapper">
        <div :class="mainContent">
          <v-col>
            <div :class="title">
              お問い合わせ
            </div>
            <div :class="description">
              下記フォームを入力し、プライバシーポリシーをご確認の上「送信する」ボタンを押してください。運営の都合上、返信には数日から数週間などお時間を頂く場合がございますので、予めご了承ください。
            </div>
              <v-row :class="formLine">
                <v-col
                  cols="auto"
                  lg="2"
                  class="d-flex align-center"
                  :class="fieldsName"
                >
                  <div>
                    名前
                  </div>
                </v-col>
                <v-col
                  lg="1"
                  class="d-flex align-center"
                  :class="required"
                >
                  <RequiredMark />
                </v-col>
                <v-col
                  cols="12"
                  lg="9"
                  :class="textField"
                >
                  <v-text-field
                    placeholder="例：フルギ　キタイ"
                    outlined
                    class="text-body-2"
                  ></v-text-field>
                </v-col>
              </v-row>
            <v-divider class="mx-auto" :width="dividerWidth"></v-divider>
              <v-row :class="formLine">
                <v-col
                  cols="auto"
                  lg="2"
                  class="d-flex align-center"
                  :class="fieldsName"
                >
                  <div>
                    メールアドレス
                  </div>
                </v-col>
                <v-col
                  lg="1"
                  class="d-flex align-center"
                  :class="required"
                >
                  <RequiredMark />
                </v-col>
                <v-col
                  cols="12"
                  lg="9"
                  :class="textField"
                >
                  <v-text-field
                    placeholder="例：info@furugikitai.com"
                    outlined
                    class="text-body-2"
                  ></v-text-field>
                </v-col>
              </v-row>
            <v-divider class="mx-auto" :width="dividerWidth"></v-divider>
              <v-row :class="formLine">
                <v-col
                  cols="auto"
                  lg="2"
                  class="d-flex align-center"
                  :class="fieldsName"
                >
                  <div>
                    お問い合わせ内容
                  </div>
                </v-col>
                <v-col
                  lg="1"
                  class="d-flex align-center"
                  :class="required"
                >
                  <RequiredMark />
                </v-col>
                <v-col
                  cols="12"
                  lg="9"
                  :class="textField"
                >
                  <v-textarea
                    placeholder="例：お問い合わせ内容を入力してください"
                    outlined
                    class="text-body-2"
                  ></v-textarea>
                </v-col>
              </v-row>
            <v-divider class="mx-auto" :width="dividerWidth"></v-divider>
              <v-row
                :class="checkBoxLine"
                :justify="checkBoxJustify"
                align="center"
              >
                <v-checkbox
                ></v-checkbox>
                  <div :class="agreeText">
                    プライバシーポリシーに同意する
                  </div>
              </v-row>
              <v-row :justify="submitButtonJustify">
                <v-btn
                  color="primary"
                  depressed
                  rounded
                  :class="submitButtonPosition"
                  :width="submitButtonWidth"
                >
                  送信する
                </v-btn>                
              </v-row>
          </v-col>
        </div>
      </div>
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
      if (this.$vuetify.breakpoint.mdAndDown) return 'px-1 mt-4'
      return 'mx-2 pt-3'
    },
    dividerWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) return '100%'
      return '95%'
    },
    fieldsName () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-button font-weight-bold px-2 ml-1'
      return 'ml-3 text-body-2 font-weight-bold'
    },
    required () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-caption text-center mx-n4'
      return 'text-caption text-center'
    },
    textField () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mt-n5 mb-n1'
      return 'mx-n8 mt-3 mb-n3'   
    },
    checkBoxJustify () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'start'
      return 'center' 
    },
    checkBoxLine () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mx-1 mt-4'
      return 'mr-16 pr-16 pt-8' 
    },
    agreeText () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-button'
      return 'text-body-2 mr-16 pr-3' 
    },
    submitButtonJustify () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'center'
      return 'end'        
    },
    submitButtonWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) return '95%'
      return '645px'        
    },
    submitButtonPosition () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mt-6 mb-10'
      return 'mr-12 my-6 mb-12'
    } 
  }
}
</script>



