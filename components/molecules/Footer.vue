<template>
  <v-footer color="main_background">
    <v-row
      class="mt-2"
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="button in buttons"
        :to="button.to"
        text
      >
        {{ button.text }}
      </v-btn>
    </v-row>
    <v-col
      class="my-15"
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
      buttons : buttons()
    }
  }
}

const buttons = () => {
  return [
    {
      text: 'フルギキタイとは？',
      to: ''
    },
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