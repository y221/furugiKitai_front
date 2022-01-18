<template>
  <div>
    <v-divider></v-divider>
    <v-list-item
      key="address"
    >
      <v-list-item-content>
      　<v-list-item-title
          v-text="this.title"
          :class="titleFont"
        >
        </v-list-item-title>
        <p
          v-text="this.text"
          :class="textFont"
          style="white-space: pre-line;"
        ></p>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    text: String
  },
  computed: {
    titleFont () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold body-2'
      return 'font-weight-bold'
    },
    textFont () {
      if (this.$vuetify.breakpoint.xs) return 'my-0 sub-text-color caption'
      return 'mt-2 sub-text-color body-2'
    },
  }
}
</script>