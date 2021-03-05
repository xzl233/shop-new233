export function  debounce(func , dalay){ 
                              // 防抖函数
                              // 两个参数，第一个参数是需要设置防抖的函数名fun，第二个是时间time
                              let timer = null
                              // console.log(this);  
                              return function(...args){
                              if(timer){
                              clearTimeout(timer)
                             }
                              timer = setTimeout(() =>{ 
                              func.apply(this , args)
                             },dalay)
                         }
 
                     }
