
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const state = () => ({
  shop: [] as string[],
  shops: [] as string[],
  shopsCount: 1 as number,
  prefectures: [] as string[],
  convertedPrefectures: {} as object
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  prefectures: state => state.prefectures,
})

export const mutations = mutationTree(state, {
  setShop(state, values: string[]): void {
    state.shop = values;
  },
  setShops(state, values: string[]): void {
    state.shops = values;
  },
  setShopsCount(state, value: number): void {
    state.shopsCount = value;
  },
  setPrefectures(state, values: string[]): void {
    state.prefectures = values;
  },
  setConvertedPrefectures(state, values): void {
    const data:any = {};
    for (const value of values) {
      data[value.id] = value.prefecture;
    }
    state.convertedPrefectures = data
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async getShops({ getters, commit }, parameter: object) {
    const shops = await this.$axios.$get('/api/shops', {params: parameter});
    commit('setShops', shops.shops);
    commit('setShopsCount', shops.count);
  },
  async getPrefectures({ getters, commit }) {
    const prefectures = await this.$axios.$get('/api/prefectures');
    commit('setPrefectures', prefectures);
    commit('setConvertedPrefectures', prefectures);
  },
  async getShop({ getters, commit }, id : string) {
    const shop = await this.$axios.$get(`/api/shops/${id}`);
    commit('setShop', shop);
  },
  async registerShop({ getters, commit}, shopData: object) {
    return await this.$axios.$post(
      '/api/shops', 
      shopData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
  },
  async updateShop({ getters, commit}, updateData: any) {
    return await this.$axios.$post(
      `/api/shops/${updateData.id}`, 
      updateData.formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
  }
})