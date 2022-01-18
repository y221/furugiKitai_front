<template>
  <div>
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
  created () {
    if (!this.$auth.loggedIn) {
      this.$router.push('/login');
    } 
  }
}
</script>