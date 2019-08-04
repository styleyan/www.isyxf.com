<template>
    <div class="maxim">
        <page-title title="个人箴言"></page-title>
        <dl v-for="item in list" :key="item.id">
            <dt>{{item.gmtCreate}}</dt>
            <dd v-html="item.context"></dd>
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
        let data = await $axios.get("/api/maxim/list");

        return {
            list: data.result,
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


