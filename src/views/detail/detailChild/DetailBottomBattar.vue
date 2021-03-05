<template>
  <div class="BottomBartar">
      <div class="Bartar-left">
        <div>
             <i class="icon iconfont icon-kefu" style="color:#ff5777"></i>
             <h2>客服</h2>
        </div>
        <div>
             <i class="icon iconfont icon-dianpu"></i>
             <h2>店铺</h2>
        </div>
        <div @click="btnShow">
             <i v-if="iShow"  class="icon iconfont icon-xingxing1" style="color:yellow"></i> 
             <i v-else class="icon iconfont icon-xingxing"></i>
             <h2>收藏</h2>
        </div>
      </div>


      <div class="Bartar-right">
        <div class="Bartar-right1" @click="addCar">加入购物车</div>
        <div class="Bartar-right2">购买</div>
      </div>  
  </div>
</template>

<script>
export default {
  name:'DetailBottomBattar',
  data(){
    return {
      iShow:false
    }
  },
  methods:{
    btnShow(){
      this.iShow = !this.iShow
      console.log('s');
    },
    addCar(){
      this.$emit('addCar')
    }
  }
}

</script>

<style scoped>


  .BottomBartar{
  width: 100vw;
  height: 49px;
  z-index: 19;
  position: fixed;
  bottom: 0px;
  background-color: white;
  display: flex;
  flex: 1;
  }
  .Bartar-left{
    height: 100%;
    width: 50%;
    display: flex;
    padding: 5px 0px 10px 5px;
    flex-flow:  row nowrap;
    justify-content: space-between;
    font-size: 16px;
  }
  .Bartar-left div{
    flex: 1;
    text-align: center;
    
  }
   .Bartar-left i{ 
    font-size: 25px;
    
  }
  .Bartar-left h2{ 
    font-size: 10px;
  }

  .Bartar-right{
    height: 100%;
    width: 50%;
    background-color: yellow;
    display: flex;
    font-size: 16px;
  }
  .Bartar-right1{
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 49px;
  }
   .Bartar-right2{
    width: 50%;
    height: 100%;
    background-color: var( --color-tint);
    text-align: center;
    line-height: 49px;
    color: white  ;
  }
</style>