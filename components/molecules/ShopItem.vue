<template>
  <v-card
    class="py-5"
    outlined
    to="/design"
  >
    <v-row>
      <v-col cols="3">
        <v-img
          src="/images/mainLogoNew.png"
          max-height="150px"
        >
        </v-img>
      </v-col>
      <v-col
        cols="7"
      >
        <p class="text-h5 font-weight-medium main-text-color mb-0">Circus Vintage</p>
        <p class="sub-text-color mt-1 mb-0 body-2">神奈川県鎌倉市極楽寺3丁目6-14</p>
        <p class="sub-text-color mt-1 body-2">
          <span>営業時間</span>
          <span class="ml-1">12:00</span>
          <span class="ml-1">〜</span>
          <span class="ml-1">18:00</span>
        </p>
        <v-chip
          outlined
          small
          active
          color="#887C6C"
          text-color="#887C6C"
          class="mt-n3"
        >
          お気に入り
          <span class="ml-2 accent-color font-weight-bold">117</span>
        </v-chip>
        <v-chip
          outlined
          small
          value="aaa"
          color="#887C6C"
          text-color="#887C6C"
          class="mt-n3"
        >
          クチコミ
          <span class="ml-2 accent-color font-weight-bold">117</span>
        </v-chip>
      </v-col>
      <v-col
        cols="2"
      >
        <v-chip
          outlined
          small
          active
          color="#887C6C"
          text-color="#887C6C"
        >
          レディース・メンズ
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>
<style scoped>
  .theme--light.v-sheet--outlined {
    border: 0 none; 
    border-bottom: 2px solid #C4C4C4;
    border-radius: 0;
  }
  .accent-color {
    color: #F44336;
  }
</style>