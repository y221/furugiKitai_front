
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
  
  export const getters = getterTree(state, {
    contact: state => state.contacts,
  })

  export const mutations = mutationTree(state, {
    setContacts(state, values: contact[]): void{
      state.contacts = values;
    },
  })

  export const actions = actionTree({ state, getters, mutations }, {
    async submitContact({ commit }, contactData: object) {
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