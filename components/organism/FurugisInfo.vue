<template>
	<div class="main-wrapper">
		<div class="main-content">
			<div :class="this.$vuetify.breakpoint.xs ? 'mx-1 py-2' : 'mx-16'">
				<FurugisRegister />
				<FurugisAvatar />
				<div v-for="profile in profiles">
					<FurugisData 
						:profile="profile"
					/>
				</div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		profile: []
	})

}
</script>