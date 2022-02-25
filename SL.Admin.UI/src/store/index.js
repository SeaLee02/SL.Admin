import { createStore } from 'vuex';

const tokenState = {
  token: null,
  tokenExpire: null,
};

// Create a new store instance.
export default createStore({
  state() {
    return tokenState;
  },
  mutations: {
    saveToken(state, data) {
      this.state.token = data;
      window.localStorage.setItem('Token', data);
    },
    saveTokenExpire(state, data) {
      this.state.tokenExpire = data;
      window.localStorage.setItem('TokenExpire', data);
    },
  },
  actions: {
    // increment(context) {
    // context.commit('increment');
    // },
  },
  getters: {
    // double(state: typeof defaultState) {
    // return 2 * state.count;
    // },
  },
});
