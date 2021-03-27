<template>
  <div class="cate">
    <h1>分类</h1>
     <div class="name" @click="changeName('李四')">改变姓名</div>
      <div class="age" @click="chgangeAge('60')">改变年龄</div>
       <div class="name" @click="changeName('wangwu')">改变姓名</div>
        <div class="age" @click="changeAge('980')">改变年龄</div>
      <button @click="setTiem">定时</button>
      <button @click="mapsak('aaaa')">定时1`111</button>
      <div>{{sum}}</div>
      <div>{{type}}</div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    changeName (data) {
      this.$store.commit('changeName1', data)
      // ...mapMutations(['changeName'])
    },
    ...mapMutations(['changeName1', 'changeAge']),
    chgangeAge (data) {
      this.$store.commit('changeAge', data)
    },
    setTiem () {
      this.$store.dispatch('tIMEout', '1229')
    },
    // ...mapActions(['tIMEout'])
    ...mapActions({
      mapsak: 'tIMEout'
    })
  },
  computed: {
    ...mapGetters(['sum', 'type'])
  }
}
</script>

<style lang="scss" scoped>

</style>
