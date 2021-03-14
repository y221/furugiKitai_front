<template>
  <v-btn-toggle
    class='mt-10'
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
      width='176'
    >
      ログイン
    </v-btn>
    <v-btn
      text
      color='#fff'
      width='176'
    >
      新規登録
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