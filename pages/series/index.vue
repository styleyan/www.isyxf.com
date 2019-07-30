<template>
    <div class="my-series">
    <article v-for="(item) in list"  :key="item.classify">
        <h3 class="my-series-h3">{{item.classifyName}}</h3>
        <p class="my-series-p">{{item.desc}}</p>
        <ul class="my-series-ul">
            <li v-for="(at, key) in item.list" :key="key">
            <router-link :to="{path:`/article/${at.articleId}`, query: { u: at.uuid }}">{{at.title}}</router-link>
            </li>
        </ul>
    </article>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        return {
            list: [
                {
                    "classifyName": "当下不砸",
                    "desc": "现在的你，会感谢曾经努力的自己。",
                    "classify": "g9u5hwv05b",
                    "list": [
                    {
                        "title": "现实与虚拟之间的映射",
                        "createTime": "2018-05-17T16:23:46.585Z",
                        "isShow": true,
                        "classify": "g9u5hwv05b",
                        "articleId": "vnode",
                        "uuid": "lbkbwdcy54",
                        "updateTime": "2018-05-17T16:27:52.748Z"
                    },
                    {
                        "title": "工作中如何做好技术积累",
                        "createTime": "2018-05-07T16:52:55.769Z",
                        "isShow": true,
                        "classify": "g9u5hwv05b",
                        "articleId": "study_vs_work",
                        "uuid": "nzbf25ecytd",
                        "updateTime": "2018-05-07T17:45:37.255Z"
                    },
                    {
                        "title": "blog待完善地方",
                        "createTime": "2018-03-25T06:22:22.000Z",
                        "isShow": true,
                        "classify": "g9u5hwv05b",
                        "articleId": "blog-edit",
                        "uuid": "8dguwayznei",
                        "updateTime": "2018-05-17T16:30:12.890Z"
                    }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="stylus">
.my-series {
  &-ul {
    margin 6px 0 0 20px
  }
  &-p {
    margin-top 2px
  }
  &-h3{
    margin-top 30px
    font-size 1.3em
  }
}
</style>

