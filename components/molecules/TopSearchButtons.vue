<template>
  <div
  >
    <v-btn
      v-for="button in buttons"
      :key="button.text"
      :button="button.to"
      :class="btn"
      :width="width"
      :height="height"
      color="secondary"
      depressed
    >
      {{ button.text }}
    </v-btn>
  </div>
</template>
<script>
export default {
  data () {
    return {
      buttons : buttons()
    }
  },
  computed: {
    width () {
      if (this.$vuetify.breakpoint.xs) return '125'
      return '176'
    },
    height () {
      if (!this.$vuetify.breakpoint.xs) return '52'
    },
    btn () {
      if (this.$vuetify.breakpoint.xs) return 'caption font-weight-bold mt-5 mx-1'
      return 'mt-10 mx-1 font-weight-bold'
    }
  }
}

const buttons = () => {
  return [
    {
      text: '都道府県から探す',
      to: ''
    },
    {
      text: 'エリアから探す',
      to: ''
    }
  ]
}
</script>