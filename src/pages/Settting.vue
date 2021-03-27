<template>
  <div class="setting">
    <h1>设置</h1>
    <div>{{name}}</div>
    <button @click="clickHandler">改变民公子</button>
    <button @click="modiguy('999999999')">6666666</button>
    <button @click="moadgactions">定时了</button>
    <button @click="moaj"> 定时了</button>
    <div>{{getsum}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  mounted () {
    console.log(this.$store.state.home.name)
    console.log(this.$store.getters['home/getListSum'])
  },
  computed: {
    ...mapState({
      name: state => state.home.name
    }),
    ...mapGetters({
      getsum: 'home/getListSum'
    })
  },
  methods: {
    clickHandler () {
      this.$store.commit('home/getState', '1233')
    },
    ...mapMutations({
      modiguy: 'home/getState'
    }),
    ...mapActions({
      moadgactions: 'home/modyasu'
    }),
    moaj () {
      this.$store.dispatch('home/modyasu', '000payload')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
