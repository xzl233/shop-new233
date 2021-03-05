<template>
    <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-img-active>
          <div><img src="../../assets/img/tabbar//home_active.svg" alt=""></div>        
        </template>
           <template v-slot:item-img>
          <div><img src="../../assets/img/tabbar//home.svg" alt=""></div>        
        </template>  
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-img-active>
          <div><img src="../../assets/img/tabbar/category_active.svg" alt=""></div>        
        </template>
            <template v-slot:item-img>
          <div><img src="../../assets/img/tabbar/category.svg" alt=""></div>        
        </template> 
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <template v-slot:item-img-active>
          <div><img src="../../assets/img/tabbar/shopcart_active.svg" alt=""></div>        
        </template>
        <template v-slot:item-img>
          <div><img src="../../assets/img/tabbar/shopcart.svg" alt=""></div>        
        </template> 
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <template v-slot:item-img-active>
          <div><img src="../../assets/img/tabbar/profile_active.svg" alt=""></div>        
        </template> 
          <template v-slot:item-img>
          <div><img src="../../assets/img/tabbar/profile.svg" alt=""></div>        
        </template> 
        <template v-slot:item-text>
          <div>我的</div>
        </template> 
      </tab-bar-item>
   </tab-bar>
   </div>
</template>

<script>
import TabBar from '../common/tabbar/TabBar.vue'
import TabBarItem from '../common/tabbar/TabBarItem.vue'


export default {
  name:'MainTabBar',
  components:{
    TabBarItem,
    TabBar
  }
}
</script>

<style>

</style>