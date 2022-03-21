<template>
	<div>
		<div :class="title" class="pt-10 mb-4">
			<div>フルギキタイ運営チーム</div>
		</div>
		<v-row justify="center">
			<div v-for="(social, index) in socials" :key="index">
				<v-col cols="12">
				<v-sheet
					elevation="0"
					height=100%
					width=150
					rounded
					color="#FBF8F4"
				>
					<v-col>
						<v-img src="/images/forIcon.png" height=80% widht=80% class="mb-n16"></v-img>
						<v-avatar size="60" class="mt-n9 mr-1 mb-6">
							<img :src="`${ social.avatar }`">
						</v-avatar>
					</v-col>
					<v-col>
						<div class="text-body-2">
						<a :href="`${ social.link }`" target="_blank">
							{{ social.name }}
						</a>
						</div>
					</v-col>
				</v-sheet>
				</v-col>
			</div>
		</v-row>			
	</div>
</template>

<script>
export default {
	props: {
		title: String,
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
					name: '@pmhr18',
					link:'https://github.com/pmhr18'
				}
			]
		}
	}
}
</script>