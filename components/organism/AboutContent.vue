<template>
  <v-main class="main-background-color">
    <v-container>
      <div class="main-wrapper" align="center">
        <div :class="mainContent">
          <FurugiKitaiLogo
            class="logoSpace"
            :height="height"
            :width="width"
          />            
            <div class="primary--text" :class="subTitle">
              古着屋を探せる！楽しめる！<br>
              フルギがもっと好きになる古着ポータルサイト
            </div>
              <AboutDetailTop />
            <div class="accent--text" :class="subTitle">
              フルギキタイでやりたいこと
            </div>
              <v-row no-gutters justify="center">
                <div v-for="(vision, index) of visions" :key="index">
                  <v-card
                    height=100%
                    :width="visionsCard"
                    class="mx-4 px-4 py-10"
                    elevation="0"
                  >
                    <v-col>
                      <AboutDetailVision
                        :images='images[index]'
                        :visions='visions[index]'
                        :texts='texts[index]'
                        :index='index'
                      />
                    </v-col>
                  </v-card>
                </div>
              </v-row>
            <div class="secondary--text" :class="subTitle">
              フルギキタイ運営チーム
            </div>
              <v-row no-gutters justify="center">
                <div v-for="(name, index) of names" :key="index">
                  <v-card
                    height=100%
                    :width="teamsCard"
                    class="px-8 py-10"
                    :class="cardMargin"
                    elevation="0"
                  >
                    <v-col>
                      <AboutDetailTeams
                        :avatars='avatars[index]'
                        :names='names[index]'
                        :socialMedias='socialMedias[index]'
                        :links='links[index]'
                        :profiles='profiles[index]'
                        :index='index'
                      />
                    </v-col>
                  </v-card>
                </div>
              </v-row>
        </div>
      </div>
    </v-container>
  </v-main>  
</template>

<script>
export default {
  computed: {
    height () {
      if (this.$vuetify.breakpoint.mdAndDown) return '121'
      return '200'
    },
    width () {
      if (this.$vuetify.breakpoint.mdAndDown) return '199'
      return '329'
    },
    logoSpace () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mb-10'
      return 'mt-10'
    },
    mainContent () {
      if (this.$vuetify.breakpoint.xs) return 'main-content pt-9 mt-4'
      return 'main-content mt-6 mx-12 pt-14 pb-16'
    },
    subTitle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-h6 font-weight-bold mt-8 px-8'
      return 'text-h5 font-weight-bold mt-12'
    },
    visionsCard () {
      if (this.$vuetify.breakpoint.mdAndDown) return '180'
      return '210'      
    },
    teamsCard () {
      if (this.$vuetify.breakpoint.mdAndDown) return '165'
      return '180'      
    },
    cardMargin () {
      if (this.$vuetify.breakpoint.sm) return 'mx-8'
      return ''        
    }
  },
  data() {
    return {
      images:[
        { image: 'images/vision01.png' },
        { image: 'images/vision01.png' },
        { image: 'images/vision03.png' },
      ],
      visions:[
        'フルギの情報をわかりやすく',
        'フルギの楽しみを広げる',
        'フルギの好きを共有する'
      ],
      texts:[
        '古着屋情報に特化したデータベースをつくる',
        '古着の魅力を発信する',
        '古着の好きは十人十色'
      ],
      avatars:[
        { avatar: 'images/avatar01.jpg' },
        { avatar: 'images/avatar02.jpg' },
        { avatar: 'images/avatar03.jpg' },
        { avatar: 'images/avatar04.jpg' }
      ],
      names:[
        'Hidetsugu',
        'Tsutsui',
        'Mashino',
        'Tomohiro'
      ],
      socialMedias:[
        '@bayashiiiiii',
        '@221',
        '@kabutomushi',
        '@gapao'
      ],
      links:[
        { url: 'https://www.yahoo.co.jp/' },
        { url: 'https://www.google.co.jp/' },
        { url: 'https://www.apple.com/jp/' },
        { url: 'https://www.youtube.com/' }
      ],
      profiles:[
        '社会人一歩手前',
        'フルギの伝道師',
        'サイタマ地方に生息する伝説のポケモン',
        'ヒュッゲしたい'
      ]
    }
  }
}
</script>



