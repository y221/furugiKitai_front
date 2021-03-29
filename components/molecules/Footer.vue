<template>
  <v-footer color="main_background">
    <v-row
      class="mt-2"
      justify="center"
      no-gutters
    >
      <v-btn
        :key="aboutButton.text"
        :to="aboutButton.to"
        text
        :class="btnAbout"
      >
        {{ aboutButton.text }}
      </v-btn>
      <v-btn
        v-for="button in footerButtons"
        :key="button.text"
        :to="button.to"
        text
        :class="btnFooter"
      >
        {{ button.text }}
      </v-btn>
    </v-row>
    <v-col
      :class="footer"
      cols="12"
      align="center"
    >
    <FurugiKitaiLogo 
      height="129"
      width="212.5"
    />  
    </v-col>
  </v-footer>
</template>
<script>
export default {
  data () {
    return {
      aboutButton: aboutButton(),
      footerButtons: footerButtons()
    }
  },
  computed: {
    btnWidth () {
      if (this.$vuetify.breakpoint.xs) return 'btn-width'
      return '';
    },
    btnAbout () {
      if (this.$vuetify.breakpoint.xs) return 'btn-about caption'
      return '';
    },
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

const aboutButton = () => {
  return {
    text: 'フルギキタイとは？',
    to: ''
  }
}

const footerButtons = () => {
  return [
    {
      text: '古着屋登録',
      to: ''
    },
    {
      text: '利用規約',
      to: ''
    },
    {
      text: 'プライバシーポリシー',
      to: ''
    },
    {
      text: 'お問い合わせ',
      to: ''
    }
  ]
}
</script>
<style>
.btn-about {
  width:100%;
}
.btn-footer {
  width:50%;
}
</style>