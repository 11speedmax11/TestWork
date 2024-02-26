import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersList: [],
  },
  mutations: {
    setUsersList(state, formData) {
      state.usersList.push(formData);
    },
  },
  actions: {
    addUserToList({ commit }, formData) {
      commit("setUsersList", { id: ["id", Date.now()], ...formData });
    },
  },
  getters: {
    getUsersList: (state) => state.usersList,
  },
});
