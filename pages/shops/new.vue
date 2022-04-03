<template>
  <div class="fill-height">
    <Header :isTop="false" />
    <v-main class="main-background-color">
      <v-container>
        <ShopNewHeader />
        <ShopNewForm />
      </v-container>
    </v-main>
    <Footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: '古着屋登録'
    }
  },
  created () {
    if (!this.$auth.loggedIn) {
      this.$router.push('/login');
    } 
  }
}
</script>