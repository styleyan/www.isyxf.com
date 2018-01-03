<template>
  <section id="page-index">
    <article class="post" 
      v-for="(item, key) in aritcleList"
      :key="key">
      <div class="meta">{{item.createTime}}</div>
      <h1 class="title"><a :href="item.url">{{item.title}}</a></h1>
      <div class="entry-content">
        <div v-html="item.html"></div>
        <a :href="item.url">阅读更多&raquo;</a>
      </div>
    </article>
    <nav class="pagination">
      <a href="/?page=2" class="next">下一页 &raquo;</a>
      <div class="center">
        <a href="/archive" class="">博客归档</a>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'index-page',
  data() {
    return {
      aritcleList: [{
        createTime: '2017-09-12 11:33:21',
        title: 'React Native的异步',
        html: '<p>RN的JSBridge是一个完成度相当高的东西。它带来了开发速度的巨大提升，相应地也导致了运行原生代码时总是异步的这一特征，本文讨论一下RN中异步的一些场景和异步带来的一些问题。</p>',
        url: '/post',
      }, {
        createTime: '2017-09-12 11:33:21',
        title: 'React Native的异步',
        html: '<p>RN的JSBridge是一个完成度相当高的东西。它带来了开发速度的巨大提升，相应地也导致了运行原生代码时总是异步的这一特征，本文讨论一下RN中异步的一些场景和异步带来的一些问题。</p>',
        url: '/post',
      }, {
        createTime: '2017-09-12 11:33:21',
        title: 'React Native的异步',
        html: '<p>RN的JSBridge是一个完成度相当高的东西。它带来了开发速度的巨大提升，相应地也导致了运行原生代码时总是异步的这一特征，本文讨论一下RN中异步的一些场景和异步带来的一些问题。</p>',
        url: '/post',
      }],
    }
  },
  created() {
    console.log('这是个测试')
  },
}
</script>

