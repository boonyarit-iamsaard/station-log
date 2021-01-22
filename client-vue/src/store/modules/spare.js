const state = {
  spares: [
    {
      id: 1611306603713,
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
      qty: 1,
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
  addSpare({ commit }, newSpare) {
    commit('newSpare', newSpare);
  },

  updateSpare({ commit }, updatedSpare) {
    commit('updateSpare', updatedSpare);
  },

  deleteSpare({ commit }, id) {
    commit('deleteSpare', id);
  }
};

const mutations = {
  // setSpares(state, spares) {
  //   state.spares = spares;
  // },

  newSpare(state, newSpare) {
    state.spares.push(newSpare);
  },

  updateSpare(state, updatedSpare) {
    const index = state.spares.findIndex(spare => spare.id === updatedSpare.id);
    if (index !== -1) {
      state.spares.splice(index, 1, updatedSpare);
    }
  },

  deleteSpare(state, id) {
    state.spares = state.spares.filter(spare => spare.id !== id);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
