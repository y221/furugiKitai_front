<template>
	<div class="main-wrapper">
		<div class="main-content">
			<div :class="this.$vuetify.breakpoint.xs ? 'mx-1 py-2' : 'mx-16'">
				<FurugisRegister />
				<FurugisAvatar />
				<div v-for="(title, index) of titles" :key="index">
				<FurugisData
					:index='index'
					:title='title'
				/>
				</div>
				<v-divider
					class="mx-auto"
					:class="this.$vuetify.breakpoint.xs ? 'mb-2 mt-10' : 'mb-2 mt-16'"
				></v-divider>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				titles:[
					'好きな古着',
					'プロフィール',
					'Instagram',
					'リンク'
				]
			}
		}
	}
</script>