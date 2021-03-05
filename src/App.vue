<template>
  <div id="App" >
   <main-tab-bar></main-tab-bar>

  <!-- <keep-alive>   
   <router-view></router-view>
  </keep-alive> -->

  <router-view v-slot="{ Component }" >
  <keep-alive include="Home,Category">
    <component :is="Component" />
  </keep-alive>
</router-view>

  </div>
</template>

<script> 
  import MainTabBar from './components/content/MainTabBar.vue'
  document.body.parentNode.style.overflow = 'hidden' //隐藏且禁用横向纵向两个滚动条

  export default {
    name: 'App',
    components: { 
    MainTabBar  
    }
  }
</script>
   
<style>
  @import './assets/css/base.css';
</style>
 