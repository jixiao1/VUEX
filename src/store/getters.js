export default {
  sum (state, getters) {
    let temp = 0
    state.list.forEach(item => (temp += item))
    return temp
  },
  type (state, getters) {
    if (getters.sum % 2 === 1) {
      return '奇数'
    } else {
      return '偶数'
    }
  }
}
