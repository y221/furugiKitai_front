<template>
  <div>
    <v-row :class="formLine">
      <v-col
        cols="auto"
        lg="3"
        class="d-flex align-center"
        :class="imageNameStyle"
      >
        <div>{{ imageName }}</div>
      </v-col>
        <v-col
          cols="12"
          lg="4"
          :align="imagePosition"
        >
          <v-avatar
            :size="imageSize"
            style="position: relative;"
          >
            <v-img :src="image"></v-img>
              <input
                style="display: none"
                ref="input"
                type="file"
                accept="image/jpeg, image/jpg, image/png"
                @change="selectedImage()"
              >
          </v-avatar>
            <v-btn
              v-if="isImageSelected"
              color="chip_color delete-btn"
              class="font-weight-bold mx-n5 mt-n1"
              rounded
              x-small
              fab
              absolute
              depressed
              dark
              @click="cancelImage()"
            >✕</v-btn>
            
        </v-col>
        <v-col
          cols="12"
          lg="4"
          class="d-flex align-center"
        >
          <v-btn
            class="font-weight-bold mx-auto"
            color="secondary"
            depressed
            :width="selectImageSize"
            @click="selectImage()"
          >画像を選択</v-btn>
        </v-col>
    </v-row>
    <v-divider class="mx-auto" :width="dividerWidth"></v-divider>
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
  },
  computed: {
    formLine () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mt-4 mb-4 px-1'
      return 'mx-2 my-2 pt-3 '
    },
    imageNameStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-button font-weight-bold px-2 ml-1'
      return 'ml-3 text-body-2 font-weight-bold'      
    },
    imageSize () {
      if (this.$vuetify.breakpoint.xs) return '75'
      return '85'
    },
    imagePosition () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'center'
      return 'center'
    },
    selectImageSize () {
      if (this.$vuetify.breakpoint.xs) return '233px'
      return '308px'
    },
    dividerWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) return '100%'
      return '95%'
    }
  }
}
</script>