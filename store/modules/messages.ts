
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

export const state = () => ({
  message: '' as string
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  message: state => state.message,
})

export const mutations = mutationTree(state, {
  setMessage(state, message: string): void {
    state.message = message;
  },
})

export const actions = actionTree({ state, getters, mutations }, {
  setMessage({ commit }, message: string) {
    commit('setMessage', message)
  }
})