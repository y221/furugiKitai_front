<template>
  <div
  >
    <v-btn
      button=''
      :class="btn"
      :width="width"
      :height="height"
      color="secondary"
      depressed
      @click="selectPrefectures()"
    >
      都道府県から探す
    </v-btn>
    <v-btn
      button=''
      :class="btn"
      :width="width"
      :height="height"
      color="secondary"
      depressed
      @click="selectAreas()"
    >
      エリアから探す
    </v-btn>
    <v-dialog v-model="prefectureDialog" max-width="800" scrollable>
      <PrefectureCheckbox
        @closeDialog="closePrefectureDialog"
        @searchShops="searchShops"
        :regions="regions"
        :selectedPrefectureIds.sync="selectedPrefectureIds"
      />
    </v-dialog>
    <v-dialog v-model="areaDialog" max-width="800" scrollable>
      <AreaCheckbox
        @closeDialog="closeAreaDialog"
        @searchShops="searchShops"
        :prefectures="prefectures"
        :selectedAreaIds.sync="selectedAreaIds"
      />
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedPrefectureIds: [],
      selectedAreaIds: [],
      prefectureDialog: false,
      areaDialog: false,
    }
  },
  props: {
    regions: {
      type: Array,
      required: true
    },
    prefectures: {
      type: Array,
      required: true
    },
  },
  methods: {
    selectPrefectures() {
      this.prefectureDialog = true
    },
    selectAreas() {
      this.areaDialog = true
    },
    closePrefectureDialog() {
      this.prefectureDialog = false
    },
    closeAreaDialog() {
      this.areaDialog = false
    },
    searchShops() {
      this.$emit('searchShops')
    },
  },
  computed: {
    width () {
      if (this.$vuetify.breakpoint.xs) return '125'
      return '176'
    },
    height () {
      if (!this.$vuetify.breakpoint.xs) return '52'
    },
    btn () {
      if (this.$vuetify.breakpoint.xs) return 'caption font-weight-bold mt-5 mx-1'
      return 'mt-10 mx-1 font-weight-bold'
    }
  },
  watch: {
    selectedPrefectureIds: function(ids) {
      this.$emit('assignConditionPrefecture', ids)
    },
    selectedAreaIds: function(ids) {
      this.$emit('assignConditionArea', ids)
    },
    deep: true,
    immediate: true
  }
}
</script>