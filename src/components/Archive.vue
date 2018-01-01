<template>
	<div id='main'>
		<article class="post archive">
			<h1 class="title">{{title}}</h1>
			<div class="entry-content" 
        v-for="(item, key) in achieves"
        :key="key">
				<h3>{{ key }} ({{item.length}})</h3>
				<ul>
					<li v-for="(subItem, key) in item" :key="key">
						<router-link :to="{name: 'post', params: { pathName:subItem.pathName  }}" :title="subItem.title">{{subItem.title}}</router-link>&nbsp;
						<span class="date">{{ subItem.createdAt.split(' ')[0] }}</span>
					</li>
				</ul>
			</div>
		</article>
		<my-footer></my-footer>
	</div>
</template>

<script>
export default {
  name: 'archive-doem',
  data() {
    return {
      title: '这是测试',
      achieves: [
        {}
      ],
    }
  },
}
</script>