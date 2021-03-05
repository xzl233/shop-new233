<template>
   <div id="tab-bar">
      <slot>

      </slot>
    </div>
</template>

<script>
export default {
  name:'tabbar',
  components:{

  }
}
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9  ;
    box-shadow:0px -2px 3px rgba(0, 0, 0, .1);
  }

</style>