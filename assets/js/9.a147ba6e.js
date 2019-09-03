(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{267:function(t,a,s){"use strict";s.r(a);var e=s(38),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command","aria-hidden":"true"}},[t._v("#")]),t._v(" Command")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/classes/command.html#description"}},[t._v("Description")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/classes/command.html#attributes"}},[t._v("Attributes")])],1)]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Executes WP-CLI commands.")]),t._v(" "),s("h2",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),s("div",{staticClass:"language-puppet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-puppet"}},[s("code",[t._v("\twp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resource title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The location to run the command")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("command")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The WP-CLI command to run")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The user to run the command as.")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("unless")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A test command that checks the state of the target system and restricts when the command can run")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onlyif")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A test command that checks the state of the target system and restricts when the exec can run.")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location","aria-hidden":"true"}},[t._v("#")]),t._v(" location")]),t._v(" "),s("p",[t._v("The directory from which to run the command. If this directory does not exist, the command will fail.")]),t._v(" "),s("h3",{attrs:{id:"command-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-2","aria-hidden":"true"}},[t._v("#")]),t._v(" command")]),t._v(" "),s("p",[t._v("The actual command to execute. For example of you wanted to run "),s("code",[t._v("wp --info")]),t._v(" you would to the following:")]),t._v(" "),s("div",{staticClass:"language-puppet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-puppet"}},[s("code",[t._v("    wp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WP-CLI Info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("command")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user","aria-hidden":"true"}},[t._v("#")]),t._v(" user")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("www-data")]),t._v(".")]),t._v(")")]),t._v(" "),s("h3",{attrs:{id:"unless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unless","aria-hidden":"true"}},[t._v("#")]),t._v(" unless")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("undef")]),t._v(" which Puppet treats as "),s("code",[t._v("false")]),t._v(".")]),t._v(")")]),t._v(" "),s("p",[t._v("A test command that checks the state of the target system and restricts when the exec can run.")]),t._v(" "),s("h3",{attrs:{id:"onlyif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlyif","aria-hidden":"true"}},[t._v("#")]),t._v(" onlyif")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("/usr/bin/wp core is-installed")]),t._v(".")]),t._v(")")]),t._v(" "),s("p",[t._v("You can pass one or more checks into Puppet for this. e.g.")]),t._v(" "),s("div",{staticClass:"language-puppet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-puppet"}},[s("code",[t._v("    wp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WP-CLI Info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("command")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--info'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onlyif")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/bin/wp core is-installed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/bin/wp theme is-active twentynineteen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);