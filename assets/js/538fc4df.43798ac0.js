"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[1397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return a?i.createElement(d,s(s({ref:t},c),{},{components:a})):i.createElement(d,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const o={},s="Liquidity Mining Incentives",r={unversionedId:"integrate/incentives",id:"integrate/incentives",title:"Liquidity Mining Incentives",description:"Liquidity Providers on Osmosis can receive liquidity incentives in addition to swap fees for bonding to a pool. These can come from many sources.",source:"@site/docs/overview/integrate/incentives.md",sourceDirName:"integrate",slug:"/integrate/incentives",permalink:"/overview/integrate/incentives",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/integrate/incentives.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Osmosis Zone Front End",permalink:"/overview/integrate/frontend"},next:{title:"Creating a LBP",permalink:"/overview/integrate/lbp"}},l={},p=[{value:"External Incentives",id:"external-incentives",level:2},{value:"External Incentive Matching Program",id:"external-incentive-matching-program",level:2},{value:"How to join the External Incentive Matching Program:",id:"how-to-join-the-external-incentive-matching-program",level:3},{value:"Internal incentives",id:"internal-incentives",level:2},{value:"How to Receive Internal Incentives",id:"how-to-receive-internal-incentives",level:3},{value:"Distribution Calculations",id:"distribution-calculations",level:2},{value:"Category Model",id:"category-model",level:3},{value:"Target Share",id:"target-share",level:3},{value:"Minimum Share",id:"minimum-share",level:3},{value:"Maximum Share",id:"maximum-share",level:3},{value:"Major",id:"major",level:3},{value:"Stable",id:"stable",level:3},{value:"Categories",id:"categories",level:3},{value:"Scale Limited Adjustments",id:"scale-limited-adjustments",level:3},{value:"Maturity",id:"maturity",level:3},{value:"Bond Duration",id:"bond-duration",level:3},{value:"Superfluid Staking",id:"superfluid-staking",level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"liquidity-mining-incentives"},"Liquidity Mining Incentives"),(0,n.kt)("p",null,"Liquidity Providers on Osmosis can receive liquidity incentives in addition to swap fees for bonding to a pool. These can come from many sources."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/overview/getting-started/#external-incentives"},"External Incentives"),"\nOsmosis allows for the permissionless creation of (external) liquidity mining gauges, allowing projects to add thier own rewards to further incentivize users to provide liquidity into a pool.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/overview/getting-started/#external-incentive-matching-program"},"External Incentive Matching Program"),"\nActivated by Osmosis governance, this is a temporary addition to the Osmosis internal incentives system in order to share the cost of establishing liquidity.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/overview/getting-started/#internal-incentives"},"Internal Incentives"),"\nOsmosis allocates 20% of its inflation to incentivize users to bond their liquidity on Osmosis. If a pool is included then it will be allocated a share of incentives based on several factors such as type of asset, swap fees generated in the pool, age of listing and sustained volumes. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/overview/getting-started/#superfluid-staking"},"Superfluid Staking"),"\nIf enabled on a pool, a portion of the OSMO within can also be staked. Providing additional security to Osmosis as well as giving the liquidity providers additional staking rewards and the ability to participate in governance."))),(0,n.kt)("p",null,"To learn more about the Liquidity Mining modules, see: Osmosis Docs: Develop > Osmosis-core > Modules > ",(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/osmosis-core/modules/incentives"},"Incentives")),(0,n.kt)("h2",{id:"external-incentives"},"External Incentives"),(0,n.kt)("p",null,"External Incentives are an effective way to incentivize users to provide liquidity, as well as a great way to have the pool be considered for onboarding into the set of pools receiving internal Osmosis Liquidity Mining incentives. Creating an incentive gauge is permissionless, so anyone can deposit tokens into a gauge to be distributed as bonding incentives. This feature allows outside parties to augment Osmosis\u2019 own liquidity incentive program without having to obtain governance approval."),(0,n.kt)("p",null,"It is possible to add incentives to any combination of 1-day, 7-day, and 14-day gauges. Incentives allocated to the 1-day gauge will be split among all three gauges. Incentives allocated to the 7-day gauge will be split among only the 7-day and 14-day gauges, but not to the 1-day gauge. Incentives allocated to the 14-day gauge will only be distributed to the 14-day gauge."),(0,n.kt)("p",null,"Currently, the only way to create an external incentive gauge is to run the ",(0,n.kt)("a",{parentName:"p",href:"../../osmosis-core/modules/incentives/#create-gauge"},"create-gauge command")," using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/osmosis-core/osmosisd"},"CLI"),"."),(0,n.kt)("p",null,"This command costs 100 OSMO to run, transferred from the running wallet's balance to the Osmosis Community Pool, but can be used to load any token as external incentives to any pool."),(0,n.kt)("h2",{id:"external-incentive-matching-program"},"External Incentive Matching Program"),(0,n.kt)("p",null,"To incentivize projects to add external incentives, Osmosis governance voted to add the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/proposals/47"},"External Incentive Matching program"),". If on-chain governance approves to match external incentives for a pool then the pool will be added to the internal incentives system and begin to receive OSMO incentives up to the value of the external incentives."),(0,n.kt)("p",null,"This has the potential to effectively double the impact of a project's external incentives, although there are some restrictions to this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Osmosis generally prefers to use incentives on OSMO pools and so there is an OSMO bias that can down-scale the value of the OSMO matching. If the pool is an OSMO pool, (e.g., FOO/OSMO,) then the value of the matching is 100%. But, if the pool is a non-OSMO pool, (e.g., FOO/ATOM,) then the value of the matching is scaled down to 50% of the value of the external incentives. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/264"},"Osmosis Proposal #264: External Incentive Matching reduction within non-OSMO categories")))),(0,n.kt)("li",{parentName:"ul"},"There is also a cap on the value of the matching, which is no more than value of the standard OSMO incentives that the pool would receive from internal Osmosis incentives.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See: ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/133"},"Osmosis Proposal #133: Incentive Matching Fee Based and 1:1 Caps"))))),(0,n.kt)("h3",{id:"how-to-join-the-external-incentive-matching-program"},"How to join the External Incentive Matching Program:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a post on the ",(0,n.kt)("a",{parentName:"li",href:"https://gov.osmosis.zone"},"Osmosis Governance Forum")," to allow users to give opinions on whether this should be matched.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://gov.osmosis.zone/discussion/5032-evmos-incentivized-pool-matched-incentives"},"Commonwealth post: EVMOS Incentivized pool & Matched Incentives")," for an example."))),(0,n.kt)("li",{parentName:"ul"},"After the 3 day waiting period on the governance forum, ",(0,n.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/osmosis-core/modules/gov#submit-proposal-text"},"create a text proposal")," with the details of the pool, duration of incentives and potential matching amount.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/346"},"Osmosis Proposal #346 Match External Incentives on OSMO/EVMOS")," for an example of a successful proposal to match external incentives to a new pool. "))),(0,n.kt)("li",{parentName:"ul"},"A successful proposal will lead to incentive matching being included in the next routine incentives proposal (Monday ~15:00 UTC) and lead to incentives starting on the following Sunday.")),(0,n.kt)("h2",{id:"internal-incentives"},"Internal incentives"),(0,n.kt)("p",null,"Internal incentives are provided from Osmosis inflation at each Epoch. Each pool on Osmosis has gauges that may be assigned a weighting to receive a share of these emissions. This weighting can be viewed on chain by ",(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/osmosis-core/modules/pool-incentives#queries"},"querying the poolincentives module"),"."),(0,n.kt)("p",null,"To see how these weightings translate into incentive rates there is a spreadsheet that shows the current incentives as well as a prediction of how they will change at the next weekly adjustment: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1oEn8JtrIU1mze_3Fw4DbbxWBq6yPUM-yAoaOPxG6Y1k/edit#gid=9186761"},"Incentives Spreadsheet")),(0,n.kt)("p",null,"Each weekly adjustment is required to be voted through Osmosis Governance in order to directly approve changes to the on chain parameters. An example of this is ",(0,n.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/proposals/493"},"Proposal 493"),"."),(0,n.kt)("p",null,"The calculations that generate these weightings are visible in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OsmosisIncentivesCommittee/OsmoIncentives"},"github repository")," as well as detailed ",(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/overview/integrate/incentives#distribution-calculations"},"below"),"."),(0,n.kt)("h3",{id:"how-to-receive-internal-incentives"},"How to Receive Internal Incentives"),(0,n.kt)("p",null,"Pools that are voted in to receive Osmosis internal incentives remain in the system unless removed by a subsequent proposal. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a post on the ",(0,n.kt)("a",{parentName:"li",href:"https://gov.osmosis.zone"},"Osmosis Governance Forum")," to allow users to give opinions on whether this should be matched.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://gov.osmosis.zone/discussion/6876-signalling-proposal-for-axelar-incentivised-pool"},"Commonwealth post: Signalling Proposal for Axelar Incentivised Pool")," for an example."))),(0,n.kt)("li",{parentName:"ul"},"After the 3 day waiting period on the governance forum, ",(0,n.kt)("a",{parentName:"li",href:"https://docs.osmosis.zone/osmosis-core/modules/gov#submit-proposal-text"},"create a text proposal"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/333"},"Osmosis Proposal #333: Signalling Proposal for OSMO/AXL incentivised pool")," for an example of a successful proposal. "))),(0,n.kt)("li",{parentName:"ul"},"A successful proposal will lead to the pool being included in the next routine incentives proposal (Monday ~15:00 UTC) and lead to incentives starting on the following Sunday.")),(0,n.kt)("p",null,"Ways to increase the chances of a pool being accepted:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Propose an OSMO pool.\nOsmosis originally incentivised other base pairs such as ATOM and USDC, however the community expressed a desire to move to OSMO pools only. These are more likely to pass.\nExceptions would be pools which provide essential value to fulfil Osmosis' goal of become a liquidity hub such as Stable/Stable pools and Composability pool."),(0,n.kt)("li",{parentName:"ul"},"Add appropriate External incentives.\nPools that already have external incentives, or have previously been part of the external incentive matching program are a more efficient spend for Osmosis, and also shows that the project is serious about the pool.\nPools with excessive external incentives may not be taken seriously due to high inflation and hype drawing more liquidity than Osmosis requires to faciliate trading."),(0,n.kt)("li",{parentName:"ul"},"Propose well designed pools.\nPools with high swap fees or asymmetrical weighting ocan discourage trading or providing liquidity. It is best to stick to a standard pool design (i.e., 50/50 weighting and <= 0.3% swap fee)"),(0,n.kt)("li",{parentName:"ul"},"Engage with feedback on the Governance forum and in wider social media to answer user concerns and establish a benefit to Osmosis acquiring liquidity.")),(0,n.kt)("h2",{id:"distribution-calculations"},"Distribution Calculations"),(0,n.kt)("h3",{id:"category-model"},"Category Model"),(0,n.kt)("p",null,"This model groups pools into a number of categories with fixed incentive shares, so that we can prioritize certain classes of liquidity directly.\nThe model is maintained in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OsmosisIncentivesCommittee/OsmoIncentives"},"OsmoIncentives")," repo and produces a new proposal to adjust incentive allocations weekly. These are also viewable as csv outputs which are auto imported into ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1ydQfgEDot0AC9xuT2txc39VBfuum_I1gU_1-GrmrWx4/edit?usp=sharing"},"Current Proposal")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1oEn8JtrIU1mze_3Fw4DbbxWBq6yPUM-yAoaOPxG6Y1k/edit?usp=sharing"},"Prospective Proposal")," spreadsheets."),(0,n.kt)("h3",{id:"target-share"},"Target Share"),(0,n.kt)("p",null,"The share of incentives allocated to each category is then split according to the proportion of swap fees collected by each pool within the category. These values are limited by the ",(0,n.kt)("inlineCode",{parentName:"p"},"swap fee cap")," (currently 3), such that pools will not benefit by having more than 3x the average fee APR of the category."),(0,n.kt)("p",null,"We then recalculate shares using (capped) fees + external incentives collected by the pool. To limit the incentive increase caused by a match relative to the base incentives, we take the minimum of this ",(0,n.kt)("inlineCode",{parentName:"p"},"adjusted reveneue")," share, and ",(0,n.kt)("inlineCode",{parentName:"p"},"(1 + matched_multiple_cap) * capped_fee_share"),". We set ",(0,n.kt)("inlineCode",{parentName:"p"},"matched_multiple_cap")," at 1, so that matches can be no more than the base incentives of a pool."),(0,n.kt)("h3",{id:"minimum-share"},"Minimum Share"),(0,n.kt)("p",null,"Pools can also have a minimum share set by governance, to incentivize liquidity ahead of observed trading volume. Minimum shares have currently been set for the OSMO/ETH, OSMO/WBTC, OSMO/CRO, OSMO/DAI and OSMO/DOT pools.  These parameters are set and changed by governance and should be used to prioritizes the growth of strategic liquidity."),(0,n.kt)("h3",{id:"maximum-share"},"Maximum Share"),(0,n.kt)("p",null,"Pools can also have a maximum share set by governance, to prevent too many incentives being allocated to any one pool and ensuring a diverse range of liquidity for trading.  Currently the OSMO/ATOM pool and OSMO/USDC pools have maximum shares to encourage liquidity diversification in the Major/OSMO and Stable/OSMO categories."),(0,n.kt)("h3",{id:"major"},"Major"),(0,n.kt)("p",null,"Qualification for ",(0,n.kt)("inlineCode",{parentName:"p"},"Major")," status is determined by governance based on a combination of factors, namely:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Is the token market cap large relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"OSMO"),"?"),(0,n.kt)("li",{parentName:"ul"},"Does the majority of the trade volume happen outside of Osmosis?"),(0,n.kt)("li",{parentName:"ul"},"Does Osmosis have a strategic interest in attracting more liquidity of this token?\nBeing listed as a ",(0,n.kt)("inlineCode",{parentName:"li"},"Major")," asset gives a token a higher share of incentives.")),(0,n.kt)("p",null,"The Current Major tokens are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ATOM ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/233"},"Proposal #233")),(0,n.kt)("li",{parentName:"ul"},"WETH ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/233"},"Proposal #233")),(0,n.kt)("li",{parentName:"ul"},"WBTC ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/233"},"Proposal #233")),(0,n.kt)("li",{parentName:"ul"},"CRO ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/233"},"Proposal #233")),(0,n.kt)("li",{parentName:"ul"},"DOT ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/287"},"Proposal #287")),(0,n.kt)("li",{parentName:"ul"},"MATIC ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/385"},"Proposal #385")),(0,n.kt)("li",{parentName:"ul"},"AVAX ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/409"},"Proposal #409")),(0,n.kt)("li",{parentName:"ul"},"FTM ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/434"},"Proposal #434"))),(0,n.kt)("h3",{id:"stable"},"Stable"),(0,n.kt)("p",null,"Qualification for ",(0,n.kt)("inlineCode",{parentName:"p"},"Stable")," status has not been formally set, however it is an endorsement by Osmosis governance that this token is recognised as a Stable token and so will be allocated a higher share of incentives by Osmosis as well as being subject to automatic external incentive matching on Stable/Stable pools according to ","[Proposal 377]","\n(",(0,n.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/proposals/377"},"https://www.mintscan.io/osmosis/proposals/377"),")"),(0,n.kt)("p",null,"Stable assets are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"USDC ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/233"},"[Proposal #233]")," "),(0,n.kt)("li",{parentName:"ul"},"DAI ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/233"},"[Proposal #233]")," "),(0,n.kt)("li",{parentName:"ul"},"USDT ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/403"},"[Proposal #403]")),(0,n.kt)("li",{parentName:"ul"},"IST ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/431"},"[Proposal #431]")),(0,n.kt)("li",{parentName:"ul"},"CMST ",(0,n.kt)("a",{parentName:"li",href:"https://www.mintscan.io/osmosis/proposals/442"},"[Proposal #442]"))),(0,n.kt)("h3",{id:"categories"},"Categories"),(0,n.kt)("p",null,"These determine the ratio of incentives that are allocated to each category"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Osmo/Major - 54%"),(0,n.kt)("li",{parentName:"ul"},"Osmo/Stable - 17%"),(0,n.kt)("li",{parentName:"ul"},"Osmo/Minor - 25%"),(0,n.kt)("li",{parentName:"ul"},"Stable/Stable - <=4%"),(0,n.kt)("li",{parentName:"ul"},"Composability - 0.074%")),(0,n.kt)("p",null,"Any Stable/Stable incentives below the 4% cap are redistributed proportionately between the other categories."),(0,n.kt)("h3",{id:"scale-limited-adjustments"},"Scale Limited Adjustments"),(0,n.kt)("p",null,"To prevent excessive volatility in the incentives APRs, incentive targets are adjusted towards over multiple weeks, with each adjustment being limited to no more than +25% or -25%. This is somewhat disrupted as a result of normalization though, so when there are large changes in other pools, some pools might see changes in the range of +/- 30%."),(0,n.kt)("h3",{id:"maturity"},"Maturity"),(0,n.kt)("p",null,"This adjustment scale limiting, is also partially negated during the 4 week onboarding period, where pools are expected to grow quite quickly, and so incentives need to be able to adjust quickly as well to keep up. During this period, the setting for the pool is chosen to be a weighted average between the target level and the adjustment limited by the 25% scale, with the weighting between these shifting linearly from entirely target, to entirely scale limited adjustment over the onboarding period. (ie 100% target, 75% target/25% adjustment, 50/50, 25/75, 100% adjustment)\nThe maturity setting is also exempted when the status of external incentives matching changes in order to allocate an appropriate amount of incentives to tokens with established trading history."),(0,n.kt)("h3",{id:"bond-duration"},"Bond Duration"),(0,n.kt)("p",null,"Under current parameters, all Internal incentives go to the 14day gauge only due to ",(0,n.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/proposals/400"},"Proposal 400"),".\nIn the event of there being multiple bonding periods active, e.g. for External incentives, each bonding period in a pool receives a share of incentives for all shorter bonding periods."),(0,n.kt)("h2",{id:"superfluid-staking"},"Superfluid Staking"),(0,n.kt)("p",null,"Osmosis Superfluid Staking can further incentivize users to provide liquidity to a pool, as they are able to stake their LP tokens for additional rewards as well as participating in Osmosis governance. The rewards from superfluid staking come from a portion of the OSMO in the pool being staked, so only OSMO pools can qualify for superfluid staking."),(0,n.kt)("p",null,"The reason Osmosis hasn't simply allowed all OSMO pools to enable Superfluid staking is because any sudden extreme loss of value in an asset paired with OSMO would cause the OSMO side of the pool to shrink significantly, and this poses a risk to the security of the chain. The superfluid staked OSMO is meant to be safely staked and untouchable for at least 14-days (the duration on the unbonding period), like all staked OSMO, but if the amount of OSMO in a pool suddenly shrinks, then it essentially has the effect of releasing staked OSMO before the 14-days. This is why governance must assess whether a pool seems stable before enabling superfluid staking for it. "),(0,n.kt)("p",null,"Currently, there is no strict criteria on which pools may have Superfluid staking enabled, however typical standards from historical discussions include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chain/Token should be established for at least three months."),(0,n.kt)("li",{parentName:"ul"},"Token supply should be reasonably decentralised."),(0,n.kt)("li",{parentName:"ul"},"Liquidity should be suitably high (>$300k) to prevent high volatility in the quantity of Superfluid Staked OSMO. "),(0,n.kt)("li",{parentName:"ul"},"Pool liquidity should have stabilised.")),(0,n.kt)("p",null,"The feature is enabled by via on-chain governance by a ",(0,n.kt)("inlineCode",{parentName:"p"},"Set Superfluid Asset")," Proposal. These proposals must also be posted to the ",(0,n.kt)("a",{parentName:"p",href:"https://gov.osmosis.zone/"},"Osmosis Governance Forum")," for 3 days before moving to chain."),(0,n.kt)("p",null,"For an example of a forum post see ",(0,n.kt)("a",{parentName:"p",href:"https://commonwealth.im/osmosis/discussion/10497-enable-superfluid-staking-on-osmousdt"},"Commonwealth Post: Enable Superfluid Staking on OSMO/USDT"),"\nFor an example of a Superfluid proposal see ",(0,n.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/proposals/471"},"Proposal #471: Enable Superfluid Staking on OSMO/USDT\n"),"\nFor instructions on how to carry out a ",(0,n.kt)("inlineCode",{parentName:"p"},"Add Superfluid Asset")," Proposal via ",(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/osmosis-core/osmosisd"},"CLI")," see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/osmosis-core/modules/gov#submit-proposal-set-superfluid-asset"},"Gov Module Documentation")))}h.isMDXComponent=!0}}]);