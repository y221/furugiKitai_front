<template>
  <div>
    <v-col align="left">
      <div :class="mainText">
        <div>
          このサイトは運営者が古着をもっと知りたいという思いでつくりはじめたサイトです。
        </div>
        <br>
        <div>
          全国の古着屋をデータベース化して、自分のお気に入りの古着屋をもっとたくさん見つけられたらという思いで作りました。
        </div>
        <br>
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
    mainText () {
      if (this.$vuetify.breakpoint.xs) return 'text-body-2 font-weight-medium pt-14 px-2'
      else if (this.$vuetify.breakpoint.mdAndDown) return 'text-body-1 font-weight-medium pt-14 px-2'
      return 'text-h6 font-weight-medium px-5 mx-15 px-15 pt-8 py-10'
    }
  }
}
</script>



