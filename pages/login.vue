<template>
  <div class="fill-height">
      <v-main class="main-background-color">
        <v-container>
          <Login />
        </v-container>
      </v-main>
  </div>
</template>

<script>
export default {
  created () {
    if (this.$auth.loggedIn) {
      this.$router.push('/');
    } 
  }
}
</script>