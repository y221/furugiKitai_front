<template>
  <div class="fill-height">
    <Header :isTop="false" />
      <v-main class="main-background-color">
        <v-container>
          <AboutContent />
        </v-container>
      </v-main>
    <Footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'フルギキタイとは？'
    }
  }
}
</script>