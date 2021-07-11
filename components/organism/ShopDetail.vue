<template>
  <v-row :class="this.$vuetify.breakpoint.xs ? 'mt-1' : 'mt-4'">
    <v-col
      cols="12"
      lg="6"
      md="6"
      sm="6"
    >
      <ShopMainImage
        :imageUrl="this.shop.imageUrl"
      />
      <ShopMap />
    </v-col>
    <v-col
      cols="12"
      lg="6"
      md="6"
      sm="6"
    >
      <v-list
        v-model="this.$vuetify.breakpoint.xs ? 'three-line' : ''"
        class="pt-0"
      >
        <ShopDetailList
          title="住所"
          :text="`${shop.prefecture}${shop.city}${shop.address}${shop.building}`"
        />
        <ShopDetailList
          title="アクセス"
          :text="shop.access"
        />
        <ShopDetailList
          title="TEL"
          :text="shop.phoneNumber"
        />
        <ShopDetailList
          title="Instagram"
          :text="shop.instagram"
        />
        <ShopDetailList
          title="定休日"
          :text="shop.holiday"
        />
        <ShopDetailList
          title="営業時間"
          :text="shop.businessHour"
        />
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    shop: Object
  }
}
</script>