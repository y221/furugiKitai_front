<template>
	<div :class="this.$vuetify.breakpoint.xs ? 'text-caption' : 'text-body-2'">	
		<v-card flat>
			<v-row>
				<v-col
					class="font-weight-bold"
					:class="this.$vuetify.breakpoint.xs ? 'pl-4' : 'pl-7'"
					cols="4"
					lg="2"
				>
					{{ title }}
				</v-col>
				<v-col
					cols="8"
					lg="10"
				>
					<a v-if="isInstaUrl" :href="content" target="_blank" rel="noopener noreferrer">
						{{ content }}
					</a>
					<p v-else>
						{{ content }}
					</p>
				</v-col>
			</v-row>
		</v-card>
			
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		content: String
	},
	computed: {
		isInstaUrl() {
			return this.title == "Instagram" && this.content != '未登録';
		}
	}
}
</script>