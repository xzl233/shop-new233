export default {
  addCart(context , payload){ 
    return new Promise((resolve , reject)=>{
      // payload新添加的商品
          let oldPayload = null
          for(let item of context.state.carList){
            if(item.iid === payload.iid){
              oldPayload = item
            }
          }
          // 2.判断oldpayload
              // 判断是否添加新的商品进数组里
          if (oldPayload) {
            // oldPayload.count += 1; 
            context.commit('addCounter' , oldPayload)
            resolve('商品数量+1')
          }
          else{
            payload.count = 1;
            payload.isShow = true;
            // state.carList.push(payload)
            context.commit('addToCart' , payload)
            resolve('添加商品成功')
          }
          // console.log(state.carList[0].count);

          // 判断重复点击的购物车只增加它的count的数量，其他不变
          // state.carList.push(payload)
        
          // console.log(state.carList[0].iid);
    }) 
  }
}