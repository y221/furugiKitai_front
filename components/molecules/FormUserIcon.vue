<template>
  <div>
    <v-row :class="formLine">
      <v-col
        cols="auto"
        lg="3"
        class="d-flex align-center font-weight-bold"
        :class="imageNameText"
      >
        <div>{{ imageName }}</div>
      </v-col>
        <v-col
          cols="12"
          lg="4"
          :align="this.$vuetify.breakpoint.xs ? 'center' : ''"
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
            width="233px"
            @click="selectImage()"
          >画像を選択</v-btn>
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
  },
  computed: {
    formLine () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mb-4'
      return 'my-2 pt-3'
    },
    imageNameText () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-button px-2 ml-1'
      return 'text-body-2'
    },
    imageSize () {
      if (this.$vuetify.breakpoint.xs) return '75'
      return '85'
    },
  }
}
</script>