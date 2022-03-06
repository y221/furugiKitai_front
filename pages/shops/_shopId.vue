<template>
  <div class="fill-height">
    <Header :isTop="false" />
    <ShopInformation v-if="display" />
    <NuxtChild />
    <Footer />
  </div>
</template>
<script>
export default {
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