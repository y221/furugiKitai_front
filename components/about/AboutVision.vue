<template>
	<div>
		<div :class="title" class="pt-10 mb-8">
			<div>フルギキタイでできること</div>
		</div>
		<v-row justify="center" class="mb-2">
			<v-col cols="8">
				<v-row class="mb-2">
					<v-col
						cols="12"
						md="5"
						:align="align"
					>
						<v-img src="images/vision01.png" :height="height" :width="width"></v-img>
					</v-col>
					<v-col
						:class="textMargin"
						align="left"
						cols="12"
						md="7"
					>
						<div :class="headline">
							１．古着屋情報を検索できる
						</div>
						<div :class="contents">
							古着屋情報に特化したデータベース。<br>キーワード、都道府県・エリアで検索することができます。
						</div>
					</v-col>
				</v-row>
				<v-row class="mb-2">
					<v-col
						v-if="$vuetify.breakpoint.smAndDown"
						cols="12"
						md="5"
						:align="align"
					>
						<v-img src="images/vision02.png" :height="height" :width="width"></v-img>
					</v-col>
					<v-col
						:class="textMargin"
						align="left"
						cols="12"
						md="7"
					>
						<div :class="headline">
							２．古着の好きを共有できる
						</div>
						<div :class="contents">
							ユーザ登録することで、お気に入りの古着屋をチェックしておくことができます。<br>自分の好きを共有しましょう！
						</div>
					</v-col>
					<v-col
						v-if="$vuetify.breakpoint.mdAndUp"
						cols="12"
						md="5"
						align="right"
					>
						<v-img src="images/vision02.png" height="200" width="200"></v-img>
					</v-col>
				</v-row>
				<v-row class="mb-2">
					<v-col
						cols="12"
						md="5"
						:align="align"
					>
						<v-img src="images/vision03.png" :height="height" :width="width"></v-img>
					</v-col>
					<v-col
						:class="textMargin"
						align="left"
						cols="12"
						md="7"
					>
						<div :class="headline">
							３．古着をもっと楽しめる
						</div>
						<div :class="contents">
							古着の好きは人それぞれ。<br>フルギキタイを使ってお気に入りの古着屋を見つけよう！
						</div>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	props: {
		title: String
	},
	computed: {
		height () {
			if (this.$vuetify.breakpoint.xs) return '150'
			return '200'
		},
		width () {
			if (this.$vuetify.breakpoint.xs) return '150'
			return '200'
		},
		align () {
			if (this.$vuetify.breakpoint.smAndDown) return 'center'
			return 'left'
		},
		headline () {
			if (this.$vuetify.breakpoint.xs) return 'text-body-2 font-weight-bold ml-n1 mb-3'
			return 'text-h6 mx-15 font-weight-bold ml-n1 mb-3'
		},
		textMargin () {
			if (this.$vuetify.breakpoint.smAndDown) return ''
			return 'mt-12'
		},
		contents	() {
			if (this.$vuetify.breakpoint.xs) return 'text-caption'
			return 'text-body-2'
		}
	}
}
</script>