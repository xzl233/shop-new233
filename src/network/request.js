import axios from "axios";

// 其实最终方案的axios的本身就是返回一个promise所以，直接写返回就好
export function request(config) {
  // 一.创建axios的实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })

  // 二.axios的拦截器,在获取config(url设置等)时做一些设置
        // 请求拦截的各种作用
  instance.interceptors.request.use(config =>{
    return config
  },err =>{
    // 这是发送失败
    console.log(err);
  });
        // 响应拦截的各种作用(对数据进行各种设置)
  instance.interceptors.response.use( res => {
    // console.log(res);
    return res.data
  },err =>{
    console.log(err);
  })

  // 三.发送真正的网络请求
  return instance(config)
  
}
