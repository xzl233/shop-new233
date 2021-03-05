<template>
  <div class="DetailShopInfo-warpper">
    <div class="DetailShopInfo-title">
      <span>{{goodsItem.desc}}</span>
    </div>
  <div v-if="goodsItem.detailImage" class="detailImage">
  <h2 class="DetailShopInfo-text" style="padding-bottom:10px">{{goodsItem.detailImage[0].key}}</h2>
  <img v-for="item in goodsItem.detailImage[0].list"  :src="item" :key="item" alt="" @load="imageLoad">
  </div>

  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  data(){
    return {
      counter:0,
      imageLength:0
    }
  },
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imageLoad(){
      if (+this.counter === this.imageLength){
        this.$emit('imageload')
      }    
    }
  },
    watch:{
      detailInfo(){
          this.imageLength = this.goodsItem.detailImage[0].list.length
      } 
    }
}
</script>

<style>
  .DetailShopInfo-warpper{
    padding: 10px 10px 20px 10px;
    height: 100%;
    border-bottom: 5px solid rgba(0 , 0 , 0 , .1);
  }
  .DetailShopInfo-title{
    border-top:1px solid rgba(0 , 0 , 0 , .1) ;
    border-bottom:1px solid rgba(0 , 0 , 0 , .1) ;
    font-size: 14px;
    font-weight:bold;
    text-indent:2em;
    padding-top: 5px;
  }
  .DetailShopInfo-text{
    padding-top: 10px;
    font-size: 14px;
    color: rgba(0 , 0 , 0 , 1);
    font-weight:600;
  }
   .detailImage{
     width: 100%;
     overflow: hidden;
     padding:0px 10px 0 0px;
   }
  .detailImage img{
    width: 100%;    
  }
</style>