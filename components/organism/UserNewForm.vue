<template>
  <div class="main-wrapper">
    <CompleteText v-if="isCompleted" text="登録"/>
    <div
      class="main-content"
      v-if="!isCompleted"
      :class="this.$vuetify.breakpoint.mdAndDown ? 'mt-4' : 'mt-6 mx-12'"
    >
      <div :class="header">
        登録が完了しました<br>
        ユーザー情報追加登録（ホントはマイページに飛びたい）
      </div>
      <ErrorsText class="mt-4" :errors="errors" />
      <div>
          <FormUserIcon :imagePath="icon" imageName="ユーザーアイコン" id="icon" />
          <FormTextfield columnName="名前" label="例：古着大好きおじさん" :required="true" id="name" :default="name" v-on:change="changeValue"/>
          <FormTextarea columnName="好きな古着" label="例：ビンテージのデニム" :required="false" id="favorite"  v-on:change="changeValue"/>
          <FormTextarea columnName="プロフィール" label="例：ホゲホゲ" :required="false" id="profile"  v-on:change="changeValue"/>
          <FormTextfield columnName="Instagram" label="例：https://www.instagram.com/xxxxx/" :required="false" id="instagram" v-on:change="changeValue"/>
        </div>
        <v-col align="center">
          <v-btn
            class="mx-auto my-6 font-weight-bold"
            color="primary"
            depressed
            rounded
            width="200px"
            @click="registerUser()"
          >
            登録
          </v-btn>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mx-1 pt-4'
      if (this.$vuetify.breakpoint.mdAndDown) return 'font-weight-bold text-h5 pt-4'
      return 'font-weight-bold text-sm-h5 mx-2 mt-2 py-2'
    }
  },
  data: () => ({
    uid: '',
    icon: '',
    name:  '',
    favorite: '',
    profile: '',
    instagram: '',
    errors: {},
    isCompleted: false,
  }),
  methods: {
    async registerUser() {
      let formData = new FormData;
      formData.append('icon', this.icon);
      formData.append('name', this.name);
      formData.append('favorite', this.favorite);
      formData.append('profile', this.profile);
      formData.append('instagram', this.instagram);
      formData.append('uid', this.$auth.user.sub);
      
      const response = await this.$accessor.modules.users.registerUser(formData);
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
  },
  async created() {
    this.name = this.$auth.user.family_name + " "+ this.$auth.user.given_name
    this.icon = this.$accessor.modules.users.user.icon
  }
}
</script>