<template>
  <div id="app">
    <router-view></router-view>
  <tab-bar>
    <tab-bar-item path="/cat">
      <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon1" src="./assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item  path="/home">>
      <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon1" src="./assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">关于</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">>
      <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon1" src="./assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">购物</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">>
      <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon1" src="./assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">用户</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: "App",

  components: {
  TabBar,
  TabBarItem
  }
  
}
</script>

<style>
/* style里应用要加 @ */
  @import "./assets/css/base.css";

 
  
  
</style>
