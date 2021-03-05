<template>
  <div class="baseShop">
    <!-- {{baseShop}} -->
    <img :src="baseShop.logo" class="baseShop-img">
    <span class="baseShop-span">{{baseShop.name}}</span>

    <div class="baseShop-text">
     <div  class="baseShop-text-left"> 
       <div class="xzl123">
        <h2>{{num + '万'}}</h2>
        <h2>总销量</h2>
      </div> 
      <div class="xzl123">
        <h2>{{baseShop.goodsCount}}</h2>
        <h2>全部宝贝</h2>
      </div>
      </div>

     <div  class="baseShop-text-right" v-if="baseShop.score">
       <h2 v-for=" item in baseShop.score" :key="item" class="baseShop-text-right-flex">
         <span>{{item.name}}</span> 
         <span style="{color:'red'}">{{item.score}}</span>
         <span v-if="item.score > 4.8" :style="{backgroundColor:'#eb596e' ,color:'white',} ">高</span>
         <span v-else :style="{backgroundColor:'#ffe227' , color:'white'}">低</span>
       </h2>
      </div> 
    </div>

      <div class="shopEnter">进店看看</div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseShop',
  props:{
      baseShop:{
        type:Object,
        default(){
          return {}
        }
      }  
  },
  data(){
    return {
      isShow:true
    }
  },
  computed:{
       num(){
         return (parseInt(this.baseShop.sells)  / 10000).toFixed(1) 
       }
     }

}
</script>

<style>
  .baseShop{
    padding:10px 10px 0px 10px;
    width: 100%;
    background-color: white;
    position: relative;
  }
  .baseShop-span{
   position: relative;
   top: -20px;
   left: 10px;
   color: rgb(133, 130, 130)
  }
  .baseShop-img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid rgba(102, 99, 94, .2);
   
  }
  .baseShop-text{
    font-size: 10px;
    color: rgb(71, 67, 67);
    padding-bottom: 20px;
    position: relative;
    display: flex;
    flex: 1;
    padding-top: 15px;
    /* background-color: red; */
  }
  .baseShop-text-left{
    display: flex;
    flex: 1;
    border-right: 2px solid rgb(105, 100, 100 , .2);
    padding:20px 0 20px 0;
 }
  .xzl123 h2{
    /* background-color: rosybrown; */
    padding: 2px 2px;
    text-align: center;

 }
  .baseShop-text div{
    width: 50%;
  }
  
  .baseShop-text-right div{
    text-align: center;  
    
   }
  .baseShop-text-right span{
    display: inline-block;
    padding: 8px 0 8px 0;
  }
   .baseShop-text-right-flex{
     justify-content: space-between;
     display: flex;
     padding: 10px 5px 0 20px;
   }
  .baseShop-text-right-flex span{
    font-size: 12px;
    padding: 5px 5px;
  }
  .shopEnter{
    background-color: rgb(224, 239, 241);
    width: 100px;
    margin:10px auto 0px auto;
    border-radius:7px;
    text-align: center;
    padding: 5px 0px;
    font-size: 10px;
  }
</style>