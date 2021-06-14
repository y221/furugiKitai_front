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
          <v-row>
            <v-col :class="fieldsName" class="column" cols="2">
              <div>
                名前
              </div>
            </v-col>
            <v-col cols="1">
              <v-sheet
                color="accent"
                rounded
                height="50"
                width="100"
              >
                  <div :class="required" text-color="white">
                    必須
                  </div>
              </v-sheet>
            </v-col>
            <v-col>
              <v-text-field
                placeholder="例：フルギ　キタイ"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
            <v-divider></v-divider>

          <v-row>
          </v-row>
          <v-row>
          </v-row>
          <v-row>
          </v-row>
          <v-row>
          </v-row>
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
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-4'
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
    fieldsName () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10'
      return 'text-body-2 font-weight-bold'
    },
    required () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10'
      return 'text-caption'
    },
    column () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10'
      return 'align-justify'
    }    
  }
}
</script>



