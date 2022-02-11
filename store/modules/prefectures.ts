
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

type prefecture = {
  id: number,
  regionId: number,
  prefecture: string
}
type region = {
  id: number,
  name: string
}
type prefecturesGroupByRegion = {
  name: string,
  prefectures: prefecture[]
}[]

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
    const regionsPromise = this.$axios.get('/api/api/regions')
    const prefecturesPromise = this.$axios.get('/api/api/prefectures')
    const [ regionsResponse, prefecturesResponse ] = await Promise.all([regionsPromise, prefecturesPromise])
    // prefectureをregionごとにグループ分けして格納
    const prefecturesGroupByRegion = [] as prefecturesGroupByRegion;
    for (const region of regionsResponse.data as region[]) {
      const groupedPrefectures: prefecture[] = prefecturesResponse.data.filter((target: prefecture) => region.id === target.regionId)
      prefecturesGroupByRegion.push({name: region.name, prefectures: groupedPrefectures})
    }
    commit('setPrefecturesGroupByRegion', prefecturesGroupByRegion)
  }
})