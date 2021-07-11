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
            <div class="secondary--text" :class="subTitle">
              フルギキタイでやりたいこと
            </div>
              <v-row no-gutters justify="center">
                <div v-for="(vision, index) of visions" :key="index">
                  <v-card
                    height=100%
                    :width="visionsCard"
                    :class="visionsCardMargin"
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
            <div class="accent--text" :class="subTitle">
              フルギキタイ運営チーム
            </div>
              <v-row no-gutters justify="center">
                <div v-for="(name, index) of names" :key="index">
                  <v-card
                    height=100%
                    :width="teamsCard"
                    :class="teamsCardMargin"
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
      if (this.$vuetify.breakpoint.xs) return 'text-subtitle-1 font-weight-bold mt-8 px-8'
      else if (this.$vuetify.breakpoint.mdAndDown) return 'text-h6 font-weight-bold mt-8 px-8'
      return 'text-h5 font-weight-bold mt-12'
    },
    visionsCard () {
      if (this.$vuetify.breakpoint.xs) return '180'
      else if (this.$vuetify.breakpoint.mdAndDown) return '170'
      return '210'      
    },
    visionsCardMargin () {
      if (this.$vuetify.breakpoint.xs) return 'py-8'
      else if (this.$vuetify.breakpoint.mdAndDown) return 'mx-1 px-3 py-10'
      return 'mx-4 px-4 py-10'        
    },
    teamsCard () {
      if (this.$vuetify.breakpoint.xs) return '118'
      else if (this.$vuetify.breakpoint.mdAndDown) return '127'
      return '180'      
    },
    teamsCardMargin () {
      if (this.$vuetify.breakpoint.xs) return 'mx-1 px-2 py-10'
      else if (this.$vuetify.breakpoint.mdAndDown) return 'mx-1 px-3 py-10'
      return 'mx-2 px-7 py-15'        
    }

  },
  data() {
    return {
      images:[
        { image: 'images/vision01.png' },
        { image: 'images/vision02.png' },
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
        'osyame',
        'y221',
        'オムレツ',
        'ぽん'
      ],
      socialMedias:[
        '@hidetsugu-o',
        '@y221',
        '@Mashino1123',
        '@theponthface'
      ],
      links:[
        { url: 'https://github.com/hidetsugu-o' },
        { url: 'https://github.com/y221' },
        { url: 'https://github.com/Mashino1123' },
        { url: 'https://www.instagram.com/theponthface/' }
      ],
      profiles:[
        'アラサーから始まる湘南ボーイ',
        'フルギの伝道師',
        '卵っていいよね',
        '定時退社クラブ会長'
      ]
    }
  }
}
</script>



