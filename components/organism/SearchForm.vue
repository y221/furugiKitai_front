<template>
  <v-main :class="this.$vuetify.breakpoint.xs ? 'main-background-color pt-0' : 'main-background-color pb-10 pt-0'">
    <v-container>
      <div class="main-wrapper">
        <div :class="mainContent">
          <v-row
            :class="this.$vuetify.breakpoint.xs ? 'mt-2' : 'mt-5'"
            justify="center"
          >
            <v-text-field
              :placeholder="this.$vuetify.breakpoint.xs ? 'キーワードを入力' : 'キーワードを入力　店舗名、エリアなど' "
              filled
              color="grey"
              :dense="this.$vuetify.breakpoint.xs"
              :class="this.$vuetify.breakpoint.xs ? 'mx-2' : '' "
            >
            </v-text-field>
            <v-btn
              button=""
              :class="prefectureBtn"
              :width="prefectureWidth"
              :height="prefectureHeight"
              color="secondary"
              depressed
              outlined
              @click="selectPrefectures()"
            >
              <fa :class="this.$vuetify.breakpoint.xs ? 'mr-1 body-2' : 'text-h5 mr-1 mb-1'" :icon="plusCircle" />
              都道府県を選択
            </v-btn>
            <v-btn
              button=""
              :class="prefectureBtn"
              :width="prefectureWidth"
              :height="prefectureHeight"
              color="secondary"
              depressed
              outlined
              @click="selectPrefectures()"
            >
              <fa :class="this.$vuetify.breakpoint.xs ? 'mr-1 body-2' : 'text-h5 mr-1 mb-1'" :icon="plusCircle" />
              エリアを選択
            </v-btn>
          </v-row>
          <v-row :class="this.$vuetify.breakpoint.xs ? '' : 'mt-n5 mb-2'">
            <v-chip
              v-for="chip in prefectureSelected"
              :key="chip.id"
              close
              color="chip_color"
              text-color="white"
              :class="$vuetify.breakpoint.xs ? 'ml-2 mt-2 caption' : 'ml-1 mt-1'"
              @click:close="closeChip(chip.id)"
            >
              {{ chip.prefecture }}
            </v-chip>
          </v-row>
          <v-row :class="this.$vuetify.breakpoint.xs ? 'mt-4' : 'mt-0' ">
            <v-checkbox
              v-model="genderSelected"
              :class="this.$vuetify.breakpoint.xs ? 'ml-4 mt-0' : 'ml-2 mt-0'"
              label="レディース"
              value="ladies"
            ></v-checkbox>
            <v-checkbox
              v-model="genderSelected"
              class="ml-4 mt-0"
              label="メンズ"
              value="mens"
            ></v-checkbox>
            <v-btn
              :class="this.$vuetify.breakpoint.xs ? 'mx-auto font-weight-bold mt-n4' : 'ml-auto font-weight-bold'"
              color="primary"
              depressed
              rounded
              :width="this.$vuetify.breakpoint.xs ? '95%' : '176px'"
              @click="searchShops"
            >
              検索
            </v-btn>
          </v-row>
        </div>
      </div>
    </v-container>
    <v-dialog v-model="dialog" max-width="800" scrollable>
      <PrefectureCheckbox
        @closeDialog="closeDialog"
        @searchShops="searchShops"
        :regions="regions"
        :selectedPrefectureIds.sync="selectedPrefectureIds"
      />
    </v-dialog>
  </v-main>
</template>
<script>
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
export default {
  data () {
    return {
      genderSelected: [],
      selectedPrefectureIds: [],
      dialog: false,
    }
  },
  props: {
    regions: {
      type: Array,
      required: true
    },
  },
  methods: {
    selectPrefectures() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    closeChip(targetId) {
      this.selectedPrefectureIds = this.selectedPrefectureIds.filter(id => id !== targetId)
    },
    searchShops() {
      this.$emit('searchShops')
    },
  },
  computed: {
    searchMap () {
      if (this.$vuetify.breakpoint.xs) return 'mr-1 mt-2 caption'
      return 'mr-1'
    },
    search () {
      return faSearch
    },
    plusCircle () {
      return faPlusCircle
    },
    height () {
      if (this.$vuetify.breakpoint.xs) return '40'
      return '57'
    },
    textField () {
      if (this.$vuetify.breakpoint.xs) return ''
      return 'text-field'
    },
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-2 pt-3 pb-7'
      return 'main-content mt-6'
    },
    prefectureWidth () {
      if (this.$vuetify.breakpoint.xs) return '95%'
      return '176'
    },
    prefectureHeight () {
      if (this.$vuetify.breakpoint.xs) return '40'
      return '58'
    },
    prefectureBtn () {
      if (this.$vuetify.breakpoint.xs) return 'caption font-weight-bold mt-n4'
      return 'ml-1 font-weight-bold'
    },
    prefectureSelected() {
      const prefectures = []
      this.regions.forEach(region => prefectures.push(...region.prefectures))
      return prefectures.filter(prefecture => this.selectedPrefectureIds.includes(prefecture.id))
    },
  },
  watch: {
    selectedPrefectureIds: function(ids) {
      let conditions = this.$accessor.modules.shops.conditions;
      conditions.prefectureIds = ids;
      this.$emit('assignCondition', conditions);
    },
    deep: true,
    immediate: true
  }
}
</script>
<style>
.nuxt-link-active {
  color: #888 !important;
}
</style>