<template>
  <div>
        <!-- 轮播图插件 -->
      <swiper>
        <swiper-item v-for="(item , index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" @load="imgeLoad">
          </a>
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper , SwiperItem } from '../../../components/common/swiper/index.js' 

export default {

  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
     Swiper,
     SwiperItem 
  },
  data(){
    return {
       isLoad:false
    } 
  },
  methods:{
    imgeLoad(){
      // console.log('--------');
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
      
    }
  }
}
</script>

<style>

</style>