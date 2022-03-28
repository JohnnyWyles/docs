(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{482:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"joining-testnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#joining-testnet"}},[s._v("#")]),s._v(" Joining Testnet")]),s._v(" "),t("h2",{attrs:{id:"install-osmosis-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-osmosis-binary"}},[s._v("#")]),s._v(" Install Osmosis Binary")]),s._v(" "),t("p",[s._v("Make sure you have "),t("a",{attrs:{href:"../cli/install"}},[s._v("installed the Osmosis Binary (CLI).")])]),s._v(" "),t("h2",{attrs:{id:"initialize-osmosis-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initialize-osmosis-node"}},[s._v("#")]),s._v(" Initialize Osmosis Node")]),s._v(" "),t("p",[s._v("You have now installed the Osmosis Daemon (osmosisd). Use osmosisd to initialize your node (replace the NODE_NAME with a name of your choosing):")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("osmosisd init NODE_NAME --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("osmosis-testnet-0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("We now need to open the config.toml to edit the seed list:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.osmosisd/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" config.toml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v('Use page down or arrow keys to get to the line that says seeds = "" and replace it with the following:')]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("seeds "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4eaed17781cd948149098d55f80a28232a365236@testmosis.blockpane.com:26656"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Then pres "),t("code",[s._v("Ctrl+O")]),s._v(", then enter to save, then "),t("code",[s._v("Ctrl+X")]),s._v(" to exit")]),s._v(" "),t("h2",{attrs:{id:"set-up-cosmovisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-cosmovisor"}},[s._v("#")]),s._v(" Set Up Cosmovisor")]),s._v(" "),t("p",[s._v("We will now set up cosmovisor to ensure the upgrade happens flawlessly. To install Cosmovisor:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/cosmos/cosmos-sdk\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" cosmos-sdk\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v0.42.9\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" cosmovisor\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" cosmovisor/cosmovisor "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin/cosmovisor\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("Create the required directories:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor/genesis\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor/genesis/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.osmosisd/cosmovisor/upgrades\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("Set the environment variables:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# Setup Cosmovisor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_NAME=osmosisd"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_HOME='),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.osmosisd"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_ALLOW_DOWNLOAD_BINARIES=false"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_LOG_BUFFER_SIZE=512"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DAEMON_RESTART_AFTER_UPGRADE=true"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("Download and replace the genesis file:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.osmosisd/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/osmosis-labs/networks/raw/unity/v4/osmosis-1/upgrades/v4/testnet/genesis.tar.bz2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xjf genesis.tar.bz2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Copy the current osmosisd binary into the cosmovisor/genesis folder:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin/osmosisd ~/.osmosisd/cosmovisor/genesis/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("To check your work, ensure the version of cosmovisor and osmosisd are the same:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("cosmovisor version\nosmosisd version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("These two command should both output 4.2.0")]),s._v(" "),t("p",[s._v("Reset private validator file to genesis state:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("osmosisd unsafe-reset-all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"download-chain-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-chain-data"}},[s._v("#")]),s._v(" Download Chain Data")]),s._v(" "),t("p",[s._v("We must now download the latest chain data from a snapshot provider. In this example, I will use "),t("a",{attrs:{href:"https://mp20.net/snapshots/osmosis-testnet/",target:"_blank",rel:"noopener noreferrer"}},[s._v("the validator MP-20's latest testnet snapshot"),t("OutboundLink")],1),s._v(" and I will use the pruned chain data.")]),s._v(" "),t("p",[s._v("Download liblz4-tool to handle the compressed file:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" liblz4-tool aria2 -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Download, decompress, and replace the chain data:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.osmosisd/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O - https://mp20.net/snapshots/osmosis-testnet/osmosis-testnet-mp20-latest.tar.xz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" xz -d -v "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf - "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"set-up-osmosis-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-osmosis-service"}},[s._v("#")]),s._v(" Set Up Osmosis Service")]),s._v(" "),t("p",[s._v('While we could start cosmovisor now with "cosmovisor start", lets set up a service to allow cosmovisor to run in the background as well as restart automatically if it runs into any problems:')]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[Unit]\nDescription=Cosmovisor daemon\nAfter=network-online.target\n[Service]\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("osmosisd"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v("/.osmosisd"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_RESTART_AFTER_UPGRADE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_ALLOW_DOWNLOAD_BINARIES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nEnvironment="')]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DAEMON_LOG_BUFFER_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nUser='),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\nExecStart="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v('/go/bin/cosmovisor start\nRestart=always\nRestartSec=3\nLimitNOFILE=4096\n[Install]\nWantedBy=multi-user.target\n"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cosmovisor.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("Move this new file to the systemd directory:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" cosmovisor.service /lib/systemd/system/cosmovisor.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"start-osmosis-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-osmosis-service"}},[s._v("#")]),s._v(" Start Osmosis Service")]),s._v(" "),t("p",[s._v("Reload and start the service:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start cosmovisor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Check the status of your service:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl status cosmovisor\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("To see live logs of your service:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("journalctl -u cosmovisor -f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);