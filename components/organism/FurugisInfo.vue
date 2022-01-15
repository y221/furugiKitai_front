<template>
	<div class="main-wrapper">
		<div class="main-content">
			<div :class="this.$vuetify.breakpoint.xs ? 'mx-1 py-2' : 'mx-16'" class="my-6">
				<FurugisRegister />
				<FurugisAvatar />
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		/*
		imageSize () {
      if (this.$vuetify.breakpoint.xs) return '75'
      return '85'
    }
		*/
	}
}
</script>