
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
  async loginUser({ getters, commit }, userData: object) {
    this.$axios.get('/api/sanctum/csrf-cookie', { withCredentials: true }).then(async response => {
      const user = await this.$axios.$post(
        '/api/login', 
        userData,
        { withCredentials: true }
      );
      commit('setUser', user);
      this.$router.push('/users/new');
    });
  },

  async updateUser({ getters, commit }, {id, ...userData}) {
    const user = await this.$axios.$post(
      `/api/users/${id}`, 
      userData,
    );
    commit('setUser', user);

    return user;
  },

  async logoutUser({ getters, commit }) {
    this.$axios.$post(`/api/logout`).then(() => {
      // @ts-ignore
      this.$auth.logout();
      const user = {}
      commit('setUser', user);
    })
  }
})