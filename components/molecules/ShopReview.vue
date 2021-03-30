<template>
  <v-card
    flat
  >
    <v-row>
      <v-col
        cols="2"
        lg="1"
        md="1"
        sm="1"
      >
        <v-avatar :size="avater">
          <v-img
            :alt="user"
            :src="src"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-col
        cols="9"
        lg="11"
        md="11"
        sm="11"
      >
        <p :class="userText">{{ user }}</p>
        <p :class="dateText">{{ date }}</p>
        <p :class="reviewText" style="white-space: pre-line;">{{ text }}</p>
        <v-row class="ml-1 mt-2">
          <div>
            <fa :icon="heart" />
            <span>12</span>
          </div>
          <div>
            <fa :icon="comment" class="ml-4" />
            <span>0</span>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    comment () {
      return faComment
    },
    heart () {
      return faHeart
    },
    avater () {
      if (this.$vuetify.breakpoint.xs) return '36'
      return '62'
    },
    userText () {
      if (this.$vuetify.breakpoint.xs) return 'h6 font-weight-bold mb-0'
      return 'h5 font-weight-bold mb-0'
    },
    dateText () {
      if (this.$vuetify.breakpoint.xs) return 'sub-text-color mb-2 caption'
      return 'sub-text-color mb-2'
    },
    reviewText () {
      if (this.$vuetify.breakpoint.xs) return 'main-text-color caption'
      return 'main-text-color body-2'
    }
  },
}
</script>