<template>
  <v-main class="main-background-color">
    <v-container>
      <div class="main-wrapper">
        <v-card
        class="mx-auto mt-10 py-10"
        flat
        max-width="640"
        align="center"
        >
          <FurugiKitaiLogo />
          <LoginButtons />
          <p class="mt-10 mb-3">SNSアカウントで登録</p>
          <SNSLoginButtons />
          <v-card-text>
            新規登録するにあたっては、利用規約に同意するものとします。
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>

<style scoped>
.theme--light.v-sheet--outlined {
  border: 0 none;
}

.main-background-color {
    height: 100vh;
  }
</style>