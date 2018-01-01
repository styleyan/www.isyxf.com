<template>
  <div><div data-v-e2c3ef3c=""><div data-v-e2c3ef3c="" class="loading-bar loading-bar--to_right" style="width: 0%;"><div data-v-e2c3ef3c="" class="loading-bar-glow"></div></div></div><nav id="sidebar" class="behavior_1 sidebar-image" style="background-image:url(/static/sidebar.webp);transition:background 2s ease-in-out;;"><div class="wrap"><div class="profile"><a href="/"><img src="/static/wow.png" alt="Smallpath的小站"></a><span style="color:#fff !important;">Smallpath的小站</span></div><ul class="buttons"><li><a href="/" title="首页" class="router-link-active" style="color:#fff !important;"><i class="iconfont icon-home"></i><span>首页</span></a></li><li><a href="/archive" title="归档" style="color:#fff !important;" class=""><i class="iconfont icon-archive"></i><span>归档</span></a></li><li><a href="/tag" title="标签" style="color:#fff !important;" class=""><i class="iconfont icon-tags"></i><span>标签</span></a></li><li><a href="/about" title="关于" style="color:#fff !important;" class=""><i class="iconfont icon-user"></i><span>关于</span></a></li><li><a href="/link" title="友链" style="color:#fff !important;" class=""><i class="iconfont icon-link"></i><span>友链</span></a></li><li><a href="/opensource" title="开源" style="color:#fff !important;" class=""><i class="iconfont icon-stackoverflow"></i><span>开源</span></a></li></ul><ul class="buttons"><li><a rel="nofollow" target="_blank" href="https://github.com/smallpath" class="inline" style="color:#fff !important;"><i title="GitHub" class="iconfont icon-github-v"></i></a><a rel="nofollow" target="_blank" href="http://weibo.com/smallpath" class="inline" style="color:#fff !important;"><i title="Twitter" class="iconfont icon-twitter-v"></i></a><a href="/rss.xml" class="inline" style="color:#fff !important;"><i title="RSS" class="iconfont icon-rss-v"></i></a><a target="_blank" href="https://www.google.com/webhp#newwindow=1&amp;safe=strict&amp;q=site:https://smallpath.me" class="inline" style="color:#fff !important;"><i title="Search" class="iconfont icon-search"></i></a></li></ul></div></nav><div><div id="header" style="background-image:url(/static/sidebar.webp);"><div class="btn-bar"><i></i></div><h1><a href="/" style="color:#fff !important;">Smallpath的小站</a></h1><a href="/about" class="me"><img src="/static/wow.png" alt="Smallpath的小站"></a></div><div id="sidebar-mask" style="display: none;"></div></div><div id="main"><div id="page-post"><article class="post detail"><div class="meta"><div class="date">2017-09-12 11:33:21</div></div><h1 class="title">React Native的异步</h1><div class="entry-content"><div id="toc" class="toc"><p><strong>文章目录</strong></p>
<ul>
<li><a href="#60帧">60帧</a></li>
<li><a href="#为什么是flatlist是纯js实现的">为什么是FlatList是纯JS实现的</a></li>
<li><a href="#asyncstorage">AsyncStorage</a><ul>
<li><a href="#隐藏切换">隐藏切换</a></li>
<li><a href="#换一种启动方式">换一种启动方式</a></li>
</ul>
</li>
<li><a href="#alert无法唤出">Alert无法唤出</a></li>
<li><a href="#animated.value与usenativedriver">Animated.Value与useNativeDriver</a></li>
<li><a href="#锁">锁</a></li>
</ul>
</div><p>RN的JSBridge是一个完成度相当高的东西。它带来了开发速度的巨大提升，相应地也导致了运行原生代码时总是异步的这一特征，本文讨论一下RN中异步的一些场景和异步带来的一些问题。</p>
<h2><a href="#60帧" id="60帧" class="anchor"></a><a href="#60帧">60帧</a></h2><p>RN的目标是一秒能够渲染到60帧，这个很多人都知道。往细节上看，一秒60帧即一帧持续16.6毫秒，只要在16.6内能够运行完代码，RN就能够保证它的渲染速度。</p>
<p>基于这个16.6毫秒，RN的异步产生了很多东西</p>
<h2><a href="#为什么是flatlist是纯js实现的" id="为什么是flatlist是纯js实现的" class="anchor"></a><a href="#为什么是flatlist是纯js实现的">为什么是FlatList是纯JS实现的</a></h2><p>早期（在v0.42之前）RN的长列表是ListView，它完全是ScrollView的一层包装，没有任何内存复用机制，这在移动端是不可接受的。一两年前就有不少团队分享过RN的自制长列表方案，在v0.42，RN终于介绍了自己的实现： FlatList</p>
<p>翻阅FlatList的实现，其实有一点非常明显：FlatList是纯JS实现的。为什么不原生实现呢？博主认为就是16.6毫秒的限制，内存复用在滑动中是随时随地都被触发的，使用原生代码无法再16.6毫秒内完成，因此只能选择纯JS。</p>
<p>好在React.PureComponent的配合下，纯JS实现的FlatList也够用了（相较于之前完全没有复用机制的ListView）</p>
<h2><a href="#asyncstorage" id="asyncstorage" class="anchor"></a><a href="#asyncstorage">AsyncStorage</a></h2><p>AsyncStorage的所有方法都是异步的，这带来了一个问题：app启动时不能加载用户设置的参数。这是因为，RN自身的实现是不允许异步启动App的，也就是说下面的代码会报错:</p>
<pre class="hljs"><code>AsyncStorage.get().<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  AppRegistrin.runApplication()
})
</code></pre><p>一个典型的例子是夜间模式，应用默认的参数是日间模式，用户设置后，由于无法先加载设置后运行app，会导致应用启动时先显示日间模式，加载设置完毕后才切换为黑色，这简直是不能忍的用户体验。</p>
<p>目前有两种方式解决这个问题</p>
<h3><a href="#隐藏切换" id="隐藏切换" class="anchor"></a><a href="#隐藏切换">隐藏切换</a></h3><p>使用splash-screen的方式，在加载完设置后将splash-screen隐藏掉即可</p>
<h3><a href="#换一种启动方式" id="换一种启动方式" class="anchor"></a><a href="#换一种启动方式">换一种启动方式</a></h3><p>这里强推荐RN中最良心的第三方库<code>react-native-navigation</code>，它直接支持异步启动app</p>
<h2><a href="#alert无法唤出" id="alert无法唤出" class="anchor"></a><a href="#alert无法唤出">Alert无法唤出</a></h2><p>使用安卓一些第三方库，例如拾取图片唤出Intent时，在回调中调用Alert或者ToastAndroid这种必须在主线程中调用的方法，不会有任何反应。这同样是异步导致的问题，原生代码根本不会出现这个问题</p>
<h2><a href="#animated.value与usenativedriver" id="animated.value与usenativedriver" class="anchor"></a><a href="#animated.value与usenativedriver">Animated.Value与useNativeDriver</a></h2><p>在Aniamted方法中使用useNativeDriver参数，可以将Animated运算过程全部交由原生代码，达到轻易满足60帧的动画效果。使用useNativeDriver参数时，首先在JS层异步组织触发计算过程，之后在原生代码中进行计算。</p>
<p>虽然看起来挺美好，但是实际上坑也蛮多的。因为触发时也是一个异步操作，所以很轻易地能够在<code>react-navigation</code>的TabNavigation中发现Tab下的indicator在滑动时会有大概一秒的延迟。另外，在原生代码计算时虽然帧率是满足了，但是如果此时父组件被重新渲染，则Animated.Value会被强制置为zero-value，比如opacity会被设置为0，这会导致用户看到一次闪烁，并且之后的计算全部停止，意思是opacity已经不会重新变为1了（除非再次重新渲染）。</p>
<p>上面第二个问题，目前RN有一个解决思路，即是将Aniamted.Value在初始化时就给他useNativeDriver参数，这样在重新渲染时原生代码可以通过这个flag继续运算。然而它的实现目前还远呢。</p>
<h2><a href="#锁" id="锁" class="anchor"></a><a href="#锁">锁</a></h2><p>两个异步如果在同时间被触发，很容易会导致UI线程被严重拖慢，也就是锁。这在安卓上经常会遇到，典型的例子是TouchableNativeFeeedback触发onPress时间时涟漪会卡一下，典型的解决办法是使用requestAnimationFrame调整一下onPress的运行时机。</p>
</div><p>本文链接：<a href="https://smallpath.me/post/react-native-async">https://smallpath.me/post/react-native-async</a></p><p>-- <acronym title="End of File">EOF</acronym> --</p><div class="post-info"><p> 发表于 <i>2017-09-12 11:33:21</i> ，
            添加在分类「
            <a data-cate="前端"><code class="notebook">前端</code></a> 」下 ，并被添加「
            <a href="/tag/react%20native" class="" data-tag="react native"><code class="notebook">react native</code></a> 」标签 ，最后修改于 <i>2017-10-02 19:37:26</i></p></div></article><nav class="pagination"><a href="/post/mac-karabiner-elements-for-keyborad" class="prev">« Mac外接键盘利器: karabiner-elements</a><a href="/post/something-about-headless-chrome" class="next">Headless Chrome目前的一些问题 »</a></nav><div class="comments"><div id="disqus_thread"></div></div></div><footer id="footer" class="inner">
  © 2016&nbsp;-&nbsp; Smallpath的小站 &nbsp;-&nbsp;
  <a target="_blank" href="https://github.com/smallpath/blog">博客源码</a><br> Powered by&nbsp;
  <a target="_blank" href="https://github.com/vuejs/vue">Vue2</a>
  &nbsp;&amp;&nbsp;
  <a target="_blank" href="https://github.com/koajs/koa">Koa2</a></footer></div></div>
</template>
