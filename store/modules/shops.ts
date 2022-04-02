
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

// 店舗
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

// 都道府県ID
type prefectureIds = number[];

// エリアID
type areaIds = number[];

// 性別判定用文字列
type genders = string[];

// 性別ID
type genderIds = number[];

// ページ
type page = number;

// クエリパラメータ用
type conditions = {
  page: page,
  order: string,
  prefectureIds: prefectureIds,
  areaIds: areaIds,
  genderIds: genderIds,
  keyword: string
}

// APIパラメータ用
type apiConditions = {
  limit: number,
  page: page,
  orderby: string,
  order: string,
  prefectureIds: prefectureIds,
  areaIds: areaIds,
  genderIds: genderIds,
  keyword: string
}

// チェックボックスで入る値とAPIで渡す値のマッピング
const gendersMap:{[key:string]:number} = {
  'ladies':2,
  'mens': 3
};
const genderIdsMap:{[key:number]:string} = {
  2:'ladies',
  3:'mens'
};
// 取得件数制限
const limit = 10 as number;
// 並び替え順
const orderby = 'created_at' as string;

export const state = () => ({
  shop: {} as shop,
  shops: {} as shop[],
  shopsCount: 1 as number,
  displayNumber: 10 as number,
  pageLength: 1 as number,
  totalVisible: 5 as number,
  prefectures: [] as string[],
  genders: [] as string[],
  genderIdsMap: genderIdsMap,
  conditions: {
    page: 1,
    order: 'DESC',
    prefectureIds: [],
    areaIds: [],
    genderIds: [],
    keyword:''
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
  setPageLength(state) :void {
    state.pageLength = Math.ceil(state.shopsCount / state.displayNumber);
  },
  setTotalVisible(state) :void {
    state.totalVisible = state.pageLength >= 5 ? 5 : state.pageLength;
  },
  setPrefectures(state, values: string[]): void {
    state.prefectures = values;
  },
  setGenders(state, values: string[]): void {
    state.genders = values;
  },
  setConditions(state, conditions: conditions): void {
    if (conditions.page) {
      state.conditions.page = conditions.page;
    }
    if (conditions.order) {
      state.conditions.order = conditions.order;
    }
    if (conditions.prefectureIds) {
      state.conditions.prefectureIds = conditions.prefectureIds;
    }
    if (conditions.areaIds) {
      state.conditions.areaIds = conditions.areaIds;
    }
    if (conditions.genderIds) {
      state.conditions.genderIds = conditions.genderIds;
    }
    if (conditions.keyword) {
      state.conditions.keyword = conditions.keyword;
    }
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
  setConditionsKeyword(state, keyword:string): void {
    state.conditions.keyword = keyword;
  },
  setPage(state, page:page): void {
    state.conditions.page = page;
  },
  initConditions(state): void {
    // 条件初期値
    const initConditions = {
      page: 1,
      order: 'DESC',
      prefectureIds: [],
      areaIds: [],
      genderIds: [],
      keyword:''
    } as conditions
    state.conditions = initConditions;
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async getShops({ getters, commit }, parameter: object) {
    const response = await this.$axios.$get('/api/shops', {params: parameter});
    commit('setShops', response.data.shops);
    commit('setShopsCount', response.data.count);
  },
  async searchShops({ getters, commit }) {
    const defaultConditions = {
      limit: limit,
      orderby: orderby
    }
    let conditions:apiConditions = {...getters.conditions, ...defaultConditions};
    const response = await this.$axios.$get('/api/shops', {params: conditions});
    commit('setShops', response.data.shops);
    commit('setShopsCount', response.data.count);
    commit('setPageLength');
    commit('setTotalVisible');
  },
  async createShop({ getters, commit }) {
    const response = await this.$axios.$get(`/api/shops/create`);
    commit('setPrefectures', response.data.prefectures);
    commit('setGenders', response.data.genders);
  },
  async editShop({ getters, commit }, id : string) {
    const response = await this.$axios.$get(`/api/shops/edit/${id}`);
    commit('setShop', response.data.shop);
    commit('setPrefectures', response.data.prefectures);
    commit('setGenders', response.data.genders);
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
    const response = await this.$axios.$get(`/api/shops/${id}`);
    commit('setShop', response.data);
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
  initConditions({commit}) {
    commit('initConditions');
  },
  setPage({commit}, page: page) {
    commit('setPage', page);
  },
  assignConditions({commit}, conditions: conditions) {
    commit('setConditions', conditions);
  },
  assignConditionKeyword({ commit }, keyword:string) {
    commit('setConditionsKeyword', keyword);
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