<template>
 <div class="warper1"> 
       
    <nav-bar class="home-nav">
        <template v-slot:center >商品分类</template>
    </nav-bar>

   <scroll class="warper233">
    <LeftControl :cateList = 'cateList' class="LeftControl" @titleControl = 'titleControl'></LeftControl>
   </scroll>

  <scroll class="warper244" ref="scroll123">
    <right-shop :shopAll = 'shopAll'></right-shop>
    <tab-control :text="['流行' , '新款' , '精选']" @btnControl='btnControl'></tab-control>
    <goods-list :goodsList = 'controlShop'></goods-list>
   </scroll>
    
   
 </div>
</template>

<script>
// 根据axios的链接获取数据
import {categoryRequset , getSubcategory , getCategoryDetail} from '../../network/category'

// scroll滚动
import Scroll from '../../components/common/scroll/Scroll'

// 导入组件
import LeftControl from './CateGory/LeftControl'
import navBar from '../../components/common/navbar/NavBar'
import RightShop from './CateGory/RightShop.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

// 引入一个公共的文件
 import Bus from '../../network/bus'

 //导入防抖动的方法
import {debounce} from '../../common/utils' 


export default {
  name:'Category',
  components:{
   LeftControl,
   navBar,
   Scroll,
   RightShop,
   TabControl,
    GoodsList
  },
  data(){   
    return {
      cateList:{},
      cateMaitKey:[],
      cateMaitKeyDate:[],
      cateminiWallkey:[],
      shopAll:{},
      controlShop:{},
      key:3627,
      type:['pop' , 'new' , 'sell'],
      num:10062603,
      typeNum:0
    }
  },
  created(){
  // 1.请求所有数据和参数
  this.categoryRequset()
  // 2.页面的默认首页数据
  getSubcategory(this.key).then(res => {
    if(res.data){
      this.shopAll = res.data.list
      // console.log(this.shopAll.data.list);
    }
    })
  // 3.默认页面的control的商品数据
  getCategoryDetail(this.num , this.type[this.typeNum]).then(res =>{
    console.log(res);
    this.controlShop = res
    console.log(this.controlShop);
  })


  },
  mounted(){
   // 图片加载完触发scroll的refresh()方法进行高度的重新计算
     const refresh = debounce(this.$refs.scroll123.refresh , 400)
      Bus.$on('imageLoad' , (data) =>{
      // console.log("图片加载完成");
      if(refresh){
         refresh()
      } 
    })

  },
  methods:{
  // 获取到分类的导航条数据
  categoryRequset(){
       categoryRequset().then(res => {
      console.log(res.data);
      this.cateList = res.data.category.list;
      // console.log(res.data.category.list[0].maitKey);
      for(let item =  0; item < res.data.category.list.length ; item++ ){
        // console.log(res.data.category.list[item].maitKey);
        // 获取到每一个cateMaiKey参数值
        this.cateMaitKey.push(res.data.category.list[item].maitKey)
        // 获取到每一个miniWallkey参数值
        this.cateminiWallkey.push(res.data.category.list[item].miniWallkey)
        // 再通过参数值获取所有的data，push到cateMaitKeyDate和cateminiWallkey里面
      }
      console.log(this.cateMaitKey);
      console.log(this.cateminiWallkey);
    })
  },
  titleControl(list , miniWallkeyList){
    this.key = list
    this.num = miniWallkeyList
    console.log(list);
    console.log(miniWallkeyList);
    getSubcategory(list).then(res =>{
      this.shopAll = res.data.list;
      console.log(this.shopAll);
    });
    getCategoryDetail( this.num , this.type[ this.typeNum]).then(res => {
        this.controlShop = res  
    })
  },
  // 设置btnControl的切换
  btnControl(typeNum){ 
    // console.log(this.type[res]);
    this.typeNum = typeNum
    getCategoryDetail( this.num , this.type[ this.typeNum]).then(res => {
       this.controlShop = res
    })
  }
   
  }
}
</script>

<style scoped>
  .warper1{
    height: 100vh;
    position: relative;
  }

  .warper233{
    height: 86%;
    position: absolute;
    /* background-color: red; */
    overflow: hidden;
    top:44px;
    bottom: 40px;
    left: 0;
    right: 0;
    width: 120px;
    background-color: rgb(235, 233, 233);
    margin-bottom: 200px;
  }
  .home-nav{
    width: 100%;
    background-color: var(--color-tint);
    color: white;
    padding: 0 10px;
  }
    .warper244{
    height: 83%;
    position: absolute;
    /* background-color: red; */
    overflow: hidden;
    top:54px;
    bottom: 57px;
    left: 120px;
    padding: 0px 10px;
  }
  /* .LeftControl{
    height: 95%;
  } */

    .warper244 li{
      overflow: hidden;
      height: 52px;
      width:255px;
      background-color:white;
  }
</style>