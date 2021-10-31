
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const state = () => ({
  user: {} as { [s: string]: string },
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {

})

export const mutations = mutationTree(state, {
  setUser(state, values: { [s: string]: string }): void {
    state.user = values;
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async registerUser({ getters, commit }, userData: object) {
    const user = await this.$axios.$post(
      '/api/users', 
      userData,
    );
    commit('setUser', user);
  },
  // async updateUser({ getters, commit}, userData: object) {
  //   return await this.$axios.$post(
  //     '/api/users', 
  //     userData,
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       },
  //     }
  //   );
  // }
})