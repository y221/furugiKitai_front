
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

  type contact = {
    name: string,
    email: string,
    content: string,
  }

  export const state = () => ({
    contacts: {} as contact[],
  })

  export type RootState = ReturnType<typeof state>
  
  export const getters = getterTree(state, {})

  export const mutations = mutationTree(state, {})

  export const actions = actionTree({ state, getters, mutations }, {
    async submitContact({ commit }, contactData: contact) {
      return await this.$axios.$post(
        '/api/contacts',
        contactData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        }
      );
    }
  })