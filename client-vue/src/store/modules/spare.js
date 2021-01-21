const state = {
  spares: [
    {
      id: Date.now(),
      date: '2021-01-20',
      airline: 'CX',
      acreg: 'B-LRD',
      tail: 'LRD',
      fltno: '653',
      part: '2197',
      desc: 'OIL',
      type: 'Consumable',
      serial: 'NIL',
      grn: '0001234567',
      store: 'BKK',
      usedBy: 'Boonyarit',
      issued: true,
      issuedBy: 'Boonyarit'
    }
  ]
};

const getters = {
  getAllSpares: state => state.spares
};

const actions = {
  addSpare({ commit }, spare) {
    commit('newSpare', spare);
  }
};

const mutations = {
  setSpares(state, spares) {
    state.spares = spares;
  },

  newSpare(state, spare) {
    state.spares.push(spare);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
