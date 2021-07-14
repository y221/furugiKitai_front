<template>
  <div class="main-wrapper">
    <CompleteText v-if="isCompleted" text="登録"/>
    <div :class="mainContent" v-if="!isCompleted">
      <div class="d-flex align-center flex-row">
      <TitleBlock />
      <div :class="subHeader">基本情報</div>
      </div>
      <ErrorsText class="mt-4" :errors="errors" />
      <div>
        <FormTextfield columnName="名称" label="例：フルギキタイ" :required="true" id="name" v-on:change="changeValue"/>
        <FormSelect columnName="都道府県" label="都道府県を選択してください" :required="true" id="prefecture" :items="prefectures" v-on:change="changeValue"/>
        <FormTextfield columnName="住所1" label="市区　例：渋谷区" :required="false" id="city"  v-on:change="changeValue"/>
        <FormTextfield columnName="住所2" label="町村番地　例：笹塚2-34-5" :required="false" id="address"  v-on:change="changeValue"/>
        <FormTextfield columnName="住所3" label="ビル名　例：フルギキタイビル 2F" :required="false" id="building"  v-on:change="changeValue"/>
        <FormTextfield columnName="緯度" label="例：35.710240" :required="false" id="latitude"  v-on:change="changeValue"/>
        <FormTextfield columnName="経度" label="例：139.635291" :required="false" id="longitude"  v-on:change="changeValue"/>
        <FormTextfield columnName="アクセス" label="例：○○駅より徒歩3分" :required="false" id="access"  v-on:change="changeValue"/>
        <FormTextfield columnName="TEL" label="例：090-1234-5678" :required="false" id="phoneNumber" v-on:change="changeValue"/>
        <FormTextfield columnName="Instagram" label="例：https://www.instagram.com/xxxxx/" :required="false" id="instagram" v-on:change="changeValue"/>
        <FormTextarea columnName="定休日" label="例：水曜日" :required="false" id="holiday" v-on:change="changeValue"/>
        <FormTextarea columnName="営業時間" label="例：14時〜21時" :required="false" id="businessHour" v-on:change="changeValue"/>
      </div>
      <div class="d-flex align-center flex-row">
      <TitleBlock />
      <div :class="subHeader">画像情報</div>
      </div>
      <v-row>
        <FormImage imagePath="" id="mainImage" v-on:change="changeValue" imageName="メイン" />
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
  computed: {
    mainContent () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'main-content mt-4'
      return 'main-content mt-6 mx-12'
    },
    subHeader () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h6 mx-2 my-4'
      return 'font-weight-bold text-sm-h5 mx-2 py-4'
    }
  },
  data: () => ({
    prefectures: [],
    prefecture: '',
    name: '',
    city: '',
    address: '',
    building: '',
    access: '',
    latitude: '',
    longitude: '',
    phoneNumber: '',
    instagram: '',
    holiday: '',
    businessHour: '',
    errors: {},
    isCompleted: false,
    mainImage: ''
  }),
  methods: {
    async registerShop() {
      let formData = new FormData;
      formData.append('prefecture', this.prefecture);
      formData.append('name', this.name);
      formData.append('city', this.city);
      formData.append('address', this.address);
      formData.append('building', this.building);
      formData.append('access', this.access);
      formData.append('latitude', this.latitude);
      formData.append('longitude', this.longitude);
      formData.append('phoneNumber', this.phoneNumber);
      formData.append('instagram', this.instagram);
      formData.append('holiday', this.holiday);
      formData.append('businessHour', this.businessHour);
      formData.append('mainImage', this.mainImage);
      
      const response = await this.$accessor.modules.shops.registerShop(formData);
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
  async mounted() {
    await this.$accessor.modules.shops.getPrefectures();
    this.prefectures = this.$accessor.modules.shops.prefectures;
  },
}
</script>
