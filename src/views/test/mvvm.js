/* eslint-disable */
class Mvvm {
  constructor(options = {}) {
    this.$options = options
    let data = this._data = this.$options.data
    // 数据劫持
    observe(data)
    // this 代理了this._data
    Object.keys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        configurable: true,
        enumerable: true,
        get() {
          return this._data[key]
        },
        set(newVal) {
          this._data[key] = newVal
        },
      })
    })
    // 编译
    new Compile(options.el, this)
  }
}

// 创建Compile构造函数
function Compile(el, vm) {
  // 将el挂在到实例上方柏霓调用
  vm.$el = document.querySelector(el)
  // 在el范围里将内容都拿到，当然不能一个一个的拿
  // 可以选择移到内存这种去然后放入文档碎片中，节省开销
  let fragment = document.createDocumentFragment()

  while (child = vm.$el.firstChild) {
    fragment.appendChild(child) // 此时将el中内容放入内存中
  }
  // 对el立面的内容进行替换
  function replace(frag) {
    Array.from(frag.childNodes).forEach(node => {
      let txt = node.textContent
      // 正则匹配 {{}}
      let reg = /\{\{.*?)\}\}/g
      if (node.nodeType === 3 && reg.test(txt)) {
        // 匹配到的第一个分组如：a.b, c
        console.log(RegExp.$1)
        let arr = RegExp.$1.split('.')
        let val = vm

        arr.forEach(key => {
          // 如this.a.b
          val = val[key]
        })

        // 用trim方法去除以下首尾空格
        node.textContent = txt.replace(reg, val).trim()
      }
      // 如果还有子节点，继续递归replace
      if (node.childNodes && node.childNodes.length) {
        replace(node)
      }
    })
  }
  // 替换内容
  replace(fragment)
  // 在将文档碎片放入el中
  vm.$el.appendChild(fragment)
}

/**
 * 创建一个Observe构造函数
 * 写数据劫持的主要逻辑
 */
function Observe(data) {
  // 所谓数据劫持就是给对象增加get,set，把data属性通过defineProperty的方式定义属性
  Object.keys(data).forEach((key) => {
    let val = data[key]
    // 递归继续向下找，实现深度的数据劫持
    observe(val)
    // 定义监听
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {
        return val
      },
      set(newVal) {
        // 设置的值和以前值一样就不理它
        if (val === newVal) return
        // 如果以后再获取值(get)的时候，将将该车设置的值返回去
        val = newVal
        // 当设置新值是个对象时，也需要再去定义属性
        observe(newVal)
      },
    })
  })
}

/**
 * 外面在写一个函数，不用每次都写个new，也方便递归调用
 * @param {Object} data 观察对象
 */
function observe(data) {
  // 如果不是对象的话直接return掉，防止递归溢出
  if (!data || typeof data !== 'object') return
  return new Observe(data)
}

// 发布与订阅模式
class Dep{
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    // 绑定的方法，都有一个update方法
    this.subs.forEach(sub => sub.updated())
  }
}

/**
 * 监听函数
 * 通过Watcher这个类创建的实例，都拥有update方法
 */
 class Watcher {
   // 将fn放到实例上
   constructor(fn) {
     this.fn = fn
   }

   updated() {
     this.fn()
   }
 }