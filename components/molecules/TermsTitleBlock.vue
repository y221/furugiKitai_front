<template>
  <div v-if="this.$vuetify.breakpoint.xs">
    <v-sheet
      color="#9BD4CE"
      height="13"
      rounded
      width="13"
    ></v-sheet>
  </div>
  <div v-else>
    <v-sheet
      class="mr-2"
      color="#9BD4CE"
      height="18"
      rounded
      width="18"
    ></v-sheet>
  </div>
</template>