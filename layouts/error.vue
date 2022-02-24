<template>
  <div class="fill-height">
    <Header :isTop="false" />
    <v-main class="main-background-color" align="center">
      <v-container>
      <div class="ErrorPage">
        <div class="ErrorPage__content">
          <div class="ErrorPage__inner">
            <template v-if="error.statusCode === 404">

              <v-img
                class="mt-8 mb-12 mx-auto"
                alt="shoot"
                :max-height="this.$vuetify.breakpoint.xs ? '192' : '406'"
                :max-width="this.$vuetify.breakpoint.xs ? '127' : '269'"
                src="/images/404.png"
              >
              </v-img>

              <span>ERROR</span>
              <h2>ページが見つかりません。</h2>
              <p>URLに間違いがないかご確認ください。</p>
              <v-btn
                class="mx-auto my-6 font-weight-bold"
                color="primary"
                depressed
                rounded
                width="200px"
                to="/"
              >
                トップページに戻る
              </v-btn>
            </template>
          </div>
        </div>
      </div>
      </v-container>
    </v-main>
    <Footer />
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>