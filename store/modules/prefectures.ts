
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
    const response = await this.$axios.get('/api/api/conditions/prefectures');
    commit('setPrefecturesGroupByRegion', response.data.data)
  }
})