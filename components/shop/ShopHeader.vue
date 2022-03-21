<template>
  <div>
    <v-row>
    <p class="ml-3 main-text-color" :class="shopName">{{ name }}</p>
    <v-chip
      outlined
      small
      active
      color="chip_color"
      text-color="chip_color"
      class="mb-4 mr-4 mt-4 ml-auto"
      :to="to"
      v-if="this.$auth.loggedIn"
    >
      情報修正
    </v-chip>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="6"
      >
        <p :class="this.$vuetify.breakpoint.xs ? 'sub-text-color caption mb-0' : 'sub-text-color'">
          {{ gender }}
        </p>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="6"
        :align="this.$vuetify.breakpoint.xs ? 'start' : 'end'"
        :class="this.$vuetify.breakpoint.xs ? 'pt-0' : '' "
        v-if="this.$auth.loggedIn"
      >
        <v-btn
          depressed
          color="primary"
          :outlined="!isUserShopLikeOn"
          :class="btn"
          @click="toggleShopLike"
        >
          <fa :icon="check" />
          お気に入り {{ likeCount }}
        </v-btn>
        <v-btn
          depressed
          color="secondary"
          :class="btn"
        >
          クチコミ投稿
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default {
  data: () => ({
    shopId: '',
    likeCount: 0,
    isUserShopLikeOn: false
  }),
  props: {
    name: String,
    gender: String,
    shop: Object
  },
  async mounted() {
    this.shopId = this.$route.params.shopId;
    if (this.$auth.loggedIn) {
      const response = await this.$axios.$get(`/api/users/shop/like`, {
        params: {
          shopId: this.shopId
        }
      });
      this.isUserShopLikeOn = response.isUserShopLikeOn;
    }
  },
  computed: {
    check () {
      return faCheck
    },
    shopName () {
      if (this.$vuetify.breakpoint.xs) return 'text-h5 font-weight-medium pt-3 mb-0'
      return 'text-h4 font-weight-medium'
    },
    btn () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold caption'
      return 'font-weight-bold'
    },
    to () {
      return `/shops/${this.shopId}/edit`
    }
  },
  methods: {
    async toggleShopLike () {
      let formData = new FormData;
      formData.append('shopId', this.shopId);
      const response = await this.$accessor.modules.shopLikes.toggleShopLike(formData);
      if (!response.errors) {
        this.isUserShopLikeOn = !this.isUserShopLikeOn;
        this.likeCount = response.count;
      } else {
        console.log(response.errors);
      }
    }
  },
  watch: {
    shop: {
      handler: function() {
        this.likeCount = this.shop.likeCount
      },
      deep: true,
      immediate: true
    }
  }
}
</script>