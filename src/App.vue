<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  background: #ddd;
  color: #666;
  font-size: 14px;
  font-family: "-apple-system","Open Sans","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,sans-serif;
}
.container{
  max-width: 1600px;
  min-height: 100%;
  position: relative;
}
</style>
