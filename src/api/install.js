/**
 * 发送ajax底层分装
 * @class Base
 */
export default class Ajax {
  /**
   * 初始化参数
   * @memberof Base
   * @param {Object} axios - ajax请求库
   * @param {String} prefix - ajax url 请求前缀
   */
  constructor(axios, prefix = '') {
    if (!(axios instanceof Function) || !axios.Axios) {
      throw new Error('第一个参数需要传入axios')
    }

    this.axios = axios
    this.prefix = prefix
  }

  /**
   * 发送ajax请求
   * @param {String}   type       - 请求类型
   * @param {String}   url        - 请求地址
   * @param {Object}   params     - 请求参数
   * @param {Object}   headers    - 添加请求头
   * @returns {Promise} 请求成功/失败promise对象
   */
  __send(type, url, params = {}, headers = {}) {
    let _data = type === 'post' ? params : { params }
    return new Promise((resolve, reject) => {
      this.axios[type](`${this.prefix}${url}`, _data, { headers }).then((data) => {
        resolve(data.result)
      }).catch((e) => {
        reject(e.data)
      })
    })
  }

  /**
   * ajax get请求
   * @param {String}   url         - 请求地址
   * @param {Object}   params      - 请求参数
   * @param {Object}   headers     - 添加请求头
   * @returns {Promise} 请求成功/失败promise对象
   */
  get(url, params, headers) {
    return this.__send('get', url, params, headers)
  }

  /**
   * ajax post请求
   * @param {String}   url           - 请求地址
   * @param {Object}   params        - 请求参数
   * @param {Object}   headers       - 添加请求头
   * @returns {Promise} 请求成功/失败promise对象
   */
  post(url, params, headers) {
    return this.__send('post', url, params, headers)
  }

  /**
   * 挂载到vue原型中
   * @param {Object} Vue - vue对象
   */
  install(Vue) {
    Vue.prototype.$ajax = this
  }
}
