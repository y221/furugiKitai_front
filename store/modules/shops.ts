
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

type shop = {
  id: number,
  prefectureId: number,
  prefecture: string,
  genderId: number,
  gender: string,
  address: string,
  building: string,
  latitude: number,
  longitude: number,
  access: string,
  city: string,
  phoneNumber: string,
  instagramUrl: string,
  holiday: string,
  businessHour: string,
  imageUrl: string,
  likesNumber: number,
  reviewsNumber: number
}
type condition = {[key: string]: any}
type conditions = {[key:string]: condition}

export const state = () => ({
  shop: {} as shop,
  shops: {} as shop[],
  shopsCount: 1 as number,
  prefectures: [] as string[],
  genders: [] as string[],
  conditions: {} as conditions,
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  prefectures: state => state.prefectures,
  conditions: state => state.conditions
})

export const mutations = mutationTree(state, {
  setShop(state, values: shop): void {
    state.shop = values;
  },
  setShops(state, values: shop[]): void {
    state.shops = values;
  },
  setShopsCount(state, value: number): void {
    state.shopsCount = value;
  },
  setPrefectures(state, values: string[]): void {
    state.prefectures = values;
  },
  setGenders(state, values: string[]): void {
    state.genders = values;
  },
  setConditions(state, condition: condition): void {
    const key = Object.keys(condition)[0]
    state.conditions[key] = condition[key]
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async getShops({ getters, commit }, parameter: object) {
    const shops = await this.$axios.$get('/api/shops', {params: parameter});
    commit('setShops', shops.shops);
    commit('setShopsCount', shops.count);
  },
  async searchShops({ getters, commit }) {
    const shops = await this.$axios.$get('/api/shops', {params: getters.conditions});
    commit('setShops', shops.shops);
    commit('setShopsCount', shops.count);
  },
  async getPrefectures({ getters, commit }) {
    const prefectures = await this.$axios.$get('/api/prefectures');
    commit('setPrefectures', prefectures);
  },
  async getGenders({ getters, commit }) {
    const genders = await this.$axios.$get('/api/genders');
    commit('setGenders', genders);
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
  },
  assignCondition({ commit }, condition: condition) {
    commit('setConditions', condition)
  }
})