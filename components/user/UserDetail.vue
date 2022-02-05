<template>
	<div class="main-wrapper">
		<div class="main-content">
			<div :class="this.$vuetify.breakpoint.xs ? 'mx-1 py-2' : 'mx-16'">
				<UserRegister />
				<UserImage />
				<div v-for="(title, index) of titles" :key="index">
					<UserData
						:index='index'
						:title='title'
					/>
				</div>
					<v-divider
						class="mx-auto"
						:class="this.$vuetify.breakpoint.xs ? 'mb-2 mt-10' : 'mb-2 mt-16'"
					></v-divider>
				<div :class="this.$vuetify.breakpoint.xs ? 'mt-n2 mb-n2' : 'mt-n2 mb-n5'">
					<v-tabs
						v-model="tab"
						color="accent"
					>
						<v-tab
							v-for="item in items"
							:key="item.key"
							:class="tabFont"
						>
							{{ item.text }}
							<span class="blue-grey lighten-5 py-1 px-2 ml-1 review-count">
								{{ item.count }}
							</span>
						</v-tab>
					</v-tabs>
				</div>	
			</div>
		</div>
		<div
			class="main-content"
			:class="this.$vuetify.breakpoint.xs ? 'mt-4' : 'mt-7'"
		>
			<v-tabs-items v-model="tab">
				<v-tab-item key="review">
					<ShopReviews />
				</v-tab-item>
				<v-tab-item key="favorite">
					<ShopReviews />
				</v-tab-item>
			</v-tabs-items>
		</div>		
	</div>
</template>

<script>
export default {
	data() {
		return {
			tab: null,
			items: {
				review: {
					text: 'クチコミ',
					key: 'review',
					count: '123'
				},
				favorite: {
					text: 'お気に入り',
					key: 'favorite',
					count: '456'
				}
			},
			titles:[
				'好きな古着',
				'プロフィール',
				'Instagram',
				'リンク'
			]
		}
	},
	computed: {
		tabFont () {
			if (this.$vuetify.breakpoint.xs) return 'font-weight-bold caption'
			return 'font-weight-bold'
		}
	}
}
	
</script>