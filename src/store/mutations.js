export default {
  addCounter(state ,oldPayload){
    oldPayload.count++
    console.log('重复的添加count');
   },
   addToCart(state ,payload){
     state.carList.push(payload);
     console.log('新的商品加入购物车');
   },
   IsShowCar(state , payload){
    // state.carList.isShow = ! state.carList.isShow
    // state.carList[index].isShow = !payload
       state.carList[payload.index].isShow = !payload.isShow;
   },
   IsShowAll(state){
    //  获取所以选项的状态(全为true是，则返回true，一个或一个)
     let isShowAll = true;
    for(let item of state.carList){
      isShowAll = item.isShow && isShowAll 
    }
    // 1.判断购物车都是全选中的状态下,则全选按钮取反
    if(isShowAll){
      for (let item of state.carList) {
          item.isShow = false
      }
    }
    // 2.如果全为未选中或有一个以上为未选中的话,则取全部为true
    else {
      for (let item of state.carList) {
        item.isShow = true
    }
    }
   }
}