<template>
  <div class="fill-height">
    <v-main class="main-background-color">
      <v-container>
        <ShopNewHeader class="mt-10"/>
        <ShopEditForm class="mt-10"/>
      </v-container>
    </v-main>
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