<template>
  <div class="base-info-warper" >
    <!-- 中间部分商品的标题价格部分 -->
      <h2 class="base-info-title">{{baseInfo.title}}</h2>
      <div class="base-center">    
      <h2 class="base-info-sprice1">{{baseInfo.newPrice}}</h2>
       <h2 class="base-info-sprice2">{{baseInfo.realPrice}}</h2>
       <span class="discount">{{baseInfo.discount}}</span>
      </div>
      <div class="base-info-count" v-if="baseInfo.columns && baseInfo.services">
        <div class="base-info-count-left">{{baseInfo.columns[0]}}</div>
        <div class="base-info-count-center">{{baseInfo.columns[1]}}</div>
        <div class="base-info-count-right">{{baseInfo.services[baseInfo.services.length-1].name}}</div> 
      </div>
      
      <div class="base-info-count1" v-if="baseInfo.columns && baseInfo.services">
        <div v-for="index in baseInfo.services.length-1" :key="index" class="base-info-count1-div">
          <img :src="baseInfo.services[index-1].icon">
          <span>{{baseInfo.services[index-1].name}}</span>
        </div>
      </div>

  <!--  -->

  </div>
</template>

<script>


export default {
  name:'DetailBaseInfo',
  props:{
      baseInfo:{
        type:Object,
        default(){
          return {}
        }
      }
  }
}
</script>

<style scoped>
  .base-info-warper{
    padding:10px 10px 0px 10px;
    width: 100%;
    border-bottom: 5px solid rgb(243, 241, 241);
  }
  .base-info-title{
    font-size: 16px;
    width: 100%;
    text-indent:15px;
    text-align: left;
  }
  .base-center{
    padding-top: 8px; 
  }
  .base-center h2{
    display: inline-block;
  }
  .base-info-sprice1{
    font-size: 20px;
    color: var( --color-tint);
 
  }
  .base-info-sprice2{
    font-size: 12px;
    color:rgb(180, 172, 172);
    padding-left: 5px;
    text-decoration: line-through;
  }
  .discount{
   font-size: 10px;
   border-radius: 8px;
   padding:2px 4px 3px 4px;
   position: relative;
   bottom: 5px;
   left: 5px;
   background-color:var( --color-high-text);
   color: white;
  }
  .base-info-count{
   display: flex;  
   flex: 1;
   font-size: 12px;
   padding-top: 12px;
   border-bottom: 1px solid rgb(233, 228, 228);
   padding-bottom: 10px;
   color: rgb(180, 172, 172);
  }
 
  .base-info-count div{
    flex: 1;
    /* text-align: center; */
  }
  .base-info-count-left{
    text-align: left;
  }
  .base-info-count-center{
    text-align: center;
  }
  .base-info-count-right{
    text-align: right;
  }
  .base-info-count1{
    display: flex;
    font-size: 12px;
    /* flex-flow:  row nowrap; */
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 10px;
  
  }
  .base-info-count1-div img{
    height: 10px;
    width: 10px;
  }
</style>