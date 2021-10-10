
import { getterTree, mutationTree, actionTree } from 'typed-vuex';

  type contact = {
    name: string,
    email: string,
    content: string,
  }
  type condition = {[key: string]: any}
  type conditions = {[key:string]: condition}

  export const state = () => ({
    contact: {} as contact,
    contacts: {} as contact[],
    conditions: {} as conditions,    
  })

  export type RootState = ReturnType<typeof state>

  export const getters = getterTree(state, {
    conditions: state => state.conditions
  })

  export const mutations = mutationTree(state, {
    setContact(state, values: contact): void {
      state.contact = values;
    },
    setContacts(state, values: contact[]): void{
      state.contacts = values;
    },
    setConditions(state, condition: condition): void {
      const key = Object.keys(condition)[0]
      state.conditions[key] = condition[key]
    }
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
    },
    async updateContact({ getters, commit }, updateData: any) {
      return await this.$axios.$post(
        `/api/contatcs/${updateData.id}`,
        updateData.formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        }
      );
    },
    assignCondition({ commit }, condition: condition) {
      commit('setConditions', condition)
    }
  })