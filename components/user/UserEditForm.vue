<template>
  <div class="main-wrapper">
    <CompleteText v-if="isCompleted" text="登録"/>
    <div
      class="main-content"
      v-if="!isCompleted"
      :class="this.$vuetify.breakpoint.mdAndDown ? 'mt-4' : 'mt-6 mx-12'"
    >
      <div :class="header">
        プロフィール編集
      </div>
      <ErrorsText class="mt-4" :errors="errors" />
      <div>
        <FormUserIcon imageName="ユーザーアイコン" id="icon" :imagePath="icon" v-on:change="changeValue"/>
        <FormTextfield columnName="名前" label="例：古着大好きおじさん" :required="true" id="name" :default="name" v-on:change="changeValue"/>
        <FormTextarea columnName="好きな古着" label="例：ビンテージのデニム" :required="false" id="favorite" :default="favorite"  v-on:change="changeValue"/>
        <FormTextarea columnName="プロフィール" label="例：ホゲホゲ" :required="false" id="profile" :default="profile" v-on:change="changeValue"/>
        <FormTextfield columnName="Instagram" label="例：https://www.instagram.com/xxxxx/" :required="false" id="instagram" :default="instagram" v-on:change="changeValue"/>
      </div>
      <v-col align="center">
        <v-btn
          class="mx-auto my-6 font-weight-bold"
          color="primary"
          depressed
          rounded
          width="200px"
          @click="updateUser()"
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
    async updateUser() {
      const formData = new FormData;
      formData.append('id', this.$accessor.modules.users.user.id);
      formData.append('icon', this.icon);
      formData.append('name', this.name);
      formData.append('favorite', this.favorite);
      formData.append('profile', this.profile);
      formData.append('instagram', this.instagram);
      formData.append('uid', this.$auth.user.userId);

      await this.$accessor.modules.users.updateUser(formData)
      .then(() => this.isCompleted = true)
      .catch(error =>  this.$router.push('/')); //TODO 500エラーへ?

      window.scrollTo({
        top: 0
      });
    },
    changeValue(...values) {
      const [value, id] = values;
      this[id] = value;
    }
  },
  created() {
    this.name = this.$accessor.modules.users.user.name ?? '';
    this.icon = this.$accessor.modules.users.user.icon ?? '';
    this.favorite = this.$accessor.modules.users.user.favorite ?? '';
    this.profile = this.$accessor.modules.users.user.profile ?? '';
    this.instagram =this.$accessor.modules.users.user.instagram ?? '';
  }
}
</script>