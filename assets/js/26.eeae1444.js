(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{468:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"install-osmosisd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-osmosisd"}},[s._v("#")]),s._v(" Install Osmosisd")]),s._v(" "),a("h2",{attrs:{id:"minimum-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimum-requirements"}},[s._v("#")]),s._v(" Minimum Requirements")]),s._v(" "),a("p",[s._v("The minimum recommended specs for running osmosisd is as follows:")]),s._v(" "),a("ul",[a("li",[s._v("8-core (4 physical core), x86_64 architecture processor")]),s._v(" "),a("li",[s._v("32 GB RAM (or equivalent swap file set up)")]),s._v(" "),a("li",[s._v("1 TB of storage space")])]),s._v(" "),a("h2",{attrs:{id:"update-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-system"}},[s._v("#")]),s._v(" Update System")]),s._v(" "),a("p",[s._v("This guide will explain how to install the osmosisd binary onto your system.")]),s._v(" "),a("p",[s._v("On Ubuntu start by updating your system:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade --yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"install-build-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-build-requirements"}},[s._v("#")]),s._v(" Install Build Requirements")]),s._v(" "),a("p",[s._v("Install make and gcc.")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" build-essential ufw "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" jq snapd --yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Install go:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -q -O - https://git.io/vQhTU "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s -- --version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.17")]),s._v(".2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("After installed, open new terminal to properly load go")]),s._v(" "),a("h2",{attrs:{id:"install-osmosis-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-osmosis-binary"}},[s._v("#")]),s._v(" Install Osmosis Binary")]),s._v(" "),a("p",[s._v("Clone the osmosis repo, checkout and install v6.2.0:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/osmosis-labs/osmosis\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" osmosis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v6.2.0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("If you came from the testnet node instruction, "),a("a",{attrs:{href:"../network/join-testnet"}},[s._v("click here to return")])]),s._v(" "),a("p",[s._v("If you came from the mainnet node instruction, "),a("a",{attrs:{href:"../network/join-mainnet"}},[s._v("click here to return")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);