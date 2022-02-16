
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
type prefectureIds = number[];
type areaIds = number[];
type genders = string[];
type genderIds = number[];
type conditions = {
  limit: number,
  page: number,
  orderby: string,
  order: string,
  prefectureIds: prefectureIds,
  areaIds: areaIds,
  genderIds: genderIds,
  text: string
}

// チェックボックスで入る値とAPIで渡す値のマッピング
const gendersMap:{[key:string]:number} = {
  'ladies':2,
  'mens': 3
};

export const state = () => ({
  shop: {} as shop,
  shops: {} as shop[],
  shopsCount: 1 as number,
  prefectures: [] as string[],
  genders: [] as string[],
  conditions: {
    limit: 10,
    page: 1,
    orderby: 'created_at',
    order: 'DESC',
    prefectureIds: [],
    areaIds: [],
    genderIds: [],
    text:''
  } as conditions,
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
  setConditionsPrefectureIds(state, prefectureIds: prefectureIds): void{
    state.conditions.prefectureIds = prefectureIds;
  },
  setConditionsAreaIds(state, areaIds: areaIds): void{
    state.conditions.areaIds = areaIds;
  },
  setConditionsGenders(state, genderIds: genderIds): void {
    state.conditions.genderIds = genderIds;
  },
  setConditionsText(state, text:string): void {
    state.conditions.text = text;
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async getShops({ getters, commit }, parameter: object) {
    const response = await this.$axios.$get('/api/api/shops', {params: parameter});
    commit('setShops', response.data.shops);
    commit('setShopsCount', response.data.count);
  },
  async searchShops({ getters, commit }) {
    const response = await this.$axios.$get('/api/api/shops', {params: getters.conditions});
    commit('setShops', response.data.shops);
    commit('setShopsCount', response.data.count);
  },
  async getPrefectures({ getters, commit }) {
    const prefectures = await this.$axios.$get('/api/api/prefectures');
    commit('setPrefectures', prefectures);
  },
  async getGenders({ getters, commit }) {
    const genders = await this.$axios.$get('/api/api/genders');
    commit('setGenders', genders);
  },
  async getShop({ getters, commit }, id : string) {
    const response = await this.$axios.$get(`/api/api/shops/${id}`);
    commit('setShop', response.data);
  },
  async registerShop({ getters, commit}, shopData: object) {
    return await this.$axios.$post(
      '/api/api/shops', 
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
      `/api/api/shops/${updateData.id}`, 
      updateData.formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
  },
  assignConditionText({ commit }, text:string) {
    commit('setConditionsText', text);
  },
  assignConditionPrefectureIds({ commit }, prefectureIds: prefectureIds) {
    commit('setConditionsPrefectureIds', prefectureIds)
  },
  assignConditionAreaIds({ commit }, areaIds: areaIds) {
    commit('setConditionsAreaIds', areaIds)
  },
  assignConditionGenders({ commit }, genders: genders) {
    let genderIds:genderIds = [];
    // 性別の指定がある場合
    if (genders) {
      // 1はレディース、メンズ両方
      genderIds.push(1);
      // レディース(ladies)とメンズ(mens)に対応するIDを設定
      for (const gender of genders) {
        genderIds.push(gendersMap[gender]);
      }
    }
    commit('setConditionsGenders', genderIds)
  }
})