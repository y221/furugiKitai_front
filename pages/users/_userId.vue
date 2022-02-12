<template>
  <div>
    <Header :isTop="false" />
    {{user}}
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
  data: () => ({
    user: []
  }),
  async created() {
    console.log(this.$route.params.userId)
    const response = await this.$axios.get(`/api/api/users/`+this.$route.params.userId);
    this.user = response.data;
  }
}
</script>

<style>
.display {
  min-height: 100vh;
}
</style>