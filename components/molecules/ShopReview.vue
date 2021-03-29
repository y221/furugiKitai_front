<template>
  <v-card
    flat
  >
    <v-row>
      <v-col
        cols="3"
        lg="1"
        md="1"
        sm="1"
      >
        <v-avatar size="62px">
          <v-img
            :alt="user"
            :src="src"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-col
        cols="7"
        lg="11"
        md="11"
        sm="11"
      >
        <p class="h5 font-weight-bold mb-0">{{ user }}</p>
        <p class="sub-text-color mb-2">{{ date }}</p>
        <p class="main-text-color body-2" style="white-space: pre-line;">{{ text }}</p>
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
  },
}
</script>