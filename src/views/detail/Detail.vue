<template>
  <div id="Detail">
  
   <nav-bar class="navBar">
     <template v-slot:left>
       <div class="imgDiv" @click="btnBack">
       <img src="../../assets/img/common/back.svg" alt="" class="DetailImg">
       </div>
     </template>
     <template v-slot:center >
       <div class="DetailColor">
          <div v-for="(item , index) in titles" :key="index" class="DetailColor1" @click="btnDeta(index)" :class="{colorBtn: index ==index1}">{{item}}</div>
       </div>
     </template>
   </nav-bar>


  <scroll class="warper1"  ref="scroll123" @betscroll = 'contentScroll' :probeType = '3'>

   <detail-swiper :detail-image = 'topImage'></detail-swiper>
   <detail-base-info :base-info = 'goods' ></detail-base-info> 
   <detail-base-shop :base-shop = 'shops'></detail-base-shop>
   <detail-shop-info class="ss" :goodsItem = 'DetailShopInfo' @imageload = 'imageScroll' > </detail-shop-info>
   <detail-params ref="detailPar" :params = 'DetailParams'></detail-params>
   <detail-comment ref="detailCom" :comment = 'DetailComment'></detail-comment>
   <goods-list ref="detailGod" :goodsList = 'DetailCommend' class="goodsList"></goods-list>
   
  </scroll>

  
  <detail-bottom-battar  @addCar = 'addCar'></detail-bottom-battar>

  <toast :title="titlesShop" v-show="isShowTitle"></toast>

  <back-top @click.native="backClick" v-show="bactTop"></back-top>
  </div>
</template>

<script>
// 组件请求
import NavBar from '../../components/common/navbar/NavBar.vue' 
import DetailSwiper from '../detail/detailChild/DetailSwiper'
import DetailBaseInfo from './detailChild/DetailBaseInfo.vue'
import DetailBaseShop from './detailChild/DetailBaseShop.vue'
import DetailShopInfo from './detailChild/DetailShopInfo.vue'
import DetailParams from './detailChild/DetailParams.vue'
import DetailComment from './detailChild/DetailComment.vue'
import goodsList from '../../components/content/goods/GoodsList.vue'
import DetailBottomBattar from './detailChild/DetailBottomBattar.vue'
import Toast from '../../components/common/toast/toast.vue'

// 导入防抖
import {debounce} from '../../common/utils'

// 导入混入的文件
import {backTop233} from '../../common/mixin'

//  网络请求
import {getDetail , Goods , Shop , getDetailRecomment} from '../../network/detail'
import Scroll from '../../components/common/scroll/Scroll.vue'

// 导入vuex映射actions里的方法
import {mapActions} from 'vuex'







export default {
  name:'Detail',
  mixins:[backTop233],
  components:{
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailBaseShop,
    Scroll,
    DetailShopInfo,
    DetailParams,
    DetailComment,
    goodsList,
    DetailBottomBattar ,
    Toast 
  },
  data(){
    return {
      iid:null,
      titles:['商品' , '参数' , '评论' , '推荐'],
      index1:0,
      data233:{},
      topImage:[],
      goods:{},
      shops:{},
      detailInfo:{},
      DetailShopInfo:{},
      DetailParams:{},
      DetailComment:{},
      DetailCommend:[],
      DetailScrollYs:[],
      DetailScrollY:null,
      isShowTitle:false,
      titlesShop:null
    }
  },
  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      this.data233 = res
      // 1.获取轮播图的数据
      const data = res.result
      console.log(res);
      this.topImage = data.itemInfo.topImages

      //  2.获取商品信息
      this.goods = new Goods( data.itemInfo , data.columns , data.shopInfo.services)
      // 3.商铺的信息 
      this.shops = new Shop(data.shopInfo)
      // 4.商品的详细信息 
      this.DetailShopInfo = data.detailInfo
      // 5.商品的尺码参数
      this.DetailParams = data.itemParams
      // 6.用户评论数据
      if(data.rate.cRate){
        this.DetailComment = data.rate.list
      }
      // 7.
    })

    
    // 3.请求推荐数据
    getDetailRecomment().then(res =>{
     this.DetailCommend = res.data.list;
    //  if(res.list){
        console.log(res.data.list);
    //  }
    })

    // 4.给DetailScrollY赋值
    
    this.DetailScrollY =   debounce(() => {
      if(this.$refs.detailPar){
      this.DetailScrollYs = []
      this.DetailScrollYs.push(0)
      this.DetailScrollYs.push(this.$refs.detailPar.$el.offsetTop)
      this.DetailScrollYs.push(this.$refs.detailCom.$el.offsetTop)
      this.DetailScrollYs.push(this.$refs.detailGod.$el.offsetTop)
      console.log(this.DetailScrollYs);
      }
    } , 100)
  },
  mounted (){
  
  },
  methods:{
    // mapActions设置actions的映射关系
    ...mapActions(['addCart']),

    // 设置导航条点击页面滚动到指定位置
    btnDeta(index){
      this.index1 = index
      this.$refs.scroll123.scrollTo( 0 , -(this.DetailScrollYs[index]) , 100 )
      // console.log(index);
    },
    // 设置页面滚动到指定位置，导航跟着改变
    contentScroll(position){
      // 获取到页面的滚动值
      for(let i = 0 ; i < this.DetailScrollYs.length ; i++){
        // console.log(-position.y);
        // console.log(item);
              // 滚动的值大于 
        if( (-position.y + 1) > this.DetailScrollYs[i]){
          // console.log(i);
          // console.log(-position.y + 1);
          // console.log(this.DetailScrollYs[i]);
          this.index1 = i;
        }
      }
      // 滚动触发top
         this.funScroll(position)
    },
    btnBack(){
      this.$router.back()
    },
    imageScroll(){
    // 1.图片刷新完后重新刷新一下scroll的高度
  if(this.$refs.scroll123){
    this.$refs.scroll123.refresh()
   }
    // console.log('1');
//  console.log(this.$refs.scroll123);

    
    // 2.图片刷新完后获取到高度值
    this.DetailScrollY()

    },

    // 接收购物车事件的点击效果，并把值添加到Vuex里，再到购物车页面渲染o
    addCar(){
    
 
      // 1.获取购物车需要展示的数据
     const carData = {}
     carData.itemInfo = this.data233.result.itemInfo
     carData.topImage = this.topImage
     carData.titlle =  this.goods.title
     carData.desc =  this.goods.desc
     carData.highNowPrice =  carData.itemInfo.highNowPrice
     carData.iid = this.iid
     carData.count = this.data233.result.itemInfo.cartNum
    //  carData.count = 0
    //  carData.count = 
    // console.log(carData.iid);

    //  2.将商品添加到购物车里
    // this.$store.state.carList.push(carData)
    // this.$store.commit('addCart' , carData)
    // 逻辑性较高的最好先经过actions在到mutation操作state的数据最好

    // 因为映射的设置，可以直接引用actions里的方法
    this.addCart(carData).then(res =>{
      this.isShowTitle = true
      this.titlesShop = res
    })
    // this.$store.dispatch('addCart' ,carData).then(res => {
    //   console.log(res);
    // })

    console.log(carData.topImage);

         setTimeout(() => {
        this.isShowTitle = false
      }, 1000);
    
    // 跳转
    // this.$router.replace("/cart")
    }
   
  }
}
</script>

<style scoped>
  #Detail{
    height: 100vh;
    position: relative;
    padding-right: 10px;
  }
  .navBar{
    z-index:11;
    position: fixed;
    background-color: white;
    width: 100%;
  }
  .warper1{
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 100%;
  }
  /* .warper-centent{
   
  } */
  .DetailColor{
    display: flex;
  }
  .DetailColor1{
    flex: 1;
  }
  .colorBtn{
    color: var(--color-tint);
  }
  .DetailImg{
    height: 20px;
    width: 20px;
    margin-top: 10px;
  }
  .imgDiv{
    height: 100%;
    width: 50px;
    padding-left: 10px;
  }
  .sss{
    background-color: red;
    height: 50px;
    width: 100ch;
    position: fixed;
    bottom: 0px;
    z-index: 13;
  }
 .goodsList{
   padding-bottom: 120px;
   padding-top: 10px;
 }

</style>