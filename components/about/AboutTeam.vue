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
						<v-img src="/images/forIcon.png" height=100% widht=100% class="d-inline-block mb-n16"></v-img>
						<v-img :src="`${ social.avatar }`" height=70% width=70% class="d-inline-block mt-n14 mr-2 "></v-img>
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
	data() {
		return {
			socials:[
				{
					avatar:'images/avatar01.png',
					name: '@hidetsugu-o',
					link:'https://github.com/hidetsugu-o'
				},
				{
					avatar:'images/avatar02.png',
					name: '@y221',
					link:'https://github.com/y221'
				},
				{
					avatar:'images/avatar03.png',
					name: '@Mashino1123',
					link:'https://github.com/Mashino1123'
				},
				{
					avatar:'images/avatar04.png',
					name: '@pmhr18',
					link:'https://github.com/pmhr18'
				}
			]
		}
	}
}
</script>