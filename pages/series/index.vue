<template>
    <div class="my-series">
    <article v-for="(item) in list"  :key="item.id">
        <h3 class="my-series-h3">{{item.title}}</h3>
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
import { Promise } from 'q';
export default {
    async asyncData({ $axios }) {
        const result = await Promise.all([
            $axios.get("/api/classify/list"),
            $axios.get("/api/client/archive")
        ]).then((data) => {
            const list = []
            const firstRequest = data[0].result
            const secondRequest = data[1].result

            firstRequest.forEach((item, i) => {
                const fl = secondRequest.filter((currItem) => currItem.classifyId === item.id)
                item.list = fl;
                list.push(item)
            })
            return list
        })

        return { list: result}
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

