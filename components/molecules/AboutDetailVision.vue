<template>
  <div>
    <v-row justify="center">
      <div
        v-for="(image, index) in images"
        :key="index"
      >
        <v-sheet
          color="#FBF8F4"
          :height="imageSheetHeight"
          :width="imageSheetWidth"
          class="mb-6"
        >
            <v-avatar
              tile
              class="my-5"
              :size="imageSize"
            >
              <img :src="image">
            </v-avatar>
        </v-sheet>
      </div>
    </v-row>
    <v-row justify="center">
      <div
        v-for="(vision, index) in visions"
        :key="`vision-${index}`"
        :class="visionStyle"
      >
      {{ vision }}
      </div>  
    </v-row>
    <v-row justify="center">
      <div
        v-for="(text, index) in texts"
        :key="`text-${index}`"
        :class="textStyle"
      >
      {{ text }}
      </div>  
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    images: Object,
    visions: String,
    texts: String,
  },
  computed: {
    imageSheetHeight () {
      if (this.$vuetify.breakpoint.mdAndDown) return '170'
      return '180'
    },
    imageSheetWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) return '170'
      return '180'
    },
    imageSize () {
      if (this.$vuetify.breakpoint.mdAndDown) return '130'
      return '140'
    },
    visionStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-h6 font-weight-bold'
      return 'text-h5 font-weight-bold my-1'
    },
    textStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-body-2 mt-2'
      return 'text-body-1 mt-2'
    }
  }
}
</script>


