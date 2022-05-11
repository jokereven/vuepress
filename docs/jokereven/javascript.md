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

### [14.typeof操作符返回值有哪些，对undefined、null、NaN使用这个操作符分别返回什么](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_14typeof%e6%93%8d%e4%bd%9c%e7%ac%a6%e8%bf%94%e5%9b%9e%e5%80%bc%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%8c%e5%af%b9undefined%e3%80%81null%e3%80%81nan%e4%bd%bf%e7%94%a8%e8%bf%99%e4%b8%aa%e6%93%8d%e4%bd%9c%e7%ac%a6%e5%88%86%e5%88%ab%e8%bf%94%e5%9b%9e%e4%bb%80%e4%b9%88)

typeof的返回值有undefined、boolean、string、number、object、function、symbol。对undefined 使用返回undefined、null使用返回object，NaN使用返回number

### [15.实现一个类型判断函数，需要鉴别出基本类型、function、null、NaN、数组、对象？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_15%e5%ae%9e%e7%8e%b0%e4%b8%80%e4%b8%aa%e7%b1%bb%e5%9e%8b%e5%88%a4%e6%96%ad%e5%87%bd%e6%95%b0%ef%bc%8c%e9%9c%80%e8%a6%81%e9%89%b4%e5%88%ab%e5%87%ba%e5%9f%ba%e6%9c%ac%e7%b1%bb%e5%9e%8b%e3%80%81function%e3%80%81null%e3%80%81nan%e3%80%81%e6%95%b0%e7%bb%84%e3%80%81%e5%af%b9%e8%b1%a1%ef%bc%9f)

只需要鉴别这些类型那么使用typeof即可，要鉴别null先判断双等判断是否为null，之后使用typeof判断，如果是obejct的话，再用Array.isArray判断 是否为数组，如果是数字再使用isNaN判断是否为NaN,（需要注意的是NaN并不是JavaScript数据类型，而是一种特殊值）如下：

```
function type(ele) {
  if(ele===null) {
    return null;
  } else if(typeof ele === 'object') {
    if(Array.isArray(ele)) {
      return 'array';
    } else {
      return typeof ele;
    }
  } else if(typeof ele === 'number') {
    if(isNaN(ele)) {
      return NaN;
    } else {
      return typeof ele;
    }
  } else{
    return typeof ele;
  }
}
```

### [16.javascript做类型判断的方法有哪些？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_16javascript%e5%81%9a%e7%b1%bb%e5%9e%8b%e5%88%a4%e6%96%ad%e7%9a%84%e6%96%b9%e6%b3%95%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f)

typeof、instanceof 、 Object.prototype.toString()(待续)

### [17.JavaScript严格模式下有哪些不同？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_17javascript%e4%b8%a5%e6%a0%bc%e6%a8%a1%e5%bc%8f%e4%b8%8b%e6%9c%89%e5%93%aa%e4%ba%9b%e4%b8%8d%e5%90%8c%ef%bc%9f)

- 不允许不使用var关键字去创建全局变量，抛出ReferenceError
- 不允许对变量使用delete操作符，抛ReferenceError
- 不可对对象的只读属性赋值，不可对对象的不可配置属性使用delete操作符，不可为不可拓展的对象添加属性，均抛TypeError
- 对象属性名必须唯一
- 函数中不可有重名参数
- 在函数内部对修改参数不会反映到arguments中
- 淘汰arguments.callee和arguments.caller
- 不可在if内部声明函数
- 抛弃with语句

参考：

1.[javascript高级程序设计](https://book.douban.com/subject/10546125/)

### [18.setTimeout和setInterval的区别，包含内存方面的分析？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_18settimeout%e5%92%8csetinterval%e7%9a%84%e5%8c%ba%e5%88%ab%ef%bc%8c%e5%8c%85%e5%90%ab%e5%86%85%e5%ad%98%e6%96%b9%e9%9d%a2%e7%9a%84%e5%88%86%e6%9e%90%ef%bc%9f)

setTimeout表示间隔一段时间之后执行一次调用，而setInterval则是每间隔一段时间循环调用，直至clearInterval结束。 内存方面，setTimeout只需要进入一次队列，不会造成内存溢出，setInterval因为不计算代码执行时间，有可能同时执行多次代码， 导致内存溢出。

参考：

[JS 中settimeout和setinterval函数的区别](https://my.oschina.net/u/3636678/blog/1499852)

[setTimeout() 和 setInterval() 本质区别在哪里？](https://segmentfault.com/q/1010000005989491)

### [19.同源策略是什么？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_19%e5%90%8c%e6%ba%90%e7%ad%96%e7%95%a5%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f)

同源策略是指只有具有相同源的页面才能够共享数据，比如cookie，同源是指页面具有相同的协议、域名、端口号，有一项不同就不是同源。 有同源策略能够保证web网页的安全性。

参考：

[前端必备HTTP技能之同源策略详解](http://www.jianshu.com/p/beb059c43a8b)

[浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)

[浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

### [20.ES6之前JavaScript如何实现继承？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_20es6%e4%b9%8b%e5%89%8djavascript%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e7%bb%a7%e6%89%bf%ef%bc%9f)

ES6之前的继承是通过原型来实现的，也就是每一个构造函数都会有一个prototype属性，然后如果我们调用一个实例的方法或者属性，首先会在自身寻找，然后在 构造函数的prototype上寻找，而prototype本质上就是一个实例，因此如果prototype上还没有则会往prototype上的构造函数的prototype寻找，因此实现继承 可以让构造函数的prototype是父级的一个实例就是以实现继承。

### [21.如何阻止事件冒泡和默认事件？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_21%e5%a6%82%e4%bd%95%e9%98%bb%e6%ad%a2%e4%ba%8b%e4%bb%b6%e5%86%92%e6%b3%a1%e5%92%8c%e9%bb%98%e8%ae%a4%e4%ba%8b%e4%bb%b6%ef%bc%9f)

标准的DOM对象中可以使用事件对象的stopPropagation()方法来阻止事件冒泡，但在IE8以下中IE的事件对象通过设置事件对象的cancelBubble属性为true来阻止冒泡； 默认事件的话通过事件对象的preventDefault()方法来阻止，而IE通过设置事件对象的returnValue属性为false来阻止默认事件。

### [22.addEventListener有哪些参数？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_22addeventlistener%e6%9c%89%e5%93%aa%e4%ba%9b%e5%8f%82%e6%95%b0%ef%bc%9f)

有三个参数，第一个是事件的类型，第二个是事件的回调函数，第三个是一个表示事件是冒泡阶段还是捕获阶段捕获的布尔值，true表示捕获，false表示冒泡

### [23.介绍一下Promise，底层如何实现？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_23%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8bpromise%ef%bc%8c%e5%ba%95%e5%b1%82%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%ef%bc%9f)

### [24.如何实现懒加载？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_24%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e6%87%92%e5%8a%a0%e8%bd%bd%ef%bc%9f)

懒加载就是根据用户的浏览需要记载内容，也就是在用户即将浏览完当前的内容时进行继续加载内容，这种技术常常用来加载图片的时候使用。我们判断用户是否即将浏览到底部之后进行在家内容 这时候可能会需要加载大量的内容，可以使用fragment来优化一下，因为大部分是使用滑动和滚轮来触发的，因此很有可能会不断触发，可以使用函数节流做一个优化，防止用户不断触发。

### [25.函数节流是什么？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_25%e5%87%bd%e6%95%b0%e8%8a%82%e6%b5%81%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f)

函数节流就是让一个函数无法在很短的时间间隔内连续调用，而是间隔一段时间执行，这在我们为元素绑定一些事件的时候经常会用到，比如我们 为window绑定了一个resize事件，如果用户一直改变窗口大小，就会一直触发这个事件处理函数，这对性能有很大影响。

[什么是函数节流？](http://www.alloyteam.com/2012/11/javascript-throttle/)

### [26.浏览器内核有哪些？分别对应哪些浏览器？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_26%e6%b5%8f%e8%a7%88%e5%99%a8%e5%86%85%e6%a0%b8%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f%e5%88%86%e5%88%ab%e5%af%b9%e5%ba%94%e5%93%aa%e4%ba%9b%e6%b5%8f%e8%a7%88%e5%99%a8%ef%bc%9f)

常见的浏览器内核有Trident、Gecko、WebKit、Presto，对应的浏览器为Trident对应于IE，Gecko对应于火狐浏览器，Webkit有chrome和safari，Presto 有Opera。

### [27.什么是深拷贝，什么是浅拷贝？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_27%e4%bb%80%e4%b9%88%e6%98%af%e6%b7%b1%e6%8b%b7%e8%b4%9d%ef%bc%8c%e4%bb%80%e4%b9%88%e6%98%af%e6%b5%85%e6%8b%b7%e8%b4%9d%ef%bc%9f)

浅拷贝是指仅仅复制对象的引用，而不是复制对象本身；深拷贝则是把复制对象所引用的全部对象都复制一遍。

### [28.原生js字符串方法有哪些？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_28%e5%8e%9f%e7%94%9fjs%e5%ad%97%e7%ac%a6%e4%b8%b2%e6%96%b9%e6%b3%95%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f)

简单分为获取类方法，获取类方法有charAt方法用来获取指定位置的字符，获取指定位置字符的unicode编码的charCodeAt方法， 与之相反的fromCharCode方法，通过传入的unicode返回字符串。查找类方法有indexof()、lastIndexOf()、search()、match() 方法。截取类的方法有substring、slice、substr三个方法，其他的还有replace、split、toLowerCase、toUpperCase方法。

### [29.原生js字符串截取方法有哪些？有什么区别？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_29%e5%8e%9f%e7%94%9fjs%e5%ad%97%e7%ac%a6%e4%b8%b2%e6%88%aa%e5%8f%96%e6%96%b9%e6%b3%95%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f%e6%9c%89%e4%bb%80%e4%b9%88%e5%8c%ba%e5%88%ab%ef%bc%9f)

js字符串截取方法有substring、slice、substr三个方法，substring和slice都是指定截取的首尾索引值，不同的是传递负值的时候 substring会当做0来处理，而slice传入负值的规则是-1指最后一个字符，substr方法则是第一个参数是开始截取的字符串，第二个是截取的字符数量， 和slice类似，传入负值也是从尾部算起的。

### [30.SVG和Canvas的区别？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_30svg%e5%92%8ccanvas%e7%9a%84%e5%8c%ba%e5%88%ab%ef%bc%9f)

### [31.介绍一下ES6的暂时性死区和块级作用域](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_31%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8bes6%e7%9a%84%e6%9a%82%e6%97%b6%e6%80%a7%e6%ad%bb%e5%8c%ba%e5%92%8c%e5%9d%97%e7%ba%a7%e4%bd%9c%e7%94%a8%e5%9f%9f)

### [32.请介绍一下装饰者模式，并实现](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_32%e8%af%b7%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8b%e8%a3%85%e9%a5%b0%e8%80%85%e6%a8%a1%e5%bc%8f%ef%bc%8c%e5%b9%b6%e5%ae%9e%e7%8e%b0)

在不改变元对象的基础上，对这个对象进行包装和拓展（包括添加属性和方法），从而使这个对象可以有更复杂的功能。

### [33.介绍一下职责链模式？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_33%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8b%e8%81%8c%e8%b4%a3%e9%93%be%e6%a8%a1%e5%bc%8f%ef%bc%9f)

将一个流程进行分解，让这个流程在多个对象中进行传递，由最后一个对象完成这个流程。通过职责链模式能够将流程进行分解，从而解耦。

### [33.介绍一下桶排序和基数排序、快速排序](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_33%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8b%e6%a1%b6%e6%8e%92%e5%ba%8f%e5%92%8c%e5%9f%ba%e6%95%b0%e6%8e%92%e5%ba%8f%e3%80%81%e5%bf%ab%e9%80%9f%e6%8e%92%e5%ba%8f)

### [34.请说一下实现jsonp的实现思路？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_34%e8%af%b7%e8%af%b4%e4%b8%80%e4%b8%8b%e5%ae%9e%e7%8e%b0jsonp%e7%9a%84%e5%ae%9e%e7%8e%b0%e6%80%9d%e8%b7%af%ef%bc%9f)

jsonp的原理是使用script标签来实现跨域，因为script标签的的src属性是不受同源策略的影响的，因此可以使用其来跨域。一个最简单的jsonp就是创建一个script标签，设置src为相应的url，在url之后添加相应的callback，格式类似于 url?callback=xxx，服务端根据我们的callback来返回相应的数据，类似于res.send(req.query.callback + '('+ data + ')')，这样就实现了一个最简单的jsonp

参考：

[动手实现一个JSONP](https://huruji.github.io/FE-Interview/#/)

[jsonp的原理与实现](https://segmentfault.com/a/1190000007665361)

[fetch-jsonp源码](https://github.com/camsong/fetch-jsonp/blob/master/src/fetch-jsonp.js)

### [35.如何实现一个双向数据绑定？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_35%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e4%b8%80%e4%b8%aa%e5%8f%8c%e5%90%91%e6%95%b0%e6%8d%ae%e7%bb%91%e5%ae%9a%ef%bc%9f)

### [36.如何实现一个前端模板引擎？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_36%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e4%b8%80%e4%b8%aa%e5%89%8d%e7%ab%af%e6%a8%a1%e6%9d%bf%e5%bc%95%e6%93%8e%ef%bc%9f)

### [37.请简要介绍一下PWA？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_37%e8%af%b7%e7%ae%80%e8%a6%81%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8bpwa%ef%bc%9f)

### [38.chrome浏览器的JS引擎是哪个？这个引擎做了哪些优化？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_38chrome%e6%b5%8f%e8%a7%88%e5%99%a8%e7%9a%84js%e5%bc%95%e6%93%8e%e6%98%af%e5%93%aa%e4%b8%aa%ef%bc%9f%e8%bf%99%e4%b8%aa%e5%bc%95%e6%93%8e%e5%81%9a%e4%ba%86%e5%93%aa%e4%ba%9b%e4%bc%98%e5%8c%96%ef%bc%9f)

chrome的JS引擎是V8，V8是谷歌公司使用C++开发的

参考：

[为什么V8引擎这么快？](http://blog.csdn.net/horkychen/article/details/7761199)

### [39.请介绍一下你所了解的函数式编程？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_39%e8%af%b7%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8b%e4%bd%a0%e6%89%80%e4%ba%86%e8%a7%a3%e7%9a%84%e5%87%bd%e6%95%b0%e5%bc%8f%e7%bc%96%e7%a8%8b%ef%bc%9f)

### [40.let和const的异同有哪些？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_40let%e5%92%8cconst%e7%9a%84%e5%bc%82%e5%90%8c%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f)

let和const都是对变量的声明，都有块级作用域的概念，不同的是const是对常量的声明，因此声明同时必须赋值，且之后不能更改，而let则可以。

### [41.将静态资源放在其他域名的目的是什么？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_41%e5%b0%86%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90%e6%94%be%e5%9c%a8%e5%85%b6%e4%bb%96%e5%9f%9f%e5%90%8d%e7%9a%84%e7%9b%ae%e7%9a%84%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f)

这样做的主要目的是在请求这些静态资源的时候不会发送cookie，节省了流量，需要注意的是cookie是会发送给子域名的（二级域名），所以这些静态资源是不会放在子域名下的， 而是单独放在一个单独的主域名下。同时还有一个原因就是浏览器对于一个域名会有请求数的限制，这种方法可以方便做CDN。

参考：

[为什么淘宝、腾讯等会把静态资源放在另外一个主域名下？](https://www.zhihu.com/question/20627139)

[为什么很多网站的静态资源会使用独立的域名？](https://www.zhihu.com/question/20534662)

### [42.前端如何实现PV和UV的统计？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_42%e5%89%8d%e7%ab%af%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0pv%e5%92%8cuv%e7%9a%84%e7%bb%9f%e8%ae%a1%ef%bc%9f)

### [43.简要介绍一下RSA](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_43%e7%ae%80%e8%a6%81%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8brsa)

### [44.如何实现对一个DOM元素的深拷贝，包括元素的绑定事件？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_44%e5%a6%82%e4%bd%95%e5%ae%9e%e7%8e%b0%e5%af%b9%e4%b8%80%e4%b8%aadom%e5%85%83%e7%b4%a0%e7%9a%84%e6%b7%b1%e6%8b%b7%e8%b4%9d%ef%bc%8c%e5%8c%85%e6%8b%ac%e5%85%83%e7%b4%a0%e7%9a%84%e7%bb%91%e5%ae%9a%e4%ba%8b%e4%bb%b6%ef%bc%9f)

### [45.canvas性能优化的方法有哪些？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_45canvas%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96%e7%9a%84%e6%96%b9%e6%b3%95%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f)

### [46.介绍一下KMP算法？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_46%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8bkmp%e7%ae%97%e6%b3%95%ef%bc%9f)

### [47.简要介绍一下WebPack的底层实现原理？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_47%e7%ae%80%e8%a6%81%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8bwebpack%e7%9a%84%e5%ba%95%e5%b1%82%e5%ae%9e%e7%8e%b0%e5%8e%9f%e7%90%86%ef%bc%9f)

### [48.简要介绍一下gulp的底层实现原理？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_48%e7%ae%80%e8%a6%81%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8bgulp%e7%9a%84%e5%ba%95%e5%b1%82%e5%ae%9e%e7%8e%b0%e5%8e%9f%e7%90%86%ef%bc%9f)

### [49.ajax的readyState有哪几个状态，含义分别是什么？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_49ajax%e7%9a%84readystate%e6%9c%89%e5%93%aa%e5%87%a0%e4%b8%aa%e7%8a%b6%e6%80%81%ef%bc%8c%e5%90%ab%e4%b9%89%e5%88%86%e5%88%ab%e6%98%af%e4%bb%80%e4%b9%88%ef%bc%9f)

ajax的readyState共有5个状态，分别是0-4，其中每个数字的含义分别是0代表还没调用open方法，1代表的是未调用send方法，也就是还没发送数据给服务器 2代表的是还没有接收到响应，3代表的是开始接收到了部分数据，4代表的是接收完成，数据可以在客户端使用了。

### [50.对于ES7你了解多少？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_50%e5%af%b9%e4%ba%8ees7%e4%bd%a0%e4%ba%86%e8%a7%a3%e5%a4%9a%e5%b0%91%ef%bc%9f)

### [51.请简要介绍一下service worker？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_51%e8%af%b7%e7%ae%80%e8%a6%81%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8bservice-worker%ef%bc%9f)

### [52.SPA的路由是如果实现的，如果你来做一个前端路由，你会怎么做？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_52spa%e7%9a%84%e8%b7%af%e7%94%b1%e6%98%af%e5%a6%82%e6%9e%9c%e5%ae%9e%e7%8e%b0%e7%9a%84%ef%bc%8c%e5%a6%82%e6%9e%9c%e4%bd%a0%e6%9d%a5%e5%81%9a%e4%b8%80%e4%b8%aa%e5%89%8d%e7%ab%af%e8%b7%af%e7%94%b1%ef%bc%8c%e4%bd%a0%e4%bc%9a%e6%80%8e%e4%b9%88%e5%81%9a%ef%bc%9f)

### [53.AMD与CMD的区别有哪些？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_53amd%e4%b8%8ecmd%e7%9a%84%e5%8c%ba%e5%88%ab%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f)

### [54.听说过UMD吗？可以简要介绍一下吗？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_54%e5%90%ac%e8%af%b4%e8%bf%87umd%e5%90%97%ef%bc%9f%e5%8f%af%e4%bb%a5%e7%ae%80%e8%a6%81%e4%bb%8b%e7%bb%8d%e4%b8%80%e4%b8%8b%e5%90%97%ef%bc%9f)

### [55.百度的构建工具FIS你了解吗？](https://huruji.github.io/FE-Interview/#/docs/JavaScript?id=_55%e7%99%be%e5%ba%a6%e7%9a%84%e6%9e%84%e5%bb%ba%e5%b7%a5%e5%85%b7fis%e4%bd%a0%e4%ba%86%e8%a7%a3%e5%90%97%ef%bc%9f)
