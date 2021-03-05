<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    props:{
        probeType:{
            type:Number,
            default(){
                return 0
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false 
            }
        }  
    },
    data(){
        return{
            scroll:null,
            maseges:'我是scroll里面的内容'
        }
    },
    mounted(){   
        // 1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper , {
        click:true,
        // 判断滚动对象1-3的检查类型
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
        }),

        // 2.监听滚动的位置
        this.scroll.on('scroll' , (position) => {
            //  console.log(position.y);   
            this.$emit('betscroll' , position)  
        }),

        // 3.监听上拉事件(pullingUp这是一个上拉完成事件)
        this.scroll.on('pullingUp' , () => {
            // console.log("上拉完成");
            this.$emit('pullingUp') 
        })
    },
    methods:{
        scrollTo(x ,y ,time){
           this.scroll &&  this.scroll.scrollTo(x , y , time)
        },
        // 完成加载对象
        finishPullUp() {
           this.scroll &&  this.scroll.finishPullUp()
        },

        // 图片加载完成后调用refresh
        refresh() {
            console.log('---refresh的打印次数---');
            // console.log(this);
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style>

</style>