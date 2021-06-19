
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const state = () => ({
  shops: [] as string[],
  prefectures: [] as string[]
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  prefectures: state => state.prefectures,
})

export const mutations = mutationTree(state, {
  setShops(state, values: string[]): void {
    state.shops = values;
  },
  setPrefectures(state, values: string[]): void {
    state.prefectures = values;
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async getShops({ getters, commit }, ) {
    const shops = await this.$axios.$get('/api/shops');
    commit('setShops', shops);
  },
  async getPrefectures({ getters, commit }, ) {
    const prefectures = await this.$axios.$get('/api/prefectures');
    commit('setPrefectures', prefectures);
  },
  async registerShop({ getters, commit}, shopData: string[]) {
    return await this.$axios.$post('/api/shops', {shopData: shopData});
  }
})