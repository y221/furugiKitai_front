<template>
  <v-card
    class="py-5"
    outlined
    :to="to"
  >
    <v-row>
      <v-col
        cols="12"
        lg="3"
        md="3"
        sm="3"
      >
        <v-chip
          outlined
          small
          active
          color="chip_color"
          text-color="chip_color"
          class="mb-4"
          v-if="$vuetify.breakpoint.xs"
        >
          レディース・メンズ
        </v-chip>
        <v-img
          :src="imageUrl(shop.imageUrl)"
          :max-height="maxHeight"
        >
        </v-img>
      </v-col>
      <v-col
        cols="12"
        lg="7"
        md="7"
        sm="6"
      >
        <p class="text-h5 font-weight-medium main-text-color mb-0">{{ shop.name }}</p>
        <p :class="address">{{prefectures[shop.prefectureId]}}{{ shop.city }}{{ shop.address }}{{ shop.building }}</p>
        <p :class="time">
          <span>営業時間</span>
          <span class="ml-1" v-if="shop.businessHour">{{ shop.businessHour }}</span>
          <span class="ml-1" v-if="!shop.businessHour">未登録</span>
        </p>
        <v-chip
          outlined
          small
          active
          color="chip_color"
          text-color="chip_color"
          class="mt-n3"
        >
          お気に入り
          <span class="ml-2 accent-color font-weight-bold">117</span>
        </v-chip>
        <v-chip
          outlined
          small
          color="chip_color"
          text-color="chip_color"
          class="mt-n3"
        >
          クチコミ
          <span class="ml-2 accent-color font-weight-bold">117</span>
        </v-chip>
      </v-col>
      <v-col
        cols="12"
        lg="2"
        md="2"
        sm="3"
        v-if="!$vuetify.breakpoint.xs"
      >
        <v-chip
          outlined
          small
          active
          color="chip_color"
          text-color="chip_color"
        >
          レディース・メンズ
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    shop: {
      type: Object,
      required: true,
    },
    prefectures: {
      type: Object,
      required: true
    }
  },
  computed: {
    maxHeight () {
      if (this.$vuetify.breakpoint.xs) return '130'
      return '150'
    },
    address () {
      if (this.$vuetify.breakpoint.xs) return 'sub-text-color mt-1 mb-0 text-caption'
      return 'sub-text-color mt-1 mb-0 body-2'
    },
    time () {
      if (this.$vuetify.breakpoint.xs) return 'sub-text-color mt-1 text-caption'
      return 'sub-text-color mt-1 body-2'
    },
    chip () {
      if (this.$vuetify.breakpoint.xs) return 'text-caption'
      return ''
    },
    to () {
      return `/shops/${this.shop.id}`
    }
  },
  methods: {
    imageUrl(url) {
      if (!url) {
        return '/images/noimagecool.png'
      }
      return url
    }
  }
}
</script>
<style scoped>
.theme--light.v-sheet--outlined {
  border: 0 none; 
  border-bottom: 2px solid #C4C4C4;
  border-radius: 0;
}
</style>