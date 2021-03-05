<template>
  <div id="goods">
      <goods-list-item  t-item  v-for="(item , index) in goodsList" :goodsListItem = 'item' :key = 'index'></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
 

export default { 
  components: {
     GoodsListItem
      },
  name:'GoodsList',
  props:{
    goodsList:{
      type:Array,
      default(){
      return []
    }
    }
  }
}
</script>

<style>
  #goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* padding-bottom: 100px; */
  }
</style>