(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{427:function(t,a,v){"use strict";v.r(a);var e=v(2),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),a("h3",{attrs:{id:"访问控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问控制"}},[t._v("#")]),t._v(" 访问控制")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("default")]),t._v(" (即默认，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。")]),t._v(" "),a("li",[a("strong",[t._v("private")]),t._v(" : 在同一类内可见。使用对象：变量、方法。 "),a("strong",[t._v("注意：不能修饰类（外部类）")])]),t._v(" "),a("li",[a("strong",[t._v("public")]),t._v(" : 对所有类可见。使用对象：类、接口、变量、方法")]),t._v(" "),a("li",[a("strong",[t._v("protected")]),t._v(" : 对同一包内的类和所有子类可见。使用对象：变量、方法。 "),a("strong",[t._v("注意：不能修饰类（外部类）")]),t._v("。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("修饰符")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("当前类")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("同一包内")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("子孙类(同一包)")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("子孙类(不同包)")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("其他包")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("public")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("protected")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y/N（"),a("a",{attrs:{href:"https://www.runoob.com/java/java-modifier-types.html#protected-desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("说明"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("default")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("private")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")])])])]),t._v(" "),a("h4",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("p",[t._v("请注意以下方法继承的规则：")]),t._v(" "),a("ul",[a("li",[t._v("父类中声明为 public 的方法在子类中也必须为 public。")]),t._v(" "),a("li",[t._v("父类中声明为 protected 的方法在子类中要么声明为 protected，要么声明为 public，不能声明为 private。")]),t._v(" "),a("li",[t._v("父类中声明为 private 的方法，不能够被子类继承。")])]),t._v(" "),a("h3",{attrs:{id:"非访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非访问"}},[t._v("#")]),t._v(" 非访问")]),t._v(" "),a("p",[t._v("static 修饰符，用来修饰类方法和类变量。")]),t._v(" "),a("p",[t._v("final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。")]),t._v(" "),a("p",[t._v("abstract 修饰符，用来创建抽象类和抽象方法。")]),t._v(" "),a("p",[t._v("synchronized 和 volatile 修饰符，主要用于线程的编程。")]),t._v(" "),a("h4",{attrs:{id:"static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[t._v("#")]),t._v(" **static **")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("静态变量：")])]),t._v(" "),a("p",[t._v("static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("静态方法：")])]),t._v(" "),a("p",[t._v("static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。")])])]),t._v(" "),a("h4",{attrs:{id:"final"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final"}},[t._v("#")]),t._v(" final")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("final 变量：")])]),t._v(" "),a("p",[t._v('final 表示"最后的、最终的"含义，变量一旦赋值后，不能被重新赋值。被 final 修饰的实例变量必须显式指定初始值。')]),t._v(" "),a("p",[t._v("final 修饰符通常和 static 修饰符一起使用来创建类常量。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("final 类")])]),t._v(" "),a("p",[t._v("final 类不能被继承，没有类能够继承 final 类的任何特性。")])])]),t._v(" "),a("h4",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" abstract")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("抽象类：")])]),t._v(" "),a("p",[t._v("抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充。")]),t._v(" "),a("p",[t._v("一个类不能同时被 abstract 和 final 修饰。如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误。")]),t._v(" "),a("p",[t._v("抽象类可以包含抽象方法和非抽象方法。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("抽象方法")])]),t._v(" "),a("p",[t._v("抽象方法是一种没有任何实现的方法，该方法的具体实现由子类提供。")]),t._v(" "),a("p",[t._v("抽象方法不能被声明成 final 和 static。")]),t._v(" "),a("p",[t._v("任何继承抽象类的子类必须实现父类的所有抽象方法，除非该子类也是抽象类。")]),t._v(" "),a("p",[t._v("如果一个类包含若干个抽象方法，那么该类必须声明为抽象类。抽象类可以不包含抽象方法。")]),t._v(" "),a("p",[t._v("抽象方法的声明以分号结尾，例如："),a("strong",[t._v("public abstract sample();")]),t._v("。")])])]),t._v(" "),a("h4",{attrs:{id:"synchronized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized"}},[t._v("#")]),t._v(" **synchronized **")]),t._v(" "),a("p",[t._v("synchronized 关键字声明的方法同一时间只能被一个线程访问。synchronized 修饰符可以应用于四个访问修饰符。")]),t._v(" "),a("h4",{attrs:{id:"volatile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile"}},[t._v("#")]),t._v(" "),a("strong",[t._v("volatile")])]),t._v(" "),a("ul",[a("li",[t._v("主要用于线程的编程。")]),t._v(" "),a("li",[t._v("volatile 修饰的成员变量在每次被线程访问时，都强制从共享内存中重新读取该成员变量的值。而且，当成员变量发生变化时，会强制线程将变化值回写到共享内存。这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值。")]),t._v(" "),a("li",[t._v("一个 volatile 对象引用可能是 null。")])]),t._v(" "),a("h4",{attrs:{id:"transient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transient"}},[t._v("#")]),t._v(" "),a("strong",[t._v("transient")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("序列化的对象包含被 transient 修饰的实例变量时，java 虚拟机(JVM)跳过该特定的变量。")]),t._v(" "),a("p",[t._v("该修饰符包含在定义变量的语句中，用来预处理类和变量的数据类型。")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);