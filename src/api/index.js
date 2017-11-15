import axios from 'axios'

// 请求配置
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-Width'] = 'XMLHttpRequest'
  return config
})

// 响应数据配置
axios.interceptors.response.use((response) => {
  const data = response.data
  if (data.state) {
    return data
  }

  const err = new Error(data.description)
  err.data = data
  err.response = response
}, (err) => {
  return err
})

// 添加到Vue全局，方便调用
axios.install = (Vue) => {
  Vue.prototype.$axios = axios
}

export default axios

