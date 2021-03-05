<template>
  <div class="toast-warpper" v-show="isShow">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name:'toast',
  props:{
      title:{
        type:String
      }
  },
  data(){
    return {
      isShow:true
    }
  },
  methods:{
    timer01(){
       setTimeout(() => {
      this.isShow = false
    }, 1500);
  }
  }
}
</script>

<style>
  .toast-warpper{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50% ,-50% , 0);

    height: 50px;
    width: 140px;
    background-color: rgba(0, 0, 0, .6);
    color: white;
    border-radius: 8%;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    overflow: hidden;
  }

</style>