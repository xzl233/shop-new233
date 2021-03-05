<template>
     <div>
       <div v-for='item in $store.state.carList' :key="item" class="item-listBack">
 
        <div>
          <img :src="item.itemInfo.topImages[0]"  alt="">
        </div>

        <div class="flexItem">
          <p class="xzl23" style=" font-weight: 800;">{{item.itemInfo.title}}</p>
          <p class="xzl23" style="font-size:14px">{{item.itemInfo.desc}}</p>
          <div class="flex-bet"><span style="color:orange;font-size:18px;font-weight: 600;">{{item.itemInfo.price}}</span> <span style="font-weight: 800;font-size:17px"><i class="fa fa-times" aria-hidden="true"></i>{{item.count}}</span></div>
        </div>

      </div>
     </div>
</template> 

<script>
export default {
  name:'CatItem'
}
</script>

<style scoped>
 
  .item-listBack{
    height: 120px;
    width: 100%;
    display: flex;
    padding: 10px;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
   .item-listBack img{
    height: 100px;
    width:70px;
    margin-right: 20px;
    margin-left: 15px;
    border-radius: 5px;
  }

  .flexItem{
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
  }
  .flexItem p{
    white-space:nowrap;/* 不换行 */   
    overflow:hidden;/* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
    padding-bottom:10px ;
  }
  .flex-bet{
    display: flex;
    padding: 20px 0px 0px 10px;
    justify-content: space-between;
  }
</style>