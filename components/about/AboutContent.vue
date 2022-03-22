<template>
	<div class="main-wrapper" align="center">
		<div class="main-content">
			<AboutTop
				:title='title'
				:explain='explain'
				class="mb-10"
			/>
			<AboutVision
				:title='title'
				class="mb-10"
			/>
			<AboutTeam
				:title='title'
				:explain='explain'
				class="pb-10"
			/>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		title () {
			if (this.$vuetify.breakpoint.xs) return 'text-subtitle-1 font-weight-bold'
			return 'text-h5 font-weight-bold'
		},
		explain () {
			if (this.$vuetify.breakpoint.xs) return 'text-body-2'
			return 'text-h6'
		}
	}
}
</script>