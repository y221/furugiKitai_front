<template>
	<div>
		<Header :isTop="false" />
		<v-main class="main-background-color display">
			<v-container>
				<FurugisDetail />
			</v-container>
		</v-main>
		<Footer />
	</div>
</template>

<style>
.display {
	min-height: 100vh;
}
</style>