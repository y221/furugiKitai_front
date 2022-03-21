
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

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
  areasGroupByPrefecture: [] as areasGroupByPrefecture,
  areas: [] as area[]
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  areasGroupByPrefecture: state => state.areasGroupByPrefecture,
})

export const mutations = mutationTree(state, {
  setAreasGroupByPrefecture(state, values:areasGroupByPrefecture): void {
    state.areasGroupByPrefecture = values
    if (state.areas.length) {
        return;
    }
    values.forEach(region => state.areas.push(...region.areas));
  }
})

export const actions = actionTree({ state, mutations }, {
  async fetchAreasGroupByPrefecture({ commit }) {
    const response = await this.$axios.get('/api/conditions/areas');
    commit('setAreasGroupByPrefecture', response.data.data)
  }
})