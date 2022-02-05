<template>
	<v-row class="my-6">
		<v-col
			class="d-flex justify-center"
			cols="12"
			lg="2"
			>
			<v-avatar
				color="red"
				:size="imageSize"
				style="position: relative;"
			>
			</v-avatar>
		</v-col>
		<v-col
			:class="this.$vuetify.breakpoint.xs ? 'd-flex justify-center' : 'd-flex align-center'"
			cols="12"
			lg="10"
		>
			<p class="font-weight-bold">
				ユーザー名持ってくる
			</p>
		</v-col>
	</v-row>
</template>

<script>
export default {
	computed: {
		imageSize () {
			if (this.$vuetify.breakpoint.xs) return '75'
			return '85'
		}
	}
}
</script>