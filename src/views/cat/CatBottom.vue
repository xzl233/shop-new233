<template>
  <div class="catBottom">
    <div class="catBottom-raduis" :class='{carRed:$store.getters.isShowRed}' @click="AllControl">
        <i class="fa fa-check , font-size-i" aria-hidden="true"></i>
    </div>
    <span style="font-size:18px">全选</span>
    <div class="catText">合计:￥{{$store.getters.CatSpriceAll}}</div>
    <div class="right-cat">去结算:（{{$store.getters.CatCount}}）</div>
  </div>
</template>

<script>
export default {
  name:'CatBottom',
  methods:{
    AllControl(){
      this.$store.commit('IsShowAll')
    }
  }
}
</script>

<style scoped>
  .catBottom{
    position: absolute;
    bottom: 49px;
    width: 100%;
    height: 50px;
    background-color: rgb(235, 235, 235);
    display: flex;
  }
  .catBottom-raduis{
    position: relative;
    top:12px;
    left: 20px;
    height: 25px;
    width: 25px;
    border: 2px solid rgba(0, 0, 0, .3);
    border-radius: 50%;
  }
  .catText{
      font-size: 14px;
      position: relative;
      left: 40px;
      line-height: 50px;
      margin-right: 10px;
  }
  .right-cat{
    position: absolute;
    right: 0px;

    width: 110px;
    height: 100%;
    background-color: red;
    color: white;
    line-height: 50px;
    padding-left: 5px;
    font-size: 14px;
  }
  .font-size-i{
    position: absolute;
    left: 1px;
    top: 1px;
    color: rgb(235, 235, 235);
    /* color: white; */
    font-size: 20px;
  }
  .carRed{
    background-color: red;
  }
  .catBottom span{
    position:relative;
    top: 15px;
    left: 22px;
  }
</style>