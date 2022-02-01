(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{479:function(e,t,s){"use strict";s.r(t);var a=s(8),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"txfees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#txfees"}},[e._v("#")]),e._v(" Txfees")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("txfees")]),e._v(' modules allows nodes to easily support many tokens for usage as txfees, while letting node operators only specify their tx fee parameters for a single "base" asset.\nThis is done by having this module maintain an allow-list of token denoms which can be used as tx fees, each with some associated metadata.\nThis metadata is then used in tandem with a "Spot Price Calculator" provided to the module, to convert the provided tx fees into their equivalent value in the base denomination.\nCurrently the only supported metadata & spot price calculator is using a GAMM pool ID & the GAMM keeper.')]),e._v(" "),s("h2",{attrs:{id:"transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),s("h2",{attrs:{id:"queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),s("p",[e._v("base-denom"),s("br"),e._v("\nQuery the base fee denom")]),e._v(" "),s("p",[e._v("denom-pool-id\nQuery the pool id associated with a specific whitelisted fee token")]),e._v(" "),s("p",[e._v("fee-tokens"),s("br"),e._v("\nQuery the list of non-basedenom fee tokens and their associated pool ids")]),e._v(" "),s("h2",{attrs:{id:"state-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-changes"}},[e._v("#")]),e._v(" State Changes")]),e._v(" "),s("ul",[s("li",[e._v("Adds a whitelist of tokens that can be used as fees on the chain.\n"),s("ul",[s("li",[e._v("Any token not on this list cannot be provided as a tx fee.")])])]),e._v(" "),s("li",[e._v("Adds a new SDK message for creating governance proposals for adding new TxFee denoms.")])]),e._v(" "),s("h2",{attrs:{id:"local-mempool-filters-added"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-mempool-filters-added"}},[e._v("#")]),e._v(" Local Mempool Filters Added")]),e._v(" "),s("ul",[s("li",[e._v("If you specify a min-tx-fee in the $BASEDENOM then\n"),s("ul",[s("li",[e._v("Your node will allow any tx w/ tx fee in the whitelist of fees, and a sufficient osmo-equivalent price to enter your mempool")]),e._v(" "),s("li",[e._v("The osmo-equivalent price for determining sufficiency is rechecked after every block. (During the mempools RecheckTx)\n"),s("ul",[s("li",[e._v("TODO: further consider if we want to take this tradeoff. Allows someone who manipulates price for one block to flush txs using that asset as fee from most of the networks' mempools.")]),e._v(" "),s("li",[e._v("The simple alternative is only check fee equivalency at a txs entry into the mempool, which allows someone to manipulate price down to have many txs enter the chain at low cost.")]),e._v(" "),s("li",[e._v("Another alternative is to use TWAP instead of Spot Price once it is available on-chain")]),e._v(" "),s("li",[e._v("The former concern isn't very worrisome as long as some nodes have 0 min tx fees.")])])])])])]),e._v(" "),s("h2",{attrs:{id:"new-sdk-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-sdk-messages"}},[e._v("#")]),e._v(" New SDK messages")]),e._v(" "),s("p",[e._v("TODO: Describe")]),e._v(" "),s("h2",{attrs:{id:"cli-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands"}},[e._v("#")]),e._v(" CLI commands")]),e._v(" "),s("p",[e._v("TODO: Describe")]),e._v(" "),s("h2",{attrs:{id:"queries-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries-2"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),s("p",[e._v("TODO: Describe")]),e._v(" "),s("h2",{attrs:{id:"code-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-structure"}},[e._v("#")]),e._v(" Code structure")]),e._v(" "),s("p",[e._v("TODO: Describe")]),e._v(" "),s("h2",{attrs:{id:"future-directions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#future-directions"}},[e._v("#")]),e._v(" Future directions")]),e._v(" "),s("ul",[s("li",[e._v('Want to add in a system to add in general "tx fee credits" for different on-chain usages\n'),s("ul",[s("li",[e._v("e.g. making 0 fee txs under certain usecases")])])]),e._v(" "),s("li",[e._v("If other chains would like to use this, we should brainstorm mechanisms for extending the metadata proto fields")])])])}),[],!1,null,null,null);t.default=o.exports}}]);