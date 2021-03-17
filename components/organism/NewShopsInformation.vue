<template>
  <v-main class="main-background-color pb-10">
    <v-container>
        <div class="main-wrapper">
          <span class="text-h4 font-weight-bold">新着古着屋</span>
          <span class="text-body1 ml-5">みんなでつくるデータベース。情報は誰でも登録することができます。</span>
          <div class="main-content mt-6 ">
            <div v-for="n in 5">
              <ShopItem />
            </div>
            <v-col align="center">
              <v-btn
                class="mx-auto mt-6"
          　    color="primary"
                depressed
                rounded
                width="200px"
              >
                もっと見る
              </v-btn>
            </v-col>
          </div>
        </div>
    </v-container>
  </v-main>
</template>