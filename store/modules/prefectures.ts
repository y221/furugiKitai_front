
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

type prefecture = {id: number, regionId: number, prefecture: string}
type region = {id: number, name: string}
type prefecturesGroupByRegion = {name: string, prefectures: prefecture[]}[]

export const state = () => ({
  prefecturesGroupByRegion: [] as prefecturesGroupByRegion,
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  prefecturesGroupByRegion: state => state.prefecturesGroupByRegion,
})

export const mutations = mutationTree(state, {
  setPrefecturesGroupByRegion(state, values): void {
    state.prefecturesGroupByRegion = values
  }
})

export const actions = actionTree({ state, mutations }, {
  async fetchPrefecturesGroupByRegion({ commit }) {
    try {
      const regions: region[] = await this.$axios
        .get('/api/regions')
        .then(response => (response.data))
        .catch(error => {
          throw error;
        })
      const prefectures: prefecture[] = await this.$axios
        .get('/api/prefectures')
        .then(response => (response.data))
        .catch(error => {
          throw error;
        })
      const prefecturesGroupByRegion = [] as prefecturesGroupByRegion;
      // prefectureをregionごとにグループ分けして格納
      for (const regionIndex in regions) {
        const regionId = regions[regionIndex].id
        const regionName = regions[regionIndex].name
        const groupedPrefectures: prefecture[] = prefectures.filter(
          (target: prefecture) => regionId === target.regionId
        )
        prefecturesGroupByRegion.push({name: regionName, prefectures: groupedPrefectures})
      }
      console.log(prefecturesGroupByRegion)
      commit('setPrefecturesGroupByRegion', prefecturesGroupByRegion)
    } catch (error: any) {
      throw error
    }
  }
})