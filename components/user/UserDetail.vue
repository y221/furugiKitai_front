<template>
	<div class="main-wrapper">
		<div class="main-content">
			<div :class="this.$vuetify.breakpoint.xs ? 'mx-1 py-2' : 'mx-16'">
				<UserRegister :user="this.user" />
				<UserImage :user="this.user" />
				<div v-for="(content, title) of contents" :key="title">
					<UserData
						:title='title'
						:content='content'
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
				<div :class="this.$vuetify.breakpoint.xs ? 'mt-4' : 'mt-7'">
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
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {},
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
		}
	},
	computed: {
		tabFont () {
			if (this.$vuetify.breakpoint.xs) return 'font-weight-bold caption'
			return 'font-weight-bold'
		},
		contents() {
			return {
				'好きな古着': this.user.favorite ?? '未登録',
				'プロフィール': this.user.profile ?? '未登録',
				'Instagram': this.user.instagram ?? '未登録',
			}
		}
	},
	async created() {
		var userId = this.$route.params.userId;

		if (userId == 'me') {
			this.user = this.$accessor.modules.users.user;
			return;
		}

		await this.$accessor.modules.users.getUser(userId);
		this.user = this.$accessor.modules.users.otherUser;
	}
}
	
</script>