<template>
  <div>
    <!--<div class="headers">I am headers</div>-->
    <headers :seller="seller"></headers>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--<router-link> 默认会被渲染成一个<a>标签 >>>to=""为我们定义的路由-->
    <!--<router-view> 路由匹配到的组件将渲染在这里-->
    <router-view></router-view>
    <!--<div class="content">I am content</div>-->
    <!--<keep-alive>-->
      <!--<router-view :seller="seller"></router-view>-->
    <!--</keep-alive>-->
  </div>
</template>

<script>
  import headers from 'components/headers/headers'
  import axios from 'axios'
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
      axios.get('./static/data.json').then((res) => {
        this.seller = res.data.seller
        console.log(this.seller)
        }
      )
    },
    components: {
      'headers': headers
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display flex //布局方面的属性放在前面，回流
    width 100%
    height 40px //设计稿中的高度是设备物理像素，这里应该是逻辑像素
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1)) //调用的是mixin.styl中的mixin($color)
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        color: rgb(77,85,93)
      /*.router-link-active*/
      .active
        color rgb(240,20,20)
</style>
