<template>
    <div id="home">
      <nav-bar class="home-nav">
        <template v-slot:center >商店街</template>
      </nav-bar>
        <tab-control :text ="['流行' , '新款' , '精选']"  @btnControl = 'btnControl1' ref="tabControl244"  :class="{btnControlIshow1: btnControlIshow1}" v-show="btnControlIshow1"></tab-control>

      <scroll class="wrapper" ref="scroll123" :probe-type = '3' @betscroll="btnScroll" :pull-up-load="true" @pullingUp = 'laodMore'>

      <home-swiper :banners = 'banners' @swiperImageLoad= 'swiperImageLoadBtn'></home-swiper>
      <recommend-view :recommends = 'recommends'></recommend-view>
      <feature-view></feature-view>
      <tab-control :text ="['流行' , '新款' , '精选']"  @btnControl = 'btnControl1' ref="tabControl233"></tab-control>
      <goods-list :goodsList = 'GoodsList'></goods-list>
      </scroll>

      <back-top @click.native="backClick" v-show="bactTop"></back-top>
    </div>
</template>  
 
<script> 

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

 
import NavBar from '../../components/common/navbar/NavBar'               
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue' 
import Scroll from '../../components/common/scroll/Scroll.vue'
// import BackTop from '../../components/content/backTop/BackTop.vue'

// axios网络请求数据
import {getHomeMultidata , getHomeGoods} from '../../network/home' 

//导入防抖动的方法
import {debounce} from '../../common/utils' 

// 引入一个公共的文件
 import Bus from '../../network/bus'

//  引入mixin 文件
import {xzl , backTop233} from '../../common/mixin'



export default { 
  components: { 
     NavBar,
     HomeSwiper,
     RecommendView,
     FeatureView,
     TabControl,
     GoodsList,
     Scroll
    //  BackTop
    },
  name:'Home',
  mixins:[xzl , backTop233],
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        // 请求商品数据
        'pop':{page: 0 , list:[]},
        'new':{page: 0 , list:[]},
        'sell':{page: 0 , list:[]}
      },
      currentType:'pop',
      // bactTop:true,
      tabOffsetTop: 0 ,
      btnControlIshow1:false,
      saveY:0

    }
  },
  created(){
    // 1.请求多个数据(banner的数据和banner下面那个大图的数据)
    this.getHomeMultidata1() 
  
    // 2.请求商品数据 
    this.getHomeGoods1('pop')
    this.getHomeGoods1('new')
    this.getHomeGoods1('sell')

    // 3.事件总线的监听 
    // this.$bus.$on('imageLoad' , () => {
    //   console.log('------');
    // })

  
  },
  mounted(){
    
    // 测试mixin的作用
    console.log(this.abc);
    // ----------------------------------------------------------------------

 // this.$refs.scroll123.scroll.refresh()
      // this.$refs.scroll123 && this.$refs.scroll123.refresh();
      // this.$refs.scroll123.refresh();

      // // 这是一个调用防止抖动函数的流程
      // // 把重复触发的事件添加进来，再设置时间限制内不重复触发
      // debounce(this.$refs.scroll123.refresh , 400)
      // // 因为debounce这个函数设置了一个function作为返回值，形成了一个封包
      // const refresh =  function(...args){
      //                         if(timer){
      //                           timer = clearTimeout()
      //                         }
      //                         timer = setTimeout(() =>{
      //                           func.apply(this , args)
      //                         },dalay)
      //                      }
      // // 这个参数的插入，也就相当于调用了(该方法里面的返回值)，也就是不断刷新的方法了
      // var refresh = debounce(this.$refs.scroll123.refresh , 400)
      // 使用该方法
    const refresh = debounce(this.$refs.scroll123.refresh , 400)
  // 1.图片的监听
    Bus.$on('imageLoad' , (data) =>{
      // console.log("图片加载完成");
      if(refresh){
         refresh()
      }
     
    })

  },
  methods:{
    /*
     * 事件监听的方法
     */
   
    // 接收子组件btnControl对父组件发射的自定义事件和参数
    btnControl1(index){
      switch (index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'  
      }
      this.$refs.tabControl233.num  = index
      this.$refs.tabControl244.num  = index
    },

    // backClick(){
    //   // scrollTo是scroll对象里面的一个方法，用于设置该对象的偏移量的
    // //  this.$refs.scroll123.scroll.scrollTo(0,0,5000)
    //   this.$refs.scroll123.scrollTo(0 , 0 , 1000)
    // },
    // 获取子组件的滚动值
      btnScroll(position){
  //  this.bactTop = position
  //  1.判断tabControl是否吸顶
    //  this.bactTop = (-position.y) > 1000
      this.funScroll(position)
  
  //  2.决定tabControl是否吸顶(position :fixed)
      this.btnControlIshow1 = (-position.y) > 542
     },
    //  下拉加载更多
    laodMore(){
     this.getHomeGoods1(this.currentType)
    },

    // banner图片加载完成后获取offsetTop值
    swiperImageLoadBtn(){
          // 2.赋值一个OffsetTop
          // 组件上是没有offsetTop这个方法的，要获取到组件里的元素，所以组件都也一个$el属性，该属性可以获取到组件中的元素
    // this.tabOffsetTop = this.$refs.TabControl.$el.offsetTop
      console.log(this.$refs.tabControl233.$el.offsetTop);
      // console.log(this.tabOffsetTop);
      this.tabOffsetTop = this.$refs.tabControl233.$el.offsetTop
    },


      /*
     * 网络请求的方法
     */
       getHomeMultidata1(){ 
        getHomeMultidata().then( res => {
      // 导出res里面的data.data.banner(单独导出这个banner数据就好，其他的没啥用)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      })
    }, 
    // 多个商品数据的方法
    getHomeGoods1(type){
      // 设置这个变量的目的是动态的获取到goods里的type变量对应的一个page值，然后在去设置加一获取更新的值
      const page = this.goods[type].page + 1;
      getHomeGoods(type , page).then(res => {
        // 把 ...res.data.list 里面的list数据直接遍历然后插入到 this.goods[type].list这个数组里面
                  // ...就是解析res.data.list这个数组（本来push是直接把整个数组
                  //  当成一个元素添加进去[1,2,3]，但有了...之后，变成1,2,3分别插入了）
                  // 就不用去把每一个数组的元素遍历出来在插入进去
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1 
       this.$refs.scroll123 && this.$refs.scroll123.finishPullUp()
    })
    // console.log(this.goods[type].list);
    }
  },
  computed:{
    // 设置一个计算属性，根据三个选框的选项获取到switch里面对应的数据，在传入到子组件里
    GoodsList(){
      console.log(this.goods[this.currentType].list);
      return this.goods[this.currentType].list
    }
  },
   // 设置一下activated方法获取到home进来时的状态
    activated(){
      this.$refs.scroll123.scrollTo(0 , this.saveY , 0)
       this.$refs.scroll123.refresh()
    },
    // 设置一下deactivated方法获取到home离开时的状态
    deactivated(){
      // this.saveY = -1000; 
      this.saveY = this.$refs.scroll123.scroll.y
      console.log(this.$refs.scroll123.scroll.y);
    }
}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: relative;
  }

  .btnControlIshow1{
  position: relative;
  padding-bottom: 40px;
  z-index: 9999;
  }

  /* .tab-control{
    position: sticky;
    top: 44px;
  } */
  
  /* .wrapper{
    margin-top: 44px;
    height: calc(100% - 93px);
  } */
   .wrapper{
   position: absolute;
   top: 44px;
   bottom: 49px;
   /* height: 100%; */
   left: 0;
   right: 0;
   /* overflow: hidden; */
  }
</style>