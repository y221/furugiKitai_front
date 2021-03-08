<template>
  <v-btn-toggle
    background-color='#9BD4CE'
    color='#fff'
    mandatory
    dense
    rounded
    borderless
  >
    <v-btn
      text
      color='#fff'
      width='160'
    >
      キーワードから探す
    </v-btn>
    <v-btn
      text
      color='#fff'
      width='160'
    >
      都道府県から探す
    </v-btn>
    <v-btn
      text
      color='#fff'
      width='160'
    >
      地図から探す
    </v-btn>
  </v-btn-toggle>
</template>
<script>
</script>
<style scoped>
/* 変な色が重なるので上書き */
.theme--light.v-btn.v-btn--has-bg {
  background-color: transparent;
}

</style>