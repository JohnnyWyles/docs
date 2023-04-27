"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[1e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=s,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var m=2;m<a;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=n(87462),s=(n(67294),n(3905));const a={},r="Using TMKMS",i={unversionedId:"keys/tmkms",id:"keys/tmkms",title:"Using TMKMS",description:"The Tendermint Key Management System (or TMKMS) should be used by any validator currently or intending to be in the active validator set. This application mitigates the risk of double-signing and provides high-availability to validator keys while keeping these keys on a separate physical host. While TMKMS can be used on the same machine as the validator, it is recommended to be on a separate host.",source:"@site/docs/osmosis-core/keys/tmkms.md",sourceDirName:"keys",slug:"/keys/tmkms",permalink:"/osmosis-core/keys/tmkms",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-core/keys/tmkms.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multisig",permalink:"/osmosis-core/keys/multisig"},next:{title:"Relayer",permalink:"/osmosis-core/category/relayer"}},l={},m=[{value:"Prepare TMKMS Dependencies",id:"prepare-tmkms-dependencies",level:2},{value:"Setup TMKMS",id:"setup-tmkms",level:2},{value:"Final Notes",id:"final-notes",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-tmkms"},"Using TMKMS"),(0,s.kt)("p",null,"The Tendermint Key Management System (or TMKMS) should be used by any validator currently or intending to be in the active validator set. This application mitigates the risk of double-signing and provides high-availability to validator keys while keeping these keys on a separate physical host. While TMKMS can be used on the same machine as the validator, it is recommended to be on a separate host."),(0,s.kt)("h2",{id:"prepare-tmkms-dependencies"},"Prepare TMKMS Dependencies"),(0,s.kt)("p",null,"Start by opening the node you intend to run TMKMS (not the node you validate on) and install the following dependencies:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Rust")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"source $HOME/.cargo/env\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"GCC"),'\n::::: tabs :options="{ useUrlFragment: false }"\n:::: tab Ubuntu'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git build-essential ufw curl jq snapd --yes\n")),(0,s.kt)("p",null,"::::\n:::: tab Mac"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"brew install gcc\n")),(0,s.kt)("p",null,"::::\n:::::"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Libusb")),(0,s.kt)("p",null,'::::: tabs :options="{ useUrlFragment: false }"\n:::: tab Ubuntu'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"apt install libusb-1.0-0-dev\n")),(0,s.kt)("p",null,"::::"),(0,s.kt)("p",null,":::: tab Mac"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"brew install libusb\n")),(0,s.kt)("p",null,"::::\n:::::"),(0,s.kt)("p",null,"If on x86_64 architecture:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"export RUSTFLAGS=-Ctarget-feature=+aes,+ssse3\n")),(0,s.kt)("h2",{id:"setup-tmkms"},"Setup TMKMS"),(0,s.kt)("p",null,"In this example, we will be compiling from the github source code using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--features=softsign")," flag, however you may use ",(0,s.kt)("inlineCode",{parentName:"p"},"--features=yubihsm")," if you want to use a yubikey (ledger support is not working properly at the moment, and this guide will not go into using yubihsm)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\ngit clone https://github.com/iqlusioninc/tmkms.git\ncd $HOME/tmkms\ncargo install tmkms --features=softsign\ntmkms init config\ntmkms softsign keygen ./config/secrets/secret_connection_key\n")),(0,s.kt)("p",null,"Now we will transfer your validator private key from your validator to your VM running TMKMS. You can do this manually or though scp. I will use scp in this example (the validator has the IP of 123.456.32.123):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scp user@123.456.32.123:~/.osmosisd/config/priv_validator_key.json ~/tmkms/config/secrets\n")),(0,s.kt)("p",null,"Then, import the private validator key into tmkms:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"tmkms softsign import $HOME/tmkms/config/secrets/priv_validator_key.json $HOME/tmkms/config/secrets/priv_validator_key\n")),(0,s.kt)("p",null,"Please note at this point, you could delete the ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_key.json")," from both your validator node and tmkms node and store it safely offline in case of an emergency. This newly created ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_key")," will be what TMKMS will use to sign for your validator."),(0,s.kt)("p",null,"Now, modify the ",(0,s.kt)("inlineCode",{parentName:"p"},"tmkms.toml")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/tmkms/config/tmkms.toml\n")),(0,s.kt)("p",null,"In this example, my validator has the IP address of 123.456.32.123 and we will be using port 26659 to feed the validator key to the validator. We will also be using chain_id ",(0,s.kt)("inlineCode",{parentName:"p"},"osmosis-1"),", but if you are doing this on the testnet be sure to use ",(0,s.kt)("inlineCode",{parentName:"p"},"osmo-test-4")," instead:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'# Tendermint KMS configuration file\n\n## Chain Configuration\n\n### Cosmos Hub Network\n\n[[chain]]\nid = "osmosis-1"\nkey_format = { type = "bech32", account_key_prefix = "osmopub", consensus_key_prefix = "osmovalconspub" }\nstate_file = "/root/tmkms/config/state/priv_validator_state.json"\n\n## Signing Provider Configuration\n\n### Software-based Signer Configuration\n\n[[providers.softsign]]\nchain_ids = ["osmosis-1"]\nkey_type = "consensus"\npath = "/root/tmkms/config/secrets/priv_validator_key"\n\n## Validator Configuration\n\n[[validator]]\nchain_id = "osmosis-1"\naddr = "tcp://123.456.32.123:26659"\nsecret_key = "/root/tmkms/config/secrets/secret_connection_key"\nprotocol_version = "v0.34"\nreconnect = true\n')),(0,s.kt)("p",null,"Now, modify your validators ",(0,s.kt)("inlineCode",{parentName:"p"},"config.toml")," to use the port you selected in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tmkms.toml")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.osmosisd/config/config.toml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'priv_validator_laddr = "tcp://0.0.0.0:26659"\n\n')),(0,s.kt)("p",null,"It is also recommended to comment out the ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_key_file")," line and the ",(0,s.kt)("inlineCode",{parentName:"p"},"priv_validator_state_file")," line:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'# Path to the JSON file containing the private key to use as a validator in the consensus protocol\n# priv_validator_key_file = "config/priv_validator_key.json"\n\n# Path to the JSON file containing the last sign state of a validator\n# priv_validator_state_file = "data/priv_validator_state.json"\n')),(0,s.kt)("p",null,"Next, stop the validator. Move back to your VM running TMKMS and start it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"tmkms start -c $HOME/tmkms/config/tmkms.toml\n")),(0,s.kt)("p",null,"You will see error logs like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"2022-03-08T23:42:37.926816Z  INFO tmkms::commands::start: tmkms 0.11.0 starting up...\n2022-03-08T23:42:37.926968Z  INFO tmkms::keyring: [keyring:softsign] added consensus Ed25519 key: osmovalconspub1zcjduepq2qfkp3ahrhaafzuqglme9mares0eluj58xr6cy7c37cdmzq0eecqk0yehr\n2022-03-08T23:42:37.927216Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:37.929454Z ERROR tmkms::client: [osmosis-1@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:38.929746Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:38.931428Z ERROR tmkms::client: [osmosis-1@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:39.931729Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:39.932417Z ERROR tmkms::client: [osmosis-1@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:40.932732Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:40.933425Z ERROR tmkms::client: [osmosis-1@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n")),(0,s.kt)("p",null,"Now, start your osmosis validator on the validator node:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"osmosisd start\n")),(0,s.kt)("p",null,"Your TMKMS node will now show logs like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"2022-03-08T23:46:06.208451Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:46:06.210568Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] connected to validator successfully\n2022-03-08T23:46:06.210604Z  WARN tmkms::session: [osmosis-1@tcp://164.92.136.160:26659]: unverified validator peer ID! (ba44dd36899602e255b04e3608e5ef0fe4bc5f5b)\n2022-03-08T23:46:15.929787Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399910/0/2 (0 ms)\n2022-03-08T23:46:17.344579Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399911/0/2 (0 ms)\n2022-03-08T23:46:22.367627Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399912/0/2 (0 ms)\n2022-03-08T23:46:27.409777Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399913/0/2 (0 ms)\n2022-03-08T23:46:32.442300Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399914/0/2 (0 ms)\n2022-03-08T23:46:37.452162Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399915/0/2 (0 ms)\n")),(0,s.kt)("p",null,"You should now be signing blocks! If you cancel the TMKMS process, you will no longer sign blocks and will stop syncing. If you restart the TMKMS process, your validator node will continue to sync from where it left off."),(0,s.kt)("h2",{id:"final-notes"},"Final Notes"),(0,s.kt)("p",null,"Please note that this is a bare minimum setup. More robust settings such as setting up a firewall to only allow your TMKMS node to get through the priv_validator_laddr port would make your validator even more secure."))}c.isMDXComponent=!0}}]);