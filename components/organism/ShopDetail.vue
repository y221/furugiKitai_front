<template>
  <v-row :class="this.$vuetify.breakpoint.xs ? 'mt-1' : 'mt-4'">
    <v-col
      cols="12"
      lg="6"
      md="6"
      sm="6"
    >
      <ShopMainImage />
      <ShopMap />
    </v-col>
    <v-col
      cols="12"
      lg="6"
      md="6"
      sm="6"
    >
      <ShopDetailList />
    </v-col>
  </v-row>
</template>