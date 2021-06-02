<template>
  <div>
    <FurugiKitaiLogo
      :height="height"
      :width="width"
    />
    <div>
      古着屋を探せる！楽しめる！<br>
      フルギがもっと好きになる古着ポータルサイト
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    height () {
      if (this.$vuetify.breakpoint.xs) return '84.9'
      return '151.7'
    },
    width () {
      if (this.$vuetify.breakpoint.xs) return '140'
      return '250'
    },
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mx-2 my-5 pt-5'
      return 'font-weight-bold text-sm-h4 mx-4 my-10'
    },
    headerText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10'
      return 'text-body-1 mx-4 mb-12'
    },
    footer () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-subtitle-1 mx-2 pt-5'
      return 'font-weight-bold text-sm-h7 mx-4'
    },
    footerText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 mx-2 mb-10 pb-16'
      return 'text-body-1 mx-4 mb-12'      
    }
  }
}
</script>



