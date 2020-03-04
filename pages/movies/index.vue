<template>
    <div class="movies-page">
        <page-title title="个人影视"></page-title>
        <dl v-for="item in list" :key="item.id">
            <dt>{{item.type}}</dt>
            <dd>
                <ul>
                    <li v-for="item in item.list" :key="item.id">
                        <i v-if="item.boby" class="iconfont icon-baby"></i>
                        <i v-else class="iconfont icon-spot"></i>
                        {{item.movieName}} 
                    </li>
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'

export default {
    head() {
        return {
            title: 'Y. Jer 的虚拟笔记 - 影视',
        }
    },
   components: { PageTitle },
   /**
   * 服务端渲染
   */
  async asyncData({ $axios }) {
    const data = await $axios.get("/client/movies/list", {params: {pageNum: 1, pageSize: 1000}});
    let list = (data.result && data.result.list) || []
    // type (1:动漫, 2:纪录片, 3:电影, 4:连续剧)
    let mapType = {}

    list.forEach((item) => {
        if (item.type < 5 && item.type > 0) {
            if (!mapType[item.type]) {
                mapType[item.type] = []
            }
            mapType[item.type].push(item)
        }
    })
    return {
        list: [
            {
                type: "动漫",
                list: mapType[1]
            },
            {
                type: "纪录片",
                list: mapType[2]
            },
            {
                type: "电影",
                list: mapType[3]
            },
            {
                type: "连续剧",
                list: mapType[4]
            }
        ]
    }
  }
}
</script>
<style lang="stylus">
.movies-page{
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
    .icon-baby{
        color #0b0
    }
}
</style>


