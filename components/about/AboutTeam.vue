<template>
	<div>
		<div :class="title" class="pt-10">
			<div>フルギキタイ運営チーム</div>
		</div>
		<v-row no-gutters justify="center" class="mx-10">
			<div v-for="social in socials" :key="social">
				<v-card elevation="10">
					<v-sheet color="#FBF8F4">
						<v-avatar :size="avatarSize">
							<img :src="`${ social.avatar}`">
						</v-avatar>
						<a :href="`${ social.link }`" target="_blank">
							{{ social.name }}
						</a>
					</v-sheet>
				</v-card>
			</div>
		</v-row>			
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		explain: String,

	},
	computed: {
		
	},
	data() {
		return {
			socials:[
				{
					avatar:'images/avatar01.jpg',
					name: '@hidetsugu-o',
					link:'https://github.com/hidetsugu-o'
				},
				{
					avatar:'images/avatar02.jpg',
					name: '@y221',
					link:'https://github.com/y221'
				},
				{
					avatar:'images/avatar03.jpg',
					name: '@Mashino1123',
					link:'https://github.com/Mashino1123'
				},
				{
					avatar:'images/avatar04.jpg',
					name: '@hidetsugu-o',
					link:'https://github.com/pmhr18'
				}
			]
		}
	}
}
</script>