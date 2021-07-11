<template>
  <v-sheet
    color="accent"
    rounded
    height="24"
    width="48"
    v-if="required"
  >
    <div class="white--text">
      必須
    </div>
  </v-sheet>  
</template>