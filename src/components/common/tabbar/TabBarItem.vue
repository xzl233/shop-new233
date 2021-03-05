<template>
<!-- 给item展示的图片设置绑定动态属性 -->
  <div class="tab-bar-item" @click="itemClick()">
       <div v-if="!isActive"><slot name="item-img"></slot></div>
       <div v-else><slot name="item-img-active"></slot></div>
       <!-- 在外面设置一个div防止被替换掉，从而设置一些默认的样式等 -->
       <div  :class="{active: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String 
  },
  data(){
    return {
      // isActive: true
    }
  },
  computed:{
    isActive() {
      // return this.$route.path.indexOf(this.path) !== -1;
      return this.$route.path == this.path 
     }
  },
  methods:{ 
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style>
  .tab-bar-item{
    /* float: left ; */
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

   .tab-bar-item img{
     height: 24px;
     width: 24px;
     margin-top: 3px;
     /* 这个的作用是为了去除图片底下默认空出的三个像素 */
     vertical-align: middle ;
     margin-bottom: 3px;
  }

  .active{
    color: red;
  }
</style>