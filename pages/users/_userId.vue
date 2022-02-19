<template>
  <div>
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
}
</script>

<style>
.display {
  min-height: 100vh;
}
</style>