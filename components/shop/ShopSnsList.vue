<template>
  <div>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
      　<v-list-item-title
          v-text="this.title"
          :class="titleFont"
        >
        </v-list-item-title>
        <a v-if="this.instagram" :href="this.instagram" target="_blank" :class="this.$vuetify.breakpoint.xs ? 'my-0' : 'mt-2'">
            <fa :icon="faInstagram" size="2x" class="instagram"/>
        </a>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
export default {
  props: {
    title: String,
    instagram: String
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
    faInstagram() {
      return faInstagram
    },
  }
}
</script>
<style>
.instagram:hover {
  opacity:0.8;
  transition: .5s;/*ゆっくり変化*/
}
.instagram {
  color: #FFF;
  background: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  padding:0 3px;
  border-radius: 5px;
}
</style>