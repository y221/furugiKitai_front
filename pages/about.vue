<template>
  <div>
    <Header :isTop="false" />
    <v-main class="main-background-color">
      <v-container>
        <AboutHeader class="mt-10"/>
      </v-container>
    </v-main>
    <NuxtChild />
    <Footer />
  </div>
</template>