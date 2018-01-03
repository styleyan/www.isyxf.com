<template>
  <article class="post archive">
    <h1 class="title">归档</h1>
    <div class="entry-content" 
      v-for="(archive, key) in archiveList"
      :key="key">
      <h3>{{archive.name}} ({{archive.list.length}})</h3>
      <ul>
        <li 
          v-for="(item, key) in archive.list"
          :key="key">
          <a :href="item.url">{{item.title}}</a>&nbsp;
          <span class="date">{{item.createTime}}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: 'sssdf',
  data() {
    return {
      archiveList: [
        {
          name: '2017年09月',
          list: [
            {
              url: '/post/something-about-headless-chrome',
              title: 'Headless Chrome目前的一些问题',
              createTime: '2017-09-12 11:33:21',
            },
            {
              url: '/post/something-about-headless-chrome',
              title: 'Headless Chrome目前的一些问题',
              createTime: '2017-09-12 11:33:21',
            },
          ],
        },
        {
          name: '2017年09月',
          list: [
            {
              url: '/post/something-about-headless-chrome',
              title: 'Headless Chrome目前的一些问题',
              createTime: '2017-09-12 11:33:21',
            },
            {
              url: '/post/something-about-headless-chrome',
              title: 'Headless Chrome目前的一些问题',
              createTime: '2017-09-12 11:33:21',
            },
            {
              url: '/post/something-about-headless-chrome',
              title: 'Headless Chrome目前的一些问题',
              createTime: '2017-09-12 11:33:21',
            },
          ],
        },
      ],
    }
  },
}
</script>
