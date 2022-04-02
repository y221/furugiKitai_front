<template>
  <div class="fill-height">
    <Header :isTop="false" />
    <v-main class="main-background-color">
      <v-container>
        <ContactHeader />
        <ContactForm />
      </v-container>
      <Footer />
    </v-main>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'お問い合わせ'
    }
  }
}
</script>