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
                :max-height="this.$vuetify.breakpoint.xs ? '225' : '406'"
                :max-width="this.$vuetify.breakpoint.xs ? '149' : '269'"
                src="/images/404.png"
              >
              </v-img>
              <div class="grey--text text--darken-3">
                <div :class="this.$vuetify.breakpoint.xs ? 'text-h2 font-weight-bold' : 'text-h1 font-weight-bold'">404</div>
                <div :class="this.$vuetify.breakpoint.xs ? 'text-h4 font-weight-bold' : 'text-h2 font-weight-bold'">PAGE NOT FOUND</div>
              </div>
              <p :class="this.$vuetify.breakpoint.xs ? 'text-caption mt-4' : 'text-body-1 mt-4'"
              >
                お探しのページは見つかりませんでした。<br v-if="this.$vuetify.breakpoint.xs">移動または削除された可能性があります。
              </p>
              <v-btn
                class="mx-auto my-10 font-weight-bold"
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