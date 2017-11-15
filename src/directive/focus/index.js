
export default {
  focus: {
    deep: true,
    /**
     * dom初始化触发，触发一次
     * @param {any} el
     */
    inserted(el) {
      el.focus()
    },
    /**
     * 更新时触发
     * @param {any} el 当前节点
     * @param {any} binding 绑定参数
     * @param {any} vnode 当前虚拟dom
     */
    update(el, binding, vnode) {
      el.value = el.value.trim()
    },
  },
}
