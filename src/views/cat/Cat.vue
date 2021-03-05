<template>
<div class="warper-height">
    <nav-bar class="home-nav">
        <template v-slot:center class="nav-bar" >购物车（{{carNumLength}}） </template>
    </nav-bar>

  <scroll class="warper01">
    <div>
      

       <div v-for='(item , index) in $store.state.carList' :key="index" class="item-listBack">
       <div @click="btnIshow(item.isShow , index)"  class="box-raduis" :class="{showcolor:item.isShow}">
         <i class="fa fa-check , size-i" aria-hidden="true"></i>
       </div>

        <div>
          <img :src="item.itemInfo.topImages[0]"  alt="">
        </div>

        <div class="flexItem">
          <p class="xzl23" style=" font-weight: 800;font-size:16px">{{item.itemInfo.title}}</p>
          <p class="xzl23" style="font-size:14px">{{item.itemInfo.desc}}</p>
          <div class="flex-bet"><span style="color:orange;font-size:18px;font-weight: 600;">{{item.itemInfo.price}}</span> <span style="font-weight: 800;font-size:17px"><i class="fa fa-times , i-style" aria-hidden="true"></i>{{item.count}}</span></div>
        </div>

      </div>  
     </div>
</scroll>

<cat-bottom></cat-bottom>

</div>
</template>

<script>

import NavBar from "../../components/common/navbar/NavBar";
import CatBottom from './CatBottom.vue';

// 导入better-scroll
import Scroll from '../../components/common/scroll/Scroll'

import { mapGetters } from 'vuex'


export default {
  name:'Cat',
  components:{
    NavBar,
    Scroll,
    CatBottom
  },
  data(){
    return {
      hhh:false,
      btnishow:true,
      num:0
    }
  },
  methods:{
   btnIshow(isShow , index){
     this.$store.commit('IsShowCar' , {isShow,index})
   }
  },
  computed:{
     ...mapGetters([
      'carNumLength'
    ])
  },
  mounted(){
    // console.log(this.$store.state.carList[0].isShow);
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
    font-weight: 800;

  }
  .xzl{
    color: red;
  }
  .warper-height{
    height: 100vh;
    position: relative;
  }
  .warper01{
   position: absolute;
   top: 44px;
   bottom: 100px;
   left: 0;
   right: 0;
   overflow: hidden;
  }
  .item-listBack{
    height: 120px;
    width: 100%;
    display: flex;
    padding: 10px;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
   .item-listBack img{
    height: 100px;
    width:70px;
    margin-right: 20px;
    margin-left: 15px;
    border-radius: 5px;
  }

  .flexItem{
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }
  .flexItem p{
    white-space:nowrap;/* 不换行 */   
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    padding-bottom:10px ;
  }
  .flex-bet{
    display: flex;
    padding: 20px 0px 0px 10px;
    justify-content: space-between;
  }
  .box-raduis{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    /* background-color:orangered; */
    position:absolute;
    top:50%;
    transform: translateY(-10px);
    left: 2px;
    border: 1px solid rgba(0, 0, 0, .2);
  }
  .showcolor{
    background-color:red;
  }
  .size-i{
    position: absolute;
    left: 1px;
    font-size: 14px;
    color: white;
  }
</style>