
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const state = () => ({
  user: {} as { [s: string]: string },
  otherUser: {} as { [s: string]: string },
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {

})

export const mutations = mutationTree(state, {
  setUser(state, values: { [s: string]: string }): void {
    state.user = values;
  },
  setOtherUser(state, values: { [s: string]: string}): void {
    state.otherUser = values
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  async loginUser({ commit, dispatch }, userData: object) {
    await this.$axios.get('/api/sanctum/csrf-cookie', { withCredentials: true })
    .then(
      async response => {
      const user = await this.$axios.$post(
        '/api/login', 
        userData,
        { withCredentials: true }
      );
      commit('setUser', user);
    })
    .catch(
      error => this.$router.push('/login')
    );
  },

  async updateUser({ commit }, {id, ...userData}) {
    const user = await this.$axios.$post(
      `/api/api/users/${id}`, 
      userData,
    );
    commit('setUser', user);
  },

  async logoutUser({ commit }) {
    this.$axios.$post(`/api/logout`).then(() => {
      // @ts-ignore
      this.$auth.logout();
      const user = {}
      commit('setUser', user);
    })
  },

  async getUser({ commit }, id: number) {
      const user = await this.$axios.$get(`/api/api/users/${id}`).
      catch(
        error => this.$router.push('/') //TODO 404エラーへ
      );
      commit('setOtherUser', user);
  }
})