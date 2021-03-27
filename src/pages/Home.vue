<template>
  <div class="home">
    <h1>首页</h1>
    <div class="info">
      <!-- <div>姓名: {{name}}</div>
      <div>年龄: {{age}}</div> -->
      <div>姓名: {{NAME}}</div>
      <div>年龄: {{AGE}}</div>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    // name () {
    //   return this.$store.state.name
    // },
    // age () {
    //   return this.$store.state.age
    // },
    // ...mapState(['name', 'age'])
    ...mapState({
      NAME: 'name',
      AGE: 'age'
    })
  },
  mounted () {
    console.log(this.$store.state.name)
    console.log(this.$store.state.age)
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 50px;
  width: 100%;
}
</style>
