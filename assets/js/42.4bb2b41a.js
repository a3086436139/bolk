(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{447:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("h3",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),t("h4",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("h4",{attrs:{id:"目录结构-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构-2"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2014/06/d0c50-linux2bfile2bsystem2bhierarchy.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("/bin")]),a._v("：\nbin 是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/boot：")]),a._v("\n这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/dev ：")]),a._v("\ndev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/etc：")]),a._v("\netc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/home")]),a._v("：\n用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/lib")]),a._v("：\nlib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/lost+found")]),a._v("：\n这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/media")]),a._v("：\nlinux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/mnt")]),a._v("：\n系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/opt")]),a._v("：\nopt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/proc")]),a._v("：\nproc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/root")]),a._v("：\n该目录为系统管理员，也称作超级权限者的用户主目录。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/sbin")]),a._v("：\ns 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/selinux")]),a._v("：\n这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/srv")]),a._v("：\n该目录存放一些服务启动之后需要提取的数据。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/sys")]),a._v("：")]),a._v(" "),t("p",[a._v("这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。")]),a._v(" "),t("p",[a._v("sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。")]),a._v(" "),t("p",[a._v("该文件系统是内核设备树的一个直观反映。")]),a._v(" "),t("p",[a._v("当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/tmp")]),a._v("：\ntmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/usr")]),a._v("：\nusr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/usr/bin：")]),a._v("\n系统用户使用的应用程序。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/usr/sbin：")]),a._v("\n超级用户使用的比较高级的管理程序和系统守护程序。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/usr/src：")]),a._v("\n内核源代码默认的放置目录。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/var")]),a._v("：\nvar 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("/run")]),a._v("：\n是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。")])])]),a._v(" "),t("h3",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),t("h4",{attrs:{id:"目录处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录处理"}},[a._v("#")]),a._v(" 目录处理")]),a._v(" "),t("h5",{attrs:{id:"ls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[a._v("#")]),a._v(" ls")]),a._v(" "),t("blockquote",[t("p",[a._v("2(列出目录的内容)")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：ls  选项[-ald]  [文件或目录] ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("    显示所有文件，包括隐藏文件\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("     详细信息显示\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("    查看目录属性\n")])])]),t("h5",{attrs:{id:"mkdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mkdir"}},[a._v("#")]),a._v(" mkdir")]),a._v(" "),t("blockquote",[t("p",[a._v("创建目录")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：mkdir -p  [目录名]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" 递归创建\n")])])]),t("h5",{attrs:{id:"cd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cd"}},[a._v("#")]),a._v(" cd")]),a._v(" "),t("blockquote",[t("p",[a._v("切换工作目录")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：cd [目录] ")]),a._v("\n")])])]),t("h5",{attrs:{id:"pwd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pwd"}},[a._v("#")]),a._v(" pwd")]),a._v(" "),t("blockquote",[t("p",[a._v("显示当前路径")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：pwd")]),a._v("\n")])])]),t("h5",{attrs:{id:"rmdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rmdir"}},[a._v("#")]),a._v(" rmdir")]),a._v(" "),t("blockquote",[t("p",[a._v("删除空目录")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：rmdir [目录名]")]),a._v("\n")])])]),t("h5",{attrs:{id:"cp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[a._v("#")]),a._v(" cp")]),a._v(" "),t("blockquote",[t("p",[a._v("拷贝文件")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：cp  -rp  [原文件或目录] [目标目录]")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("  复制目录\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v("  保留文件属性\n")])])]),t("h5",{attrs:{id:"rm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[a._v("#")]),a._v(" rm")]),a._v(" "),t("blockquote",[t("p",[a._v("删除文件")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：rm  -rf   [文件或目录] ")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("  删除目录\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("  强制执行\n")])])]),t("h4",{attrs:{id:"文件处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件处理"}},[a._v("#")]),a._v(" 文件处理")]),a._v(" "),t("h5",{attrs:{id:"touch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#touch"}},[a._v("#")]),a._v(" touch")]),a._v(" "),t("blockquote",[t("p",[a._v("创建文件")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：touch  [文件名]")]),a._v("\n")])])]),t("h5",{attrs:{id:"cat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[a._v("#")]),a._v(" cat")]),a._v(" "),t("blockquote",[t("p",[a._v("显示文件内容")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：cat [文件名]")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v("  显示行号\n")])])]),t("h5",{attrs:{id:"more"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more"}},[a._v("#")]),a._v(" more")]),a._v(" "),t("blockquote",[t("p",[a._v("分屏显示")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：more  [文件名]")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("空格"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 或f   翻页               \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Enter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("     换行                 \n")])])]),t("h5",{attrs:{id:"less"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[a._v("#")]),a._v(" less")]),a._v(" "),t("blockquote",[t("p",[a._v("分屏显示")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：less  [文件名]")]),a._v("\n\ntips: 按下 / 后可以搜索 会反显高亮  \n按q退出（more也可以）\n")])])]),t("h5",{attrs:{id:"head"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[a._v("#")]),a._v(" head")]),a._v(" "),t("blockquote",[t("p",[a._v("取首n行")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：head  [文件名]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" 指定行数 \n")])])]),t("h5",{attrs:{id:"tail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[a._v("#")]),a._v(" tail")]),a._v(" "),t("blockquote",[t("p",[a._v("取尾n行")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：tail  [文件名]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" 指定行数    \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("  动态显示文件末尾内容\n")])])]),t("h4",{attrs:{id:"链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[a._v("#")]),a._v(" 链接")]),a._v(" "),t("h5",{attrs:{id:"ln"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ln"}},[a._v("#")]),a._v(" ln")]),a._v(" "),t("blockquote",[t("p",[a._v("建立链接文件")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：ln  -s  [原文件]  [目标文件]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v("  创建软链接\n")])])]),t("h4",{attrs:{id:"权限管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[a._v("#")]),a._v(" 权限管理")]),a._v(" "),t("h5",{attrs:{id:"chmod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[a._v("#")]),a._v(" chmod")]),a._v(" "),t("blockquote",[t("p",[a._v("修改文件权限")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：chmod  [{ugoa}{+-=}{rwx}] [文件或目录]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("421")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("文件或目录"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("                          \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v("  递归修改\n\n权限的数字表示      \nr  ---- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("      w ---- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("      x  ---- "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nrwxrw-r--    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v("  g+w  testfile         \n赋予文件testfile所属组写权限\n")])])]),t("h5",{attrs:{id:"chown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chown"}},[a._v("#")]),a._v(" chown")]),a._v(" "),t("blockquote",[t("p",[a._v("修改文件所有者")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：chown  [用户] [文件或目录]")]),a._v("\n")])])]),t("h5",{attrs:{id:"chgrp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chgrp"}},[a._v("#")]),a._v(" chgrp")]),a._v(" "),t("blockquote",[t("p",[a._v("修改文件所属组")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：chgrp [用户组] [文件或目录]")]),a._v("\n")])])]),t("h5",{attrs:{id:"umask"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#umask"}},[a._v("#")]),a._v(" umask")]),a._v(" "),t("blockquote",[t("p",[a._v("默认权限")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：umask [-S]")]),a._v("\n")])])]),t("h4",{attrs:{id:"文件搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件搜索"}},[a._v("#")]),a._v(" 文件搜索")]),a._v(" "),t("h5",{attrs:{id:"find"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[a._v("#")]),a._v(" find")]),a._v(" "),t("blockquote",[t("p",[a._v("查找文件")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：find  [搜索范围] [参数] [匹配条件]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" 文件名\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-user")]),a._v(" 所有者\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),a._v(" 文件大小\n+n  大于   "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" 小于   n 等于  \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cmin")]),a._v(" 指定时间内被修改的属性\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-amin")]),a._v(" 访问时间\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-nmin")]),a._v(" 文件内容\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v("  /etc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),a._v("  +163840 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-204800")]),a._v("          \n在/etc下查找大于80MB小于100MB的文件 \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" 两个条件同时满足         \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" 两个条件满足任意一个即可 \n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /etc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" inittab "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("         \n在/etc下查找inittab文件并显示其详细信息         \n-exec/-ok 命令 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  对搜索结果执行操作\ntips:-exec直接执行，ok会询问操作\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-type")]),a._v(" 根据文件类型查找                  \nf 文件    d 目录    l 软链\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-inum")]),a._v("  根据i节点查找\n")])])]),t("h5",{attrs:{id:"locate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[a._v("#")]),a._v(" locate")]),a._v(" "),t("blockquote",[t("p",[a._v("文件资料库查找")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：locate  文件名")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" 作用你不区分大小写类似\n\ntips:新建文件locate不到，可以updatedb,更新文件资料库后查找"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tmp不在文件资料库内"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h5",{attrs:{id:"which"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#which"}},[a._v("#")]),a._v(" which")]),a._v(" "),t("blockquote",[t("p",[a._v("搜索命令所在目录及别名信息")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：which  命令")]),a._v("\n")])])]),t("h5",{attrs:{id:"whereis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#whereis"}},[a._v("#")]),a._v(" whereis")]),a._v(" "),t("blockquote",[t("p",[a._v("搜索命令所在目录及帮助文档路径")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：whereis  [命令名称]")]),a._v("\n")])])]),t("h5",{attrs:{id:"grep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[a._v("#")]),a._v(" grep")]),a._v(" "),t("blockquote",[t("p",[a._v("在文件中搜寻字串匹配的行并输出")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：grep  -iv [指定字串] [文件] ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v("  不区分大小写             \n "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" 排除指定字串\n \n ^表示以XXX开头\n")])])]),t("h4",{attrs:{id:"文件搜索-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件搜索-2"}},[a._v("#")]),a._v(" 文件搜索")]),a._v(" "),t("h5",{attrs:{id:"find-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#find-2"}},[a._v("#")]),a._v(" find")]),a._v(" "),t("blockquote",[t("p",[a._v("查找文件")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：find  [搜索范围] [参数] [匹配条件]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" 文件名\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-user")]),a._v(" 所有者\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),a._v(" 文件大小\n+n  大于   "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" 小于   n 等于  \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cmin")]),a._v(" 指定时间内被修改的属性\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-amin")]),a._v(" 访问时间\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-nmin")]),a._v(" 文件内容\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v("  /etc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),a._v("  +163840 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-size")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-204800")]),a._v("          \n在/etc下查找大于80MB小于100MB的文件 \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" 两个条件同时满足         \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" 两个条件满足任意一个即可 \n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /etc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" inittab "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("         \n在/etc下查找inittab文件并显示其详细信息         \n-exec/-ok 命令 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  对搜索结果执行操作\ntips:-exec直接执行，ok会询问操作\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-type")]),a._v(" 根据文件类型查找                  \nf 文件    d 目录    l 软链\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-inum")]),a._v("  根据i节点查找\n")])])]),t("h5",{attrs:{id:"locate-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#locate-2"}},[a._v("#")]),a._v(" locate")]),a._v(" "),t("blockquote",[t("p",[a._v("文件资料库查找")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：locate  文件名")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" 作用你不区分大小写类似\n\ntips:新建文件locate不到，可以updatedb,更新文件资料库后查找"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tmp不在文件资料库内"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h5",{attrs:{id:"which-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#which-2"}},[a._v("#")]),a._v(" which")]),a._v(" "),t("blockquote",[t("p",[a._v("搜索命令所在目录及别名信息")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：which  命令")]),a._v("\n")])])]),t("h5",{attrs:{id:"whereis-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#whereis-2"}},[a._v("#")]),a._v(" whereis")]),a._v(" "),t("blockquote",[t("p",[a._v("搜索命令所在目录及帮助文档路径")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：whereis  [命令名称]")]),a._v("\n")])])]),t("h5",{attrs:{id:"grep-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep-2"}},[a._v("#")]),a._v(" grep")]),a._v(" "),t("blockquote",[t("p",[a._v("在文件中搜寻字串匹配的行并输出")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：grep  -iv [指定字串] [文件] ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v("  不区分大小写             \n "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" 排除指定字串\n \n ^表示以XXX开头\n")])])]),t("h4",{attrs:{id:"帮助命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令"}},[a._v("#")]),a._v(" 帮助命令")]),a._v(" "),t("h5",{attrs:{id:"main"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main"}},[a._v("#")]),a._v(" main")]),a._v(" "),t("blockquote",[t("p",[a._v("帮助")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：man  [命令或配置文件] ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("空格"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 或f           翻页               \n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Enter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("             换行                 \n   q或Q                退出\n")])])]),t("h5",{attrs:{id:"whatis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#whatis"}},[a._v("#")]),a._v(" whatis")]),a._v(" "),t("blockquote",[t("p",[a._v("帮助介绍")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：whatis 命令")]),a._v("\n")])])]),t("h5",{attrs:{id:"help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[a._v("#")]),a._v(" help")]),a._v(" "),t("blockquote",[t("p",[a._v("获取帮助")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#语法：help 命令\n")])])]),t("h4",{attrs:{id:"压缩解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩解压"}},[a._v("#")]),a._v(" 压缩解压")]),a._v(" "),t("h5",{attrs:{id:"gzip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[a._v("#")]),a._v(" gzip")]),a._v(" "),t("blockquote",[t("p",[a._v("压缩")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：gzip [文件]")]),a._v("\n")])])]),t("h5",{attrs:{id:"gunzip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gunzip"}},[a._v("#")]),a._v(" gunzip")]),a._v(" "),t("blockquote",[t("p",[a._v("解压缩")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：gunzip [压缩文件]")]),a._v("\n")])])]),t("h5",{attrs:{id:"tar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[a._v("#")]),a._v(" tar")]),a._v(" "),t("blockquote",[t("p",[a._v("归档")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法：tar  选项[-zcf] [压缩后文件名] [目录]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v("    打包                 \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("    显示详细信息                 \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("     指定文件名            \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-z")]),a._v("     打包同时压缩\n\ntar命令解压缩语法：           \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-x")]),a._v("     解包           \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("    显示详细信息           \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("     指定解压文件           \n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-z")]),a._v("     解压缩\n")])])]),t("h5",{attrs:{id:"zip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zip"}},[a._v("#")]),a._v(" zip")]),a._v(" "),t("blockquote",[t("p",[a._v("压缩")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#语法 ： zip  选项[-r]  [压缩后文件名]  [文件或目录]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("    压缩目录\n")])])]),t("h5",{attrs:{id:"unzip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unzip"}},[a._v("#")]),a._v(" unzip")]),a._v(" "),t("blockquote",[t("p",[a._v("解压")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("#语法：unzip  [压缩文件]\n")])])]),t("h3",{attrs:{id:"vim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[a._v("#")]),a._v(" Vim")]),a._v(" "),t("h4",{attrs:{id:"插入命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入命令"}},[a._v("#")]),a._v(" 插入命令")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("命令")]),a._v(" "),t("th",[a._v("作用")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("a")]),a._v(" "),t("td",[a._v("在光标所在字符后插入")])]),a._v(" "),t("tr",[t("td",[a._v("A")]),a._v(" "),t("td",[a._v("在光标所在行尾插入")])]),a._v(" "),t("tr",[t("td",[a._v("i")]),a._v(" "),t("td",[a._v("在光标所在字符前插入")])]),a._v(" "),t("tr",[t("td",[a._v("I")]),a._v(" "),t("td",[a._v("在光标所在行行首插入")])]),a._v(" "),t("tr",[t("td",[a._v("o")]),a._v(" "),t("td",[a._v("在光标下插入新行")])]),a._v(" "),t("tr",[t("td",[a._v("O")]),a._v(" "),t("td",[a._v("在光标上插入新行")])])])]),a._v(" "),t("h4",{attrs:{id:"定位命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定位命令"}},[a._v("#")]),a._v(" 定位命令")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("命令")]),a._v(" "),t("th",[a._v("作用")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("：set nu")]),a._v(" "),t("td",[a._v("设置行号")])]),a._v(" "),t("tr",[t("td",[a._v("：set nonu")]),a._v(" "),t("td",[a._v("取消行号")])]),a._v(" "),t("tr",[t("td",[a._v("gg")]),a._v(" "),t("td",[a._v("到第一行")])]),a._v(" "),t("tr",[t("td",[a._v("GG")]),a._v(" "),t("td",[a._v("到最后一行")])]),a._v(" "),t("tr",[t("td",[a._v("nG")]),a._v(" "),t("td",[a._v("到第n行")])]),a._v(" "),t("tr",[t("td",[a._v("：n")]),a._v(" "),t("td",[a._v("到第n行")])]),a._v(" "),t("tr",[t("td",[a._v("$")]),a._v(" "),t("td",[a._v("移至行尾")])]),a._v(" "),t("tr",[t("td",[a._v("0")]),a._v(" "),t("td",[a._v("移至行首")])])])]),a._v(" "),t("h4",{attrs:{id:"删除命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除命令"}},[a._v("#")]),a._v(" 删除命令")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("命令")]),a._v(" "),t("th",[a._v("作用")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("x")]),a._v(" "),t("td",[a._v("删除光标所在处字符")])]),a._v(" "),t("tr",[t("td",[a._v("nx")]),a._v(" "),t("td",[a._v("删除光标所在处后n个字符")])]),a._v(" "),t("tr",[t("td",[a._v("dd")]),a._v(" "),t("td",[a._v("删除光标所在行，ndd删除n行")])]),a._v(" "),t("tr",[t("td",[a._v("dG")]),a._v(" "),t("td",[a._v("删除光标所在行到文件末尾内容")])]),a._v(" "),t("tr",[t("td",[a._v("D")]),a._v(" "),t("td",[a._v("删除光标所在处到行尾内容")])]),a._v(" "),t("tr",[t("td",[a._v(":n1,n2d")]),a._v(" "),t("td",[a._v("删除指定范围的行")])])])]),a._v(" "),t("h4",{attrs:{id:"复制和剪切命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制和剪切命令"}},[a._v("#")]),a._v(" 复制和剪切命令")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("命令")]),a._v(" "),t("th",[a._v("作用")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("yy")]),a._v(" "),t("td",[a._v("复制当前行")])]),a._v(" "),t("tr",[t("td",[a._v("nyy")]),a._v(" "),t("td",[a._v("复制当前行以下n行")])]),a._v(" "),t("tr",[t("td",[a._v("dd")]),a._v(" "),t("td",[a._v("剪切当前行")])]),a._v(" "),t("tr",[t("td",[a._v("ndd")]),a._v(" "),t("td",[a._v("剪切当前行以下n行")])]),a._v(" "),t("tr",[t("td",[a._v("p、P")]),a._v(" "),t("td",[a._v("粘贴在当前光标所在行下或者行上")])])])]),a._v(" "),t("h4",{attrs:{id:"保存和退出命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存和退出命令"}},[a._v("#")]),a._v(" 保存和退出命令")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("命令")]),a._v(" "),t("th",[a._v("作用")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("：w")]),a._v(" "),t("td",[a._v("保存修改")])]),a._v(" "),t("tr",[t("td",[a._v("：w 文件名")]),a._v(" "),t("td",[a._v("另存为指定文件")])]),a._v(" "),t("tr",[t("td",[a._v("：wq")]),a._v(" "),t("td",[a._v("保存修改并退出")])]),a._v(" "),t("tr",[t("td",[a._v("ZZ")]),a._v(" "),t("td",[a._v("快捷键，保存修改并退出")])]),a._v(" "),t("tr",[t("td",[a._v("：q！")]),a._v(" "),t("td",[a._v("不保存修改退出")])]),a._v(" "),t("tr",[t("td",[a._v("：wq！")]),a._v(" "),t("td",[a._v("保存修改退出（文件所有者和root均可忽略只读权限强制写入）")])])])]),a._v(" "),t("h3",{attrs:{id:"软件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件安装"}},[a._v("#")]),a._v(" 软件安装")]),a._v(" "),t("h4",{attrs:{id:"rpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpm"}},[a._v("#")]),a._v(" rpm")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" –ivh 包全名\n选项：\n        -i（install） 安装\n        -v（verbose） 显示详细信息\n        -h（hash） 显示进度\n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--nodeps")]),a._v(" 不检测依赖性\n        \n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-U")]),a._v(" 升级\n        \n        "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" 卸载\n")])])]),t("h4",{attrs:{id:"yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[a._v("#")]),a._v(" yum")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("yum list\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查询所有可用软件包列表")]),a._v("\n \nyum search 关键字\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#搜索服务器上所有和关键字相关的包")]),a._v("\n\nyum –y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" 包名\n \n选项：\n \n         "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" 安装\n         \n         update 升级\n         \n         remove 卸载\n \n         "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" 自动回答yes\n         \n\n")])])]),t("h3",{attrs:{id:"进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[a._v("#")]),a._v(" 进程")]),a._v(" "),t("h4",{attrs:{id:"查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查"}},[a._v("#")]),a._v(" 查")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("ps命令查找与进程相关的PID号：\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" a 显示现行终端机下的所有程序，包括其他用户的程序。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" 显示所有程序。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" c 列出程序时，显示每个程序真正的指令名称，而不包含路径，参数或常驻服务的标示。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" 此参数的效果和指定"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"A"')]),a._v("参数相同。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" e 列出程序时，显示每个程序所使用的环境变量。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" f 用ASCII字符显示树状结构，表达程序间的相互关系。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" 显示树状结构，表示程序间的相互关系。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-N")]),a._v(" 显示所有的程序，除了执行ps指令终端机下的程序之外。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" s 采用程序信号的格式显示程序状况。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" S 列出程序时，包括已中断的子程序资料。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -t"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("终端机编号"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 指定终端机编号，并列出属于该终端机的程序的状况。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" u 以用户为主的格式来显示程序状况。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" x 显示所有程序，不以终端机来区分。\n   \n最常用的方法是ps aux,然后再通过管道使用grep命令过滤查找特定的进程,然后再对特定的进程进行操作。\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" program_filter_word,ps "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" tomcat\n \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 显示出所有的java进程，去处掉当前的grep进程。\n")])])]),t("h4",{attrs:{id:"杀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#杀"}},[a._v("#")]),a._v(" 杀")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("常用：kill －9 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("324")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);