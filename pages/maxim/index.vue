<template>
    <div class="maxim">
        <page-title title="个人箴言"></page-title>
        <dl v-for="item in list" :key="item.id">
            <dt>{{item.gmtCreate}}</dt>
            <dd v-html="item.context"></dd>
        </dl>
        <!-- <timeline>
            <timeline-title>2019</timeline-title>
            <timeline-item v-for="item in list" :key="item.id">
                {{item.gmtCreate}}：{{item.context}}
            </timeline-item>
        </timeline> -->
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle'
// import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

export default {
    head() {
       return {
        title: 'Y. Jer 的虚拟笔记 - 箴言',
       }
    },
    components: { PageTitle },
    /**
     * 服务端渲染
     */
    async asyncData({ $axios }) {
        let data = await $axios.get("/client/maxim/list", {params: {pageNum: 1, pageSize: 100}});
        return {
            list: (data.result && data.result.list) || [],
        }
    }
}
</script>
<style lang="stylus">
.maxim{
    dl{
        margin 0 66px 30px 0
    }
    dt {
        font-size 22px
    }
    dd {
        font-size 14px
    }
}
</style>


