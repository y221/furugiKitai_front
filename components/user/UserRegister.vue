<template>
	<div class="d-flex justify-space-between text-caption">
		<div class="pa-1">{{registerdDate}} 登録</div>

		<nuxt-link v-if="isLoggedIn" to="edit">
			プロフィールを編集
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		user: {
			type: Object,
			required: true,
		}
	},
	computed: {
		registerdDate () {
			var date = new Date(this.user.created_at);
			return date.toLocaleDateString();
		},
		isLoggedIn () {
		return this.$auth.loggedIn
		}
	}
}
</script>