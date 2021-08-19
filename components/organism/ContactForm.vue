<template>
  <div class="main-wrapper">
    <div
      class="main-content"
      :class="this.$vuetify.breakpoint.mdAndDown ? 'mt-4' : 'mt-6 mx-12'"
    >
      <div :class="header" class="font-weight-bold">
        お問い合わせ
      </div>
      <div :class="preface">
        下記フォームを入力し、プライバシーポリシーをご確認の上「送信する」ボタンを押してください。<br v-if="this.$vuetify.breakpoint.xs">運営の都合上、返信には数日から数週間などお時間を頂く場合がございますので、予めご了承ください。
      </div>
      <div>
        <FormTextfield columnName="名前" label="例：フルギ　キタイ" :required="true" id="name" v-on:change="changeValue"/>
        <FormTextfield columnName="メールアドレス" label="例：info@furugikitai.com" :required="true" id="mail" v-on:change="changeValue"/>
        <FormTextarea columnName="お問い合わせ内容" label="お問い合わせ内容を入力してください" :required="true" id="inquiry" v-on:change="changeValue"/>
      </div>
      <v-row>
        <v-col cols="0" lg="3"></v-col>
        <v-col cols="auto" lg="9">
          <v-checkbox label="プライバシーポリシーに同意する">
          </v-checkbox>
        </v-col>
      </v-row>
      <v-col align="center">
        <v-btn
          class="mx-auto my-6 font-weight-bold"
          color="primary"
          depressed
          rounded
          width="200px"
          @click="hogehoge()"
        >
          送信する
        </v-btn>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    header () {
      if (this.$vuetify.breakpoint.xs) return 'text-h5 mx-2 my-5 pt-5'
      return 'text-sm-h4 mx-4 my-10'
    },
    preface () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10'
      return 'text-body-1 mx-4 mb-12'
    },
  },
  data: () => ({
    name: '',
    mail: '',
    inquiry: ''
  }),
  methods: {
    changeValue(...values) {
      const [value, id] = values
      this[id] = value;
    }
  }
}
</script>



