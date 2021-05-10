<template>
  <v-main class="main-background-color">
    <v-container>
    <div class="main-wrapper">
      <div :class="mainContent">
        <div class="FurugiKitaiLogo">
          <div class="my-12">
            <v-col align="center">
              <FurugiKitaiLogo
                :height="height"
                :width="width"
              />
            </v-col>
          </div>
        </div> 
        <div class="mt-5">
          <v-col align="center">
            <div class="text-h5 font-weight-bold">
              <p><span class="highlight px-10">古着屋が見つかる検索サイト</span></p>
            </div>
          </v-col>
            <v-col align="left">  
              <div class="my-5 text-body-1">
                <div>このサイトは運営者が古着をもっと知りたいという思いでつくりはじめたサイトです。</div>
                <div>全国の古着屋をデータベース化して、自分のお気に入りの古着屋をもっとたくさん見つけられたらという思い出つくりました。</div>
                <div>このサイトを共有することで古着を好きな人がより古着を楽しめるように、古着を知らない人が古着の良さを知れるようなサイトにしていきたいと考えています。</div>
              </div>
            </v-col>
        </div>
        <div class="mt-5">
          <v-col align="center">
            <div class="text-h5 font-weight-bold">
              <p><span class="highlight px-10">Member</span></p>
            </div>
              <div class="my-15 text-h5">
                <AboutMember />
                <AboutMember />
                <AboutMember />
                <AboutMember />
              </div>
          </v-col>  
        </div>
      </div>
    </div> 
    </v-container>
  </v-main>
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
    },
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-2'
      return 'main-content mt-6'
    }
  }
}
</script>
<style scoped>
.highlight{
  background: linear-gradient(transparent 50%, #e9c400 0%);
  line-height: 1.0em;
}
</style>