<template>
  <div class="main-wrapper">
    <div class="main-content">
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
      <div class="AboutAbout">
        <div class="mt-5">
          <v-col align="center">
          <div class="text-h5 font-weight-bold">
          <p><span class="highlight">　　古着屋が見つかる検索サイト　　</span></p>
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
      </div>
      <div class="AboutConcept">
        <div class="mt-5">
          <v-col align="center">
          <div class="text-h5 font-weight-bold">
          <p><span class="highlight">　　フルギキタイへの想い　　</span></p>
          </div>
          </v-col>
            <v-col align="left">
            <div class="my-5 text-body-1">
              <div>洋服は、僕らが身につけるものの中で、一番日常的で、僕らの気持ちの変化にも敏感なものです。</div>
              <div>そんな洋服、古着を仕事にしている人たちが、好きなことに対して情熱を持って働いている姿を見て、棒らにもなにかできることがないかと考えました。</div>
              <div>それぞれの好きを追い求めて、ぼくたちはフルギキタイを立ち上げました。</div>
            </div>
            </v-col>
        </div>
      </div>
      <div class="AboutMember">
        <div class="mt-5">
        <v-col align="center">
          <div class="text-h5 font-weight-bold">
            <p><span class="highlight">　　Member　　</span></p>
            </div>
            <div class="my-5 text-h5">
              <div class="my-auto">
              <v-avatar
                color="primary"
                size="99"
              ></v-avatar>
              <v-avatar
                color="primary"
                size="99"
              ></v-avatar>
              <v-avatar
                color="primary"
                size="99"
              ></v-avatar>
              <v-avatar
                color="primary"
                size="99"
              ></v-avatar>
              </div>
            </div>
        </v-col>  
        </div>
      </div>
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
<style scoped>
.highlight{
  background: linear-gradient(transparent 50%, #e9c400 0%);
  line-height: 1.0em;
}
</style>