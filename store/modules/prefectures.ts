
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

type prefecture = {
  id: number,
  regionId: number,
  prefecture: string
}
type prefecturesGroupByRegion = {
  name: string,
  prefectures: prefecture[]
}[]

export const state = () => ({
  prefecturesGroupByRegion: [] as prefecturesGroupByRegion,
  prefectures: [] as prefecture[]
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  prefecturesGroupByRegion: state => state.prefecturesGroupByRegion,
})

export const mutations = mutationTree(state, {
  setPrefecturesGroupByRegion(state, values: prefecturesGroupByRegion): void {
    state.prefecturesGroupByRegion = values
    if (state.prefectures.length) {
      return;
  }
    values.forEach(region => state.prefectures.push(...region.prefectures));
  }
})

export const actions = actionTree({ state, mutations }, {
  async fetchPrefecturesGroupByRegion({ commit }) {
    const response = await this.$axios.get('/api/api/conditions/prefectures');
    commit('setPrefecturesGroupByRegion', response.data.data)
  }
})