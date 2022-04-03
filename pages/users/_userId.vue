<template>
  <div class="fill-height">
    <Header :isTop="false" />
    <v-main class="main-background-color display">
      <v-container>
        <UserDetail />
      </v-container>
    </v-main>
    <Footer />
  </div>
</template>

<script>
export default {
  middleware: 'loginUser',
  head() {
    if (this.$route.params.userId == 'me') {
      return {
        title: 'マイページ'
      }
    }
    return {
      title: 'ユーザ情報'
    }
  }
}
</script>

<style>
.display {
  min-height: 100vh;
}
</style>