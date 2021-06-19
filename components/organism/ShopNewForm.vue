<template>
  <div class="main-wrapper">
    <CompleteText v-if="isCompleted" text="登録"/>
    <div class="main-content" v-if="!isCompleted">
      <div class="text-h5 font-weight-bold">基本情報</div>
      <ErrorsText class="mt-4" :errors="errors" />
      <div class="mt-5">
        <FormTextfield columnName="名称" label="例：フルギキタイ" :required="true" id="name" v-on:change="changeValue"/>
        <FormSelect columnName="都道府県" label="都道府県を選択してください" :required="true" id="prefecture" :items="prefectures" v-on:change="changeValue"/>
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
    city: '',
    address: '',
    building: '',
    access: '',
    phoneNumber: '',
    instagram: '',
    holiday: '',
    businessHour: '',
    errors: {},
    isCompleted: false
  }),
  methods: {
    async registerShop() {
      const shopData = {
        prefecture: this.prefecture,
        name: this.name,
        city: this.city,
        address: this.address,
        building: this.building,
        access: this.access,
        phoneNumber: this.phoneNumber,
        instagram: this.instagram,
        holiday: this.holiday,
        businessHour: this.businessHour,
      }
      const response = await this.$accessor.modules.shops.registerShop(shopData);
      if (response.errors ?? true) {
        this.errors = response.errors;
      }
      this.isCompleted = true;
      window.scrollTo({
        top: 0
      });
    },
    changeValue(...values) {
      const [value, id] = values
      this[id] = value;
    }
  },
  async mounted() {
    await this.$accessor.modules.shops.getPrefectures();
    this.prefectures = this.$accessor.modules.shops.prefectures;
  },
}
</script>
<style>
.flex {
  display: flex;
}
</style>