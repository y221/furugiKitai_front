<template>
  <div>
    <Header :isTop="false" />
    <v-main class="main-background-color">
      <v-container>
        <UserNewForm />
      </v-container>
    </v-main>
    <Footer />
  </div>
</template>
<script>
export default {
  middleware: 'registerUser'
}
</script>