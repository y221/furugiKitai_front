import { getAccessorType } from 'typed-vuex';

// store配下のサブモジュールはここでimportする
import * as shops from '~/store/modules/shops';
import * as prefectures from '~/store/modules/prefectures';
import * as contacts from '~/store/modules/contacts';
import * as shopLikes from '~/store/modules/shopLikes';
import * as users from '~/store/modules/users';

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
    shops,
    prefectures,
    contacts,
    shopLikes,
    users,
  },
})