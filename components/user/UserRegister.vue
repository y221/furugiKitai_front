<template>
	<div class="d-flex justify-space-between text-caption">
		<div class="pa-1">{{ user.created_at }}</div>
		<v-btn
			text
			small
			to="/"
		>
			プロフィールを編集
		</v-btn>
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
			return user.created_at
		}
	}
}
</script>