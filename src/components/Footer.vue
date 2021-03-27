<template>
  <div class="footer">
    <router-link  v-for="(item,index) in navs" :key="index" :to="item.path"
    tag="div">
      {{item.text}}
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        { path: '/home', text: '首页' },
        { path: '/cate', text: '分类' },
        { path: '/setting', text: '我的' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #cccccc;
  display: flex;
  height: 49px;
  line-height: 49px;
  border-top: 1px solid white;
  >div {
    flex: 1;
    border-right: 1px solid #ffffff;
    text-align: center;
    justify-content: center;
  }
  >div.router-link-active {
    background-color: yellowgreen;
    color: white;
  }
}
</style>
