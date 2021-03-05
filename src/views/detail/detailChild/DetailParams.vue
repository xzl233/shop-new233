<template>
  <div v-if="params.rule" class="warper">
    <!-- btn-child其实是相对于父元素的最后一个子元素，切记 -->
    <div ref="fater">
   <div v-for="item1 in tables" :key="item1" class="tables-warpper">
     <span v-for="item2 in item1" :key="item2" class="tables-centent">{{item2}}</span>
   </div>
    </div>
    <div>
      <div v-for="item in params.info.set" :key="item" class="params-set">
        <span>{{item.key}}</span>
        <span>{{item.value}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'DetailParams',
  props:{
    params:{
    type:Object,
    default(){
      return {}
    }
   }
  },
  data(){
    return {
      // tables:[]
    }
  },
  computed:{
    tables(){
      return this.params.rule.tables[0]
    }
  }
}
</script>

<style scoped>
  .warper{
    /* background-color: chartreuse; */
    padding: 10px 10px 20px 10px; 
    border-bottom: 5px solid rgba(41, 40, 40, 0.1);
  }
  .tables-warpper{
    display: flex;
    justify-content: space-between;
    flex-flow:  row nowrap;

  }
  .tables-centent{
    flex: 1; 
    text-align: center;
    border-bottom:1px solid rgba(0, 0, 0, .1) ;
    padding:15px 0px 15px 0px;
    font-size: 12px;
  }
  .tables-warpper:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
   .params-set{
     border-bottom:1px solid rgba(0, 0, 0, .1);
   }
   .params-set span:last-child{
    color: var(--color-tint);
    text-align: left;
   }
  .params-set span{
    font-size: 12px;
    display: inline-block;
    padding:10px 40px 10px 6vw;
  }
</style>