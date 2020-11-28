import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: -1,
  },
  mutations: {
    updateId(state, id: number) {
      state.id = id;
    },
  },
  actions: {
    updateId(context, id: number) {
      context.commit("updateId", id);
    },
  },
  modules: {},
});
