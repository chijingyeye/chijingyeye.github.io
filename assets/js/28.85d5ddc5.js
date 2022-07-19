(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{290:function(t,s,a){"use strict";a.r(s);var n=a(13),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ArticleTopAd"),t._v(" "),s("blockquote",[s("p",[t._v("作用域、变量提升的知识点，面试时会经常遇到。")])]),t._v(" "),s("h3",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),s("h3",{attrs:{id:"作用域-scope-的概念和分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域-scope-的概念和分类"}},[t._v("#")]),t._v(" 作用域（Scope）的概念和分类")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("概念")]),t._v("：通俗来讲，作用域是一个变量或函数的作用范围。作用域在"),s("strong",[t._v("函数定义")]),t._v("时，就已经确定了。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("目的")]),t._v("：为了提高程序的可靠性，同时减少命名冲突。")])])]),t._v(" "),s("p",[t._v("在 JS 中，一共有两种作用域：（ES5 中）")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("全局作用域")]),t._v("：作用于整个 script 标签内部，或者作用于一个独立的 JS 文件。")]),t._v(" "),s("li",[s("strong",[t._v("函数作用域")]),t._v("（局部作用域）：作用于函数内的代码环境。")])]),t._v(" "),s("p",[t._v("下面我们来单独讲一下全局作用域。")]),t._v(" "),s("h3",{attrs:{id:"全局作用域-和-window-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域-和-window-对象"}},[t._v("#")]),t._v(" 全局作用域 和 window 对象")]),t._v(" "),s("p",[t._v("直接编写在 script 标签中的 JS 代码，都在全局作用域。全局作用域在页面打开时创建，在页面关闭时销毁。")]),t._v(" "),s("p",[t._v("在全局作用域中有一个全局对象 window，它代表的是一个浏览器的窗口，由浏览器创建，我们可以直接使用。相关知识点如下：")]),t._v(" "),s("ul",[s("li",[t._v("创建的"),s("strong",[t._v("变量")]),t._v("都会作为 window 对象的属性保存。比如在全局作用域内写 "),s("code",[t._v("var a = 100")]),t._v("，这里的 "),s("code",[t._v("a")]),t._v(" 等价于 "),s("code",[t._v("window.a")]),t._v("。")]),t._v(" "),s("li",[t._v("创建的"),s("strong",[t._v("函数")]),t._v("都会作为 window 对象的方法保存。")])]),t._v(" "),s("h3",{attrs:{id:"作用域的访问关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域的访问关系"}},[t._v("#")]),t._v(" 作用域的访问关系")]),t._v(" "),s("p",[t._v("在内部作用域中可以访问到外部作用域的变量，在外部作用域中无法访问到内部作用域的变量。")]),t._v(" "),s("p",[t._v("代码举例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bbb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果：aaa。说明 内层作用域 可以访问 外层作用域 里的变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错：Uncaught ReferenceError: b is not defined。说明 外层作用域 无法访问 内层作用域 里的变量")]),t._v("\n")])])]),s("h3",{attrs:{id:"变量的作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量的作用域"}},[t._v("#")]),t._v(" 变量的作用域")]),t._v(" "),s("p",[t._v("根据作用域的不同，变量可以分为两类：全局变量、局部变量。")]),t._v(" "),s("p",[s("strong",[t._v("全局变量")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在全局作用域下声明的变量，叫「全局变量」。在全局作用域的任何一地方，都可以访问这个变量。")])]),t._v(" "),s("li",[s("p",[t._v("在全局作用域下，使用 var 声明的变量是全局变量。")])]),t._v(" "),s("li",[s("p",[t._v("特殊情况：在函数内不使用 var 声明的变量也是全局变量（不建议这么用）。")])])]),t._v(" "),s("p",[s("strong",[t._v("局部变量")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定义在函数作用域的变量，叫「局部变量」。仅限函数内部访问这个变量。")])]),t._v(" "),s("li",[s("p",[t._v("在函数内部，使用 var 声明的变量是局部变量。")])]),t._v(" "),s("li",[s("p",[t._v("函数的"),s("strong",[t._v("形参")]),t._v("也是属于局部变量。")])])]),t._v(" "),s("p",[t._v("从执行效率来看全局变量和局部变量：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("全局变量：只有浏览器关闭时才会被销毁，比较占内存。")])]),t._v(" "),s("li",[s("p",[t._v("局部变量：当其所在的代码块运行结束后，就会被销毁，比较节约内存空间。")])])]),t._v(" "),s("h3",{attrs:{id:"作用域的上下级关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域的上下级关系"}},[t._v("#")]),t._v(" 作用域的上下级关系")]),t._v(" "),s("p",[t._v("当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（"),s("strong",[t._v("就近原则")]),t._v("）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错 ReferenceError。")]),t._v(" "),s("p",[t._v("在函数中要访问全局变量可以使用 window 对象。（比如说，全局作用域和函数作用域都定义了变量 a，如果想访问全局变量，可以使用"),s("code",[t._v("window.a")]),t._v("）")]),t._v(" "),s("h2",{attrs:{id:"作用域的预处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域的预处理"}},[t._v("#")]),t._v(" 作用域的预处理")]),t._v(" "),s("p",[t._v("**预处理（预解析）**的概念：浏览器在解析 JS 代码之前，会进行一个操作叫“预处理（预解析）”：将当前 JS 代码中所有变量的定义和函数的定义，放到所有代码的最前面。")]),t._v(" "),s("p",[t._v("这种预解析，也称之为声明提前。")]),t._v(" "),s("h3",{attrs:{id:"全局作用域-变量的声明提前-变量提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域-变量的声明提前-变量提升"}},[t._v("#")]),t._v(" 全局作用域-变量的声明提前（变量提升）")]),t._v(" "),s("p",[t._v("使用 var 关键字声明的变量（ 比如 "),s("code",[t._v("var a = 1")]),t._v("），"),s("strong",[t._v("会在所有的代码执行之前被声明")]),t._v("（但是不会赋值），但是如果声明变量时不是用 var 关键字（比如直接写"),s("code",[t._v("a = 1")]),t._v("），则变量不会被声明提前。")]),t._v(" "),s("p",[s("strong",[t._v("举例 1")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("打印结果：undefined。注意，打印结果并没有报错，而是 undefined，说明变量 a 被提前声明了，只是尚未被赋值。")]),t._v(" "),s("p",[s("strong",[t._v("举例 2")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此时a相当于window.a")]),t._v("\n")])])]),s("p",[t._v("程序会报错："),s("code",[t._v("Uncaught ReferenceError: a is not defined")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("举例 3")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此时a相当于window.a")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("打印结果：123。")]),t._v(" "),s("p",[s("strong",[t._v("举例 4")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("打印结果：undefined。注意，打印结果并没有报错，而是 undefined。这个例子，再次说明了：变量 i 在函数执行前，就被提前声明了，只是尚未被赋值。")]),t._v(" "),s("p",[t._v("例 4 中， "),s("code",[t._v("if(false)")]),t._v("里面的代码虽然不会被执行，但是整个代码有"),s("strong",[t._v("解析")]),t._v("的环节，解析的时候就已经把 变量 i 给提前声明了。")]),t._v(" "),s("p",[s("strong",[t._v("总结")]),t._v("：")]),t._v(" "),s("p",[t._v("既然 JS 中存在变量提升的现象，那么，在实战开发中，为了避免出错，建议先声明一个变量，然后再使用这个变量。")]),t._v(" "),s("h3",{attrs:{id:"全局作用域-函数的声明提前"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域-函数的声明提前"}},[t._v("#")]),t._v(" 全局作用域-函数的声明提前")]),t._v(" "),s("p",[s("strong",[t._v("函数声明")]),t._v("：")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("函数声明")]),t._v("的形式创建的函数"),s("code",[t._v("function foo(){}")]),t._v("，"),s("strong",[t._v("会被声明提前")]),t._v("。")]),t._v(" "),s("p",[t._v("也就是说，整个函数会在所有的代码执行之前就被"),s("strong",[t._v("创建完成")]),t._v("。所以，在代码顺序上，我们可以先调用函数，再定义函数。")]),t._v(" "),s("p",[t._v("代码举例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虽然 函数 fn1 的定义是在后面，但是因为被提前声明了， 所以此处可以调用函数")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是函数 fn1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("函数表达式")]),t._v("：")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("函数表达式")]),t._v("创建的函数"),s("code",[t._v("var foo = function(){}")]),t._v("，"),s("strong",[t._v("不会被声明提前")]),t._v("，所以不能在声明前调用。")]),t._v(" "),s("p",[t._v("很好理解，因为此时 foo 被声明了（这里只是变量声明），且为 undefined，并没有把 "),s("code",[t._v("function(){}")]),t._v(" 赋值给 foo。")]),t._v(" "),s("p",[t._v("所以说，下面的例子，会报错：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180314_2145.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"函数作用域的预处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域的预处理"}},[t._v("#")]),t._v(" 函数作用域的预处理")]),t._v(" "),s("p",[t._v("1、在函数作用域中，也有声明提前的特性：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("函数中，使用 var 关键字声明的变量，会在函数中所有的代码执行之前被声明。")])]),t._v(" "),s("li",[s("p",[t._v("函数中，没有 var 声明的变量都是"),s("strong",[t._v("全局变量")]),t._v("，而且并不会提前声明。")])])]),t._v(" "),s("p",[t._v("举例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处的a相当于window.a")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印结果是2")]),t._v("\n")])])]),s("p",[t._v("上方代码中，执行 foo() 后，函数里面的打印结果是"),s("code",[t._v("1")]),t._v("。如果去掉第一行代码，执行 foo() 后，函数里面的打印结果是"),s("code",[t._v("Uncaught ReferenceError: a is not defined")]),t._v("。")]),t._v(" "),s("p",[t._v("2、定义形参就相当于在函数作用域中声明了变量。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个函数中，因为有了形参 e，此时就相当于在函数内部的第一行代码里，写了 var e;")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印结果为 undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印结果为123")]),t._v("\n")])])]),s("h2",{attrs:{id:"javascript-没有块级作用域-es6-之前"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-没有块级作用域-es6-之前"}},[t._v("#")]),t._v(" JavaScript 没有块级作用域（ES6 之前）")]),t._v(" "),s("p",[t._v("在其他编程语言中（如 Java、C#等），存在块级作用域，由"),s("code",[t._v("{}")]),t._v("包括起来。比如在 Java 语言中，if 语句里创建的变量，只能在 if 语句内部使用：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    system"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nsystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n")])])]),s("p",[t._v("但是，在 JS 中没有块级作用域（ES6 之前）。举例如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//123（可以正常打印）")]),t._v("\n")])])]),s("h2",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),s("p",[t._v("引入：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("只要是代码，就至少有一个作用域")])]),t._v(" "),s("li",[s("p",[t._v("写在函数内部的局部作用域")])]),t._v(" "),s("li",[s("p",[t._v("如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域")])])]),t._v(" "),s("p",[t._v("基于上面几条内容，我们可以得出作用域链的概念。")]),t._v(" "),s("p",[s("strong",[t._v("作用域链")]),t._v("：内部函数访问外部函数的变量，采用的是链式查找的方式来决定取哪个值，这种结构称之为作用域链。查找时，采用的是"),s("strong",[t._v("就近原则")]),t._v("。")]),t._v(" "),s("p",[t._v("代码举例：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部函数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内部函数")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("打印结果：20。")])],1)}),[],!1,null,null,null);s.default=p.exports}}]);