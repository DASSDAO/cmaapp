(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2158a490"],{"1c83":function(t,e,n){"use strict";var s=n("1ed8"),o=n.n(s);o.a},"1ed8":function(t,e,n){},"845e":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("TitleBar",{attrs:{titleTx:t.title}}),n("q-input",{staticClass:"input-data",attrs:{"float-label":"收款人地址或用户名"},model:{value:t.toAddress,callback:function(e){t.toAddress=e},expression:"toAddress"}}),n("q-input",{staticClass:"input-data",attrs:{"float-label":"转账金额",type:"number"},model:{value:t.toAmt,callback:function(e){t.toAmt=e},expression:"toAmt"}}),n("span",{staticClass:"curt-balance"},[t._v("当前余额:"+t._s(Number(t.currentBalance).toFixed(4)))]),n("q-btn",{staticClass:"btn-next",attrs:{label:"下一步",color:"primary"},on:{click:t.toNext}})],1)},o=[];s._withStripped=!0;n("6b54"),n("96cf");var a=n("c973"),i=n.n(a),r=(n("f559"),n("9bfb")),c=(n("079c"),n("e7ea")),l=n("a002"),u=n.n(l),h=n("96a1"),d=n("3452"),f={components:{TitleBar:r["a"]},data:function(){return{currentBalance:"CMAT"===this.$route.query.p1?this.global.wallet.lastMcoinBalance:this.global.wallet.lastEthbalance,title:"CMAT"===this.$route.query.p1?"CMAT转账":"ETH转账",toAddress:"",toAddress2:"",toAmt:""}},mounted:function(){console.log("----"+this.$route.query.p1)},methods:{toNext:function(){""!==this.toAddress?""!==this.toAmt?this.toAddress.startsWith("0x")?(this.toAddress2=this.toAddress,this.showPswdInputDialog()):this.getAddress(this.toAddress):toast("转账金额不能为空哦"):toast("收款地址不能为空哦")},getAddress:function(t){var e=this,n=function(){var n=i()(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.global.nabContract.getAddress(t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}();n().then(function(t){t!==e.global.emptyAddress?(e.toAddress2=t,e.showPswdInputDialog()):toast("名称未注册，请输入地址")})},showPswdInputDialog:function(){var t=this;this.$q.dialog({title:this.itmeName1,message:"请输入你的钱包密码",prompt:{model:"",type:"text"},cancel:!0,color:"secondary"}).then(function(e){""===e?toast("密码不能为空哦"):(t.$q.loading.show({message:"正在提交交易，请稍后...",spinnerSize:50}),u.a.getItem("cryptMnemonic").then(function(n){null===n?(t.$q.loading.hide(),toast("当前没有可备份钱包，将跳到创建钱包页面"),t.$router.push("/walletfirst")):t.unlockWallet(n,e)}).catch(function(t){toast(t)}))}).catch(function(){})},unlockWallet:function(t,e){try{var n=d.AES.decrypt(t,e),s=n.toString(d.enc.Utf8),o=c["ethers"].Wallet.fromMnemonic(s),a=o.connect(this.global.defaultProvider);"ETH"===this.$route.query.p1?this.transferETH(a):this.tansferMcoin(a)}catch(t){console.log(t),toast("密码错误"),this.$q.loading.hide()}},tansferMcoin:function(t){var e=this,n=this.global.m3gameContract.connect(t),s=18,o=c["ethers"].utils.parseUnits(e.toAmt+"",s);console.log("开始转CMAT"),n.transfer(e.toAddress2,o).then(function(t){console.log(t),e.$q.loading.hide(),e.showInfoDialog("转账已提交",t.hash)}).catch(function(t){console.error(t),toast(t),e.$q.loading.hide()})},transferETH:function(t){var e=this,n={to:this.toAddress2,value:c["ethers"].utils.parseEther(this.toAmt+"")},s=t.sendTransaction(n);s.then(function(t){console.log(t),e.$q.loading.hide(),e.showInfoDialog("转账已提交",t.hash)}).catch(function(t){console.log(t),toast(t),e.$q.loading.hide()})},showInfoDialog:function(t,e){var n=this;this.$q.dialog({title:t,message:"",ok:"查看结果",cancel:"关闭"}).then(function(){n.$router.go(-1),Object(h["a"])(n.global.etherscanio+"tx/"+e)}).catch(function(){n.$router.go(-1)})}}},p=f,g=(n("1c83"),n("2877")),m=Object(g["a"])(p,s,o,!1,null,null,null);m.options.__file="TransferEth.vue";e["default"]=m.exports},"9bfb":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-bar"},[n("q-icon",{staticClass:"back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},o=[];s._withStripped=!0;var a={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},i=a,r=(n("a675"),n("2877")),c=Object(r["a"])(i,s,o,!1,null,null,null);c.options.__file="TitleBar.vue";e["a"]=c.exports},a675:function(t,e,n){"use strict";var s=n("ca51"),o=n.n(s);o.a},ca51:function(t,e,n){}}]);