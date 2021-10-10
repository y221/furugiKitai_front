<template>
  <div class="main-wrapper">
    <CompleteText v-if="isCompleted" text="お問い合わせ"/>
    <div class="main-content" v-if="!isCompleted" :class="this.$vuetify.breakpoint.mdAndDown ? 'mt-4' : 'mt-6 mx-12'">
      <div class="d-flex align-center flex-row">
      <TitleBlock />
      <div :class="subHeader">入力フォーム</div>
      </div>
      <ErrorsText class="mt-4" :errors="errors" />
      <div>
        <FormTextfield columnName="名前" label="例：フルギ　キタイ" :required="true" id="name" v-on:change="changeValue"/>
        <FormTextfield columnName="メールアドレス" label="例：info@furugikitai.com" :required="true" id="email" v-on:change="changeValue"/>
        <FormTextarea columnName="お問い合わせ内容" label="お問い合わせ内容を入力してください" :required="true" id="content" v-on:change="changeValue"/>
      </div>
      <v-row>
        <v-col cols="0" lg="3"></v-col>
        <v-col cols="auto" lg="9">
          <v-checkbox v-model="agree" class="font-size-input" label="プライバシーポリシーに同意する">
          </v-checkbox>
        </v-col>
      </v-row>
      <v-col align="center">
        <div v-if="agree">
        <v-btn
          class="mx-auto my-6 font-weight-bold"
          color="primary"
          depressed
          rounded
          width="200px"
          @click="submitContact()"
        >
          送信する
        </v-btn>
        </div>
        <div v-else>
        <v-btn
          disabled
          class="mx-auto my-6 font-weight-bold"
          depressed
          rounded
          width="200px"
        >
          送信する
        </v-btn>
        </div>      
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    subHeader () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h6 mx-2 my-4'
      return 'font-weight-bold text-sm-h5 mx-2 py-4'
    }
  },
  data: () => ({
    name: '',
    email: '',
    content: '',
    errors: {},
    isCompleted: false,
    agree: false
  }),
  methods: {
    async submitContact() {
      let formData = new FormData;
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('content', this.content);

      const response = await this.$accessor.modules.contacts.submitContact(formData);
      if (!response.errors) {
        this.isCompleted = true;
      } else {
        this.errors = response.errors;
      }
      window.scrollTo({
        top: 0
      });
    },
    changeValue(...values) {
      const [value, id] = values
      this[id] = value;
    }
  }
}
</script>



