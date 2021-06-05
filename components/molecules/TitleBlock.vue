<template>
  <div v-if="this.$vuetify.breakpoint.xs">
    <v-sheet
      color="secondary"
      height="13"
      rounded
      width="13"
    ></v-sheet>
  </div>
  <div v-else>
    <v-sheet
      class="mr-2"
      color="secondary"
      height="18"
      rounded
      width="18"
    ></v-sheet>
  </div>
</template>