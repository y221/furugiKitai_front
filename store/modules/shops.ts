
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const state = () => ({
  shops: [] as string[]
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  // shops: state => state.shops,
})

export const mutations = mutationTree(state, {
  setShops(state, values: string[]): void {
    state.shops = values;
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async getShops({ getters, commit }, ) {
    const shops = await this.$axios.$get('/api/shops');
    commit('setShops', shops);
  },
})