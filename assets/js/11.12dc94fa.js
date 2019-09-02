(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{269:function(t,s,a){"use strict";a.r(s);var n=a(38),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/classes/plugin.html#description"}},[t._v("Description")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/classes/plugin.html#attributes"}},[t._v("Attributes")])],1)]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Manages plugins, including installs, activations, and updates.")]),t._v(" "),a("h2",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("    wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resource title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The location to run the command.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The slug of the plugin in the WordPress repository.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# What state the option should be in.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("networkwide")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Whether the state should be applied network wide.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The version of the plugin to install.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onlyif")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A test command that checks the state of the target system and restricts when the exec can run.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location","aria-hidden":"true"}},[t._v("#")]),t._v(" location")]),t._v(" "),a("p",[t._v("The directory from which to run the command. If this directory does not exist, the command will fail.")]),t._v(" "),a("h3",{attrs:{id:"slug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slug","aria-hidden":"true"}},[t._v("#")]),t._v(" slug")]),t._v(" "),a("p",[t._v("("),a("em",[t._v("If omitted, this attribute’s value defaults to the resource’s title.")]),t._v(")")]),t._v(" "),a("h3",{attrs:{id:"ensure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ensure","aria-hidden":"true"}},[t._v("#")]),t._v(" ensure")]),t._v(" "),a("p",[t._v("("),a("em",[t._v("If omitted, this attribute’s value defaults to enabled.")]),t._v(")")]),t._v(" "),a("p",[t._v("Values: "),a("code",[t._v("activate")]),t._v(", "),a("code",[t._v("enabled")]),t._v(", "),a("code",[t._v("disabled")]),t._v(", "),a("code",[t._v("installed")]),t._v(", "),a("code",[t._v("deleted")]),t._v(", "),a("code",[t._v("uninstalled")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"networkwide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#networkwide","aria-hidden":"true"}},[t._v("#")]),t._v(" networkwide")]),t._v(" "),a("p",[t._v("("),a("em",[t._v("If omitted, this attribute’s value defaults to false")]),t._v(")")]),t._v(" "),a("p",[t._v("Values: "),a("code",[t._v("true")]),t._v(", "),a("code",[t._v("false")])]),t._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[t._v("#")]),t._v(" version")]),t._v(" "),a("p",[t._v("("),a("em",[t._v("If omitted, this attribute’s value defaults to the latest version in the WordPress repository")]),t._v(")")]),t._v(" "),a("p",[t._v("Values: "),a("code",[t._v("latest")]),t._v(" or a version number e.g. "),a("code",[t._v("1.0.1")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"onlyif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onlyif","aria-hidden":"true"}},[t._v("#")]),t._v(" onlyif")]),t._v(" "),a("p",[t._v("("),a("em",[t._v("If omitted, this attribute’s value defaults to "),a("code",[t._v("/usr/bin/wp core is-installed")]),t._v(".")]),t._v(")")]),t._v(" "),a("p",[t._v("You can pass one or more checks into Puppet for this. e.g.")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("    wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("command "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WP-CLI Info'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("command")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--info'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onlyif")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/bin/wp core is-installed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/bin/wp theme is-active twentynineteen'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Install and activate Yoast SEO.")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("  wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Install and activate Yoast SEO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wordpress-seo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enabled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Install and activate Yoast SEO Network Wide.")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("  wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Install and activate Yoast SEO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wordpress-seo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enabled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("networkwide")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Install Yoast SEO.")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("  wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Install Yoast SEO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wordpress-seo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'installed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Activate Yoast SEO.")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("  wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Activate Yoast SEO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wordpress-seo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'activate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Delete Hello Dolly.")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("  wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Delete Hello Dolly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello-dolly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deleted'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Deactivate Hello Dolly.")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("  wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Deactivate Hello Dolly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello-dolly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disabled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Uninstall Hello Dolly.")]),t._v(" "),a("div",{staticClass:"language-puppet extra-class"},[a("pre",{pre:!0,attrs:{class:"language-puppet"}},[a("code",[t._v("  wp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Uninstall Hello Dolly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/vagrant'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slug")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello-dolly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ensure")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uninstalled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);