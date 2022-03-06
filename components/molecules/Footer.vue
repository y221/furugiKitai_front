<template>
  <v-footer color="main_background">
    <v-row class="mt-2" justify="center" no-gutters>
      <v-btn key="about" to="/about" text :class="btnFooter">
        フルギキタイとは？
      </v-btn>
      <v-btn v-if="$auth.loggedIn" key="shops-new" to="/shops/new" text :class="btnFooter">
        古着屋登録
      </v-btn>
      <v-btn key="terms" to="/terms" text :class="btnFooter">
        利用規約
      </v-btn>
      <v-btn key="privacy" to="/privacy" text :class="btnFooter">
        プライバシーポリシー
      </v-btn>
      <v-btn key="contact" to="/contact" text :class="btnFooter">
        お問い合わせ
      </v-btn>
    </v-row>
    <v-col :class="footer" cols="12" align="center">
      <FurugiKitaiLogo height="129" width="212.5"/>  
    </v-col>
    <v-col class="mt-n16 text-caption" cols="12" align="center">©FURUGI KITAI</v-col>
  </v-footer>
</template>
<script>
export default {
  computed: {
    btnFooter () {
      if (this.$vuetify.breakpoint.xs) return 'btn-footer caption'
      return '';
    },
    footer () {
      if (this.$vuetify.breakpoint.xs) return 'mt-10 mb-15'
      return 'my-15';
    }
  }
}
</script>
<style>
.btn-footer {
  width:50%;
}
</style>