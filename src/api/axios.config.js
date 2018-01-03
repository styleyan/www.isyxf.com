/**
 * @file Axios基础配置，"请求/响应"拦截，不涉及业务逻辑。
 */
import axios from 'axios'
import router from '../router'
// 请求配置
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-Width'] = 'XMLHttpRequest'
  return config
})

// 响应数据配置
axios.interceptors.response.use((response) => {
  const data = response.data
  if (data.status) {
    return data
  }
  // 10001:用户未登录
  if (data.code === '10001') {
    router.push({name: 'login'})
    return data
  }
  const err = new Error(data.errorMsg)
  err.data = data
  err.response = response
  throw err
}, (err) => {
  return {
    msg: err.response.statusText,
    code: err.response.status,
  }
})