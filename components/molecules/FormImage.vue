<template>
  <v-col cols="" sm="6" md="4" class="image-wrapper" style="position:relative;">
    <div>{{ imageName }}</div>
    <img class="image mr-0" :src="image">
    <input
      style="display: none"
      ref="input"
      type="file"
      accept="image/jpeg, image/jpg, image/png"
      @change="selectedImage()"
    >
    <v-btn
      v-if="isImageSelected"
      rounded
      x-small
      fab
      depressed
      color="chip_color delete-btn"
      class="font-weight-bold"
      absolute
      dark
      @click="cancelImage()"
    >✕</v-btn>
    <v-btn
      class="mt-2 font-weight-bold"
      color="secondary"
      depressed
      width="100%"
      @click="selectImage()"
    >画像を選択</v-btn>
  </v-col>
</template>
<script>
const imageDefault = "/images/noimage02.png"
export default {
  data ()　{
    return {
      image: '',
      isImageSelected: false
    }
  },
  props: {
    imageName: {
      type: String,
      required: true
    },
    imagePath: {
      type: String,
      default: ""
    }
  },
  mounted () {
    this.image = imageDefault;
    this.isImageSelected = false;
    if (this.imagePath !== '') {
      this.image = this.imagePath;
      this.isImageSelected = true;
    }
  },
  methods: {
    selectImage() {
      this.$refs.input.click();
    },
    selectedImage() {
      const file = this.$refs.input.files[0]
      if (!file) return;
      this.isImageSelected = !this.isImageSelected;
      if (this.isImageSelected) {
        this.image = window.URL.createObjectURL(file);
      }
    },
    cancelImage() {
      this.image = imageDefault;
      this.isImageSelected = false;
    }
  }
}
</script>
<style>
.image-wrapper {
  padding: 20px;
}
.image {
  object-fit: cover;
  width: 100%;
  height: 250px;
}
.delete-btn {
  index:100;
  top: 46px;
  right: 23px;
}
</style>