# JavaScript

这里参考：

[https://huruji.github.io/FE-Interview/#/](https://huruji.github.io/FE-Interview/#/)

[https://fe.padding.me/#/](https://fe.padding.me/#/)

JavaScript部分：

[https://huruji.github.io/FE-Interview/#/docs/JavaScript/](https://huruji.github.io/FE-Interview/#/docs/JavaScript/)

## 面试题部分

```js
这里我就参考上面的文档过一遍，还有自己的一些理解，以及刷到的一些面经，
之后拍个视频说一下2333，祝大家面试顺利.
```

### 1.引起内存泄漏的操作有哪些
[JavaScript 常见的内存泄漏原因](https://juejin.cn/post/6844903448840765454)

[js 内存泄漏场景、如何监控以及分析](https://juejin.cn/post/6844904048961781774)

#### 关于闭包

[闭包代码](https://github.com/jokereven/vuepress/tree/master/matlab/闭包)

[公私有函数](https://github.com/jokereven/vuepress/tree/master/matlab/公私有函数)

### 2.如何实现ajax请求

[ajax代码](https://github.com/jokereven/vuepress/tree/master/matlab/ajax)

#### 关于ajax的封装...

[ajax封装代码](https://github.com/jokereven/vuepress/tree/master/matlab/ajax/ajax封装)

### 3.简要介绍ES6

### 4.对js原型的理解

### 5.对js模块化的理解

### 6.如何实现一个JS的AMD模块加载器

[AMD，CMD 规范详解](https://neveryu.github.io/2017/03/20/amd-cmd/)

[CommonJS 详细介绍](https://neveryu.github.io/2017/03/07/commonjs/)

### 7.简要介绍事件代理，以及什么时候使用，事件代理发生在事件处理流程的哪个阶段，有什么好处？

事件委托又事件代理

```txt
事件委托/事件代理
官方解释：利用事件冒泡，指定一个事件处理程序，就可以管理某一类的所有事件
人话：利用事件冒泡，通过event事件对象找到触发的元素

举个栗子：
在下周一的时候，甲，乙，丙，丁 都有快递
甲，乙，丙，丁 每个人站在大门口，迎着冷风吹，等快递
事件代理，交给咱们的前台小姐姐，然后由前台小姐姐看一下是谁的快递，然后再分给甲，乙，丙，丁
自己有一件事儿要干，但是我不干，我委托给别人帮我干
为什么要使用事件委托

多个元素需要处理
执行了多次
页面上的事件处理程序数量直接关系到页面的整体运行性能
性能优化
主要思想，减少DOM操作
```

参考：

[什么是事件委托?](https://zhuanlan.zhihu.com/p/141854882)

[JS中事件冒泡与捕获](https://segmentfault.com/a/1190000005654451)

[事件流代码](https://github.com/jokereven/vuepress/tree/master/matlab/事件流)
