import { getterTree, mutationTree, actionTree } from 'typed-vuex';
export const state = () => ({
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
})

export const mutations = mutationTree(state, {
})

export const actions = actionTree({ state, mutations }, {
  async toggleShopLike({ getters, commit}, shopData: object) {
    return await this.$axios.$post(
      '/api/api/shop/likes', 
      shopData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }
    );
  }
})