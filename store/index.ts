import { getAccessorType } from 'typed-vuex';

// store配下のサブモジュールはここでimportする
import * as shops from '~/store/modules/shops';
import * as contacts from '~/store/modules/contacts';
import * as shopLikes from '~/store/modules/shopLikes';
import * as users from '~/store/modules/users';
import * as messages from '~/store/modules/messages';
import * as conditions from '~/store/modules/conditions';

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
    contacts,
    shopLikes,
    users,
    messages,
    conditions
  },
})