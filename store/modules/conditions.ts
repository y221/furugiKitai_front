
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

type area = {
  id: number,
  prefectureId: number,
  name: string
}
type areasGroupByPrefecture = {
  prefecture: string,
  areas: area[]
}[]

export const state = () => ({
  prefecturesGroupByRegion: [] as prefecturesGroupByRegion,
  prefectures: [] as prefecture[],
  areasGroupByPrefecture: [] as areasGroupByPrefecture,
  areas: [] as area[]
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  prefecturesGroupByRegion: state => state.prefecturesGroupByRegion,
  areasGroupByPrefecture: state => state.areasGroupByPrefecture
})

export const mutations = mutationTree(state, {
  setPrefecturesGroupByRegion(state, values: prefecturesGroupByRegion): void {
    state.prefecturesGroupByRegion = values
    if (state.prefectures.length) {
      return;
    }
    values.forEach(region => state.prefectures.push(...region.prefectures));
  },
  setAreasGroupByPrefecture(state, values:areasGroupByPrefecture): void {
    state.areasGroupByPrefecture = values
    if (state.areas.length) {
        return;
    }
    values.forEach(prefecture => state.areas.push(...prefecture.areas));
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async fetchConditions({ commit }) {
    const response = await this.$axios.$get(
      '/api/conditions',
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
    commit('setPrefecturesGroupByRegion', response.data.prefectures);
    commit('setAreasGroupByPrefecture', response.data.areas);
  }
})