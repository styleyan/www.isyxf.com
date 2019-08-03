<template>
    <div class="maxim">
        <h2>个人箴言</h2>
        <dl v-for="item in list" :key="item.id">
            <dt>{{item.gmtCreate}}</dt>
            <dd v-html="item.context"></dd>
        </dl>
    </div>
</template>

<script>
export default {
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
    h2{
        margin-bottom 40px
    }
    dl{
        margin-bottom 30px
    }
    dt {
        font-size 22px
    }
    dd {
        font-size 14px
    }
}
</style>


