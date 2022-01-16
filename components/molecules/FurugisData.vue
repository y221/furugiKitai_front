<template>
	<div :class="this.$vuetify.breakpoint.xs ? 'text-caption' : 'text-body-2'">	
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