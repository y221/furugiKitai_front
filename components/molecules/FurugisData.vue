<template>
	<div :class="this.$vuetify.breakpoint.xs ? 'text-caption' : 'text-body-2'">	
		<v-card>
			<v-row>
				<v-col
					cols="auto"
					lg="2"
				>
				</v-col>
				<v-col
					cols="auto"
					lg="10">
				</v-col>
			</v-row>
		</v-card>

			
		<ul class="mb-5">
			<li
				v-for="item in items"
				:key="item.title"
				class="d-flex"
			>
				<span
					v-text="item.title"
					class="font-weight-bold d-block"
				></span>
				<span
					v-text="item.text"
					class=""
				></span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		profile: {
			type: Object,
			required: true,
		}
	},

	data () {
		return {
			items: [
				{
					title: '好きな古着',
					text: 'hogehoge'
				},
				{
					title: 'プロフィール',
					text: 'hogehoge'
				},
				{
					title: 'Instagram',
					text: 'hogehoge'
				},
				{
					title: 'リンク',
					text: 'hogehoge'
				},
			]
		}
	}
}
</script>