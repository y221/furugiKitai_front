<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col v-if="!this.$vuetify.breakpoint.xs" md="1"></v-col>
        <v-col
          cols="9"
          md="10"
          :align="this.$vuetify.breakpoint.xs ? '' : 'center'"
          :class="this.$vuetify.breakpoint.xs ? 'font-weight-bold body-2 pt-5' : 'font-weight-bold'"
        >
          エリア絞り込み
        </v-col>
        <v-col cols="3" md="1">
          <v-btn text @click="closeDialog()">✕</v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider class="mt-1"></v-divider>
    <v-card-text style="height: 500px;">
      <template v-for="record in areas">
        <v-row class="mt-2">
          <v-col
            md="3"
            cols="12"
          >
            <p :class="$vuetify.breakpoint.xs ? 'body-2 mb-0 font-weight-bold' : 'ml-4 body-1 font-weight-bold'">
              {{ record.area }}
            </p>
          </v-col>
          <v-col
            md="9"
            cols="12"
          >
            <v-row class="pr-5">
              <v-checkbox
                v-for="prefecture in record.prefectures"
                :key="prefecture.id"
                v-model="prefectureSelected"
                :class="$vuetify.breakpoint.xs ? 'ml-2 mr-4 mt-2' :'ml-4 mt-2'"
                :label="prefecture.text"
                :value="prefecture.id"
              ></v-checkbox>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="mt-2"></v-divider>
      </template>
    </v-card-text>
    <v-card-actions>
      <v-col align="center">
        <v-btn
          color="primary"
          depressed
          rounded
          class="font-weight-bold"
          @click="selectPrefectureCompleted()"
        >
          このエリアで絞り込む
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
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
      areas: getAreas(),
      prefectureChips: getPrefectureChips()
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
    },
    selectPrefectureCompleted() {
      this.prefectureChips = getPrefectureChips();
      for(const id of this.prefectureSelected) {
        this.prefectureChips[id]['display'] = true; 
      }
      this.$emit('closeDialog');
      this.$emit('selectPrefectureCompleted', this.prefectureChips)
    },
    closeChip(id) {
      this.prefectureSelected = this.prefectureSelected.filter( n => n !== id)
      this.prefectureChips[id]['display'] = false
    },
  }
}

const getAreas = () => {
  return [
    {
      area: '北海道・東北',
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
      area: '関東',
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
      area: '北陸・甲信越',
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
      area: '東海',
      prefectures: [
        { id: 21, text: '岐阜県' },
        { id: 22, text: '静岡県' },
        { id: 23, text: '愛知県' },
        { id: 24, text: '三重県' },
      ]
    },
    {
      area: '近畿',
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
      area: '中国・四国',
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
      area: '九州・沖縄',
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