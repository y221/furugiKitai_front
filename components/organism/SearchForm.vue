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
              v-for="chip in prefectureChips"
              :key="chip.id"
              v-if="chip.display"
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
        @selectPrefectureCompleted="setChips"
        :prefectureSelected="prefectureSelected"
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
      prefectureSelected: [],
      dialog: false,
      prefectureChips: getPrefectureChips()
    }
  },
  methods: {
    selectPrefectures() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    closeChip(id) {
      this.prefectureSelected = this.prefectureSelected.filter( n => n !== id)
      this.prefectureChips[id]['display'] = false
    },
    setChips(chips) {
      this.prefectureChips = chips;
    }
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
    }
  }
}

const getPrefectureChips = () => {
  return {
    1: { display: false, id: 1, text: '北海道' },
    2: { display: false, id: 2, text: '青森県' },
    3: { display: false, id: 3, text: '岩手県' },
    4: { display: false, id: 4, text: '宮城県' },
    5: { display: false, id: 5, text: '秋田県' },
    6: { display: false, id: 6, text: '山形県' },
    7: { display: false, id: 7, text: '福島県' },
    8: { display: false, id: 8, text: '茨城県' },
    9: { display: false, id: 9, text: '栃木県' },
    10: { display: false, id: 10, text: '群馬県' },
    11: { display: false, id: 11, text: '埼玉県' },
    12: { display: false, id: 12, text: '千葉県' },
    13: { display: false, id: 13, text: '東京都' },
    14: { display: false, id: 14, text: '神奈川県' },
    15: { display: false, id: 15, text: '新潟県' },
    16: { display: false, id: 16, text: '富山県' },
    17: { display: false, id: 17, text: '石川県' },
    18: { display: false, id: 18, text: '福井県' },
    19: { display: false, id: 19, text: '山梨県' },
    20: { display: false, id: 20, text: '長野県' },
    21: { display: false, id: 21, text: '岐阜県' },
    22: { display: false, id: 22, text: '静岡県' },
    23: { display: false, id: 23, text: '愛知県' },
    24: { display: false, id: 24, text: '三重県' },
    25: { display: false, id: 25, text: '滋賀県' },
    26: { display: false, id: 26, text: '京都府' },
    27: { display: false, id: 27, text: '大阪府' },
    28: { display: false, id: 28, text: '兵庫県' },
    29: { display: false, id: 29, text: '奈良県' },
    30: { display: false, id: 30, text: '和歌山県' },
    31: { display: false, id: 31, text: '鳥取県' },
    32: { display: false, id: 32, text: '島根県' },
    33: { display: false, id: 33, text: '岡山県' },
    34: { display: false, id: 34, text: '広島県' },
    35: { display: false, id: 35, text: '山口県' },
    36: { display: false, id: 36, text: '徳島県' },
    37: { display: false, id: 37, text: '香川県' },
    38: { display: false, id: 38, text: '愛媛県' },
    39: { display: false, id: 39, text: '高知県' },
    40: { display: false, id: 40, text: '福岡県' },
    41: { display: false, id: 41, text: '佐賀県' },
    42: { display: false, id: 42, text: '長崎県' },
    43: { display: false, id: 43, text: '熊本県' },
    44: { display: false, id: 44, text: '大分県' },
    45: { display: false, id: 45, text: '宮崎県' },
    46: { display: false, id: 46, text: '鹿児島県' },
    47: { display: false, id: 47, text: '沖縄県' }
  }

}
</script>
<style>
.nuxt-link-active {
  color: #888 !important;
}
</style>