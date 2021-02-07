import { getAccessorType } from 'typed-vuex';

// store配下のサブモジュールはここでimportする
import * as shop from '~/store/shop';

// state, getters, mutations, actionsは不要でも空で作成する
export const state = () => {
  return {}
}

export const getters = {
  //
}

export const mutations = {
  //
}

export const actions = {
  // 
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    //importしたサブモジュールは下記に記載
    shop,
  },
})