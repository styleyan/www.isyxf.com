<template>
    <h2 class="page-title">{{title}}</h2>
</template>
<script>
export default {
    name: "page-title",
    props: {
        title: {
            type: String,
            default: ""
        }
    }
}
</script>
<style lang="stylus">
.page-title{
    margin: 20px 66px 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    color: #888;
}
</style>


