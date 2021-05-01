<template>
  <div>
    <v-row align="center" class="pb-5">
      <v-col cols="6" sm="4">
        <div>{{ imageName }}</div>
      </v-col>
      <v-col cols="12" sm="8" md="7">
        <v-row align="center" class="justify-center justify-sm-start">
          <v-col style="position:relative;" cols="3">
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
          </v-col>
          <v-col cols="5">
            <v-btn
              class="mt-2 font-weight-bold"
              color="secondary"
              depressed
              width="100%"
              @click="selectImage()"
            >画像を選択</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>
<script>
const imageDefault = "/images/noimage.png"
export default {
  data () {
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
.image {
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.delete-btn {
  top: 20px;
  right: 10px;
}
</style>