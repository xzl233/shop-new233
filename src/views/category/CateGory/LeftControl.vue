<template>
  <div>
      <div v-for="(item , index) in cateList" :key='index' class="titleList"  @click="btnTitle(index)" :class="{titleStyle:index == num}">{{item.title}}</div>
  </div>
</template>

<script>
export default {
 name:'LeftControl',
 props:{
   cateList:{
     type:Object,
     default(){
       return {}
     }
   }
 },
 data(){
   return{
     num:0,
     titleNum:[]
   }
 },
 methods:{
  btnTitle(index){
    this.num = index
    console.log(this.cateList[index].maitKey);
    this.$emit('titleControl' , this.cateList[index].maitKey , this.cateList[index].miniWallkey)
  }
 }
}
</script>

<style>
* { touch-action: none; }
  .titleList{

    height: 40px;
    width: 120px;

    line-height: 40px;
    text-align: center;

    background-color: rgb(243, 241, 241);
    font-size: 12px;
  }
  .titleStyle{
    background-color: white;
    border-left: 3px solid red;
    color: var(  --color-high-text);
    font-size: 18px;
    font-weight: 800;
    touch-action: none; 
  }
</style>