
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
    await this.$axios.get('/sanctum/csrf-cookie', { withCredentials: true })
    .then(
      async response => {
      const user = await this.$axios.$post(
        '/login', 
        userData,
        { withCredentials: true }
      );
      commit('setUser', user.data);
      return user;
    })
    .catch(
      error => this.$router.push('/login')
    );
  },

  async updateUser({ commit }, userData) {
    const user = await this.$axios.$post(
      `/api/users/${userData.get('id')}`, 
      userData,
      {headers: {'Content-Type': 'multipart/form-data'}}
    );
    commit('setUser', user.data);
    return user;
  },

  async logoutUser({ commit }) {
    this.$axios.$post(`/logout`, { withCredentials: true }).then(() => {
      // @ts-ignore
      this.$auth.logout();
      const user = {}
      commit('setUser', user);
    })
  },

  async getUser({ commit }, id: number) {
      const user = await this.$axios.$get(`/api/users/${id}`).
      catch(
        error => this.$router.push('/') //TODO 404エラーへ
      );
      commit('setOtherUser', user.data);
  }
})