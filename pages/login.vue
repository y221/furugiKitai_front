<template>
  <div>
      <v-main class="main-background-color display">
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
<style>
.display {
  min-height: 100vh;
}
</style>