<template>
	<div>
		<div :class="title" class="pt-10">
			<div>誰でも古着が楽しめる！</div>
			<div>お気に入りの古着屋を検索できる<br v-if="this.$vuetify.breakpoint.xs">古着屋ポータルサイト</div>
		</div>
		<FurugiKitaiLogo
			:height="height"
			:width="width"
		/>
    <v-col align="left" md="10">
      <div :class="explain">
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
	props: {
		title: String,
		explain: String
	},
	computed: {
    height () {
      if (this.$vuetify.breakpoint.xs) return '250'
      return '350'
    },
    width () {
      if (this.$vuetify.breakpoint.xs) return '250'
      return '350'
    },
	}
}
</script>