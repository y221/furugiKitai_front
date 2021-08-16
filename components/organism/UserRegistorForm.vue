<template>
  <div class="main-wrapper">
    <div :class="mainContent">
      <div :class="header">
        ユーザー情報登録
      </div>
      <div>
        <FormUserIcon imagePath="" imageName="ユーザーアイコン" />
        <FormTextfield columnName="名前" label="例：古着大好きおじさん" :required="true" id="name" v-on:change="changeValue"/>
        <FormTextarea columnName="好きな古着" label="例：ビンテージのデニム" :required="false" id="favorite"  v-on:change="changeValue"/>
        <FormTextarea columnName="プロフィール" label="例：ホゲホゲ" :required="false" id="profile"  v-on:change="changeValue"/>
        <FormTextfield columnName="Instagram" label="例：https://www.instagram.com/xxxxx/" :required="false" id="instagram"  v-on:change="changeValue"/>
      </div>
      <v-col align="center">
        <v-btn
          class="mx-auto my-6 font-weight-bold"
          color="primary"
          depressed
          rounded
          width="200px"
          @click="registerUsers()"
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
    mainContent () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'main-content mt-4'
      return 'main-content mt-6 mx-12'
    },
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mx-1 pt-4'
      if (this.$vuetify.breakpoint.mdAndDown) return 'font-weight-bold text-h5 pt-4'
      return 'font-weight-bold text-sm-h5 mx-2 mt-2 py-2'
    }
  },
  data: () => ({
    name: '',
    favorite: '',
    profile: '',
    instagram: '',
  }),
  methods: {
    registerUsers() {
      // this.$store.dispatch("addDeck", deckData);
    },
    changeValue(...values) {
      const [value, id] = values
      this[id] = value;
    }
  },
}
</script>