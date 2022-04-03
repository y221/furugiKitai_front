<template>
  <div class="fill-height">
    <Header :isTop="false" />
    <v-main class="main-background-color">
      <v-container>
        <ShopInformation v-if="display" />
        <NuxtChild />
      </v-container>
    </v-main>
    <Footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: '古着屋情報'
    }
  },
  data: () => ({
    display: true
  }),
  mounted () {
    this.display = this.$route.name === 'shops-shopId';
  },
  beforeUpdate () {
    this.display = this.$route.name === 'shops-shopId';
  }
}
</script>