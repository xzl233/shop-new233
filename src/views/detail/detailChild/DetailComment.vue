<template>
  <div class="comment-warpper" v-if="comment[0]">
    <div class="comment-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-user">
      <img class="img1" :src="comment[0].user.avatar">
     <span class="span1"> {{comment[0].user.uname}}</span>
    </div>
    <div class="comment-content">
      {{comment[0].content}}
    </div>
    <div class="comment-time">
      <!-- <span>{{comment[0].created}}</span> -->
      <span>{{fun}}&nbsp;</span>
      <span>{{comment[0].style}}</span>
    </div>
    <div class="user-ima">
      <img v-for="item in comment[0].images" :src="item" :key="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailComment',
  props:{ 
    comment:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      timer01: 0 
    }
  },
  computed:{
    fun(){
        const time01 = new Date(this.comment[0].created * 1000)
        let y = time01.getFullYear()
        let M = time01.getMonth() + 1
        let d = time01.getDate()
        let h = time01.getHours()
        let m = time01.getMinutes()
        let s = time01.getSeconds()
        return y + '-' +  M + '-' + d + ' ' + h + ':' + m + ':' + s
      
    }
  }
}
</script>

<style scoped>
  .comment-warpper{
    position: relative;
    padding: 10px 10px 50px 10px;
    border-bottom: 10px solid rgba(116, 114, 114, 0.1);
  }
  .comment-top{
    display: flex;
    justify-content: space-between;
    flex-flow:  row nowrap;
    border-bottom: 1px solid rgb(0,0,0,.1);
    padding:10px 0px;
    font-size: 16px; 
  
  }
 .comment-text{
   font-weight: 800;   
  }
.comment-user{
 line-height: 30px;
}
 .comment-user .img1{
   border-radius: 50%;
   height: 50px;
   width: 50px;
   position: relative;
   top: 10px;
  }
  .span1{
    position: relative;
    top: -10px;
    left: 10px;
    font-weight: 900;
    font-size: 18px;
  }
  .comment-content{
    padding:15px 0px;
    font-size: 12px;
    color: rgb(75, 77, 72);
  }
  .comment-time{
    font-size: 9px;
  }
  .user-ima{
    display: flex;
  }
  .user-ima img{
    height: 60px;
    width: 60px;
   margin-right: 10px;
   margin-top: 5px  ;
  }
</style>>
