(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2273dcf0"],{"0157":function(t,a,e){"use strict";var n=e("0359"),s=e.n(n);s.a},"0359":function(t,a,e){},"22bd":function(t,a,e){},"416d":function(t,a,e){"use strict";var n=e("22bd"),s=e.n(n);s.a},"63d0":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"et"},[e("div",{staticClass:"up-part"},[e("TitleBar",{attrs:{titleTx:"ETH"===t.$route.query.p1?"ETH":"CMAT"}}),e("span",{staticClass:"eth-amt"},[t._v(t._s(Number(t.showBalance).toFixed(4)))]),e("span",{staticClass:"eth-bal"},[t._v("=$"+t._s(t.totalUSD))]),e("div",{staticClass:"tr-btn"},["CMAT"===t.$route.query.p1?e("q-btn",{staticClass:"btn",attrs:{flat:"",color:"primary",label:"购买"},nativeOn:{click:function(a){return t.toBuyMcoin(a)}}}):t._e(),"CMAT"===t.$route.query.p1?e("img",{staticClass:"porti-line"}):t._e(),e("q-btn",{staticClass:"btn",attrs:{flat:"",color:"primary",label:"收款"},nativeOn:{click:function(a){return t.toReceiveEth(a)}}}),e("img",{staticClass:"porti-line"}),e("q-btn",{staticClass:"btn",attrs:{flat:"",color:"primary",label:"转账"},nativeOn:{click:function(a){return t.toTransferEth(a)}}})],1)],1),e("div",{staticClass:"down-part"},[e("span",{staticClass:"transfer-tip"},[t._v("交易记录")]),e("div",{staticClass:"trans-log"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"transfer-tip"},[t._v("暂时没有交易记录")]),e("q-list",{attrs:{highlight:"",separator:"","no-border":""}},t._l(t.transactions,function(a){return e("q-item",{key:a.index,staticClass:"item",attrs:{to:{path:"transferdetail",query:{item:a,coin:t.currentCoin}}}},[e("div",{staticClass:"addr-amt"},[e("span",[t._v(t._s(t.setAddress(a.from,a.to)))]),e("span",{style:{color:t.setAmtColor(a.to,a.txreceipt_status)}},[t._v(t._s(t.setAmt(a.to,a.value)))])]),e("span",{staticClass:"time"},[t._v(t._s(t.formatTime(a.timeStamp)))])])}))],1)]),e("custom-input-dialog-vue",{attrs:{dialogData:t.dialogData},on:{pressOK:t.pressOK}})],1)},s=[];n._withStripped=!0;e("96cf");var i,o,r,l,c=e("c973"),u=e.n(c),h=(e("c5f6"),e("6b54"),e("9bfb")),f=e("e7ea"),p=e("a002"),d=e.n(p),g=e("6b45"),m=e("96a1"),b=e("3452"),v={props:["params"],components:{TitleBar:h["a"],CustomInputDialogVue:g["a"]},data:function(){return{title:"ETH",currentCoin:this.$route.query.p1,showBalance:this.$route.query.p2,transactions:[],showBuyDialog:!0,dialogData:{show:!1,msg:"购买CMAT",from:"ethtrans"},totalUSD:"0.0000"}},created:function(){var t=this;"ETH"===this.$route.query.p1?d.a.getItem("historyTrans").then(function(a){null!==a&&(t.transactions=JSON.parse(a))}):d.a.getItem("historyTransMcoin").then(function(a){null!==a&&(t.transactions=JSON.parse(a))})},methods:{pressOK:function(t){var a=this;this.$q.loading.show({message:"正在提交交易，请稍后...",spinnerSize:50}),d.a.getItem("cryptMnemonic").then(function(e){null===e?(a.$q.loading.hide(),toast("当前没有可备份钱包，将跳到创建钱包页面"),a.$router.push("/walletfirst")):a.unlockWallet(e,t)}).catch(function(t){toast(t)})},unlockWallet:function(t,a){var e=this;try{var n=b.AES.decrypt(t,a.v2),s=n.toString(b.enc.Utf8),i=f["ethers"].Wallet.fromMnemonic(s),o=i.connect(this.global.defaultProvider),r=this.global.m3gameContract.connect(o),l={value:f["ethers"].utils.parseEther(a.v1*this.global.mcoinPrice+"")};r.buyMCoin(a.v1,l).then(function(t){e.$q.loading.hide(),e.showInfoDialog("已提交",t.hash)}).catch(function(t){e.global.reprotError2Bmob(e,"buyMCoin",t),e.$q.loading.hide()})}catch(t){console.log(t),toast("密码错误"),this.$q.loading.hide()}},showInfoDialog:function(t,a){var e=this;this.$q.dialog({title:t,message:"",ok:"查看结果",cancel:"关闭"}).then(function(){Object(m["a"])(e.global.etherscanio+"tx/"+a)}).catch(function(){})},toBuyMcoin:function(){this.dialogData.show=!0},setAmtColor:function(t,a){return"0"===a?"red":t===this.global.wallet.ethAddress?"dodgerblue":"green"},toReceiveEth:function(){this.$router.push({path:"/receipteth",query:{p1:this.$route.query.p1}})},toTransferEth:function(){this.$router.push({path:"/transfereth",query:{p1:this.$route.query.p1}})},formatTime:function(t){return this.convertUTCTimeToLocalTime(new Date(1e3*t))},setAddress:function(t,a){return a===this.global.wallet.ethAddress?t.substring(0,7)+"..."+t.substring(t.length-7,t.length):a.substring(0,7)+"..."+a.substring(a.length-7,a.length)},setAmt:function(t,a){return t===this.global.wallet.ethAddress?"+"+Number(f["ethers"].utils.formatEther(a)).toFixed(4):"-"+Number(f["ethers"].utils.formatEther(a)).toFixed(4)},convertUTCTimeToLocalTime:function(t){function a(t){return t>9?t:"0"+t}var e=new Date(t),n=e.getFullYear(),s=a(e.getMonth()+1),i=a(e.getDate()),o=e.getHours();o=a(o);var r=a(e.getMinutes()),l=n+"-"+s+"-"+i+" "+o+":"+r;return l},getEthTrans:function(){var t=this,a=this.global.etherscanAPIPrefix+".etherscan.io/api?module=account&action=txlist&address="+this.global.wallet.ethAddress+"&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey="+this.global.etherscanAPIKey;this.$axios.get(a).then(function(a){t.transactions=a.data.result}).catch(function(t){console.log(t)}).then(function(){})},getMcoinTrans:function(){var t=this,a=this.global.etherscanAPIPrefix+".etherscan.io/api?module=account&action=tokentx&contractaddress="+this.global.m3gameAddress+"&address="+this.global.wallet.ethAddress+"&page=1&offset=100&sort=desc&apikey="+this.global.etherscanAPIKey;this.$axios.get(a).then(function(a){t.transactions=a.data.result}).catch(function(t){}).then(function(){})},setETHTask:function(){var t=this,a=this;i=setInterval(function(){var e=t.global.etherscanAPIPrefix+".etherscan.io/api?module=account&action=balance&address="+t.global.wallet.ethAddress+"&tag=latest&apikey="+t.global.etherscanAPIKey;t.$axios.get(e).then(function(t){a.global.wallet.lastEthbalance="0"===t.data.result?"0.0000":f["ethers"].utils.formatEther(t.data.result),a.showBalance=a.global.wallet.lastEthbalance}).catch(function(t){}).then(function(){})},this.global.taskInterval),r=setInterval(function(){a.getEthTrans()},this.global.taskInterval)},setMcoinTask:function(){var t=this;o=setInterval(function(){var a=function(){var a=u()(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.global.m3gameContract.balanceOf(t.global.wallet.ethAddress);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},a,this)}));return function(){return a.apply(this,arguments)}}();a().then(function(a){t.showBalance=t.global.wallet.lastMcoinBalance="0"===a?"0.0000":f["ethers"].utils.formatEther(a)})},this.global.taskInterval),l=setInterval(function(){t.getMcoinTrans()},this.global.taskInterval)}},mounted:function(){"ETH"===this.$route.query.p1?(this.getEthTrans(),this.setETHTask(),this.totalUSD=Number(this.global.wallet.lastEthbalance*this.global.ethPrice).toFixed(4)):(this.getMcoinTrans(),this.setMcoinTask(),this.totalUSD=Number(this.global.mcoinPrice*this.global.ethPrice*this.global.wallet.lastMcoinBalance).toFixed(4))},beforeDestroy:function(){clearInterval(l),clearInterval(i),clearInterval(o),clearInterval(r),"ETH"===this.currentCoin?d.a.setItem("historyTrans",JSON.stringify(this.transactions)):d.a.setItem("historyTransMcoin",JSON.stringify(this.transactions))}},w=v,y=(e("416d"),e("2877")),T=Object(y["a"])(w,n,s,!1,null,null,null);T.options.__file="EthTransfer.vue";a["default"]=T.exports},"6b45":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-dialog",{on:{cancel:t.onCancel,show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(a){return e("div",{staticClass:"dialog-btn"},[e("q-btn",{attrs:{flat:"",label:"取消"},on:{click:a.cancel}}),e("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:"确定"},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(a){t.$set(t.dialogData,"show",a)},expression:"dialogData.show"}},[e("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.msg))]),e("div",{attrs:{slot:"body"},slot:"body"},[e("q-input",{attrs:{type:"number",placeholder:"ethtrans"===t.dialogData.from?"请输入购买数量":"请输入提现金额"},model:{value:t.input1,callback:function(a){t.input1=a},expression:"input1"}}),e("q-input",{directives:[{name:"show",rawName:"v-show",value:t.cpuRepayShow,expression:"cpuRepayShow"}],attrs:{type:"number",placeholder:"请输入复投金额"},model:{value:t.repayAmt,callback:function(a){t.repayAmt=a},expression:"repayAmt"}}),"ethtrans"===t.dialogData.from?e("span",{staticStyle:{"font-size":"10px"}},[t._v("CMAT当前价:"+t._s(t.global.mcoinPrice)+",你需要支付"+t._s(t.input1*t.global.mcoinPrice)+"个eth")]):t._e(),e("q-input",{attrs:{placeholder:"请输入钱包密码"},model:{value:t.input2,callback:function(a){t.input2=a},expression:"input2"}})],1)])},s=[];n._withStripped=!0;e("7f7f"),e("96cf");var i=e("c973"),o=e.n(i),r={props:["dialogData"],data:function(){return{input1:"",input2:"",repayAmt:""}},computed:{cpuRepayShow:function(){return this.input1>this.dialogData.leftCanDraw3&&this.dialogData.w>=4},repayAmtTip:function(){return this.dialogData.amt}},methods:{onOk:function(){var t=this;if(""!==this.input1&&null!==this.input1)if(""!==this.input2)if(this.input2.length<6)toast("密码位数不对哦");else if("investDetail"===this.dialogData.from&&this.input1>this.dialogData.canDrawAmt)toast("提现金额不能大于可提数量");else if(this.cpuRepayShow&&this.repayAmt<this.dialogData.amt)toast("复投金额不能少于"+this.dialogData.amt);else if("referAwards"===this.dialogData.from&&this.input1>this.dialogData.referAwards)toast("提现金额不能大于推荐奖金哦");else if("referAwards"===this.dialogData.from&&this.input1>this.dialogData.totalInvest)toast("提现金额不能大于总投资金额哦");else{if(("investDetail"===this.dialogData.from||"referAwards"===this.dialogData.from)&&.01*this.input1/this.global.mcoinPrice>this.global.wallet.lastMcoinBalance)return this.$q.dialog({title:"",message:"CMAT余额不足，请先购买相应数量的CMAT"}).then(function(){_this.$router.push({path:"/ethtransfer",query:{p1:"CMAT",p2:t.global.wallet.lastMcoinBalance}})}),void(this.dialogData.show=!1);this.$emit("pressOK",{v1:this.input1,v2:this.input2,v3:this.repayAmt}),this.dialogData.show=!1}else toast("密码不能为空哦");else toast("数量不能为空哦")},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=o()(regeneratorRuntime.mark(function t(a,e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.name.length){t.next=4;break}this.$q.dialog({title:"Please specify your name!",message:"Can't buy tickets without knowing your name."}),t.next=7;break;case 4:return t.next=6,a();case 6:this.$q.notify("Ok ".concat(this.name,", going with ").concat(e));case 7:case"end":return t.stop()}},t,this)}));return function(a,e){return t.apply(this,arguments)}}()}},l=r,c=(e("0157"),e("2877")),u=Object(c["a"])(l,n,s,!1,null,"234bdaf7",null);u.options.__file="CustomInputDialog.vue";a["a"]=u.exports},"9bfb":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-bar"},[e("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(a){return t.goBack(a)}}}),e("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},s=[];n._withStripped=!0;var i={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},o=i,r=(e("a675"),e("2877")),l=Object(r["a"])(o,n,s,!1,null,null,null);l.options.__file="TitleBar.vue";a["a"]=l.exports},a675:function(t,a,e){"use strict";var n=e("ca51"),s=e.n(n);s.a},ca51:function(t,a,e){}}]);