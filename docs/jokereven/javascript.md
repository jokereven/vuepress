# JavaScript

`有一些东西这里没有，主要这些东西都比较基础就没怎么写2333，代码都在matlab path`

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

ES6在变量的声明和定义方面增加了let、const声明变量，有局部变量的概念，赋值中有比较吸引人的结构赋值，同时ES6对字符串、 数组、正则、对象、函数等拓展了一些方法，如字符串方面的模板字符串、函数方面的默认参数、对象方面属性的简洁表达方式，ES6也 引入了新的数据类型symbol，新的数据结构set和map,symbol可以通过typeof检测出来，为解决异步回调问题，引入了promise和 generator，还有最为吸引人了实现Class和模块，通过Class可以更好的面向对象编程，使用模块加载方便模块化编程，当然考虑到 浏览器兼容性，我们在实际开发中需要使用babel进行编译。

### 4.对js原型的理解

我们知道在es6之前，js没有类和继承的概念，js是通过原型来实现继承的。在js中一个构造函数默认自带有一个prototype属性， 这个的属性值是一个对象，同时这个prototype对象自带有一个constructor属性，这个属性指向这个构造函数，同时每一个实例 都有一个__proto__属性指向这个prototype对象，我们可以将这个叫做隐式原型，我们在使用一个实例的方法的时候，会先检查 这个实例中是否有这个方法，没有则会继续向上查找这个prototype对象是否有这个方法，刚刚我们说到prototype是一个对象， 那么也即是说这个是一个对象的实例，那么这个对象同样也会有一个__proto__属性指向对象的prototype对象。

### 5.对js模块化的理解

在ES6出现之前，js没有标准的模块化概念，这也就造成了js多人写作开发容易造成全局污染的情况，以前我们可能会采用立即执行 函数、对象等方式来尽量减少变量这种情况，后面社区为了解决这个问题陆续提出了AMD规范和CMD规范，这里不同于Node.js的 CommonJS的原因在于服务端所有的模块都是存在于硬盘中的，加载和读取几乎是不需要时间的，而浏览器端因为加载速度取决于网速， 因此需要采用异步加载，AMD规范中使用define来定义一个模块，使用require方法来加载一个模块，现在ES6也推出了标准的模块 加载方案，通过export和import来导出和导入模块。

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

### 8.使用new操作符实例化一个对象的具体步骤
1.构造一个新的对象

2.将构造函数的作用域赋给新对象（也就是说this指向了新的对象）

3.执行构造函数中的代码

4.返回新对象

### 9.js如何判断网页中图片加载成功或者失败
使用onload事件运行加载成功，使用onerror事件判断失败

### 10.递归和迭代的区别是什么，各有什么优缺点？
程序调用自身称为递归，利用变量的原值推出新值称为迭代，递归的优点 大问题转化为小问题，可以减少代码量，同时应为代码精简，可读性好， 缺点就是，递归调用浪费了空间，而且递归太深容易造成堆栈的溢出。迭代的好处 就是代码运行效率好，因为时间只因循环次数增加而增加，而且没有额外的空间开销， 缺点就是代码不如递归简洁

[深究递归和迭代的区别、联系、优缺点及实例对比](http://blog.csdn.net/laoyang360/article/details/7855860)

[「递归」和「迭代」有哪些区别？](https://www.zhihu.com/question/20278387)

### 11.策略模式是什么，说一下你的理解？
策略模式就是说我们将一系列的算法封装起来，使其相互之间可以替换，封装的算法具有一定的独立性，不会随客户端的变化而变化，比较常见的使用常见就是类似于 表单验证这种多场景的情况，我们使用策略模式就可以避免使用一堆的if...else。

### 12.什么是事件循环（EVENT LOOP）？
我们常常说js是单线程的，是指js执行引擎是单线程的，除了这个单线程，还有一个 任务队列，在执行js代码的过程中，执行引擎遇到注册的延时方法，如定时器，DOM事件， 会将这些方法交给相应的浏览器模块处理，当这些延时方法有触发条件去触发的时候， 这些延时方法会被添加至任务队列，而这些任务队列中的方法只有js的主线程空闲了才会执行， 这也就是说我们常常用的定时器定的时间参数只是一个触发条件，具体多少时间后执行其实还需要看 js主线程空闲与否

参考：

[【转向Javascript系列】从setTimeout说事件循环模型](http://www.alloyteam.com/2015/10/turning-to-javascript-series-from-settimeout-said-the-event-loop-model/)

[深入浅出Javascript事件循环机制(上)](https://zhuanlan.zhihu.com/p/26229293)

[深入浅出JavaScript事件循环机制(下)](https://zhuanlan.zhihu.com/p/26238030)

[并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

### 13.原生JS操作DOM的方法有哪些？

[DOM基础代码](https://github.com/jokereven/vuepress/tree/master/matlab/DOM基础)

[DOM事件代码](https://github.com/jokereven/vuepress/tree/master/matlab/DOM事件)

[选项卡代码](https://github.com/jokereven/vuepress/tree/master/matlab/选项卡)

[淡入淡出轮播图代码](https://github.com/jokereven/vuepress/tree/master/matlab/DOM事件代码)
