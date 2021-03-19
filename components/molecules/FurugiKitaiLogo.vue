<template>
  <v-img
    alt="フルギキタイ"
    :height="height"
    :width="width"
    src="/images/mainLogoNew.png"
  >
  </v-img>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  }
}
</script>