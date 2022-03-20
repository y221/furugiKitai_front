<template>
	<div>
		<div :class="title" class="pt-10">
			<div>フルギキタイでできること</div>
		</div>
		<v-col>
		</v-col>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		explain: String
	},
	computed: {
		
	}
}
</script>