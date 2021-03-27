export default {
  changeName1 (state, data) {
    console.log('改变姓名')
    state.name = data
  },
  changeAge (state, data) {
    console.log('改变年龄')
    state.age = data
  }
}
