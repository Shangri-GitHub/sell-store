![](https://img.shields.io/travis/:user/:repo.svg) 	![](https://img.shields.io/hackage-deps/v/lens.svg)
# vue全家桶搭建商城移动端App
### mint-ui element-ui下的一款产品，打理移动端的UI特别好用，提供丰富的组件
### 官方文档介绍：Vue.js，一套渐进式的JavaScript框架，拥有简单小巧的核心，却足以应付任何规模的应用。因此，想通过仿闲鱼移动端App这个项目来感受vue带来的灵活与轻盈。
话不多说，来看看效果吧！

**首页** <br>

![](https://github.com/Shangri-GitHub/sell-store/blob/master/doc/home.gif) <br>
 
**发现**<br>

![](https://github.com/Shangri-GitHub/sell-store/blob/master/doc/discover.gif) <br>

**购物车**<br>

![](https://github.com/Shangri-GitHub/sell-store/blob/master/doc/cart.png) <br>

**我的**<br>

![](https://github.com/Shangri-GitHub/sell-store/blob/master/doc/me.png) <br>

### 在线预览
_____
**线上体验**： [商城首页](http://hanxing.freekj.men) PC浏览器打开请切换成移动端模式效果更佳<br>
**源码**： [源码](https://github.com/Shangri-GitHub/sell-store/) <br>

# 技术栈
* vue 页面显示
* vue-router实现spa
* vuex 组件状态共享
* axios 解决异步请求
* es6 代码书写优雅美观
* webpack 文件打包
* html5 css3 内容与装饰
* 七牛云图片存储
* flex布局
* 返回停留在上页的位置
* html5 css3 内容与装饰
* font-awesome 引入字体图标
* 引入scss的loader
* ly-tab 移动端滑动导航

# 组件库
* mint-ui element-ui下的一款产品，打理移动端的UI特别好用，提供丰富的组件
* vue-awesome-swiper 轮播图插件，虽然mint-ui也提供了轮播图插件，但是突然想玩一下swiper，所以咱们借用一下swiper组件
* vue-region-picker china-area-data 我们国家城市选择器组件，便于地址的管理

# 实现功能
* **登录与注销**<br>
  用户进入App会有两种状态，登录和未登录。当你未登录的时候，你查看的界面是有效的，在必要的时候，会提醒你进行登录，所以，这就会产生状态的切换，
  那我们要怎样来登记这个状态呢？`Localstorage`?可以。但是这里我使用了`vuex`来实现状态的共享，因为我需要保存的状态有太多了，当你的页面超过了十几个，你就可以考虑使用vuex.
* **发布商品**<br>
  [七牛云](https://www.qiniu.com)
  用户可以发布制定的商品，这里的核心就是在移动端设备上调用相机，调用相册，现在科技发展的太快，移动设备像素越来越高，随便一张照片2M+，因此解决移动端图片上传问题，把照片传到七牛云服务器上，然后把返回来的路径传给后端，后端把地址保存起来。
* **删除发布**<br>
  删除发布的难点在于我们怎么去实现绑定在v-for渲染出来的模板上的方法，这么说可能有点绕口，简单的说，怎么知道你就是要删除某个发布。其实，解决这个疑惑，我们就要用好v-for这个指令，它可以有index这个参数来标识当前的索引，而刚刚好，这个标识就是我们用户选中项的索引值，所以，只要我们把
  v-for指令等其他可以配合的指令用灵活，就没有什么问题解决不了。
* **购买商品**<br>
  购买商品买了一件商品后，库存会减少，用户付款成功或失败，涉及到微信支付和支付宝支付，这个开发起来有许多注意到事项，最关键的是自己要有一个商家号。
* **删除订单**<br>
  删除订单对应删除发布，删除之后相应的数量会减少，当然，以上些都基于你已经登录，如果是位登录状态是无法进行操作的。
* **搜索商品**<br>
  用户输入关键字，通过ajax发送到后台数据，这里利用了字符串的indexOf()方法来判断用户输入的关键字有没有在后台返回的数据里，有的话就输出数据，没有就输出提示。
  ```
  this.axios.get('https://easy-mock.com/mock/593f72288ac26d795ff1e570/search/results')
			.then((res) => {
				let result = res.data
				console.log(result)
				for( let i in result){
					let item = i
					console.log(item.indexOf(this.keywords))
					if(item.indexOf(this.keywords) !== -1){
						this.items = result[item]
					}
				}
  ```
* **div、css3打造自定义数字键盘**<br>
  类似支付宝、银行等App都有自带的数字键盘提供给用户使用，这是怎么实现的呢？其实，div+css3+js就能帮你实现，这里不需要用input标签，因为它会带来反作用，在移动端它会唤醒你手机的自带输入法键盘，而在PC端则会允许用户输入任意的东西，显然这不是我们想要的效果。所以，我们就使用一个div好了，而闪烁光标用css3的animation来模拟就行啦,这样不就很像一个输入框了，剩下的逻辑控制就交给js了。一个流程下来，数字键盘的表现和功能就完成了。
* **跟随导航**<br>
  什么是跟随导航？就是随着你的滚动或滑动到某一个位置固定住的导航栏，在很多应用里都有这个需求。它的实现并不是很难，就是通过window的scroll事件判断来判断滚动的距离是否大于某一个值，如果大于，就把导航元素固定在某一位置。
* **返回顶部**<br>
  这里的需求就是，用户浏览了很长的页面，希望一键就能跑到顶部去，这个时候，就需要用到返回顶部这个事件了，它的实现跟上面原理类似，都是判断滚轮滑动的位置，如果大于某一个值，咱们就把这个值慢慢的变小，直到为0。
* **图片轮播**<br>
  借助mint-ui组件里的mt-swiper,配置一些相关的变量即可轻松实现，赠上[mint-ui](http://mint-ui.github.io/docs/#/)文档
  
# 入过的坑

**搭建项目完成后，npm run build 页面无内容**
```
build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './', //此处修改成'./'
}
```
**Vue mint搭建的项目引入fontawesome不显示字体图标解决办法？

在webpack.prod.conf中设置,把原来的new ExtractTextPlugin()注释掉
```
   // 不需要提到static/css 中
    //new ExtractTextPlugin(utils.assetsPath('css/[name].  [contenthash].css')),  
    new ExtractTextPlugin('[name].[contenthash].css'),
```
**使用less，这个真尼玛的坑，各种试
```
npm install node-sass sass-loader scss scss-loader --save-dev
+ node-sass@4.9.3
+ sass-loader@7.1.0
+ scss@0.2.4
+ scss-loader@0.0.1
```

**vue.js+webpack 为 img src 赋值的路径问题？
```
data () {
    return {
        img: require('path/to/your/source')
    }
}

然后在template中

<img :src="img" />
```


* **跨域操作**<br>
  在实现搜索功能的时候，我企图调用闲鱼官网的接口来获取数据，但是很不幸，他告诉我跨域。但是没关系，CORS来应付，我们只需在后端领域里配置一下响应头就行，`header("Access-Control-Allow-Origin：*")` 当然这种方法必须开启cors才能成功。还有另外一种方法就是在config文件夹的index.js
  中设置代理来解决跨域问题。形如：
  ```
  proxyTable: {
        '/api': {
              target: 'https://s.2.taobao.com/list/list.htm?q=',
              changeOrigin: true,
              pathRewrite: { //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
               '^/api': ''
              }
        }
   ```
 * **设备适配**<br>
  市面上充斥着各式各样的手机，设备适配问题成了web开发的一个大挑战，现在也提出了各种解决方案，我采用的是css3的rem单位来解决适配问题，rem就是将根节点html的font-size的值作为整个页面的基准尺寸，默认html的font-size是16px，即1rem=16px，在未来的css样式里将你所有的px都按这样的比例换算成rem(字体的大小除外)，如果选择了这种方式，请rem一路到底，不然页面就会炸。
 * **vue组件通信**<br>
  vue由许多的组件组成，那么各组件之间的通信就成了一个问题。vue中组件之间传值有这么几种方式。如果是页面较少，就可以考虑使用props传值，父传子，子传孙，一直传下去···但是，使用Props，会有些麻烦，状态的改变要往回传，页面一多就有些烦人。所以如果你的页面超过了10个以上，就要考虑vuex了，vuex就是专门为vue.js开发的状态管理模式，能够实现组件之间的组件共享。
 * **vue组件通信**<br>
  vue由许多的组件组成，那么各组件之间的通信就成了一个问题。vue中组件之间传值有这么几种方式。如果是页面较少，就可以考虑使用props传值，父传子，子传孙，一直传下去···但是，使用Props，会有些麻烦，状态的改变要往回传，页面一多就有些烦人。所以如果你的页面超过了10个以上，就要考虑vuex了，vuex就是专门为vue.js开发的状态管理模式，能够实现组件之间的组件共享。 
  
  
# 总结<br>
   未来不会停止这个项目，会保持更新，逐步细化完善更多功能，如果有帮助可以fork和star,希望聆听你们的建议和更正~<br>
 
 
 
# sell-store

> a mint vue app project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
