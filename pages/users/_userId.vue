<template>
  <div>
    <Header :isTop="false" />
    {{user}}
    <v-main class="main-background-color display">
      <v-container>
        <UserDetail :user="user" />
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
    var userId = this.$route.params.userId;
    if (userId == 'my') {
      userId = this.$accessor.modules.users.user.id;
    }
    console.log(userId);

    await this.$axios.get(`/api/api/users/${userId}`)
    .then(response => (this.user = response.data))
    .catch(error => console.log(error))

  }
}
</script>

<style>
.display {
  min-height: 100vh;
}
</style>