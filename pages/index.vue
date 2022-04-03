<template>
  <div class="fill-height">
    <Header :isTop="true" />
    <FurugiKitaiTop />
    <NewShopsInformation />
    <Footer />
  </div>
</template>
<script lang="ts">
export default {
  head() {
    return {
      titleTemplate: ''
    }
  }
}
</script>
<style>
</style>
