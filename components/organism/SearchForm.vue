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
              {{ chip.text }}
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
        :areas="areas"
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
      areas: getAreas(),
    }
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
      this.areas.forEach(area => prefectures.push(...area.prefectures))
      return prefectures.filter(prefecture => this.selectedPrefectureIds.includes(prefecture.id))
    }
  }
}

const getAreas = () => {
  return [
    {
      name: '北海道・東北',
      prefectures: [
        { id: 1, text: '北海道' },
        { id: 2, text: '青森県' },
        { id: 3, text: '岩手県' },
        { id: 4, text: '宮城県' },
        { id: 5, text: '秋田県' },
        { id: 6, text: '山形県' },
        { id: 7, text: '福島県' },
      ]
    },
    {
      name: '関東',
      prefectures: [
        { id: 8, text: '茨城県' },
        { id: 9, text: '栃木県' },
        { id: 10, text: '群馬県' },
        { id: 11, text: '埼玉県' },
        { id: 12, text: '千葉県' },
        { id: 13, text: '東京都' },
        { id: 14, text: '神奈川県' },
      ]
    },
    {
      name: '北陸・甲信越',
      prefectures: [
        { id: 15, text: '新潟県' },
        { id: 16, text: '富山県' },
        { id: 17, text: '石川県' },
        { id: 18, text: '福井県' },
        { id: 19, text: '山梨県' },
        { id: 20, text: '長野県' },
      ]
    },
    {
      name: '東海',
      prefectures: [
        { id: 21, text: '岐阜県' },
        { id: 22, text: '静岡県' },
        { id: 23, text: '愛知県' },
        { id: 24, text: '三重県' },
      ]
    },
    {
      name: '近畿',
      prefectures: [
        { id: 25, text: '滋賀県' },
        { id: 26, text: '京都府' },
        { id: 27, text: '大阪府' },
        { id: 28, text: '兵庫県' },
        { id: 29, text: '奈良県' },
        { id: 30, text: '和歌山県' },
      ]
    },
    {
      name: '中国・四国',
      prefectures: [
        { id: 31, text: '鳥取県' },
        { id: 32, text: '島根県' },
        { id: 33, text: '岡山県' },
        { id: 34, text: '広島県' },
        { id: 35, text: '山口県' },
        { id: 36, text: '徳島県' },
        { id: 37, text: '香川県' },
        { id: 38, text: '愛媛県' },
        { id: 39, text: '高知県' },
      ]
    },
    {
      name: '九州・沖縄',
      prefectures: [
        { id: 40, text: '福岡県' },
        { id: 41, text: '佐賀県' },
        { id: 42, text: '長崎県' },
        { id: 43, text: '熊本県' },
        { id: 44, text: '大分県' },
        { id: 45, text: '宮崎県' },
        { id: 46, text: '鹿児島県' },
        { id: 47, text: '沖縄県' }
      ]
    },
  ]
}
</script>
<style>
.nuxt-link-active {
  color: #888 !important;
}
</style>