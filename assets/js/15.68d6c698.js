(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{278:function(t,a,s){"use strict";s.r(a);var e=s(38),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[t._v("#")]),t._v(" Theme")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/classes/theme.html#description"}},[t._v("Description")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/classes/theme.html#attributes"}},[t._v("Attributes")])],1)]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Manages themes, including installs, activations, and updates.")]),t._v(" "),s("h2",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),s("div",{staticClass:"language-puppet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-puppet"}},[s("code",[t._v("    wp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("theme "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resource title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The location to run the command.")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The slug of the theme.")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# What state the option should be in.")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onlyif")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A test command that checks the state of the target system and restricts when the exec can run.")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("all")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If set this will delete all the themes apart from the theme that has been passed into the class.")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mod")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The action of the theme mod.")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The key of the theme mod.")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The value of the theme mod.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location","aria-hidden":"true"}},[t._v("#")]),t._v(" location")]),t._v(" "),s("p",[t._v("The directory from which to run the command. If this directory does not exist, the command will fail.")]),t._v(" "),s("h3",{attrs:{id:"slug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slug","aria-hidden":"true"}},[t._v("#")]),t._v(" slug")]),t._v(" "),s("p",[t._v("The slug of the theme. e.g. "),s("code",[t._v("twentynineteen")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"ensure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ensure","aria-hidden":"true"}},[t._v("#")]),t._v(" ensure")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("enabled")]),t._v(".")]),t._v(")")]),t._v(" "),s("p",[t._v("Values: "),s("code",[t._v("activate")]),t._v(", "),s("code",[t._v("enabled")]),t._v(", "),s("code",[t._v("disabled")]),t._v(", "),s("code",[t._v("installed")]),t._v(", "),s("code",[t._v("deleted")]),t._v(" or "),s("code",[t._v("mod")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[t._v("#")]),t._v(" version")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to the latest version in the WordPress repository")]),t._v(")")]),t._v(" "),s("p",[t._v("Values: "),s("code",[t._v("latest")]),t._v(" or a version number e.g. "),s("code",[t._v("1.3")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"onlyif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlyif","aria-hidden":"true"}},[t._v("#")]),t._v(" onlyif")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("/usr/bin/wp core is-installed")]),t._v(".")]),t._v(")")]),t._v(" "),s("p",[t._v("You can pass one or more checks into Puppet for this. e.g.")]),t._v(" "),s("div",{staticClass:"language-puppet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-puppet"}},[s("code",[t._v("  wp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("theme "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Activate Twenty Nineteen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'twentynineteen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enabled'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onlyif")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/bin/wp core is-installed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/bin/wp theme is-active twentynineteen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"all"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all","aria-hidden":"true"}},[t._v("#")]),t._v(" all")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("false")]),t._v(".")]),t._v(")")]),t._v(" "),s("p",[t._v("If set this and "),s("code",[t._v("ensure => 'deleted'")]),t._v(" then it will delete all the themes apart from the active theme.\nIf set this and "),s("code",[t._v("mod => 'remove'")]),t._v(" then it will delete all theme mods.")]),t._v(" "),s("p",[t._v("Value: "),s("code",[t._v("true")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-puppet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-puppet"}},[s("code",[t._v("  wp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("theme "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Activate Twenty Nineteen and delete all other themes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'twentynineteen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deleted'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("all")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"mod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mod","aria-hidden":"true"}},[t._v("#")]),t._v(" mod")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("false")]),t._v(".")]),t._v(")")]),t._v(" "),s("p",[t._v("Values: "),s("code",[t._v("get")]),t._v(", "),s("code",[t._v("set")]),t._v(" or "),s("code",[t._v("remove")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-puppet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-puppet"}},[s("code",[t._v("  wp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("theme "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Activate Twenty Nineteen and delete all other themes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mod'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mod")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'set'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'background_color'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'000000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key","aria-hidden":"true"}},[t._v("#")]),t._v(" key")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("false")]),t._v(".")]),t._v(")")]),t._v(" "),s("p",[t._v("This is the key used with "),s("router-link",{attrs:{to:"/classes/theme.html#mod"}},[t._v("mod")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#value","aria-hidden":"true"}},[t._v("#")]),t._v(" value")]),t._v(" "),s("p",[t._v("("),s("em",[t._v("If omitted, this attribute’s value defaults to "),s("code",[t._v("false")]),t._v(".")]),t._v(")")]),t._v(" "),s("p",[t._v("This is the value used with "),s("router-link",{attrs:{to:"/classes/theme.html#mod"}},[t._v("mod")]),t._v(".")],1),t._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-puppet extra-class"},[s("pre",{pre:!0,attrs:{class:"language-puppet"}},[s("code",[t._v("  wp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("theme "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Activate Twenty Nineteen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'twentynineteen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enabled'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);