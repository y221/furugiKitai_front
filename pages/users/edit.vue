<template>
  <div class="fill-height">
    <Header :isTop="false" />
    <v-main class="main-background-color">
      <v-container>
        <UserEditForm />
      </v-container>
    </v-main>
    <Footer />
  </div>
</template>

<script>
export default {
  middleware: 'checkLoggedIn'
}
</script>