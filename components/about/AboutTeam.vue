<template>
	<div>
		<div :class="title" class="pt-10">
			<div>フルギキタイ運営チーム</div>
		</div>
		<v-row no-gutters justify="center">
				<v-card elevation="1">
					<v-sheet color="#FBF8F4">
						<div v-for="(avatar, index) in avatars" :key="index">
							<v-avatar :size="avatarSize">
								<img :src="avatar">
							</v-avatar>
						</div>
						<div v-for="(social, index) in socials" :key="index">
							<div v-for="(link, index) in links" :key="index">
								<a :href="links" target="_blank">
									{{ social }}
								</a>
							</div>
						</div>

					</v-sheet>
				</v-card>

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
				avatars:[
					'images/avatar01.jpg',
					'images/avatar02.jpg',
					'images/avatar03.jpg',
					'images/avatar04.jpg'
				],
				socials:[
					'@hidetsugu-o',
					'@y221',
					'@Mashino1123',
					'@theponthface'
				],
				links:[
					'https://github.com/hidetsugu-o',
					'https://github.com/y221',
					'https://github.com/Mashino1123',
					'https://www.instagram.com/theponthface/' 
				]
		}
	}
}
</script>