import axios from 'axios'
import Ajax from './install'
import './axios.config'

/**
 * 发送ajax请求列表
 */
class Apis extends Ajax {
  /**
   * 文章列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  indexList(params) {
    return super.post('/api/www/blogs', params)
  }
  /**
   * 文章列表
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294680
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  blogList(params) {
    return super.post('/api/blog/list', params)
  }
  /**
   * 文章详情
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294889
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  blogDetail(params) {
    return super.post(`/api/blog/detail/${params.uuid}`)
  }
  /**
   * 友情链接
   * @url http://rapapi.org/workspace/myWorkspace.do?projectId=29324#294889
   * @param {Object} params - 请求参数
   * @returns {Promise} 请求结果
   */
  blogLinks(params) {
    return super.post('/api/blog/get/link')
  }
}

const apis = new Apis(axios)
export default apis
