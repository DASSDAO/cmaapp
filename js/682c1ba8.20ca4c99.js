(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["682c1ba8"],{"1e34":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("TitleBar",{attrs:{titleTx:t.title}}),a("div",{staticClass:"id-up-part"},[a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("ivben"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.item.amt)+" ETH")])]),a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("ivstartt"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.item.time))])]),a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("ivprogress"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.pastTime))])]),a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("curearned"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.currentIncome)+" ETH")])]),a("div",{staticClass:"id-di-sp"},[a("span",{staticClass:"id-di-name"},[t._v(t._s(t.$t("candraw"))+"：")]),a("span",{staticClass:"id-di-value"},[t._v(t._s(t.canDrawAmt)+" ETH")])]),t.currentWeek>=4&&t.isLive?a("span",{staticClass:"id-tips",domProps:{innerHTML:t._s(t.$t("repaytiptx",{leftCanDraw3:t.leftCanDraw3,bx4:t.bx4,iamt:t.dialogData.amt}))}}):t._e(),t.isLive?t._e():a("q-btn",{staticStyle:{"align-self":"center",margin:"10px"},attrs:{size:"18px",round:"",color:"secondary",icon:"done",disable:""}}),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.nextBtnShow,expression:"nextBtnShow"}],staticClass:"btn-next",attrs:{rounded:"",label:t.$t("cansellheyue"),color:"primary"},on:{click:t.toNext}})],1),a("custom-input-dialog-vue",{attrs:{dialogData:t.dialogData},on:{pressOK:t.pressOK}}),a("div",{staticClass:"id-down-part"},[a("span",{staticClass:"id-transfer-tip"},[t._v(t._s(t.$t("drawlog")))]),a("div",{staticClass:"id-trans-log"},[a("q-list",{staticStyle:{width:"100vw"},attrs:{highlight:"",separator:"","no-border":""}},t._l(t.withdrawList,function(e,i){return a("q-item",{key:e.index,staticClass:"id-item",nativeOn:{click:function(a){t.openEtherScan(e.hash)}}},[a("span",{staticStyle:{color:"dodgerblue"}},[a("u",[t._v(t._s(e.withdrawamt)+" ETH")]),t.txStatus[i]?a("span",{staticStyle:{color:"red"}},[t._v(" Failed")]):t._e()]),a("span",{staticStyle:{color:"#44566B"}},[t._v(t._s(e.createdAt))])])}))],1)])],1)},s=[];i._withStripped=!0;a("6b54"),a("c5f6"),a("96cf");var n=a("c973"),r=a.n(n),o=a("9bfb"),l=a("e7ea"),c=a("a002"),u=a.n(c),h=a("6b45"),d=a("96a1"),p=a("3452"),m={components:{TitleBar:o["a"],CustomInputDialogVue:h["a"]},data:function(){return{title:this.$t("ivdetail"),item:this.$route.query.item,canDrawAmt:"",dialogData:{show:!1,msg:this.$t("cansellheyue"),from:"investDetail",leftCanDraw3:"",amt:"",w:0},alreadyDrawAmt:0,bx123:0,bx4:0,currentWeek:0,pastTime:"",currentIncome:"",leftCanDraw3:"",nextBtnShow:!0,spanTx:"",isLive:!0,withdrawList:[],txStatus:[]}},mounted:function(){this.getAlreadyDraw(this.$route.query.item.amt,this.$route.query.item.originTime,this.$route.query.item.investid),this.pastTime=this.getAlreadyPastTime(this.$route.query.item.originTime),this.currentIncome=this.getCurrentIncome(this.$route.query.item.amt,this.$route.query.item.originTime),this.checkOrderisFinal(),this.getInvestDrawBmob(this.$route.query.item.investid-1)},methods:{checkOrderisFinal:function(){var t=this,e=function(){var e=r()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.global.m3gameContract.getStatus(t.$route.query.item.investid-1+"");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e().then(function(e){!1===e&&(t.isLive=!1,t.nextBtnShow=!1,t.canDrawAmt=0)})},getCurrentIncome:function(t,e){var a,i=parseInt((new Date).getTime()/1e3),s=parseInt((i-e)/60/60/this.global.config.intervalHours/7),n=parseInt((i-e)/60/60/this.global.config.intervalHours-7*s),r=this.global.config.week1Ratio/1e4,o=this.global.config.week2Ratio/1e4,l=this.global.config.week3Ratio/1e4,c=this.global.config.week4Ratio/1e4;switch(s){case 0:a=t*r*n;break;case 1:a=t*r*7+t*(1+7*r)*.5*o*n;break;case 2:a=t*r*7+t*(1+7*r)*.5*o*7+t*(1+7*r)*.5*(1+7*o)*.5*l*n;break;case 3:a=t*r*7+t*(1+7*r)*.5*o*7+t*(1+7*r)*.5*(1+7*o)*.5*l*7+t*(1+7*r)*.5*(1+7*o)*.5*(1+7*l)*.5*c*n;break;default:a=t*(1+7*r)*.5+t*(1+7*r)*.5*(1+7*o)*.5+t*(1+7*r)*.5*(1+7*o)*.5*(1+7*l)*.5+t*(1+7*r)*.5*(1+7*o)*.5*(1+7*l)*.5*(1+7*c)-t;break}return Number(a).toFixed(4)},getAlreadyDraw:function(t,e,a){var i=this,s=function(){var t=r()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.global.m3gameContract.tAlreadyDrawById(i.global.wallet.ethAddress,a-1+"");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();s().then(function(a){i.alreadyDrawAmt=l["ethers"].utils.formatEther(a);var s=i.computeCanDraw(t,e,i.alreadyDrawAmt);i.canDrawAmt=Number(s-5e-5>0?s-5e-5:s).toFixed(4),i.dialogData.canDrawAmt=i.canDrawAmt})},computeCanDraw:function(t,e,a){var i=this.global.config.week1Ratio/1e4,s=this.global.config.week2Ratio/1e4,n=this.global.config.week3Ratio/1e4,r=this.global.config.week4Ratio/1e4,o=parseInt((new Date).getTime()/1e3),l=parseInt((o-e)/60/60/this.global.config.intervalHours/7),c=(parseInt((o-e)/60/60/this.global.config.intervalHours-7*l),t*(1+7*i)*.5),u=c*(1+7*s)*.5,h=u*(1+7*n)*.5;this.bx123=c+u+h;var d=h*(1+7*r);switch(this.leftCanDraw3=Number(this.bx123-this.alreadyDrawAmt-5e-5).toFixed(4),this.leftCanDraw3="-0.0000"===this.leftCanDraw3?"0.0000":this.leftCanDraw3,this.dialogData.leftCanDraw3=this.leftCanDraw3,this.bx4=Number(d).toFixed(4),this.dialogData.amt=t,this.currentWeek=this.dialogData.w=l,l){case 0:return 0;case 1:return c-a;case 2:return c+u-a;case 3:return c+u+h-a;default:return c+u+h+d-a}},getAlreadyPastTime:function(t){var e=parseInt((new Date).getTime()/1e3),a=parseInt((e-t)/60/60/24/7),i=parseInt((e-t)/60/60/24-7*a),s=parseInt((e-t)/60/60-24*(7*a+i)),n=parseInt((e-t)/60-60*(24*(7*a+i)+s));return a>=4?this.$t("finished"):a+this.$t("w")+i+this.$t("d")+s+this.$t("h")+n+this.$t("m")},toNext:function(){0!==this.canDrawAmt?this.dialogData.show=!0:toast(this.$t("candraw0"))},pressOK:function(t){this.currentWeek>=4&&t.v1>this.leftCanDraw3?this.getLocalWallet(t,t.v3):this.getLocalWallet(t,0)},getLocalWallet:function(t,e){var a=this;this.$q.loading.show({message:a.$t("txsubmiting"),spinnerSize:50}),u.a.getItem("cryptMnemonic").then(function(i){null===i?(a.$q.loading.hide(),toast(a.$t("toastnowallet")),a.$router.push("/walletfirst")):a.unlockWallet(i,t.v1,t.v2,e)}).catch(function(t){toast(t)})},unlockWallet:function(t,e,a,i){try{var s=p.AES.decrypt(t,a),n=s.toString(p.enc.Utf8),r=l["ethers"].Wallet.fromMnemonic(n),o=r.connect(this.global.defaultProvider);this.doWithDraw(o,e,i)}catch(t){console.error(t),toast(this.$t("passworderror")),this.$q.loading.hide()}},doWithDraw:function(t,e,a){var i=this,s=this.global.m3gameContract.connect(t),n={value:l["ethers"].utils.parseEther(a+"")},r=parseInt(this.item.investid)-1;s.investWithdraw(r+"",l["ethers"].utils.parseEther(e+""),n).then(function(t){console.log(t),i.$q.loading.hide(),i.showInfoDialog(i.$t("submitted"),t.hash),i.listen4TxResult(r,e,t.hash,i.$t("sellsuccess"),"Failed"),i.saveInvestDraw2Bmob(r,e,t.hash)}).catch(function(t){i.global.reprotError2Bmob(i,"investWithdraw",t),i.$q.loading.hide()})},listen4TxResult:function(t,e,a,i,s){this.global.defaultProvider.once(a,function(t){console.log("----Transaction Minded:----"),console.log(t),1===t.status?toast(i):toast(s)})},saveInvestDraw2Bmob:function(t,e,a){this.$axios.post(this.global.BmobRestAPIUrl+"classes/investwithdraw",{address:this.global.wallet.ethAddress,investid:t+"",withdrawamt:e+"",hash:a},{headers:this.global.BmobRestAPIHeaders}).then(function(t){})},getInvestDrawBmob:function(t){var e=this,a={address:this.global.wallet.ethAddress,investid:t+""};this.$axios.get(this.global.BmobRestAPIUrl+"classes/investwithdraw?where="+encodeURI(JSON.stringify(a)),{headers:this.global.BmobRestAPIHeaders}).then(function(t){e.withdrawList=t.data.results.reverse();for(var a=0;a<e.withdrawList.length;a++)e.getTxResult(a,e.withdrawList[a].hash)})},getTxResult:function(t,e){var a=this,i="https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash="+e+"&apikey="+this.global.etherscanAPIKey;this.$axios.get(i).then(function(e){"0"===e.data.status?a.txStatus[t]=!0:a.txStatus[t]=!1}).catch(function(t){}).then(function(){})},showInfoDialog:function(t,e){var a=this;this.$q.dialog({title:t,message:"",ok:a.$t("viewresults"),cancel:a.$t("close")}).then(function(){a.$router.go(-1),Object(d["a"])(a.global.etherscanio+"tx/"+e)}).catch(function(){a.$router.go(-1)})},openEtherScan:function(t){Object(d["a"])(this.global.etherscanio+"tx/"+t)}}},f=m,g=(a("5e9e"),a("2877")),w=Object(g["a"])(f,i,s,!1,null,null,null);w.options.__file="InvestDetail.vue";e["default"]=w.exports},"3dd4":function(t,e,a){},"5e9e":function(t,e,a){"use strict";var i=a("3dd4"),s=a.n(i);s.a},"6b45":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{cancel:t.onCancel,show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(e){return a("div",{staticClass:"dialog-btn"},[a("q-btn",{attrs:{flat:"",label:t.$t("cancel")},on:{click:e.cancel}}),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.$t("ok")},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(e){t.$set(t.dialogData,"show",e)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.msg))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("q-input",{attrs:{type:"number",placeholder:"ethtrans"===t.dialogData.from?t.$t("inputbyamt"):"investDetail"===t.dialogData.from?t.$t("fillsellamt"):t.$t("drawamt")},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),a("q-input",{directives:[{name:"show",rawName:"v-show",value:t.cpuRepayShow,expression:"cpuRepayShow"}],attrs:{type:"number",placeholder:t.$t("repayamt")},model:{value:t.repayAmt,callback:function(e){t.repayAmt=e},expression:"repayAmt"}}),"ethtrans"===t.dialogData.from?a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.$t("cutprice"))+":"+t._s(t.global.mcoinPrice)+","+t._s(t.$t("payethnum",{num:t.input1*t.global.mcoinPrice})))]):t._e(),a("q-input",{attrs:{placeholder:t.$t("enterpswd")},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1)])},s=[];i._withStripped=!0;a("96cf");var n=a("c973"),r=a.n(n),o={props:["dialogData"],data:function(){return{input1:"investDetail"===this.dialogData.from?this.dialogData.canDrawAmt:"",input2:"",repayAmt:""}},computed:{cpuRepayShow:function(){return this.input1>this.dialogData.leftCanDraw3&&this.dialogData.w>=4},repayAmtTip:function(){return this.dialogData.amt}},methods:{onOk:function(){var t=this;if(""!==this.input1&&null!==this.input1)if(""!==this.input2)if(this.input2.length<6)toast(this.$t("pwsdless6"));else if("investDetail"===this.dialogData.from&&this.input1>this.dialogData.canDrawAmt)toast(this.$t("drawexceed"));else if(this.cpuRepayShow&&this.repayAmt<this.dialogData.amt)toast(this.$t("repayinsuffit")+this.dialogData.amt);else if("referAwards"===this.dialogData.from&&this.input1>this.dialogData.referAwards)toast(this.$t("drawexceed"));else if("referAwards"===this.dialogData.from&&this.input1>this.dialogData.totalInvest)toast(this.$t("drawexdtalivst"));else{if(("investDetail"===this.dialogData.from||"referAwards"===this.dialogData.from)&&.01*this.input1/this.global.mcoinPrice>this.global.wallet.lastMcoinBalance)return this.$q.dialog({title:"",message:this.$t("cmatinsuft"),ok:this.$t("ok")}).then(function(){_this.$router.push({path:"/ethtransfer",query:{p1:"CMAT",p2:t.global.wallet.lastMcoinBalance}})}),void(this.dialogData.show=!1);this.$emit("pressOK",{v1:this.input1,v2:this.input2,v3:this.repayAmt}),this.dialogData.show=!1}else toast(this.$t("pswdnull"));else toast(this.$t("numnull"))},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=r()(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()}},l=o,c=(a("e2f3"),a("2877")),u=Object(c["a"])(l,i,s,!1,null,"c7e37fd4",null);u.options.__file="CustomInputDialog.vue";e["a"]=u.exports},"9bfb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-bar"},[a("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),a("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},s=[];i._withStripped=!0;var n={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},r=n,o=(a("a675"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,null,null);l.options.__file="TitleBar.vue";e["a"]=l.exports},a675:function(t,e,a){"use strict";var i=a("ca51"),s=a.n(i);s.a},ae6b:function(t,e,a){},ca51:function(t,e,a){},e2f3:function(t,e,a){"use strict";var i=a("ae6b"),s=a.n(i);s.a}}]);