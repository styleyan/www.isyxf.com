<template>
  <div id="app">
    <sidebar></sidebar>
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import MyHeader from '../components/Header'

export default {
  components: {
    Sidebar,
    MyHeader
  },
}
</script>