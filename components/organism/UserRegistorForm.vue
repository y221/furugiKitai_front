<template>
  <div class="main-wrapper">
    <div class="main-content">
      <div class="text-h5 font-weight-bold">ユーザー情報登録</div>
        <div class="mt-5">
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