<template>
  <v-card
    flat
    :class="this.$vuetify.breakpoint.xs ? '' : 'mt-12'"
  >
    <p :class="title">写真</p>
    <v-divider></v-divider>
    <v-row :class="this.$vuetify.breakpoint.xs ? 'mt-1' : 'mt-4'">
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="6"
        lg="4"
        md="4"
        sm="4"
      >
        <v-img
          :src="image.src"
          :aspect-ratio="4/3"
          @click="onClickImage(image.src)"
          class="image"
        >
        </v-img> 
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="800">
      <v-card>
        <v-carousel
          hide-delimiters
          :height="this.$vuetify.breakpoint.xs ? '200' : '500' "
        >
          <v-carousel-item
            v-for="(image, index) in images"
            :key="index"
            :src="modalImageSrc"
          >
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        images: [
          { src: '/images/shop.jpg' },
          { src: '/images/shop.jpg' },
          { src: '/images/shop.jpg' },
          { src: '/images/shop.jpg' },
          { src: '/images/shop.jpg' },
        ],
        modalImageSrc: ''
      }
    },
    methods: {
      onClickImage(src) {
        this.modalImageSrc = src
        this.dialog = true
      }
    },
    computed: {
      title () {
        if (this.$vuetify.breakpoint.xs) return 'text-h6 font-weight-bold mb-1'
        return 'text-h5 font-weight-bold'
      },
    }
  }
</script>
<style>
.image {
  cursor: pointer;
}
.image:hover {
	opacity: 0.8 ;
}
</style>