<template>
  <div class="TabControl">
    <!-- 根据父组件传过来的text设置v-for循环，获取对应的值再设置相对于的样式 -->
    <div v-for="(item , index) in text" :key="index" class="TabControl-item" :class="{itemColor: num === index}" @click="btn1(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
 
<script>
export default {
  name:'TabControl',
  data(){
    return {
      num:0,
      xzl2335:'ssssss'
    }
  },
  props:{
    text:Array,
    default(){
      return []
    }
  },
  methods:{
    // 设置选项点击事件
    btn1(index){
      // 赋值给data里的num，好进来应对切换时，返回哪一个true触发类的显示红色字体
      this.num = index;
      this.$emit('btnControl' , index); 
    }
  }
}
</script>

<style>
  .TabControl{
    display: flex;  
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background-color: #ffffff ;
    z-index: 10;
  }
  .TabControl-item{
    flex: 1;
  }
  .itemColor{
    color: var(--color-tint);
  }

  .itemColor span{
    padding-bottom: 3px;
   border-bottom: 3px solid var(--color-tint)
  }
</style>