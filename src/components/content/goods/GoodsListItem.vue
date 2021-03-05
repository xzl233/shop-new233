
<template>
  <div class="GoodsListItem">
    <img :src="showImage" alt="" @load="imageLoad" @click="btnDetail"> 
    <div  class="div01">
    <span class="span1">{{goodsListItem.title}}</span>
    <div class="GoodsListItem_div"><span class="goodsListItem_title1">{{goodsListItem.price}}</span> <span class="goodsListItem_title2" ><i class="fa fa-star-o" aria-hidden="true"></i>{{goodsListItem.cfav}}</span></div>
  </div>
  </div>
</template>

<script>
import '../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css' 

// 设置一个公共事件，存储非父子组件的传递
import Bus from '../../../network/bus'

 
export default {
  name:'goodsListItem',
  data(){
    return {
      name:'xzl233'
    }
  },
  props:{
    goodsListItem:{
      type:Object,
      default(){
        return {}
      }
    } 
  },
  computed:{
    showImage(){
      return this.goodsListItem.img || this.goodsListItem.image || this.goodsListItem.show.img  
    }
  },
  methods:{
    imageLoad(){
      // console.log('imageLoad');
      // 使用事件总线发射自定义事件
          /*
           * 事件总线的优点就是可以在关系复杂的组件之间，直接监听到对应的事件(接收到对应的事件)
           */
    
              Bus.$emit("imageLoad")
        

    },

    // 设置详情页的路由跳转
    btnDetail(){
    // let xzl = this.goodsListItem.iid || this.goodsListItem.item_id
    this.$router.push('/detail/' +  this.goodsListItem.iid)
    // this.$router.push({
    //   path:'/detail/',
    //   query:{
    //     id:'111'
    //   }
    // })
    }
  }
}
</script>

<style>

  .GoodsListItem{
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    width: 48%;
    position: relative;
    font-size: var(--font-size);
    padding-bottom: 35px;
  }
   .GoodsListItem img{
     width: 100%;
     height: 100%;
     /* padding-bottom: 35px; */
     border-radius: 5px;
  }
  .GoodsListItem .span1{
    font-size: 13px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .GoodsListItem_div{
    position: relative;
  }
  .goodsListItem_title1{
    color: var(--color-high-text);
    font-size: 12px;
  }
   .goodsListItem_title2{
   
    font-size: 12px;
  }
  .div01{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    text-overflow: ellipsis;
  }
</style>