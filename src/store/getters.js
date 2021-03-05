export default {
  carNumLength(state){
    return state.carList.length
  },
  CatCount(state){
     let countAll = 0
    for (let item of state.carList) {
      if (item.isShow) {
          countAll += item.count
      }
    }
     return countAll
  },
  CatSpriceAll(state ,getters){
    let SpriceCount = 0;
    for (let item of state.carList) {
      if(item.isShow){
        SpriceCount += item.itemInfo.lowNowPrice * item.count;
      }
    }
    return SpriceCount.toFixed(2)
  },
  isShowRed(state){
    if(state.carList.length === 0) return false  
    for (let item of state.carList) {
      if(!item.isShow){
           return false
      }
    }
    return true
  }
}