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
          <div class="text-h5 font-weight-bold">古着屋が見つかる検索サイト</div>
            <div class="my-10">
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
          <div class="text-h5 font-weight-bold">フルギキタイへの想い</div>
            <div class="my-10">
              <div>このサイトは運営者が古着をもっと知りたいという思いでつくりはじめたサイトです。</div>
              <div>全国の古着屋をデータベース化して、自分のお気に入りの古着屋をもっとたくさん見つけられたらという思い出つくりました。</div>
              <div>このサイトを共有することで古着を好きな人がより古着を楽しめるように、古着を知らない人が古着の良さを知れるようなサイトにしていきたいと考えています。</div>
            </div>
        </v-col> 
        </div>
      </div>
      <div class="AboutMember">
        <div class="mt-5">
        <v-col align="center">
          <div class="text-h5 font-weight-bold">Member</div>
            <div class="my-10">
              <div>このサイトは運営者が古着をもっと知りたいという思いでつくりはじめたサイトです。</div>
              <div>全国の古着屋をデータベース化して、自分のお気に入りの古着屋をもっとたくさん見つけられたらという思い出つくりました。</div>
              <div>このサイトを共有することで古着を好きな人がより古着を楽しめるように、古着を知らない人が古着の良さを知れるようなサイトにしていきたいと考えています。</div>
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
