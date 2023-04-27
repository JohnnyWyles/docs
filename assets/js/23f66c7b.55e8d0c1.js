"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(h,c(c({ref:t},m),{},{components:r})):n.createElement(h,c({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4},c="Verifying Smart Contracts",s={unversionedId:"cosmwasm-verify-contract",id:"cosmwasm-verify-contract",title:"Verifying Smart Contracts",description:"The following are the steps needed to verify any contract from the chain. In this particular example a brand new contract uploaded to the testnet.",source:"@site/docs/cosmwasm/cosmwasm-verify-contract.md",sourceDirName:".",slug:"/cosmwasm-verify-contract",permalink:"/cosmwasm/cosmwasm-verify-contract",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/cosmwasm/cosmwasm-verify-contract.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cosmwasm testnet deployment",permalink:"/cosmwasm/testnet/cosmwasm-deployment"},next:{title:"Javascript & Smart Contracts",permalink:"/cosmwasm/javascript"}},i={},l=[{value:"Create new contract",id:"create-new-contract",level:3},{value:"Contract info",id:"contract-info",level:3},{value:"Contract version",id:"contract-version",level:3},{value:"Downloading the Contract from the network",id:"downloading-the-contract-from-the-network",level:3},{value:"Getting the hash",id:"getting-the-hash",level:3},{value:"Verify hash",id:"verify-hash",level:3}],m={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verifying-smart-contracts"},"Verifying Smart Contracts"),(0,a.kt)("p",null,"The following are the steps needed to verify any contract from the chain. In this particular example a brand new contract uploaded to the testnet. "),(0,a.kt)("h3",{id:"create-new-contract"},"Create new contract"),(0,a.kt)("p",null,"Follow ",(0,a.kt)("a",{parentName:"p",href:"../cosmwasm/testnet/cosmwasm-beaker"},"this guide")," to create a new contract with Beaker."),(0,a.kt)("p",null,"Output:"),(0,a.kt)("img",{width:"686",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176251934-121d6422-808b-4d42-b482-98ac792af633.png"}),(0,a.kt)("p",null,"Once the contract is created query the contract information. Assuming you are connected to the testnet. "),(0,a.kt)("h3",{id:"contract-info"},"Contract info"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"osmosisd query wasm contract osmo1mpf0guu0t363xrshhedandypq003ahzaxvsxzgu69n3ej03mh2zqx5gk8l\n\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("img",{width:"1190",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176260093-1fc8ac27-dbd6-4f3b-86c8-341112496db4.png"}),(0,a.kt)("h3",{id:"contract-version"},"Contract version"),(0,a.kt)("p",null,"Get the contract version by running the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"osmosisd query wasm contract-state raw osmo1mpf0guu0t363xrshhedandypq003ahzaxvsxzgu69n3ej03mh2zqx5gk8l 636F6E74726163745F696E666F --node https://rpc.testnet.osmosis.zone:443 --output json | jq  -r .data | base64 -d | jq\n")),(0,a.kt)("p",null,"What in the world is ",(0,a.kt)("inlineCode",{parentName:"p"},"636F6E74726163745F696E666F"),"? \ud83d\ude15 "),(0,a.kt)("p",null,'ContractInfo is must be stored under "contract_info" key which translates to "636F6E74726163745F696E666F" in hex format. As documented ',(0,a.kt)("a",{parentName:"p",href:"https://lib.rs/crates/cw2"},"here"),"."),(0,a.kt)("p",null,"Output:"),(0,a.kt)("img",{width:"1210",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176259801-3b961c4c-c757-4a80-a9b1-c893c6306789.png"}),(0,a.kt)("h3",{id:"downloading-the-contract-from-the-network"},"Downloading the Contract from the network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"osmosisd query wasm code 205 205_code.wasm --node https://rpc.testnet.osmosis.zone:443\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("img",{width:"713",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176260453-0a1ed7c4-e850-4c0d-8e88-3a7de5a7aef9.png"}),(0,a.kt)("h3",{id:"getting-the-hash"},"Getting the hash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sha256sum 205_code.wasm\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("img",{width:"805",alt:"image",src:"https://user-images.githubusercontent.com/13665117/176260874-546f1efe-84ee-470c-b050-bff49c2e7d16.png"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"0b662785042cd938d0f0e8142f69d2d23fdf0addec965d1fbeacf44080330016")),(0,a.kt)("h3",{id:"verify-hash"},"Verify hash"),(0,a.kt)("p",null,"Now it's time to verify the hash with the source repos. All contracts should provide a repository with a hash for their contracts the same way that ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/releases"},"cw-plus")," does on their checksum as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10bc1a8cf82055106b26136f26137d6bf132df99c2d2098a75d03b64e7fe75a5  cw1155_base.wasm\n539b62678532596c73b27764186623a2bb868f5e67c3e588508c4a28e105e8c9  cw1_subkeys.wasm\nb67bc69fef770c28d48730feb800ea9c91eaae1a608e3ea7819aac64a6e99d92  cw1_whitelist.wasm\n....\n\n")))}p.isMDXComponent=!0}}]);