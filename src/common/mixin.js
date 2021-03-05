import Scroll from '../components/common/scroll/Scroll.vue'
import BackTop from '../components/content/backTop/BackTop.vue'

export const xzl = {
  data(){
    return {
      abc:'许钊玲'
    }
  }
}

// 用mixin(混入)的方式把回到顶部封装到这里
export const backTop233 = {
  components:{
    Scroll,
    BackTop
  },
  data(){
    return {
      bactTop:false
    }
  },
  create(){
   
  },
  methods:{
    backClick(){
      // scrollTo是scroll对象里面的一个方法，用于设置该对象的偏移量的
    //  this.$refs.scroll123.scroll.scrollTo(0,0,5000)
      this.$refs.scroll123.scrollTo(0 , 0 , 1000)
      // console.log(this.$refs.scroll123.$el);
    },
  //   // 获取子组件的滚动值
  //     btnScroll(position){
  // //  this.bactTop = position
  // //  1.判断tabControl是否吸顶
  //    this.bactTop = (-position.y) > 1000
  
  // //  2.决定tabControl是否吸顶(position :fixed)
  //     this.btnControlIshow1 = (-position.y) > 542
  //    }
    funScroll (position) {
    this.bactTop = (-position.y) > 500
 }
  }
}