<template>
      <div class="main-wrapper">
        <div class="FurugiKitaiLogo">
          <v-col align="center">
            <FurugiKitaiLogo
              :height="height"
              :width="width"
            />
          </v-col>
        </div> 
        <div class="AboutFirst">
          <v-col align="center">
          <div class="text-h5 font-weight-bold">古着屋が見つかる検索サイト</div>
          <div class="mt-5">
            <div>このサイトは運営者が古着をもっと知りたいという思いでつくりはじめたサイトです。</div>
            <div>全国の古着屋をデータベース化して、自分のお気に入りの古着屋をもっとたくさん見つけられたらという思い出つくりました。</div>
            <div>このサイトを共有することで古着を好きな人がより古着を楽しめるように、古着を知らない人が古着の良さを知れるようなサイトにしていきたいと考えています。</div>
          </div>
          </v-col>  
        </div>
      </div> 
</template>
<script>
export default {
  computed: {
    height () {
      if (this.$vuetify.breakpoint.xs) return '129'
      return '258'
    },
    width () {
      if (this.$vuetify.breakpoint.xs) return '212.5'
      return '425'
    }
  }
}
</script>
