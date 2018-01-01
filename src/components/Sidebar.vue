<template>
  <nav id=sidebar class="behavior_1 sidebar-image" 
    style="background-image:url(https://smallpath.me/static/sidebar.webp);transition:background 2s ease-in-out">
    <div class=wrap>
      <div class=profile>
        <a href="/"> 
          <img src="http://static.5755.com/image/public/logo.png" alt="这是图标">
        </a> 
        <span>Jer _yxf</span>
      </div>
      <ul class="buttons">
        <li v-for="(menu, key) in menu" :key="key">
          <router-link 
            style="color:#fff !important;"  
            :to="{ path: menu.url }" :title="menu.label"> <i class="iconfont" :class="'icon-' + menu.option"></i> <span>{{menu.label}}</span></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'dddd',
  data() {
    return {
      menu: [{
        url: '',
        label: '',
        option: '',
      }]
    }
  },
}
</script>
 
<style>
@import '../assets/css/icon.css';
@import '../assets/css/article.css';
@import '../assets/css/base.css';
@import '../assets/css/footer.css';
@import '../assets/css/header.css';
@import '../assets/css/highlight.css';
@import '../assets/css/pagination.css';
@import '../assets/css/sidebar.css';
@import '../assets/css/responsive.css';

.sidebar-image {
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
}

.sidebar-image:hover {
  background-position: right center;
}
</style>

