<template>
  <div class="ShopAll">
    <div class="box1">
      <div v-for="(item , index) in shopAll" :key="index"> 
        <img :src="item.image"  alt="">
        <h2>{{item.title}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RightShop',
  props:{
    shopAll:{
      type:Object,
      deefault(){
        return {}
      }
    }
  }
}
</script>

<style>
  .ShopAll{
    width: 100%;
    /* background-color: red; */
  }
  .box1{
    display: flex;  
    flex-shrink: inherit;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .box1 div{
    height: 90px;
    width: 60px;
    position: relative; 

  }

  .box1 img {
    height: 60px;
    width: 60px;
  }
  .box1 h2 {
    font-size: 12px;
    text-align: center;
  }
</style>