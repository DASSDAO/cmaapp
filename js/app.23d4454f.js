(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("2f39")},"034f":function(t,e,n){"use strict";var a=n("fb1c"),i=n.n(a);i.a},"1e5d":function(t,e,n){},"2f39":function(t,e,n){"use strict";n.r(e);n("ac6a"),n("a114"),n("d14b"),n("1e5d"),n("7e6d");var a=n("2b0e"),i=n("d1e7"),s=n("e84f"),o=n("4487"),u=n("7051"),p=n("46a9"),r=n("32a1"),l=n("c563"),y=n("db7b"),c=n("482e"),m=n("5d8b"),d=n("52b5"),f=n("1180"),b=n("506f"),v=n("b8d9"),w=n("0388"),h=n("d3e7"),g=n("1c93"),_=n("1526"),A=n("a9a0"),M=n("6780");a["a"].use(s["a"],{config:{cordova:{backButtonExit:!0}},i18n:i["a"],components:{QLayoutFooter:o["a"],QLayout:u["a"],QPageContainer:p["a"],QPage:r["a"],QTabs:l["a"],QTab:y["a"],QBtn:c["a"],QInput:m["a"],QIcon:d["a"],QList:f["a"],QItem:b["a"],QItemMain:v["a"],QDialog:w["a"],QProgress:h["a"],QRating:g["a"]},directives:{Ripple:_["a"]},plugins:{Loading:A["a"],Dialog:M["a"]}});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},I=[];R._withStripped=!0;n("4917"),n("7f7f");var P=n("a002"),x=n.n(P),k=n("96a1"),B={name:"App",created:function(){console.log("app created")},mounted:function(){console.log("app mounted");var t=this;this.global.isWebVersion&&this.isWXQQBrowser()&&this.$q.dialog({message:"请用手机自带浏览器(或谷歌，火狐，UC，360等手机浏览器)打开，微信和QQ里面部分功能无法正常使用",color:"secondary"}).then(function(){}).catch(function(){}),this.checkAppUpdate(),x.a.getItem("ethAddress").then(function(e){null===e||t.loginfo(e.toLowerCase())})},methods:{checkAppUpdate:function(){var t=this;this.$axios.get(this.global.BmobRestAPIUrl+"cmaconfig",{headers:this.global.BmobRestAPIHeaders}).then(function(e){if(200===e.status){for(var n,a,i,s,o=e.data.results,u=0;u<o.length;u++)switch(o[u].name){case"latestVersionCode":n=o[u].value;break;case"updateTips":a=o[u].value;break;case"updateUrl":i=o[u].value;break;case"referUrl":s=o[u].value;break;case"investDistrice24":t.global.investDistrice24=o[u].value;break}n>t.global.versionCode&&t.$q.dialog({title:"有新的版本！",message:a,ok:"下载更新",cancel:"暂不更新"}).then(function(){Object(k["a"])(i)}).catch(function(){}),t.global.downloadUrl=i,t.global.referUrl=s}})},bmobLoginUpdate:function(t){this.$axios.put(this.global.BmobRestAPIUrl+"login/"+t,{appVersion:this.global.versionCode+"",webviewVersion:navigator.userAgent},{headers:this.global.BmobRestAPIHeaders}).then(function(t){console.log(t)})},bmobLoginSave:function(){this.$axios.post(this.global.BmobRestAPIUrl+"login",{address:this.global.wallet.ethAddress,appVersion:this.global.versionCode+"",webviewVersion:navigator.userAgent},{headers:this.global.BmobRestAPIHeaders}).then(function(t){})},loginfo:function(t){var e=this,n={address:t};this.$axios.get(this.global.BmobRestAPIUrl+"login?where="+encodeURI(JSON.stringify(n)),{headers:this.global.BmobRestAPIHeaders}).then(function(t){200===t.status&&(0===t.data.results.length?e.bmobLoginSave():e.bmobLoginUpdate(t.data.results[0].objectId))})},isWXQQBrowser:function(){return null!==navigator.userAgent.match("MicroMessenger|MQQBrowser")}}},L=B,D=(n("034f"),n("2877")),Q=Object(D["a"])(L,R,I,!1,null,null,null);Q.options.__file="App.vue";var C=Q.exports,U=n("2f62"),N={},T=n("a709"),V=n("8d6f"),F=n("5781"),S={namespaced:!0,state:N,getters:T,mutations:V,actions:F};a["a"].use(U["a"]);var E=function(){var t=new U["a"].Store({modules:{example:S}});return t},H=n("8c4f"),W=[{path:"/",component:function(){return Promise.all([n.e("2d226584"),n.e("c92045f6"),n.e("50984092"),n.e("2e853719")]).then(n.bind(null,"f241"))}},{path:"/walletfirst",component:function(){return n.e("7933fb6e").then(n.bind(null,"d4c0"))}},{path:"/walletcreate",component:function(){return Promise.all([n.e("2d226584"),n.e("c92045f6"),n.e("50984092"),n.e("408a7954")]).then(n.bind(null,"41d7"))}},{path:"/ethtransfer",component:function(){return Promise.all([n.e("2d226584"),n.e("c92045f6"),n.e("50984092"),n.e("27da6171")]).then(n.bind(null,"63d0"))}},{path:"/transfereth",component:function(){return Promise.all([n.e("2d226584"),n.e("c92045f6"),n.e("2158a490")]).then(n.bind(null,"845e"))}},{path:"/receipteth",component:function(){return n.e("787323fa").then(n.bind(null,"7350"))}},{path:"/importwallet",component:function(){return Promise.all([n.e("2d226584"),n.e("c92045f6"),n.e("d9a73c08")]).then(n.bind(null,"33c5"))}},{path:"/invest",component:function(){return Promise.all([n.e("2d226584"),n.e("c92045f6"),n.e("61c1620b")]).then(n.bind(null,"47b2"))}},{path:"/investdetail",component:function(){return Promise.all([n.e("2d226584"),n.e("c92045f6"),n.e("50984092"),n.e("3c809fd5")]).then(n.bind(null,"1e34"))}},{path:"/withdrawreadme",component:function(){return n.e("73e48d9d").then(n.bind(null,"8b60"))}},{path:"/transferdetail",component:function(){return Promise.all([n.e("2d226584"),n.e("9a7f2b10")]).then(n.bind(null,"6302"))}}];W.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var z,$,j,J,O,q=W,X=n("a65d"),K=n.n(X),G=n("5938"),Y="0xA923e6992ffE1323CBfCC5903482a271741f09ff",Z="homestead",tt=7122284,et="1.4.2",nt=142,at=!0,it="",st="",ot=.001,ut={ethAddress:"",lastEthbalance:"0.0000",lastMcoinBalance:"0.0000"},pt="https://api2.bmob.cn/1/classes/",rt={"X-Bmob-Application-Id":"82b312a9c9155cf129c38fe9f60e2fe5","X-Bmob-REST-API-Key":"277543fc8062ea41172cfdc1bdd746c1","Content-Type":"application/json"},lt="302e28323be84e288f504f5d1ad75cce",yt="HTVDPVIB3UCKJVVVFHMJ9B9WPJWEWFRUS8",ct="homestead"===Z?"https://api":"https://api-ropsten",mt="homestead"===Z?"https://etherscan.io/":"https://ropsten.etherscan.io/",dt="wallet",ft="0x0000000000000000000000000000000000000000",bt=21e4,vt=3e3,wt={referLevel3Num:3,referLevel4Num:4,referLevel5Num:5,week1Ratio:100,week2Ratio:200,week3Ratio:300,week4Ratio:400,totolApproveAmt:1e3,minPerInvest:.1,maxPerInvest:10,handlingFee:100,intervalHours:1e16,referDrawInterval:24,referAwardsRatio1:100,referAwardsRatio2:100,referAwardsRatio3:100,referAwardsRatio4:100,referAwardsRatio5:100},ht={value:"",updatedAt:""};function gt(t){function e(t){return t>9?t:"0"+t}var n=new Date(t),a=n.getFullYear(),i=e(n.getMonth()+1),s=e(n.getDate()),o=n.getHours();o=e(o);var u=e(n.getMinutes()),p=a+"-"+i+"-"+s+" "+o+":"+u;return p}var _t,At,Mt={m3gameABI:G,m3gameAddress:Y,defaultProvider:z,wallet:ut,ethersNet:Z,etherscanAPIKey:yt,etherscanAPIPrefix:ct,m3gameContract:$,mcoinPrice:ot,currentTab:dt,emptyAddress:ft,eventFromBlock:tt,convertUTCTimeToLocalTime:gt,totalPrincipal:j,totalInterest:J,ethPrice:O,config:wt,gasLimit:bt,etherscanio:mt,taskInterval:vt,versionName:et,versionCode:nt,downloadUrl:it,referUrl:st,notify:ht,infuraPROJECTID:lt,isWebVersion:at,BmobRestAPIUrl:pt,BmobRestAPIHeaders:rt},Rt=Mt,It=Object(D["a"])(Rt,_t,At,!1,null,null,null);It.options.__file="Global.vue";var Pt=It.exports;a["a"].prototype.global=Pt,a["a"].use(H["a"]),a["a"].use(K.a),window.toast=function(t){a["a"].toasted.show(t,{theme:"bubble",position:"top-center",duration:3e3})},console.log("route-indexjs");var xt=function(){var t=new H["a"]({scrollBehavior:function(){return{y:0}},routes:q,mode:"hash",base:""});return t},kt=function(){var t="function"===typeof E?E():E,e="function"===typeof xt?xt({store:t}):xt;t.$router=e;var n={el:"#q-app",router:e,store:t,render:function(t){return t(C)}};return{app:n,store:t,router:e}},Bt=n("a925"),Lt={failed:"Action failed",success:"Action was successful"},Dt=(n("28a5"),{lang:"zh-hans",label:{clear:"清空",ok:"确定",cancel:"取消",close:"关闭",set:"设置",select:"选择",reset:"重置",remove:"移除",update:"更新",create:"创建",search:"搜索",filter:"过滤",refresh:"刷新"},date:{days:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),daysShort:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"一_二_三_四_五_六_七_八_九_十_十一_十二".split("_"),firstDayOfWeek:0,format24h:!1},pullToRefresh:{pull:"下拉刷新",release:"释放刷新",refresh:"正在刷新..."},table:{noData:"没有可用数据",noResults:"找不到匹配的数据",loading:"正在加载...",selectedRecords:function(t){return"已选择"+t+"行"},recordsPerPage:"每页的行数:",allRows:"全部",pagination:function(t,e,n){return t+"-"+e+" / "+n},columns:"列"},editor:{url:"URL",bold:"粗体",italic:"斜体",strikethrough:"删除线",underline:"下划线",unorderedList:"无序列表",orderedList:"有序列表",subscript:"下标",superscript:"上标",hyperlink:"超链接",toggleFullscreen:"全屏切换",quote:"引号",left:"左对齐",center:"居中对齐",right:"右对齐",justify:"两端对齐",print:"打印",outdent:"减少缩进",indent:"增加缩进",removeFormat:"清除样式",formatting:"格式化",fontSize:"字体大小",align:"对齐",hr:"插入水平线",undo:"撤消",redo:"重做",header1:"标题一",header2:"标题二",header3:"标题三",header4:"标题四",header5:"标题五",header6:"标题六",paragraph:"段落",code:"代码",size1:"非常小",size2:"比较小",size3:"正常",size4:"中等偏大",size5:"大",size6:"非常大",size7:"超级大",defaultFont:"默认字体"},tree:{noNodes:"没有可用节点",noResults:"找不到匹配的节点"}}),Qt={"en-us":Lt,"zh-cn":Dt},Ct=function(t){var e=t.app,n=t.Vue;n.use(Bt["a"]),e.i18n=new Bt["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Qt})},Ut=n("bc3a"),Nt=n.n(Ut),Tt=function(t){var e=t.Vue;e.prototype.$axios=Nt.a},Vt=kt(),Ft=Vt.app,St=Vt.store,Et=Vt.router;[Ct,Tt].forEach(function(t){t({app:Ft,router:Et,store:St,Vue:a["a"],ssrContext:null})}),new a["a"](Ft)},5781:function(t,e){},5938:function(t){t.exports=[{constant:!1,inputs:[{name:"number",type:"uint256"}],name:"buyMCoin",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"},{name:"_id",type:"uint256"}],name:"buySomething",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"contrDraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"inverstAgain",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"refer",type:"address"}],name:"inverstFirst",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"},{name:"amt",type:"uint256"}],name:"investWithdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"referWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_totolApproveAmt",type:"uint256"},{name:"_minPerInvest",type:"uint256"},{name:"_maxPerInvest",type:"uint256"}],name:"setAmt",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"sell",type:"address"},{name:"receive",type:"address"}],name:"setCoinRecycleAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_intervalHours",type:"uint256"},{name:"_referDrawInterval",type:"uint256"}],name:"setIntervalHours",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_price",type:"uint256"}],name:"setPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_referAwardsRatio1",type:"uint256"},{name:"_referAwardsRatio2",type:"uint256"},{name:"_referAwardsRatio3",type:"uint256"},{name:"_referAwardsRatio4",type:"uint256"},{name:"_referAwardsRatio5",type:"uint256"},{name:"_handlingFee",type:"uint256"},{name:"_isAbove3",type:"bool"}],name:"setRatio",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"l3",type:"uint256"},{name:"l4",type:"uint256"},{name:"l5",type:"uint256"}],name:"setReferLevelNums",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_week1Ratio",type:"uint256"},{name:"_week2Ratio",type:"uint256"},{name:"_week3Ratio",type:"uint256"},{name:"_week4Ratio",type:"uint256"}],name:"setWeekRatio",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"investid",type:"uint256"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"investEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"referWho",type:"address"},{indexed:!0,name:"whoRefer",type:"address"}],name:"referEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"drawAmt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"investDrawEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"drawAmt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"referDrawEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"drawer",type:"address"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"ContrDrawEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"coinRecycleAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"coinSellAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcct",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcctBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawRatio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"functionLevel",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getAlreadyDrawByid",outputs:[{name:"_alreadDraw",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_id",type:"uint256"}],name:"getBenefitInfo",outputs:[{name:"_beneficiary",type:"address"},{name:"_benefitRatio",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getConfigInfo",outputs:[{name:"_referLevel3Num",type:"uint256"},{name:"_referLevel4Num",type:"uint256"},{name:"_referLevel5Num",type:"uint256"},{name:"_week1Ratio",type:"uint256"},{name:"_week2Ratio",type:"uint256"},{name:"_week3Ratio",type:"uint256"},{name:"_week4Ratio",type:"uint256"},{name:"_totolApproveAmt",type:"uint256"},{name:"_minPerInvest",type:"uint256"},{name:"_maxPerInvest",type:"uint256"},{name:"_handlingFee",type:"uint256"},{name:"_referDrawInterval",type:"uint256"},{name:"_intervalHours",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReferRatio",outputs:[{name:"_referAwardsRatio1",type:"uint256"},{name:"_referAwardsRatio2",type:"uint256"},{name:"_referAwardsRatio3",type:"uint256"},{name:"_referAwardsRatio4",type:"uint256"},{name:"_referAwardsRatio5",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getStatus",outputs:[{name:"_status",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"handlingFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"intervalHours",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isAbove3",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maxPerInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"minPerInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referAwards",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio1",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio2",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio3",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio4",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio5",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referDrawInterval",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referLastdrawTi",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referLevel3Num",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referLevel4Num",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referLevel5Num",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"refermap",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referNums",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"tAlreadyDrawById",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalContrDraw",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"totalInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totolApproveAmt",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"week1Ratio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"week2Ratio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"week3Ratio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"week4Ratio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},"7e6d":function(t,e,n){},"8d6f":function(t,e){},a709:function(t,e){},fb1c:function(t,e,n){}},[[0,"runtime","vendor"]]]);