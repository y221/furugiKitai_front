<template>
  <v-card
    flat
    class="mt-12"
  >
    <p class="text-h5 font-weight-bold">写真</p>
    <v-divider></v-divider>
    <v-row class="mt-4">
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="4"
        lg="4"
        md="4"
        sm="4"
      >
        <v-img
          :src="image.src"
          @click="onClickImage(image.src)"
          class="image"
        >
        </v-img> 
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-carousel hide-delimiters>
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