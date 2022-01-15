<template>
	<div :class="this.$vuetify.breakpoint.xs ? 'text-caption' : 'text-body-2'">
		<v-row class="mb-2">
			<v-col
				class="font-weight-bold"
				cols="auto"
				lg="2"
			>
				好きな古着
			</v-col>
			<v-col
				cols="auto"
				lg="10"
			>
				hogehoge
			</v-col>
		</v-row>

		
		
		<div class="font-weight-bold">プロフィール</div>
		<div class="font-weight-bold">Instagram</div>
		<div class="font-weight-bold">リンク</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{
					title: '好きな古着',
					text: ''
				},
				{
					title: '',
					text: ''
				},
				{
					title: '',
					text: ''
				},
				{
					title: '',
					text: ''
				},
			]
		}
	}
}
</script>