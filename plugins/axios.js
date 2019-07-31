/**
 * axios 全局配置
 * @param {Object} param0 参数配置
 */

export default function({ $axios, redirect }) {
  // 请求
  $axios.onRequest(config => {
    // 可以做些什么...
    return config
  })

  // 响应
  $axios.onResponse(response => {
    // token无效，强制登出
    if( response.data.code === 0 ) {
      return response.data;
    } else {
        console.log("请求失败")
    }
  });

  // 错误
  $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
  })
}