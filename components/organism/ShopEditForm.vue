<template>
  <div class="main-wrapper">
    <CompleteText v-if="isCompleted" text="登録"/>
    <div class="main-content" v-if="!isCompleted">
      <div class="text-h5 font-weight-bold">基本情報</div>
      <ErrorsText class="mt-4" :errors="errors" />
      <div class="mt-5">
        <FormTextfield columnName="名称" label="例：フルギキタイ" :required="true" id="name" v-on:change="changeValue" :default="name" />
        <FormSelect columnName="都道府県" label="都道府県を選択してください" :required="true" id="prefecture" :items="prefectures" v-on:change="changeValue" :default="prefecture" />
        <FormTextfield columnName="住所1" label="市区　例：渋谷区" :required="false" id="city"  v-on:change="changeValue" :default="city" />
        <FormTextfield columnName="住所2" label="町村番地　例：笹塚2-34-5" :required="false" id="address"  v-on:change="changeValue" :default="address" />
        <FormTextfield columnName="住所3" label="ビル名　例：フルギキタイビル 2F" :required="false" id="building"  v-on:change="changeValue" :default="building" />
        <FormTextfield columnName="緯度" label="例：35.710240" :required="false" id="latitude"  v-on:change="changeValue" :default="latitude" />
        <FormTextfield columnName="経度" label="例：139.635291" :required="false" id="longitude"  v-on:change="changeValue" :default="longitude" />
        <FormTextfield columnName="アクセス" label="例：○○駅より徒歩3分" :required="false" id="access"  v-on:change="changeValue" :default="access" />
        <FormTextfield columnName="TEL" label="例：090-1234-5678" :required="false" id="phoneNumber" v-on:change="changeValue" :default="phoneNumber" />
        <FormTextfield columnName="Instagram" label="例：https://www.instagram.com/xxxxx/" :required="false" id="instagram" v-on:change="changeValue" :default="instagram" />
        <FormTextarea columnName="定休日" label="例：水曜日" :required="false" id="holiday" v-on:change="changeValue" :default="holiday" />
        <FormTextarea columnName="営業時間" label="例：14時〜21時" :required="false" id="businessHour" v-on:change="changeValue" :default="businessHour" />
      </div>
      <div class="text-h5 font-weight-bold mt-15">画像情報</div>
      <v-row>
        <FormImage imagePath="" id="mainImage" v-on:change="changeValue" imageName="メイン" :imagePath="mainImage" />
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
    shop: [],
    prefectures: [],
    id: '',
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
      formData.append('_method', 'put');
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
      const updateData = {
        'formData': formData,
        'id': this.id
      }
      const response = await this.$accessor.modules.shops.updateShop(updateData);
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
    const getPrefectures = this.$accessor.modules.shops.getPrefectures();
    const getShop = this.$accessor.modules.shops.getShop(this.$route.params.shopId);
    await Promise.all([getPrefectures, getShop]);
    this.prefectures = this.$accessor.modules.shops.prefectures;
    const shop = this.$accessor.modules.shops.shop;
    this.id = shop.id ?? '',
    this.prefecture = shop.prefectureId ?? '';
    this.name = shop.name ?? '';
    this.city = shop.city ?? '';
    this.address = shop.address ?? '';
    this.building = shop.building ?? '';
    this.access = shop.access ?? '';
    this.latitude = shop.latitude ?? '';
    this.longitude = shop.longitude ?? '';
    this.phoneNumber = shop.phoneNumber ?? '';
    this.instagram = shop.instagram ?? '';
    this.holiday = shop.holiday ?? '';
    this.businessHour = shop.businessHour ?? '';
    this.mainImage = shop.imageUrl ?? '';
  },
}
</script>
<style>
.flex {
  display: flex;
}
</style>