<template>
　<v-row
    class='mt-5 mb-15'
    justify='center'
  >
    <div class='my-text-field'>
      <v-text-field
        placeholder='店舗名・キーワード'
        filled
        rounded
      >
      </v-text-field>
    </div>
    <v-btn
      depressed
      large
      color='accent'
      dark
      rounded
      height='56'
    >
      検索
    </v-btn>
  </v-row>
</template>
<style scoped>
.my-text-field {
  width:450px;
}
</style>