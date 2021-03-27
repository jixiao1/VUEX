export default {
  namespaced: true,
  state: {
    name: 'homeworld',
    age: '30',
    list: [1, 2, 3, 3, 6]
  },
  mutations: {
    getState (state, data) {
      state.name = data
    }
  },
  actions: {
    modyasu (store, data) {
      setTimeout(() => {
        console.log('你真的很棒牛逼le')
      })
    }
  },
  getters: {
    getListSum (state, getters) {
      let temp = 0
      state.list.forEach(item => (temp += item))
      return temp
    }
  }
}
