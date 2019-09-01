<template>
    <div class="books-page">
        <page-title title="个人书单"></page-title>
        <dl v-for="item in list" :key="item.type">
            <dt>{{item.type}}</dt>
            <dd>
                <ul>
                    <li v-for="item in item.list" :key="item.id"><i class="iconfont icon-spot"></i>{{item.bookName}}</li>
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'

export default {
   components: { PageTitle },
   /**
   * 服务端渲染
   */
  async asyncData({ $axios }) {
    const data = await $axios.get("/api/books/list", {params: {pageNum: 1, pageSize: 200}});
    const unreadList = []
    const onreadList = []
    const alreadyReadList = []
    let list = (data.result && data.result.list) || []
    
    list.forEach((item) => {
        // 0：未读, 1: 正在读, 2：已读
        switch (item.progress) {
            case 0:
                unreadList.push(item)
                break;
            case 1:
                onreadList.push(item)
                break;
            case 2:
                alreadyReadList.push(item)
                break;
            default:
                break;
        }
    })

    return {
        list: [
            {
                type: "正在读",
                list: onreadList
            },
            {
                type: "已读",
                list: alreadyReadList
            },
            {
                type: "未读",
                list: unreadList
            }
        ]
    }
  }
}
</script>
<style lang="stylus">
.books-page{
    dl{
        margin-bottom 22px
    }
    dt{
        font-size 22px
        font-weight 500
    }
    dd{
        font-size 14px
    }
}
</style>


