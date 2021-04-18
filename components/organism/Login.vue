<template>
  <v-main class="main-background-color">
    <v-container>
      <div class="main-wrapper">
        <div class="main-content">
          <v-card
          :width="login_width"
          class="mx-auto mt-10 py-5"
          flat
          align="center"
          border
          >
            <router-link to="/">
              <FurugiKitaiLogo 
                :height="height"
                :width="width"
              />
            </router-link>
            <div class="mt-10">
              <v-btn
                @click="login=true"
                :outlined="!login"
                depressed
                color='secondary'
                width='176'
                class="font-weight-bold"
              >
                ログイン
              </v-btn>
              <v-btn
                @click="login=false"
                :outlined="login"
                depressed
                color='secondary'
                width='176'
                class="font-weight-bold"
              >
                新規登録
              </v-btn>
            </div>
            <div v-show="login">
              <p class="mt-10 mb-3 font-weight-bold">SNSアカウントでログイン</p>
              <SNSLoginButtons />
              <v-col cols="10">
                <v-card-text class="text-left">
                  SNSアカウントが連携していない状態で、各外部サービスでログインを行うと新規登録扱いになります。アカウントを新規作成する場合は、利用規約に同意するものとします。
                </v-card-text>
              </v-col>
            </div>
            <div v-show="!login">
              <p class="mt-10 mb-3 font-weight-bold">SNSアカウントで登録</p>
              <SNSLoginButtons />
              <v-col cols="10">
                <v-card-text class="text-left">
                  新規登録するにあたっては、利用規約に同意するものとします。
                </v-card-text>
              </v-col>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      login: true
    }
  },
  computed: {
    height () {
      if (this.$vuetify.breakpoint.xs) return '129'
      return '258'
    },
    width () {
      if (this.$vuetify.breakpoint.xs) return '212.5'
      return '425'
    },
    login_width () {
      if (this.$vuetify.breakpoint.xs) return '100%'
      return '50%'
    }
  }
}
</script>

<style scoped>
.theme--light.v-sheet--outlined {
  border: 0 none;
}

.main-background-color {
    height: 100vh;
  }
</style>