<template>
  <v-card outlined>
    <v-responsive 
      width="500"
      :aspect-ratio="4/3"
    > 
      <div v-show="this.isMap">
        <div class="map" ref="googleMap" />
      </div>
      <v-img
        v-show="this.noMap"
        width="500"
        :aspect-ratio="4/3"
        src='/images/noMap.png'
      >
      </v-img>
    </v-responsive>
  </v-card>
</template>
<script>
import GoogleMapsApiLoader from 'google-maps-api-loader';

export default {
  props: {
    latitude: [Number, String],
    longitude: [Number, String]
  },
  data:() => ({
    google: null,
    isMap: false,
    noMap: false
  }),
  created() {
    this.$watch(function() {
      return [this.latitude, this.longitude]
    }, async function() {
      if (!this.latitude || !this.longitude) {
        this.noMap = true;
        return;
      }
      this.google = await GoogleMapsApiLoader({
        apiKey: this.$config.googleApiKey
      });
      this.isMap = true;
      this.initializeMap();
    })
  },
  methods: {
    initializeMap() {
      const mapConfig = {
        center: {
          lat: this.latitude,
          lng: this.longitude
        },
        zoom: 17
      }
      new this.google.maps.Map(this.$refs.googleMap, mapConfig);
    }
  }
}
</script>

<style scoped>
.map {
  height: 372px;
}
</style>