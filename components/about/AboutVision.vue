<template>
	<div>
		<div :class="title" class="pt-10">
			<div>フルギキタイでできること</div>
		</div>
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