<template>
  <v-main class="main-background-color">
    <v-container>
      <div class="main-wrapper">
        <div :class="mainContent">
          <ShopHeader />
          <v-tabs
            v-model="tab"
            color="accent"
            :class="this.$vuetify.breakpoint.xs ? 'mt-2' : ''"
          >
            <v-tab
              v-for="item in items"
              :href="item.key"
              :key="item.key"
              :class="tabFont"
            >
              {{ item.text }}
              <span
                class="blue-grey lighten-5 py-1 px-2 ml-1 review-count"
                v-if="item.key === 'review'"
              >
                {{ reviewCount }}
              </span>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab" :class="this.$vuetify.breakpoint.xs ? '' : 'mb-16'">
            <v-tab-item
              
              value="shopInformation"
              :class="this.$vuetify.breakpoint.xs ? 'pt-0 pb-6' : ''"
            >
              <ShopDetail />
              <ShopImages />
            </v-tab-item>
            <v-tab-item
             
              value="review"
            >
              <ReviewDetail
                :shopId = "shopId"
                :reviewId = "reviewId"
                :user = "user"
                :date = "date"
                :src = "src"
                :text = "text"
              />
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
      tab: null,
      reviewCount: 345,
      items: {
        shopInformation: {
          text: '店舗情報',
          key: '#shopInformation'  
        },
        review: {
          text: 'クチコミ',
          key: '#review'  
        }
      },
      shopId: 1,
      reviewId: 1,
      user: 'おおばやし',
      date: '2021/03/02',
      src: '/images/shop.jpg',
      text: '極楽寺駅から徒歩1分のところにあるお店。\nコロナのため、入店時のマスク着用は必須。\n店内に入ると温かいお茶をだしてくれる。お茶を飲みながらゆっくり服をさがせるのはこの店ならではだと思う。\n店主の中学生の息子がバイトをしており、たどたどしい接客で試着室に案内してくれるのも可愛らしい。\n\n肝心の古着についてだが、全体的に価格が安い。\nかと言って状態が悪いわけではない。\n店主自身が状態の悪いものは自身でリペアを施して販売しているらしい。\nまた、立地の問題もあるだろうが都内で販売されているものと比べても3割ほど安い値段で価格設定がされているように感じる。\n\n店主はとても気さくで私がデニムをさがしていることがわかると壁一面に並んだ大量のデニムの中から私がほしい特徴のデニムを見つけてくれた。\n私の質問にもまったく気取った態度はとらず丁寧に答えてくれた。\n本当に古着が好きなことがわかるような気さくなおじさんであった。\n\nまた、デニムが欲しくなった時には買いに行きたいと思う。',
    }
  },
  computed: {
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content mt-2'
      return 'main-content mt-6'
    },
    tabFont () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold caption'
      return 'font-weight-bold'
    }
  },
  mounted () {
    this.tab = 'review';
  }
}
</script>
<style>
.review-count{
  border-radius: 4px;
}
</style>