export default {
  /**
   * 格式化数字
   * @param {Number} number 数字
   * @param {Number} digits 小数位数
   * @return {String} 格式化后的数字
   */
  toFixed(number, digits = 0) {
    return Number(number).toFixed(digits)
  },
  /**
   * 测试filters
   */
  testFilter(val) {
    return val + 'ddd'
  },
}
