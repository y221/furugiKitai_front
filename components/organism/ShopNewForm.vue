<template>
  <div class="main-wrapper">
    <div class="main-content">
      <div class="text-h5 font-weight-bold">基本情報</div>
      <div class="mt-5">
        <FormTextfield columnName="名称" label="例：フルギキタイ" :required="true" id="name" v-on:change="changeValue"/>
        <FormSelect columnName="都道府県" label="都道府県を選択してください" :required="false" id="prefecture" :items="prefectures" v-on:change="changeValue"/>
        <FormTextfield columnName="住所1" label="市区　例：渋谷区" :required="false" id="city"  v-on:change="changeValue"/>
        <FormTextfield columnName="住所2" label="町村番地　例：笹塚2-34-5" :required="false" id="address"  v-on:change="changeValue"/>
        <FormTextfield columnName="住所3" label="ビル名　例：フルギキタイビル 2F" :required="false" id="building"  v-on:change="changeValue"/>
        <FormTextfield columnName="アクセス" label="例：○○駅より徒歩3分" :required="false" id="access"  v-on:change="changeValue"/>
        <FormTextfield columnName="TEL" label="例：090-1234-5678" :required="false" id="phoneNumber" v-on:change="changeValue"/>
        <FormTextfield columnName="Instagram" label="例：https://www.instagram.com/xxxxx/" :required="false" id="instagram" v-on:change="changeValue"/>
        <FormTextarea columnName="定休日" label="例：水曜日" :required="false" id="holiday" v-on:change="changeValue"/>
        <FormTextarea columnName="営業時間" label="例：14時〜21時" :required="false" id="businessHour" v-on:change="changeValue"/>
      </div>
      <div class="text-h5 font-weight-bold mt-15">画像情報</div>
      <v-row>
        <FormImage imagePath="" imageName="メイン" />
        <FormImage imagePath="" imageName="1." />
        <FormImage imagePath="" imageName="2." />
        <FormImage imagePath="" imageName="3." />
        <FormImage imagePath="" imageName="4." />
        <FormImage imagePath="" imageName="5." />
      </v-row>
      <v-col align="center">
        <v-btn
          class="mx-auto my-6 font-weight-bold"
          color="primary"
          depressed
          rounded
          width="200px"
          @click="registerShop()"
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
    prefectures: [],
    prefecture: '',
    name: '',
    address: '',
    access: '',
    phoneNumber: '',
    instagram: '',
    holiday: '',
    businessHour: '',
  }),
  methods: {
    registerShops() {
      // this.$store.dispatch("addDeck", deckData);
    },
    changeValue(...values) {
      const [value, id] = values
      this[id] = value;
    }
  },
  created() {
      this.prefectures = getPrefectures()
  }
}
const getPrefectures = () => {
  return [
    {value: 1, text: '青森'},
    {value: 2, text: '秋田'},
    {value: 3, text: '岩手'}
  ]
}
</script>
<style>
.flex {
  display: flex;
}
</style>