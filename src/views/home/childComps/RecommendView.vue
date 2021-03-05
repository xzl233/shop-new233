<template>
  <div class="recommend">
    <div v-for="(item , index) in recommends" :key = 'index' class="recommendItem">
      <a :href = 'item.link'>
        <img :src="item.image" alt="">
        <div class='recommend-text'>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    width: 100%;
    padding: 10px 0px 20px 0px;
    border-bottom: 10px solid #eee;
  }
  .recommendItem {
    flex: 1;
  }
  .recommendItem img{
    height: 70px;
    width: 70px;
  }
  .recommend-text{
    font-size:14px
  }

</style>