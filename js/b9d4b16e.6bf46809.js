(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b9d4b16e"],{"0157":function(t,e,a){"use strict";var n=a("0359"),s=a.n(n);s.a},"0359":function(t,e,a){},"2c4c":function(t,e,a){t.exports=a.p+"img/st-top-tx.6a8e5d86.png"},"2ef2":function(t,e,a){"use strict";var n=a("7747"),s=a.n(n);s.a},"3b38":function(t,e,a){"use strict";var n=a("f654"),s=a.n(n);s.a},"3f81":function(t,e,a){"use strict";var n=a("b51a"),s=a.n(n);s.a},"4c68":function(t,e,a){},"5dc8":function(t,e,a){"use strict";var n=a("4c68"),s=a.n(n);s.a},6870:function(t,e,a){},"6b45":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{cancel:t.onCancel,show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(e){return a("div",{staticClass:"dialog-btn"},[a("q-btn",{attrs:{flat:"",label:"取消"},on:{click:e.cancel}}),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:"确定"},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(e){t.$set(t.dialogData,"show",e)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.msg))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("q-input",{attrs:{type:"number",placeholder:"ethtrans"===t.dialogData.from?"请输入购买数量":"请输入提现金额"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),a("q-input",{directives:[{name:"show",rawName:"v-show",value:t.cpuRepayShow,expression:"cpuRepayShow"}],attrs:{type:"number",placeholder:"请输入复投金额"},model:{value:t.repayAmt,callback:function(e){t.repayAmt=e},expression:"repayAmt"}}),"ethtrans"===t.dialogData.from?a("span",{staticStyle:{"font-size":"10px"}},[t._v("CMAT当前价:"+t._s(t.global.mcoinPrice)+",你需要支付"+t._s(t.input1*t.global.mcoinPrice)+"个eth")]):t._e(),a("q-input",{attrs:{placeholder:"请输入钱包密码"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1)])},s=[];n._withStripped=!0;a("7f7f"),a("96cf");var i=a("c973"),r=a.n(i),o={props:["dialogData"],data:function(){return{input1:"",input2:"",repayAmt:""}},computed:{cpuRepayShow:function(){return this.input1>this.dialogData.leftCanDraw3&&this.dialogData.w>=4},repayAmtTip:function(){return this.dialogData.amt}},methods:{onOk:function(){var t=this;if(""!==this.input1&&null!==this.input1)if(""!==this.input2)if(this.input2.length<6)toast("密码位数不对哦");else if("investDetail"===this.dialogData.from&&this.input1>this.dialogData.canDrawAmt)toast("提现金额不能大于可提数量");else if(this.cpuRepayShow&&this.repayAmt<this.dialogData.amt)toast("复投金额不能少于"+this.dialogData.amt);else if("referAwards"===this.dialogData.from&&this.input1>this.dialogData.referAwards)toast("提现金额不能大于推荐奖金哦");else if("referAwards"===this.dialogData.from&&this.input1>this.dialogData.totalInvest)toast("提现金额不能大于总投资金额哦");else{if(("investDetail"===this.dialogData.from||"referAwards"===this.dialogData.from)&&.01*this.input1/this.global.mcoinPrice>this.global.wallet.lastMcoinBalance)return this.$q.dialog({title:"",message:"CMAT余额不足，请先购买相应数量的CMAT"}).then(function(){_this.$router.push({path:"/ethtransfer",query:{p1:"CMAT",p2:t.global.wallet.lastMcoinBalance}})}),void(this.dialogData.show=!1);this.$emit("pressOK",{v1:this.input1,v2:this.input2,v3:this.repayAmt}),this.dialogData.show=!1}else toast("密码不能为空哦");else toast("数量不能为空哦")},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=r()(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.name.length){t.next=4;break}this.$q.dialog({title:"Please specify your name!",message:"Can't buy tickets without knowing your name."}),t.next=7;break;case 4:return t.next=6,e();case 6:this.$q.notify("Ok ".concat(this.name,", going with ").concat(a));case 7:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()}},l=o,c=(a("0157"),a("2877")),u=Object(c["a"])(l,n,s,!1,null,"234bdaf7",null);u.options.__file="CustomInputDialog.vue";e["a"]=u.exports},7747:function(t,e,a){},"7ec8":function(t,e){t.exports="data:image/png;base64,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"},"820e":function(t,e,a){"use strict";var n=a("eb4e"),s=a.n(n);s.a},b51a:function(t,e,a){},eb4e:function(t,e,a){},eb60:function(t,e,a){"use strict";var n=a("6870"),s=a.n(n);s.a},ef5a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{ok:t.dialogData.ok},on:{show:t.onShow,hide:t.onHide},model:{value:t.dialogData.show,callback:function(e){t.$set(t.dialogData,"show",e)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.msg))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("span",{staticClass:"cid-tx",domProps:{innerHTML:t._s(t.dialogData.vhtml)}})])])},s=[];n._withStripped=!0;a("7f7f"),a("96cf");var i=a("c973"),r=a.n(i),o={props:["dialogData"],data:function(){return{}},methods:{onOk:function(){this.dialogData.show=!1},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=r()(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.name.length){t.next=4;break}this.$q.dialog({title:"Please specify your name!",message:"Can't buy tickets without knowing your name."}),t.next=7;break;case 4:return t.next=6,e();case 6:this.$q.notify("Ok ".concat(this.name,", going with ").concat(a));case 7:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()}},l=o,c=(a("2ef2"),a("2877")),u=Object(c["a"])(l,n,s,!1,null,"07a5bd10",null);u.options.__file="CustomInfoDialog.vue";e["a"]=u.exports},f241:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-page-container",[a("WalletHome",{directives:[{name:"show",rawName:"v-show",value:"wallet"===t.selectedTab,expression:"selectedTab==='wallet'"}]}),a("GameCenter",{directives:[{name:"show",rawName:"v-show",value:"game"===t.selectedTab,expression:"selectedTab==='game'"}]}),a("Setting",{directives:[{name:"show",rawName:"v-show",value:"setting"===t.selectedTab,expression:"selectedTab==='setting'"}]})],1),a("q-layout-footer",[a("q-tabs",{attrs:{animated:"",swipeable:"",position:"bottom",color:"transparent","text-color":"blue",align:"justify"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("q-tab",{attrs:{slot:"title",name:"wallet",icon:"account_balance_wallet",label:"资产"},slot:"title"}),a("q-tab",{attrs:{slot:"title",name:"game",icon:"account_balance",label:"参与"},slot:"title"}),a("q-tab",{attrs:{slot:"title",name:"setting",icon:"settings",label:"设置"},slot:"title"})],1)],1)],1)},s=[];n._withStripped=!0;var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bg-gray"},[n("div",{staticClass:"total-assets"},[n("span",{staticStyle:{color:"dodgerblue"}},[t._v(t._s(t.global.ensname))]),n("br"),n("span",[t._v("总资产($)")]),n("br"),n("span",[t._v(t._s(t.totalAssets))])]),n("div",{staticClass:"mcoin",on:{click:t.toMCOINTransfer}},[n("img",{staticClass:"coin-icon",attrs:{src:a("7ec8")}}),n("div",{staticClass:"coin-info"},[n("div",{staticClass:"info-line1"},[n("span",{staticStyle:{color:"black"}},[t._v("CMAT")]),n("span",{staticStyle:{color:"black"}},[t._v(t._s(Number(t.mcoinBalance).toFixed(4)))])]),n("div",{staticClass:"info-line2"},[n("span",{staticStyle:{color:"gray"}},[t._v("=$"+t._s(t.mcoinPrice))]),n("span",{staticStyle:{color:"gray"}},[t._v("=$"+t._s(t.mcoinTotalUSD))])])])]),n("div",{staticClass:"mcoin",on:{click:t.toEthTransfer}},[n("img",{staticClass:"coin-icon",attrs:{src:a("7ec8")}}),n("div",{staticClass:"coin-info"},[n("div",{staticClass:"info-line1"},[n("span",{staticStyle:{color:"black"}},[t._v("ETH")]),n("span",{staticStyle:{color:"black"}},[t._v(t._s(Number(t.ethbalance).toFixed(4)))])]),n("div",{staticClass:"info-line2"},[n("span",{staticStyle:{color:"gray"}},[t._v("=$"+t._s(t.ethPrice))]),n("span",{staticStyle:{color:"gray"}},[t._v("=$"+t._s(t.ethTotalUSD))])])])])])},r=[];i._withStripped=!0;a("c5f6"),a("96cf");var o,l,c,u=a("c973"),h=a.n(u),f=a("e7ea"),g=a("a002"),d=a.n(g),m=a("96a1"),p={data:function(){return{ethbalance:this.global.wallet.lastEthbalance,mcoinBalance:this.global.wallet.lastMcoinBalance,ethPrice:"0.0000",ethTotalUSD:"0.0000",mcoinPrice:"0.0000",mcoinTotalUSD:"0.0000",totalAssets:"0.0000"}},mounted:function(){console.log("----walletHome mounted");var t=this;d.a.getItem("ethAddress").then(function(e){null===e?t.$router.push("/walletfirst"):(t.global.wallet.ethAddress=e.toLowerCase(),t.getBalance(),t.getMcoinBalance(),t.getEnsName())}).catch(function(t){toast(t)}),this.getMcoinPrice(),this.balanceRefreshTask(),d.a.getItem("ethBalance").then(function(e){null!==e&&(t.ethbalance=t.global.wallet.lastEthbalance=e)}),d.a.getItem("mcoinBalance").then(function(e){null!==e&&(t.mcoinBalance=t.global.wallet.lastMcoinBalance=e)}),this.getETHPrice(),c=setInterval(function(){t.getETHPrice()},this.global.taskInterval),this.getconfigs()},beforeDestroy:function(){clearInterval(o),clearInterval(l),clearInterval(c),d.a.setItem("ethBalance",this.ethbalance),d.a.setItem("mcoinBalance",this.mcoinBalance)},methods:{getEnsName:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.nabContract.getName(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.global.ensname=e,""!==e&&d.a.getItem("ensname").then(function(t){null!==t&&d.a.removeItem("ensname").then(function(){console.log("----ensname is removed!")})})})},getETHPrice:function(){var t=this,e="https://api.etherscan.io/api?module=stats&action=ethprice&apikey="+this.global.etherscanAPIKey;this.$axios.get(e).then(function(e){t.ethPrice=t.global.ethPrice=e.data.result.ethusd,t.ethTotalUSD=Number(t.global.wallet.lastEthbalance*t.ethPrice).toFixed(4),t.mcoinPrice=Number(t.global.mcoinPrice*t.ethPrice).toFixed(4),t.mcoinTotalUSD=Number(t.mcoinPrice*t.mcoinBalance).toFixed(4),t.totalAssets=Number(parseFloat(t.ethTotalUSD)+parseFloat(t.mcoinTotalUSD)).toFixed(4)}).catch(function(t){}).then(function(){})},balanceRefreshTask:function(){var t=this;o=setInterval(function(){t.getBalance()},this.global.taskInterval),l=setInterval(function(){t.getMcoinBalance()},this.global.taskInterval)},getconfigs:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.getConfigInfo();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.global.config.referLevel3Num=parseInt(e._referLevel3Num),t.global.config.referLevel4Num=parseInt(e._referLevel4Num),t.global.config.referLevel5Num=parseInt(e._referLevel5Num),t.global.config.week1Ratio=parseInt(e._week1Ratio),t.global.config.week2Ratio=parseInt(e._week2Ratio),t.global.config.week3Ratio=parseInt(e._week3Ratio),t.global.config.week4Ratio=parseInt(e._week4Ratio),t.global.config.totolApproveAmt=f["ethers"].utils.formatEther(e._totolApproveAmt),t.global.config.maxPerInvest=f["ethers"].utils.formatEther(e._maxPerInvest),t.global.config.intervalHours=parseInt(e._intervalHours),t.global.config.handlingFee=parseInt(e._handlingFee),t.global.config.referDrawInterval=parseInt(e._referDrawInterval)});var a=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.getReferRatio();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();a().then(function(e){t.global.config.referAwardsRatio1=parseInt(e._referAwardsRatio1),t.global.config.referAwardsRatio2=parseInt(e._referAwardsRatio2),t.global.config.referAwardsRatio3=parseInt(e._referAwardsRatio3),t.global.config.referAwardsRatio4=parseInt(e._referAwardsRatio4),t.global.config.referAwardsRatio5=parseInt(e._referAwardsRatio5)})},getMcoinPrice:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.price();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.global.mcoinPrice="0"===e?"0.0000":f["ethers"].utils.formatEther(e)})},getMcoinBalance:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.balanceOf(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.mcoinBalance=t.global.wallet.lastMcoinBalance="0"===e?"0.0000":f["ethers"].utils.formatEther(e)})},getBalance:function(){var t=this;this.global.defaultProvider.getBalance(this.global.wallet.ethAddress).then(function(e){var a=f["ethers"].utils.formatEther(e);t.ethbalance=t.global.wallet.lastEthbalance=a})},toEthTransfer:function(){this.$router.push({path:"/ethtransfer",query:{p1:"ETH",p2:this.global.wallet.lastEthbalance}})},toMCOINTransfer:function(){this.$router.push({path:"/ethtransfer",query:{p1:"CMAT",p2:this.global.wallet.lastMcoinBalance}})}}},v=p,b=(a("5dc8"),a("2877")),w=Object(b["a"])(v,i,r,!1,null,null,null);w.options.__file="WalletHome.vue";var A=w.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"me"},[a("div",{staticClass:"gc-top"},[a("div",{staticClass:"total-invest"},[a("span",{staticStyle:{"font-size":"15px",color:"white"}},[t._v("总投入本金")]),a("span",{staticStyle:{color:"dodgerblue"}},[t._v(t._s(Number(t.global.totalPrincipal).toFixed(4))+" ETH")]),a("span",{staticStyle:{"font-size":"15px","margin-top":"10px",color:"white"}},[t._v("总收益")]),a("span",{staticStyle:{color:"dodgerblue"}},[t._v(t._s(Number(t.global.totalInterest).toFixed(4))+" ETH")])]),a("div",{staticClass:"button-invest"},[a("button",{staticClass:"in-bt",on:{click:t.toInvest}},[t._v("参与")])])]),a("div",{staticClass:"gc-down"},[a("q-tabs",{attrs:{animated:"",swipeable:"",color:"transparent","text-color":"blue",align:"justify"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("q-tab",{attrs:{slot:"title",default:"",name:"investLog",label:"参与记录"},slot:"title"}),a("q-tab",{attrs:{slot:"title",name:"referAwards",label:"推荐奖"},slot:"title"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"investLog"===t.selectedTab,expression:"selectedTab==='investLog'"}],staticClass:"invest-list"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"transfer-tip"},[t._v("暂时没有交易记录")]),a("q-list",{attrs:{highlight:"","no-border":""}},t._l(t.investList,function(e){return a("q-item",{key:e.index,staticClass:"gc-il-i",attrs:{to:{path:"investdetail",query:{item:e}}}},[a("div",{staticClass:"gc-il-ia"},[a("span",[t._v(t._s(e.amt)+" ETH")]),a("span",[t._v(t._s(e.time))])]),a("div",{staticClass:"gc-il-ia"},[a("span",[t._v("当前已赚：")]),a("span",{staticStyle:{color:"dodgerblue"}},[t._v("\n              "+t._s(e.currentIncome)+" ETH\n              "),a("span",{domProps:{innerHTML:t._s(t.isShowTx(e.originTime))}})])]),a("div",{staticClass:"gc-il-ia"},[a("span",[t._v("当前进度：")]),a("span",[t._v(t._s(t.getAlreadyPastTime(e.originTime)))])]),a("q-progress",{attrs:{percentage:t.getPercentage(e.originTime),stripe:"",animate:"",color:"secondary"}})],1)}))],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"referAwards"===t.selectedTab,expression:"selectedTab==='referAwards'"}],staticClass:"gc-ra"},[a("div",{staticClass:"gc-ra-it"},[a("span",[t._v("我的直推人数：")]),a("span",{staticStyle:{color:"dodgerblue"}},[t._v(t._s(t.referNums))])]),a("div",{staticClass:"gc-ra-it"},[a("span",[t._v("我的奖励等级：")]),a("q-rating",{attrs:{max:5},model:{value:t.awardLevel,callback:function(e){t.awardLevel=e},expression:"awardLevel"}})],1),a("div",{staticClass:"gc-ra-it"},[a("span",[t._v("我的推荐奖余额：")]),a("span",{staticStyle:{color:"dodgerblue"}},[t._v(t._s(t.referAwards)+" ETH")])]),a("div",{staticClass:"gc-ra-it"},[a("span",[t._v("最近一次提现时间：")]),a("span",[t._v(t._s(t.referLastdraw))])]),a("q-btn",{staticClass:"gc-ra-bu",attrs:{label:"提现",color:"primary"},on:{click:t.referWithDraw}})],1)],1),a("custom-input-dialog-vue",{attrs:{dialogData:t.dialogData},on:{pressOK:t.pressOK}}),a("SingleInputDialog",{attrs:{dialogData:t.singleInputDialog},on:{singleInputOk:t.singleInputOk}})],1)},k=[];y._withStripped=!0;a("ac6a"),a("cadf"),a("6b54"),a("f559");var I=a("6b45"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(e){return a("div",{staticClass:"dialog-btn"},[t._e(),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.dialogData.ok},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(e){t.$set(t.dialogData,"show",e)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.title))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("q-input",{attrs:{placeholder:t.dialogData.placeholder},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)])},D=[];x._withStripped=!0;a("7f7f");var C={props:["dialogData"],data:function(){return{text:""}},methods:{onOk:function(){""!==this.text?(this.$emit("singleInputOk",this.text),this.dialogData.show=!1):toast("输入不能为空哦")},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=h()(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.name.length){t.next=4;break}this.$q.dialog({title:"Please specify your name!",message:"Can't buy tickets without knowing your name."}),t.next=7;break;case 4:return t.next=6,e();case 6:this.$q.notify("Ok ".concat(this.name,", going with ").concat(a));case 7:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()}},_=C,R=(a("820e"),Object(b["a"])(_,x,D,!1,null,"722170b1",null));R.options.__file="SingleInputDialog.vue";var T,S,q,N=R.exports,E=a("3452"),L={components:{CustomInputDialogVue:I["a"],SingleInputDialog:N},data:function(){return{selectedTab:"investLog",investList:[],referNums:0,referAwards:0,referLastdraw:0,referLastOriginT:0,dialogData:{show:!1,msg:"提现",from:"referAwards",referAwards:0,totalInvest:0},haveRefered:!0,singleInputDialog:{show:!1,ok:"下一步",title:"填写推荐码",placeholder:"推荐码"},referAddress:"",referWithDrawAmt:null}},created:function(){var t=this;d.a.getItem("investHistory").then(function(e){null!==e&&(t.investList=JSON.parse(e))})},computed:{awardLevel:function(){return this.referNums<this.global.config.referLevel3Num?2:this.referNums>=this.global.config.referLevel3Num&&this.referNums<this.global.config.referLevel4Num?3:this.referNums>=this.global.config.referLevel4Num&&this.referNums<this.global.config.referLevel5Num?4:5}},methods:{singleInputOk:function(t){if(t.startsWith("0x")){if(t===this.global.wallet.ethAddress)return void toast("推荐人不能填写自己哦");this.referAddress=t,this.showPswdInputDialog()}else this.getAddress(t)},getAddress:function(t){var e=this;console.log(t);var a=function(){var a=h()(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.global.nabContract.getAddress(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},a,this)}));return function(){return a.apply(this,arguments)}}();a().then(function(t){if(t=t.toLowerCase(),t!==e.global.emptyAddress){if(t===e.global.wallet.ethAddress)return void toast("推荐人不能填写自己哦");e.referAddress=t,e.showPswdInputDialog()}else toast("推荐码无效")})},showPswdInputDialog:function(){var t=this;this.$q.dialog({title:this.itmeName1,message:"请输入你的钱包密码",prompt:{model:"",type:"text"},cancel:!0,color:"secondary"}).then(function(e){""===e?toast("密码不能为空哦"):(t.$q.loading.show({message:"正在提交交易，请稍后...",spinnerSize:50}),d.a.getItem("cryptMnemonic").then(function(a){if(null===a)t.$q.loading.hide(),toast("当前没有可备份钱包，将跳到创建钱包页面"),t.$router.push("/walletfirst");else{var n=t.unlockWallet(a,e);t.doInvest(n)}}).catch(function(t){toast(t)}))}).catch(function(){})},doInvest:function(t){var e=this,a=this.global.m3gameContract.connect(t),n={value:f["ethers"].utils.parseEther("0")};a.inverstFirst(this.referAddress,n).then(function(t){console.log(t),e.$q.loading.hide(),e.showInfoDialog("已提交",t.hash),e.haveRefered=!0}).catch(function(t){(t+"").indexOf("insufficient funds")>=0?toast("ETH余额不足"):toast("出错了"),e.reprotError2Bmob(t),e.$q.loading.hide()})},reprotError2Bmob:function(t){this.$axios.post(this.global.BmobRestAPIUrl+"errorlog",{address:this.global.wallet.ethAddress,error:t+""},{headers:this.global.BmobRestAPIHeaders}).then(function(t){})},referWithDraw:function(){0!==this.referAwards?Date.parse(new Date)-Date.parse(new Date(this.referLastOriginT))<=60*this.global.config.referDrawInterval*60*1e3?toast(this.global.config.referDrawInterval+"小时内只能提现一次哦"):this.dialogData.show=!0:toast("你的推荐奖为0哦")},pressOK:function(t){this.referWithDrawAmt=t.v1,this.getLocalWallet(t.v2)},getLocalWallet:function(t){var e=this;this.$q.loading.show({message:"正在提交交易，请稍后...",spinnerSize:50}),d.a.getItem("cryptMnemonic").then(function(a){if(null===a)this.$q.loading.hide(),toast("当前没有可备份钱包，将跳到创建钱包页面"),e.$router.push("/walletfirst");else{var n=e.unlockWallet(a,t);e.doReferWithdraw(n)}}).catch(function(t){toast(t)})},unlockWallet:function(t,e){try{var a=E.AES.decrypt(t,e),n=a.toString(E.enc.Utf8),s=f["ethers"].Wallet.fromMnemonic(n),i=s.connect(this.global.defaultProvider);return i}catch(t){console.log(t),toast("密码错误"),this.$q.loading.hide()}},doReferWithdraw:function(t){var e=this,a=this.global.m3gameContract.connect(t),n={gasLimit:this.global.gasLimit};a.referWithdraw(f["ethers"].utils.parseEther(this.referWithDrawAmt+""),n).then(function(t){console.log(t),e.$q.loading.hide(),e.showInfoDialog("操作已提交",t.hash)}).catch(function(){toast("矿工费不足"),e.$q.loading.hide()})},showInfoDialog:function(t,e){var a=this;this.$q.dialog({title:t,message:"",ok:"查看结果",cancel:"关闭"}).then(function(){Object(m["a"])(a.global.etherscanio+"tx/"+e)}).catch(function(){})},toInvest:function(){this.haveRefered?this.$router.push({path:"/invest",query:{p1:this.haveRefered}}):this.singleInputDialog.show=!0},parseEvents:function(t){this.global.totalPrincipal=0,this.global.totalInterest=0;for(var e=[],a=new f["ethers"].Contract(this.global.m3gameAddress,this.global.m3gameABI,this.global.defaultProvider),n=0;n<t.length;n++){var s=a.interface.parseLog(t[n]);if(0!==parseInt(s.values.amt)){var i=s.values.inverstor;if(i.toLowerCase()===this.global.wallet.ethAddress){var r=f["ethers"].utils.formatEther(parseInt(s.values.amt)+""),o=this.global.convertUTCTimeToLocalTime(new Date(1e3*parseInt(s.values.time))),l=parseInt(s.values.time),c=this.getCurrentIncome(r,l);this.global.totalPrincipal+=parseFloat(r),this.global.totalInterest+=parseFloat(c),e.push({investid:parseInt(s.values.investid),amt:r,originTime:l,time:o,currentIncome:c})}}}this.investList=e.reverse()},isShowTx:function(t){var e=parseInt((new Date).getTime()/1e3)-t;return e>=25200*this.global.config.intervalHours?"&nbsp;&nbsp;&nbsp;提现":""},getAlreadyPastTime:function(t){var e=parseInt((new Date).getTime()/1e3),a=parseInt((e-t)/60/60/24/7),n=parseInt((e-t)/60/60/24-7*a),s=parseInt((e-t)/60/60-24*(7*a+n)),i=parseInt((e-t)/60-60*(24*(7*a+n)+s));return a+"周"+n+"天"+s+"小时"+i+"分"},getPercentage:function(t){var e=parseInt((new Date).getTime()/1e3),a=(e-t)/(28*this.global.config.intervalHours*60*60)*100;return a},getCurrentIncome:function(t,e){var a,n=parseInt((new Date).getTime()/1e3),s=parseInt((n-e)/60/60/this.global.config.intervalHours/7),i=parseInt((n-e)/60/60/this.global.config.intervalHours-7*s),r=this.global.config.week1Ratio/1e4,o=this.global.config.week2Ratio/1e4,l=this.global.config.week3Ratio/1e4,c=this.global.config.week4Ratio/1e4;switch(s){case 0:a=t*r*i;break;case 1:a=t*r*7+t*(1+7*r)*.5*o*i;break;case 2:a=t*r*7+t*(1+7*r)*.5*o*7+t*(1+7*r)*.5*(1+7*o)*.5*l*i;break;case 3:a=t*r*7+t*(1+7*r)*.5*o*7+t*(1+7*r)*.5*(1+7*o)*.5*l*7+t*(1+7*r)*.5*(1+7*o)*.5*(1+7*l)*.5*c*i;break;default:a=t*(1+7*r)*.5+t*(1+7*r)*.5*(1+7*o)*.5+t*(1+7*r)*.5*(1+7*o)*.5*(1+7*l)*.5+t*(1+7*r)*.5*(1+7*o)*.5*(1+7*l)*.5*(1+7*c)-t;break}return Number(a).toFixed(4)},getMyInvestEvent:function(){var t=this,e={address:this.global.m3gameAddress,fromBlock:this.global.eventFromBlock,topics:["0xade0c822425258988f083e11e4ee8b984e3d7044811b4ede1dfd3add485a906e","0x000000000000000000000000"+this.global.wallet.ethAddress.substring(2)]},a=this.global.defaultProvider.getLogs(e);a.then(function(e){t.parseEvents(e)}).catch(function(t){console.log(t)})},setInvestEventTask:function(){var t=this;T=setInterval(function(){t.getMyInvestEvent()},this.global.taskInterval)},setReferAwardsTask:function(){var t=this;S=setInterval(function(){t.getMyreferAward()},this.global.taskInterval)},setLastTimeTask:function(){var t=this;q=setInterval(function(){t.getLastDraw()},this.global.taskInterval)},getReferNum:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.referNums(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.referNums=parseInt(e)})},getMyreferAward:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.referAwards(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.dialogData.referAwards=t.referAwards=f["ethers"].utils.formatEther(e)})},getLastDraw:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.referLastdrawTi(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){if("0"!==e){t.referLastOriginT=1e3*parseInt(e);var a=t.global.convertUTCTimeToLocalTime(new Date(1e3*parseInt(e)));t.referLastdraw="1970-01-01 08:00"===a?"无数据":a}})},getMyTotalInvest:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.totalInvest(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.dialogData.totalInvest=f["ethers"].utils.formatEther(e)})},getLocalReferAddress:function(){var t=this;d.a.getItem("refer:"+this.global.wallet.ethAddress).then(function(e){null===e?(t.haveRefered=!1,t.getReferAddress()):t.haveRefered=!0}).catch(function(t){})},getReferAddress:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.refermap(t.global.wallet.ethAddress);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){e===t.global.emptyAddress?t.haveRefered=!1:(t.haveRefered=!0,d.a.setItem("refer:"+t.global.wallet.ethAddress,e))})}},mounted:function(){var t=this;d.a.getItem("ethAddress").then(function(e){null===e?t.$router.push("/walletfirst"):(t.global.wallet.ethAddress=e.toLowerCase(),t.getLocalReferAddress(),t.getMyInvestEvent(),t.getReferNum(),t.getMyreferAward(),t.getLastDraw(),t.getMyTotalInvest())}).catch(function(t){toast(t)}),this.setInvestEventTask(),this.setReferAwardsTask(),this.setLastTimeTask()},beforeDestroy:function(){clearInterval(T),clearInterval(S),clearInterval(q),d.a.setItem("investHistory",JSON.stringify(this.investList))}},P=L,O=(a("3b38"),Object(b["a"])(P,y,k,!1,null,null,null));O.options.__file="GameCenter.vue";var U=O.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"me"},[n("div",{staticClass:"top"},[n("img",{attrs:{src:a("2c4c")}})]),n("div",{staticClass:"me-menu-div"},[n("div",{staticClass:"me-menu",on:{click:t.exportPrivateKey}},[n("span",[t._v(t._s(t.itmeName1))]),n("q-icon",{staticClass:"back-icon",attrs:{name:"navigate_next"}})],1),n("div",{staticClass:"me-menu",on:{click:t.withdrawReadMe}},[n("span",[t._v("\n        公告信息\n        "),t.isNotifyNew?n("span",{staticStyle:{"font-size":"14px",color:"red"}},[t._v("new")]):t._e()]),n("q-icon",{staticClass:"back-icon",attrs:{name:"navigate_next"}})],1),t.showContractDraw?n("div",{staticClass:"me-menu",on:{click:t.contractDraw}},[n("span",[t._v("奖励金提现(当前余额:"+t._s(t.contrDrawAcctBalance)+")")]),n("q-icon",{staticClass:"back-icon",attrs:{name:"navigate_next"}})],1):t._e(),n("custom-input-dialog-vue",{attrs:{dialogData:t.dialogData},on:{pressOK:t.pressOK}}),t.global.isWebVersion?t._e():n("div",{staticClass:"me-menu",on:{click:t.checkUpdata}},[n("span",[t._v("检测更新(当前版本:"+t._s(t.global.versionName)+")")]),n("q-icon",{staticClass:"back-icon",attrs:{name:"navigate_next"}})],1),n("div",{staticClass:"me-menu",on:{click:t.referApp}},[n("span",[t._v("推荐给好友")]),n("q-icon",{staticClass:"back-icon",attrs:{name:"navigate_next"}})],1),n("div",{staticClass:"me-menu",on:{click:t.submitProblem}},[n("span",[t._v("问题反馈")]),n("q-icon",{staticClass:"back-icon",attrs:{name:"navigate_next"}})],1),n("q-btn",{staticClass:"me-exit",attrs:{color:"red",size:"md",label:"退出当前账号"},on:{click:t.toExit}}),n("CustomInfoDialog",{attrs:{dialogData:t.dialog}})],1)])},M=[];B._withStripped=!0;var H,$=a("9523"),W=a.n($),F=(a("079c"),a("ef5a")),G=a("3452"),V={components:{CustomInputDialogVue:I["a"],CustomInfoDialog:F["a"]},data:function(){return{itmeName1:"备份助记词",showContractDraw:!1,contrDrawAcctBalance:"",dialogData:{show:!1,msg:"提现",from:"contractDraw"},isNotifyNew:!1,dialog:{show:!1,vhtml:"",ok:"关闭"}}},mounted:function(){this.getContractDrawAcc(),this.getContractDrawBalance(),this.getNotifyInfo()},methods:(H={getNotifyInfo:function(){var t=this,e={name:"notify"};this.$axios.get(this.global.BmobRestAPIUrl+"cmaconfig?where="+encodeURI(JSON.stringify(e)),{headers:this.global.BmobRestAPIHeaders}).then(function(e){if(200===e.status){var a=e.data.results;t.global.notify.value=a[0].value,t.global.notify.updatedAt=a[0].updatedAt,d.a.getItem("notifyUpdateAt").then(function(e){e!==t.global.notify.updatedAt&&(t.isNotifyNew=!0)})}})},referApp:function(){if(""!==this.global.ensname){if(this.global.isWebVersion)return this.dialog.show=!0,void(this.dialog.vhtml="真正的智能合约开启你的财富之旅 "+this.global.referUrl+" 推荐码："+this.global.ensname+"【长按复制】");var t={message:"真正的智能合约开启你的财富之旅",url:this.global.referUrl+" 推荐码："+this.global.ensname,subject:"CMA",chooserTitle:"CMA"},e=function(t){},a=function(t){toast(t)};window.plugins.socialsharing.shareWithOptions(t,e,a)}else this.$router.push("/registeens")},checkUpdata:function(){var t=this;this.$axios.get(this.global.BmobRestAPIUrl+"cmaconfig",{headers:this.global.BmobRestAPIHeaders}).then(function(e){if(200===e.status){for(var a,n,s,i,r=e.data.results,o=0;o<r.length;o++)switch(r[o].name){case"latestVersionCode":a=r[o].value;break;case"updateTips":n=r[o].value;break;case"updateUrl":s=r[o].value;break;case"grayScaleRelease":i="true"===r[o].value;break}a>t.global.versionCode?i?t.global.isGrayUser?t.showUpdateDialog(n,s):toast("已是最新版"):t.showUpdateDialog(n,s):toast("已是最新版"),t.global.downloadUrl=s}})},submitProblem:function(){this.$q.dialog({message:"使用过程中遇到任何问题可添加客服微信：cmadao ，对问题进行截图留言，我们将及时为你解决。",ok:"OK"})},showUpdateDialog:function(t,e){this.$q.dialog({title:"有新的版本！",message:t,ok:"下载更新",cancel:"暂不更新"}).then(function(){Object(m["a"])(e)}).catch(function(){})},getContractDrawBalance:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.contrDrawAcctBalance();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.contrDrawAcctBalance=f["ethers"].utils.formatEther(e)})},getContractDrawAcc:function(){var t=this,e=function(){var e=h()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.contrDrawAcct();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){t.showContractDraw=e.toLowerCase()===t.global.wallet.ethAddress})},contractDraw:function(){this.dialogData.show=!0},pressOK:function(t){this.getLocalWallet(t)},getLocalWallet:function(t){var e=this;d.a.getItem("cryptMnemonic").then(function(a){null===a?(toast("当前没有可备份钱包，将跳到创建钱包页面"),e.$router.push("/walletfirst")):e.unlockWallet(a,t.v1,t.v2)}).catch(function(t){toast(t)})},unlockWallet:function(t,e,a){this.$q.loading.show({message:"正在提交交易，请稍后...",spinnerSize:50});try{var n=G.AES.decrypt(t,a),s=n.toString(G.enc.Utf8),i=f["ethers"].Wallet.fromMnemonic(s),r=i.connect(this.global.defaultProvider);this.doReferWithdraw(r,e)}catch(t){console.log(t),toast("密码错误"),this.$q.loading.hide()}},doReferWithdraw:function(t,e){var a=this,n=this.global.m3gameContract.connect(t);n.contrDraw(f["ethers"].utils.parseEther(e+"")).then(function(t){console.log(t),a.$q.loading.hide(),a.showInfoDialog("操作已提交",t.hash)}).catch(function(){toast("矿工费不足"),a.$q.loading.hide()})},withdrawReadMe:function(){this.$router.push("/withdrawreadme")},toExit:function(){var t=this;this.$q.dialog({title:"务必先备份助记词后再退出,否则将无法恢复钱包",message:"",cancel:!0}).then(function(){t.$router.push("/walletfirst"),d.a.removeItem("refer:"+t.global.wallet.ethAddress).then(function(){console.log("----refer is cleared!")}).catch(function(t){console.log(t)})}).catch(function(){})},showInfoDialog:function(t,e){var a=this;this.$q.dialog({title:t,message:"",ok:"查看结果",cancel:"关闭"}).then(function(){Object(m["a"])(a.global.etherscanio+"tx/"+e)}).catch(function(){})}},W()(H,"unlockWallet",function(t,e){try{var a=G.AES.decrypt(t,e),n=a.toString(G.enc.Utf8);this.$q.dialog({title:"助记词",message:n}).then(function(){}).catch(function(){})}catch(t){console.error(t),toast("密码错误")}}),W()(H,"exportPrivateKey",function(){var t=this;d.a.getItem("cryptMnemonic").then(function(e){null===e?(toast("当前没有可备份钱包，将跳到创建钱包页面"),t.$router.push("/walletfirst")):t.showPswdInputDialog(e)}).catch(function(t){toast(t)})}),W()(H,"showPswdInputDialog",function(t){var e=this;this.$q.dialog({message:"请输入你的钱包密码",prompt:{model:"",type:"text"},cancel:!0,color:"secondary"}).then(function(a){""===a?toast("密码不能为空哦"):e.unlockWallet(t,a)}).catch(function(){})}),H)},j=V,Q=(a("3f81"),Object(b["a"])(j,B,M,!1,null,null,null));Q.options.__file="Setting.vue";var K=Q.exports,z={components:{WalletHome:A,GameCenter:U,Setting:K},name:"MyLayout",data:function(){return{selectedTab:this.global.currentTab}},beforeDestroy:function(){this.global.currentTab=this.selectedTab},created:function(){var t=this;d.a.getItem("cryptMnemonic").then(function(e){null===e&&t.$router.push("/walletfirst")}).catch(function(t){toast(t)}),this.checkConnection(),window.addEventListener("offline",this.onOffline,!1)},methods:{onOffline:function(){toast("网络已断开")},checkConnection:function(){var t=navigator.connection.type;"undefined"!==typeof Connection&&t===Connection.NONE&&toast("当前无网络")}}},J=z,X=(a("eb60"),Object(b["a"])(J,n,s,!1,null,null,null));X.options.__file="MyLayout.vue";e["default"]=X.exports},f654:function(t,e,a){}}]);