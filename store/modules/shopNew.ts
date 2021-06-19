import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const state = () => ({
  prefectures: [] as string[],
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  prefectures: state => state.prefectures,
})

export const mutations = mutationTree(state, {
  setPrefectures(state, values: string[]): void {
    state.prefectures = values;
  }
})

export const actions = actionTree({state, getters, mutations}, {
  async getPrefectures({ getters, commit }, ) {
    const prefectures = await this.$axios.$get('/api/prefectures');
    commit('setPrefectures', prefectures);
  },
  async registerShop({ getters, commit}, shopData: string[]) {
    return await this.$axios.$post('/api/shops', {shopData: shopData});
  }
})