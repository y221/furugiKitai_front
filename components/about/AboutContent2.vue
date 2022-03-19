<template>
	<div class="main-wrapper" align="center">
		<div class="main-content">
			<AboutDetailTop2
				:title='title'
				:explain='explain'
			/>
			<AboutVision
				:title='title'
				:explain='explain'
			/>
			<AboutTeam
				:title='title'
				:explain='explain'
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
			return 'text-h6 mx-15'
		}
	}
}
</script>