<template>
  <div>

      <FurugiKitaiLogo class="mt-10"
        :height="height"
        :width="width"
      />

    <div :class="subTitle">
      古着屋を探せる！楽しめる！<br>
      フルギがもっと好きになる古着ポータルサイト
    </div>
    <v-col align="left">
      <div :class="mainText">
        <div>
          このサイトは運営者が古着をもっと知りたいという思いでつくりはじめたサイトです。
        </div>
        <div>
          全国の古着屋をデータベース化して、自分のお気に入りの古着屋をもっとたくさん見つけられたらという思いで作りました。
        </div>
        <div>
          このサイトを共有することで古着を好きな人がより古着を楽しめるように、古着を知らない人が古着の良さを知れるようなサイトにしていきたいと考えています。
        </div>
      </div>
    </v-col>
  </div>
</template>

<script>
export default {
  computed: {
    height () {
      if (this.$vuetify.breakpoint.xs) return '84.9'
      return '200'
    },
    width () {
      if (this.$vuetify.breakpoint.xs) return '140'
      return '329'
    },
    subTitle () {
      if (this.$vuetify.breakpoint.xs) return 'primary--text text-h5 font-weight-bold'
      return 'primary--text text-h5 font-weight-bold mt-10'
    },
    mainText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-1 mx-15'
      return 'text-h6 px-5 mx-15 px-15 pt-8'
    }
  }
}
</script>



