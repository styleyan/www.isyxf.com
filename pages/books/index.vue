<template>
    <div class="books-page">
        <h2>个人书单</h2>
        <p class="books-page-desc">本页面的内容，由两个步骤生成：</p>
        <dl>
            <dt>正在读</dt>
            <dd>
                <ul>
                    <li v-for="item in onreadList" :key="item.id">{{item.bookName}}</li>
                </ul>
            </dd>
        </dl>

        <dl>
            <dt>已读</dt>
            <dd>
                <ul>
                    <li v-for="item in alreadyReadList" :key="item.id">{{item.bookName}}</li>
                </ul>
            </dd>
        </dl>

        <dl>
            <dt>未读</dt>
            <dd>
                <ul>
                    <li v-for="item in unreadList" :key="item.id">{{item.bookName}}</li>
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
   /**
   * 服务端渲染
   */
  async asyncData({ $axios }) {
    const data = await $axios.get("/api/books/list");
    // 未读
    const unreadList = []
    // 在读
    const onreadList = []
    // 已读
    const alreadyReadList = []

    data.result.forEach((item) => {
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
        alreadyReadList,
        unreadList,
        onreadList,
    }
  }
}
</script>
<style lang="stylus">
.books-page{
    &-desc{
        margin-bottom 40px
    }
    dl{
        margin-bottom 30px
    }
    dt{
        font-size 18px
        font-weight bold
    }
    dd{
        font-size 14px
    }
}
</style>


