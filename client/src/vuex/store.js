import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      clickedCandleData: null
    }
  },
  mutations: {
    SET_CLICKED_CANDLE_DATA(state, data) {
      state.clickedCandleData = data;
    }
  }
  ,
  actions: {
    setClickedCandleData({ commit }, data) {
      commit('SET_CLICKED_CANDLE_DATA', data);
    }
  },
  getters: {
    getClickedCandleData(state) {
      return state.clickedCandleData;
    }
  }
});

export default store;
