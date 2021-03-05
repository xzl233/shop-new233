<template>
  <div >
      <swiper class="detail-swiper">
        <swiper-item  class="detail-swiper-item" v-for="(item , index) in detailImage" :key="index">
          <img :src="item" alt="">
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper , SwiperItem} from '../../../components/common/swiper/index'

export default {
  name:'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    detailImage:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

  .detail-swiper{
    height:300px;
    overflow: hidden;
  }

   .detail-swiper-item img{
     height: 100%;
     width: 100%;
  } 
</style>