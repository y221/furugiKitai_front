<template>
  <v-card outlined>
    <v-responsive 
      width="500"
      :aspect-ratio="4/3"
    > 
      <div v-show="this.isMap">
        <div :class="this.$vuetify.breakpoint.xs ? 'map-responsive' : 'map'" ref="googleMap" />
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
      const latLng = {
          lat: this.latitude,
          lng: this.longitude
        }
      const mapConfig = {
        center: latLng,
        zoom: 17
      }
      const map = new this.google.maps.Map(this.$refs.googleMap, mapConfig);
      new this.google.maps.Marker({ 
        position: latLng,
        map: map
      });
    }
  }
}
</script>

<style scoped>
.map {
  height: 372px;
}
.map-responsive {
  height: 230px;
}
</style>