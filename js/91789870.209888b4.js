(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["91789870"],{"22bd":function(t,e,a){},"416d":function(t,e,a){"use strict";var s=a("22bd"),i=a.n(s);i.a},"63d0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"et"},[a("TitleBar",{attrs:{titleTx:"ETH"===t.$route.query.p1?"ETH":"CMAT"}}),a("div",{staticClass:"up-part"},[a("span",{staticClass:"eth-amt"},[t._v(t._s(Number(t.showBalance).toFixed(4)))]),a("span",{staticClass:"eth-bal"},[t._v("=$"+t._s(t.totalUSD))]),a("div",{staticClass:"tr-btn"},["CMAT"===t.$route.query.p1?a("q-btn",{staticClass:"et-btn",attrs:{flat:"",color:"primary",label:t.$t("buy")},nativeOn:{click:function(e){return t.toBuyMcoin(e)}}}):t._e(),"CMAT"===t.$route.query.p1?a("div",{staticClass:"porti-line"}):t._e(),a("q-btn",{staticClass:"et-btn",attrs:{flat:"",color:"primary",label:t.$t("receive")},nativeOn:{click:function(e){return t.toReceiveEth(e)}}}),a("div",{staticClass:"porti-line"}),a("q-btn",{staticClass:"et-btn",attrs:{flat:"",color:"primary",label:t.$t("send")},nativeOn:{click:function(e){return t.toTransferEth(e)}}})],1)]),a("div",{staticClass:"down-part"},[a("span",{staticClass:"transfer-tip"},[t._v(t._s(t.$t("trrecord")))]),a("div",{staticClass:"trans-log"},[a("q-list",{staticStyle:{width:"100%"},attrs:{highlight:"",separator:"","no-border":""}},t._l(t.transactions,function(e){return a("q-item",{key:e.index,staticClass:"tx-item",attrs:{to:{path:"transferdetail",query:{item:e,coin:t.currentCoin}}}},[a("div",{staticClass:"addr-amt"},[a("span",{staticStyle:{"font-family":"PingFangSC-Semibold",color:"#44566B"}},[t._v(t._s(t.setAddress(e.from,e.to)))]),a("span",{style:{color:t.setAmtColor(e.to,e.txreceipt_status)}},[t._v(t._s(t.setAmt(e.to,e.value)))])]),a("span",{staticClass:"time"},[t._v(t._s(t.formatTime(e.timeStamp)))])])}))],1)]),a("custom-input-dialog-vue",{attrs:{dialogData:t.dialogData},on:{pressOK:t.pressOK}})],1)},i=[];s._withStripped=!0;a("96cf");var n,o,r,l,c=a("c973"),u=a.n(c),h=(a("c5f6"),a("6b54"),a("9bfb")),d=a("e7ea"),f=a("a002"),p=a.n(f),g=a("6b45"),m=a("96a1"),b=a("3452"),v={props:["params"],components:{TitleBar:h["a"],CustomInputDialogVue:g["a"]},data:function(){return{title:"ETH",currentCoin:this.$route.query.p1,showBalance:this.$route.query.p2,transactions:[],showBuyDialog:!0,dialogData:{show:!1,msg:this.$t("buy")+"CMAT",from:"ethtrans"},totalUSD:"0.0000"}},created:function(){var t=this;"ETH"===this.$route.query.p1?p.a.getItem("historyTrans").then(function(e){null!==e&&(t.transactions=JSON.parse(e))}):p.a.getItem("historyTransMcoin").then(function(e){null!==e&&(t.transactions=JSON.parse(e))})},methods:{pressOK:function(t){var e=this;this.$q.loading.show({message:this.$t("txsubmiting"),spinnerSize:50}),p.a.getItem("cryptMnemonic").then(function(a){null===a?(e.$q.loading.hide(),toast(e.$t("toastnowallet")),e.$router.push("/walletfirst")):e.unlockWallet(a,t)}).catch(function(t){toast(t)})},unlockWallet:function(t,e){var a=this;try{var s=b.AES.decrypt(t,e.v2),i=s.toString(b.enc.Utf8),n=d["ethers"].Wallet.fromMnemonic(i),o=n.connect(this.global.defaultProvider),r=this.global.cmatpool.contract.connect(o),l={value:d["ethers"].utils.parseEther(e.v1*this.global.mcoinPrice+"")},c=this.global.getRandomInt(111111,999999),u=d["ethers"].utils.solidityKeccak256(["address","int256","int256"],[this.global.wallet.ethAddress,e.v1,c]);r.buyMCoin(e.v1,0,c,u,l).then(function(t){a.$q.loading.hide(),a.showInfoDialog(a.$t("submitted"),t.hash)}).catch(function(t){a.global.reprotError2Bmob(a,"buyMCoin",t),a.$q.loading.hide()})}catch(t){console.error(t),toast(a.$t("passworderror")),this.$q.loading.hide()}},showInfoDialog:function(t,e){var a=this;this.$q.dialog({title:t,message:"",ok:a.$t("viewresults"),cancel:a.$t("close")}).then(function(){Object(m["a"])(a.global.etherscanio+"tx/"+e)}).catch(function(){})},toBuyMcoin:function(){this.dialogData.show=!0},setAmtColor:function(t,e){return"0"===e?"red":t===this.global.wallet.ethAddress?"dodgerblue":"green"},toReceiveEth:function(){this.$router.push({path:"/receipteth",query:{p1:this.$route.query.p1}})},toTransferEth:function(){this.$router.push({path:"/transfereth",query:{p1:this.$route.query.p1}})},formatTime:function(t){return this.convertUTCTimeToLocalTime(new Date(1e3*t))},setAddress:function(t,e){return e===this.global.wallet.ethAddress?t.substring(0,7)+"..."+t.substring(t.length-7,t.length):e.substring(0,7)+"..."+e.substring(e.length-7,e.length)},setAmt:function(t,e){return t===this.global.wallet.ethAddress?"+"+Number(d["ethers"].utils.formatEther(e)).toFixed(4):"-"+Number(d["ethers"].utils.formatEther(e)).toFixed(4)},convertUTCTimeToLocalTime:function(t){function e(t){return t>9?t:"0"+t}var a=new Date(t),s=a.getFullYear(),i=e(a.getMonth()+1),n=e(a.getDate()),o=a.getHours();o=e(o);var r=e(a.getMinutes()),l=s+"-"+i+"-"+n+" "+o+":"+r;return l},getEthTrans:function(){var t=this,e=this.global.etherscanAPIPrefix+".etherscan.io/api?module=account&action=txlist&address="+this.global.wallet.ethAddress+"&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey="+this.global.etherscanAPIKey;this.$axios.get(e).then(function(e){t.transactions=e.data.result}).catch(function(t){console.error(t)}).then(function(){})},getMcoinTrans:function(){var t=this,e=this.global.etherscanAPIPrefix+".etherscan.io/api?module=account&action=tokentx&contractaddress="+this.global.m3gameAddress+"&address="+this.global.wallet.ethAddress+"&page=1&offset=100&sort=desc&apikey="+this.global.etherscanAPIKey;this.$axios.get(e).then(function(e){t.transactions=e.data.result}).catch(function(t){}).then(function(){})},setETHTask:function(){var t=this,e=this;n=setInterval(function(){var a=t.global.etherscanAPIPrefix+".etherscan.io/api?module=account&action=balance&address="+t.global.wallet.ethAddress+"&tag=latest&apikey="+t.global.etherscanAPIKey;t.$axios.get(a).then(function(t){e.global.wallet.lastEthbalance="0"===t.data.result?"0.0000":d["ethers"].utils.formatEther(t.data.result),e.showBalance=e.global.wallet.lastEthbalance}).catch(function(t){}).then(function(){})},this.global.taskInterval),r=setInterval(function(){e.getEthTrans()},this.global.taskInterval)},setMcoinTask:function(){var t=this;o=setInterval(function(){var e=function(){var e=u()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.balanceOf(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.showBalance=t.global.wallet.lastMcoinBalance="0"===e?"0.0000":d["ethers"].utils.formatEther(e)})},this.global.taskInterval),l=setInterval(function(){t.getMcoinTrans()},this.global.taskInterval)}},mounted:function(){"ETH"===this.$route.query.p1?(this.getEthTrans(),this.setETHTask(),this.totalUSD=Number(this.global.wallet.lastEthbalance*this.global.ethPrice).toFixed(4)):(this.getMcoinTrans(),this.setMcoinTask(),this.totalUSD=Number(this.global.mcoinPrice*this.global.ethPrice*this.global.wallet.lastMcoinBalance).toFixed(4))},beforeDestroy:function(){clearInterval(l),clearInterval(n),clearInterval(o),clearInterval(r),"ETH"===this.currentCoin?p.a.setItem("historyTrans",JSON.stringify(this.transactions)):p.a.setItem("historyTransMcoin",JSON.stringify(this.transactions)),this.$q.loading.hide()}},w=v,y=(a("416d"),a("2877")),$=Object(y["a"])(w,s,i,!1,null,null,null);$.options.__file="EthTransfer.vue";e["default"]=$.exports},"6b45":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{cancel:t.onCancel,show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(e){return a("div",{staticClass:"dialog-btn"},[a("q-btn",{attrs:{flat:"",label:t.$t("cancel")},on:{click:e.cancel}}),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.$t("ok")},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(e){t.$set(t.dialogData,"show",e)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.msg))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("q-input",{attrs:{type:"number",placeholder:"ethtrans"===t.dialogData.from?t.$t("inputbyamt"):"investDetail"===t.dialogData.from?t.$t("fillsellamt"):t.$t("drawamt")},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),a("q-input",{directives:[{name:"show",rawName:"v-show",value:t.cpuRepayShow,expression:"cpuRepayShow"}],attrs:{type:"number",placeholder:t.$t("repayamt")},model:{value:t.repayAmt,callback:function(e){t.repayAmt=e},expression:"repayAmt"}}),"ethtrans"===t.dialogData.from?a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.$t("cutprice"))+":"+t._s(t.global.mcoinPrice)+","+t._s(t.$t("payethnum",{num:t.input1*t.global.mcoinPrice})))]):t._e(),a("q-input",{attrs:{placeholder:t.$t("enterpswd")},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1)])},i=[];s._withStripped=!0;a("96cf");var n=a("c973"),o=a.n(n),r={props:["dialogData"],data:function(){return{input1:"investDetail"===this.dialogData.from?this.dialogData.canDrawAmt:"",input2:"",repayAmt:""}},computed:{cpuRepayShow:function(){return this.input1>this.dialogData.leftCanDraw3&&this.dialogData.w>=4},repayAmtTip:function(){return this.dialogData.amt}},methods:{onOk:function(){var t=this;if(""!==this.input1&&null!==this.input1)if(""!==this.input2)if(this.input2.length<6)toast(this.$t("pwsdless6"));else if("investDetail"===this.dialogData.from&&this.input1>this.dialogData.canDrawAmt)toast(this.$t("drawexceed"));else if(this.cpuRepayShow&&this.repayAmt<this.dialogData.amt)toast(this.$t("repayinsuffit")+this.dialogData.amt);else if("referAwards"===this.dialogData.from&&this.input1>this.dialogData.referAwards)toast(this.$t("drawexceed"));else if("referAwards"===this.dialogData.from&&this.input1>this.dialogData.totalInvest)toast(this.$t("drawexdtalivst"));else{if(("investDetail"===this.dialogData.from||"referAwards"===this.dialogData.from)&&.01*this.input1/this.global.mcoinPrice>this.global.wallet.lastMcoinBalance)return this.$q.dialog({title:"",message:this.$t("cmatinsuft"),ok:this.$t("ok")}).then(function(){_this.$router.push({path:"/ethtransfer",query:{p1:"CMAT",p2:t.global.wallet.lastMcoinBalance}})}),void(this.dialogData.show=!1);this.$emit("pressOK",{v1:this.input1,v2:this.input2,v3:this.repayAmt}),this.dialogData.show=!1}else toast(this.$t("pswdnull"));else toast(this.$t("numnull"))},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=o()(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()}},l=r,c=(a("e2f3"),a("2877")),u=Object(c["a"])(l,s,i,!1,null,"c7e37fd4",null);u.options.__file="CustomInputDialog.vue";e["a"]=u.exports},"9bfb":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-bar"},[a("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),a("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},i=[];s._withStripped=!0;var n={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},o=n,r=(a("a675"),a("2877")),l=Object(r["a"])(o,s,i,!1,null,null,null);l.options.__file="TitleBar.vue";e["a"]=l.exports},a675:function(t,e,a){"use strict";var s=a("ca51"),i=a.n(s);i.a},ae6b:function(t,e,a){},ca51:function(t,e,a){},e2f3:function(t,e,a){"use strict";var s=a("ae6b"),i=a.n(s);i.a}}]);