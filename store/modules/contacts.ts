
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

  type contact = {
    name: string,
    email: string,
    content: string,
  }
 
  export const state = () => ({
    contact: {} as contact,
    contacts: {} as contact[],
  })

  export type RootState = ReturnType<typeof state>

  export const getters = getterTree(state, {
  })

  export const mutations = mutationTree(state, {
    setContact(state, values: contact): void {
      state.contact = values;
    },
    setContacts(state, values: contact[]): void{
      state.contacts = values;
    },
  })

  export const actions = actionTree({ state, getters, mutations }, {
    async getContacts( { getters, commit }, parameter: object) {
      const contacts = await this.$axios.$get('/api/contacts', {params: parameter});
      commit('setContacts', contacts.contacts);
    },
    async getContact({ getters, commit }, id : string) {
      const contact = await this.$axios.$get(`/api/contacts/${id}`);
      commit('setContact', contact);
    },
    async submitContact({ getters, commit }, contactData: object) {
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