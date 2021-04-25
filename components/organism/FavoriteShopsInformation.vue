<template>
  <v-main class="main-background-color pb-10 pt-0">
    <v-container>
      <div class="main-wrapper">
        <div :class="mainContent">
          <UserProfileTop 
            :user="user"
            :src="src"
          />
          <UserProfile />
          <v-tabs
            v-model="tab"
            color="accent"
          >
            <v-tab 
              v-for="item in items"
              :key="item.key"
              class="font-weight-bold"
            >
              {{ item.text }}
              <span
                v-if="item.key ==='favoriteShops'"
                class="blue-grey lighten-5 py-1 px-2 ml-1 favorite-count"
              >
                {{ favoriteCount }}
              </span>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab" class="mb-16">
            <v-tab-item key="favoriteShops">
              <div v-for="n in 5" :key="n">
                <ShopItem 
                  :id="n"
                />
              </div>
              <div class="text-center my-6">
                <v-pagination
                  v-model="page"
                  :length="4"
                  circle
                ></v-pagination>
              </div>
            </v-tab-item>
          </v-tabs-items>

        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      user: '古着大好きおじさん',
      src: '/images/shop.jpg',
      tab: null,
      favoriteCount: 30,
      items: {
        favoriteShops: {
          text: 'お気に入り',
          key: 'favoriteShops'
        }
      },
      page: 1
    }
  },
  computed: {
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-2'
      return 'main-content mt-6'
    }
  }
}
</script>
<style>
.favorite-count{
  border-radius: 4px;
}
</style>