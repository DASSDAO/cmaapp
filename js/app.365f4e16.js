(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var a=n("fb1c"),i=n.n(a);i.a},"1e5d":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("a114"),n("d14b"),n("1e5d"),n("7e6d");var a=n("2b0e"),i=n("d1e7"),s=n("e84f"),u=n("4487"),o=n("7051"),p=n("46a9"),r=n("32a1"),l=n("c563"),y=n("db7b"),c=n("482e"),m=n("5d8b"),d=n("52b5"),f=n("1180"),b=n("506f"),v=n("b8d9"),w=n("0388"),h=n("d3e7"),_=n("1c93"),g=n("1526"),M=n("a9a0"),A=n("6780");a["a"].use(s["a"],{config:{cordova:{backButtonExit:!0}},i18n:i["a"],components:{QLayoutFooter:u["a"],QLayout:o["a"],QPageContainer:p["a"],QPage:r["a"],QTabs:l["a"],QTab:y["a"],QBtn:c["a"],QInput:m["a"],QIcon:d["a"],QList:f["a"],QItem:b["a"],QItemMain:v["a"],QDialog:w["a"],QProgress:h["a"],QRating:_["a"]},directives:{Ripple:g["a"]},plugins:{Loading:M["a"],Dialog:A["a"]}});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},k=[];R._withStripped=!0;n("4917"),n("7f7f"),n("7514");var x=n("b3b4"),P=n.n(x),I=n("a002"),L=n.n(I),D=n("96a1"),Q={name:"App",created:function(){console.log("app created")},mounted:function(){console.log("app mounted");var e=this;this.global.isWebVersion&&this.isWXQQBrowser()&&this.$q.dialog({title:"当前浏览器不支持，请用其他浏览器打开",color:"secondary"}),P.a.initialize("82b312a9c9155cf129c38fe9f60e2fe5","277543fc8062ea41172cfdc1bdd746c1"),this.checkAppUpdate(),L.a.getItem("ethAddress").then(function(t){null===t||e.loginfo(t.toLowerCase())})},methods:{checkAppUpdate:function(){var e=this,t=P.a.Query("cmaconfig");t.find().then(function(t){for(var n,a,i,s,u=0;u<t.length;u++)switch(t[u].name){case"latestVersionCode":n=t[u].value;break;case"updateTips":a=t[u].value;break;case"updateUrl":i=t[u].value;break;case"referUrl":s=t[u].value;break;case"investDistrice24":e.global.investDistrice24=t[u].value;break}n>e.global.versionCode&&e.$q.dialog({title:"有新的版本！",message:a,ok:"下载更新",cancel:"暂不更新"}).then(function(){Object(D["a"])(i)}).catch(function(){}),e.global.downloadUrl=i,e.global.referUrl=s})},bmobLoginUpdate:function(e){var t=P.a.Query("login");t.set("id",e),t.set("appVersion",this.global.versionCode+""),t.set("webviewVersion",navigator.userAgent),t.set("lastLoginTime",(new Date).getTime()+""),t.save().then(function(e){}).catch(function(e){})},bmobLoginSave:function(){var e=P.a.Query("login");e.set("address",this.global.wallet.ethAddress),e.set("appVersion",this.global.versionCode+""),e.set("webviewVersion",navigator.userAgent),e.set("lastLoginTime",(new Date).getTime()+""),e.save().then(function(e){}).catch(function(e){})},loginfo:function(e){var t=this,n=P.a.Query("login");n.equalTo("address","==",e),n.find().then(function(e){0===e.length?t.bmobLoginSave():t.bmobLoginUpdate(e[0].objectId)})},isWXQQBrowser:function(){return null!==navigator.userAgent.match("MicroMessenger|MQQBrowser")}}},C=Q,T=(n("034f"),n("2877")),B=Object(T["a"])(C,R,k,!1,null,null,null);B.options.__file="App.vue";var V=B.exports,F=n("2f62"),N={},U=n("a709"),W=n("8d6f"),E=n("5781"),S={namespaced:!0,state:N,getters:U,mutations:W,actions:E};a["a"].use(F["a"]);var z=function(){var e=new F["a"].Store({modules:{example:S}});return e},H=n("8c4f"),j=[{path:"/",component:function(){return Promise.all([n.e("2d226584"),n.e("7071a334"),n.e("50984092"),n.e("2bfa3388")]).then(n.bind(null,"f241"))}},{path:"/walletfirst",component:function(){return n.e("7933fb6e").then(n.bind(null,"d4c0"))}},{path:"/walletcreate",component:function(){return Promise.all([n.e("2d226584"),n.e("7071a334"),n.e("50984092"),n.e("5298a240")]).then(n.bind(null,"41d7"))}},{path:"/ethtransfer",component:function(){return Promise.all([n.e("2d226584"),n.e("7071a334"),n.e("50984092"),n.e("1fd4d904")]).then(n.bind(null,"63d0"))}},{path:"/transfereth",component:function(){return Promise.all([n.e("2d226584"),n.e("7071a334"),n.e("2158a490")]).then(n.bind(null,"845e"))}},{path:"/receipteth",component:function(){return n.e("787323fa").then(n.bind(null,"7350"))}},{path:"/importwallet",component:function(){return Promise.all([n.e("2d226584"),n.e("7071a334"),n.e("d9a73c08")]).then(n.bind(null,"33c5"))}},{path:"/invest",component:function(){return Promise.all([n.e("2d226584"),n.e("7071a334"),n.e("61c1620b")]).then(n.bind(null,"47b2"))}},{path:"/investdetail",component:function(){return Promise.all([n.e("2d226584"),n.e("7071a334"),n.e("50984092"),n.e("04bbd1e2")]).then(n.bind(null,"1e34"))}},{path:"/withdrawreadme",component:function(){return n.e("73e48d9d").then(n.bind(null,"8b60"))}},{path:"/transferdetail",component:function(){return Promise.all([n.e("2d226584"),n.e("9a7f2b10")]).then(n.bind(null,"6302"))}}];j.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var q,J,O,$,K,X=j,G=n("a65d"),Y=n.n(G),Z=n("5938"),ee="0xA923e6992ffE1323CBfCC5903482a271741f09ff",te="homestead",ne=7122284,ae="1.3.2",ie=132,se=!0,ue="",oe="",pe=.001,re={ethAddress:"",lastEthbalance:"0.0000",lastMcoinBalance:"0.0000"},le="302e28323be84e288f504f5d1ad75cce",ye="HTVDPVIB3UCKJVVVFHMJ9B9WPJWEWFRUS8",ce="homestead"===te?"https://api":"https://api-ropsten",me="homestead"===te?"https://etherscan.io/":"https://ropsten.etherscan.io/",de="wallet",fe="0x0000000000000000000000000000000000000000",be=21e4,ve=2500,we={referLevel3Num:3,referLevel4Num:4,referLevel5Num:5,week1Ratio:100,week2Ratio:200,week3Ratio:300,week4Ratio:400,totolApproveAmt:1e3,minPerInvest:.1,maxPerInvest:10,handlingFee:100,intervalHours:1e16,referDrawInterval:24,referAwardsRatio1:100,referAwardsRatio2:100,referAwardsRatio3:100,referAwardsRatio4:100,referAwardsRatio5:100,isWebVersion:se},he={value:"",updatedAt:""};function _e(e){function t(e){return e>9?e:"0"+e}var n=new Date(e),a=n.getFullYear(),i=t(n.getMonth()+1),s=t(n.getDate()),u=n.getHours();u=t(u);var o=t(n.getMinutes()),p=a+"-"+i+"-"+s+" "+u+":"+o;return p}var ge,Me,Ae={m3gameABI:Z,m3gameAddress:ee,defaultProvider:q,wallet:re,ethersNet:te,etherscanAPIKey:ye,etherscanAPIPrefix:ce,m3gameContract:J,mcoinPrice:pe,currentTab:de,emptyAddress:fe,eventFromBlock:ne,convertUTCTimeToLocalTime:_e,totalPrincipal:O,totalInterest:$,ethPrice:K,config:we,gasLimit:be,etherscanio:me,taskInterval:ve,versionName:ae,versionCode:ie,downloadUrl:ue,referUrl:oe,notify:he,infuraPROJECTID:le,isWebVersion:se},Re=Ae,ke=Object(T["a"])(Re,ge,Me,!1,null,null,null);ke.options.__file="Global.vue";var xe=ke.exports;a["a"].prototype.global=xe,a["a"].use(H["a"]),a["a"].use(Y.a),window.toast=function(e){a["a"].toasted.show(e,{theme:"bubble",position:"top-center",duration:3e3})},console.log("route-indexjs");var Pe=function(){var e=new H["a"]({scrollBehavior:function(){return{y:0}},routes:X,mode:"hash",base:""});return e},Ie=function(){var e="function"===typeof z?z():z,t="function"===typeof Pe?Pe({store:e}):Pe;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(V)}};return{app:n,store:e,router:t}},Le=n("a925"),De={failed:"Action failed",success:"Action was successful"},Qe=(n("28a5"),{lang:"zh-hans",label:{clear:"清空",ok:"确定",cancel:"取消",close:"关闭",set:"设置",select:"选择",reset:"重置",remove:"移除",update:"更新",create:"创建",search:"搜索",filter:"过滤",refresh:"刷新"},date:{days:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),daysShort:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"一_二_三_四_五_六_七_八_九_十_十一_十二".split("_"),firstDayOfWeek:0,format24h:!1},pullToRefresh:{pull:"下拉刷新",release:"释放刷新",refresh:"正在刷新..."},table:{noData:"没有可用数据",noResults:"找不到匹配的数据",loading:"正在加载...",selectedRecords:function(e){return"已选择"+e+"行"},recordsPerPage:"每页的行数:",allRows:"全部",pagination:function(e,t,n){return e+"-"+t+" / "+n},columns:"列"},editor:{url:"URL",bold:"粗体",italic:"斜体",strikethrough:"删除线",underline:"下划线",unorderedList:"无序列表",orderedList:"有序列表",subscript:"下标",superscript:"上标",hyperlink:"超链接",toggleFullscreen:"全屏切换",quote:"引号",left:"左对齐",center:"居中对齐",right:"右对齐",justify:"两端对齐",print:"打印",outdent:"减少缩进",indent:"增加缩进",removeFormat:"清除样式",formatting:"格式化",fontSize:"字体大小",align:"对齐",hr:"插入水平线",undo:"撤消",redo:"重做",header1:"标题一",header2:"标题二",header3:"标题三",header4:"标题四",header5:"标题五",header6:"标题六",paragraph:"段落",code:"代码",size1:"非常小",size2:"比较小",size3:"正常",size4:"中等偏大",size5:"大",size6:"非常大",size7:"超级大",defaultFont:"默认字体"},tree:{noNodes:"没有可用节点",noResults:"找不到匹配的节点"}}),Ce={"en-us":De,"zh-cn":Qe},Te=function(e){var t=e.app,n=e.Vue;n.use(Le["a"]),t.i18n=new Le["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Ce})},Be=n("bc3a"),Ve=n.n(Be),Fe=function(e){var t=e.Vue;t.prototype.$axios=Ve.a},Ne=Ie(),Ue=Ne.app,We=Ne.store,Ee=Ne.router;[Te,Fe].forEach(function(e){e({app:Ue,router:Ee,store:We,Vue:a["a"],ssrContext:null})}),new a["a"](Ue)},5781:function(e,t){},5938:function(e){e.exports=[{constant:!1,inputs:[{name:"number",type:"uint256"}],name:"buyMCoin",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"},{name:"_id",type:"uint256"}],name:"buySomething",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"contrDraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"inverstAgain",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"refer",type:"address"}],name:"inverstFirst",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"},{name:"amt",type:"uint256"}],name:"investWithdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"referWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_totolApproveAmt",type:"uint256"},{name:"_minPerInvest",type:"uint256"},{name:"_maxPerInvest",type:"uint256"}],name:"setAmt",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"sell",type:"address"},{name:"receive",type:"address"}],name:"setCoinRecycleAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_intervalHours",type:"uint256"},{name:"_referDrawInterval",type:"uint256"}],name:"setIntervalHours",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_price",type:"uint256"}],name:"setPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_referAwardsRatio1",type:"uint256"},{name:"_referAwardsRatio2",type:"uint256"},{name:"_referAwardsRatio3",type:"uint256"},{name:"_referAwardsRatio4",type:"uint256"},{name:"_referAwardsRatio5",type:"uint256"},{name:"_handlingFee",type:"uint256"},{name:"_isAbove3",type:"bool"}],name:"setRatio",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"l3",type:"uint256"},{name:"l4",type:"uint256"},{name:"l5",type:"uint256"}],name:"setReferLevelNums",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_week1Ratio",type:"uint256"},{name:"_week2Ratio",type:"uint256"},{name:"_week3Ratio",type:"uint256"},{name:"_week4Ratio",type:"uint256"}],name:"setWeekRatio",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"investid",type:"uint256"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"investEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"referWho",type:"address"},{indexed:!0,name:"whoRefer",type:"address"}],name:"referEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"drawAmt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"investDrawEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"drawAmt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"referDrawEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"drawer",type:"address"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"ContrDrawEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"coinRecycleAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"coinSellAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcct",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcctBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawRatio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"functionLevel",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getAlreadyDrawByid",outputs:[{name:"_alreadDraw",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_id",type:"uint256"}],name:"getBenefitInfo",outputs:[{name:"_beneficiary",type:"address"},{name:"_benefitRatio",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getConfigInfo",outputs:[{name:"_referLevel3Num",type:"uint256"},{name:"_referLevel4Num",type:"uint256"},{name:"_referLevel5Num",type:"uint256"},{name:"_week1Ratio",type:"uint256"},{name:"_week2Ratio",type:"uint256"},{name:"_week3Ratio",type:"uint256"},{name:"_week4Ratio",type:"uint256"},{name:"_totolApproveAmt",type:"uint256"},{name:"_minPerInvest",type:"uint256"},{name:"_maxPerInvest",type:"uint256"},{name:"_handlingFee",type:"uint256"},{name:"_referDrawInterval",type:"uint256"},{name:"_intervalHours",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReferRatio",outputs:[{name:"_referAwardsRatio1",type:"uint256"},{name:"_referAwardsRatio2",type:"uint256"},{name:"_referAwardsRatio3",type:"uint256"},{name:"_referAwardsRatio4",type:"uint256"},{name:"_referAwardsRatio5",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getStatus",outputs:[{name:"_status",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"handlingFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"intervalHours",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isAbove3",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maxPerInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"minPerInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referAwards",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio1",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio2",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio3",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio4",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referAwardsRatio5",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referDrawInterval",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referLastdrawTi",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referLevel3Num",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referLevel4Num",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"referLevel5Num",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"refermap",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referNums",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"tAlreadyDrawById",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalContrDraw",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"totalInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totolApproveAmt",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"week1Ratio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"week2Ratio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"week3Ratio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"week4Ratio",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},"7e6d":function(e,t,n){},"8d6f":function(e,t){},a709:function(e,t){},fb1c:function(e,t,n){}},[[0,"runtime","vendor"]]]);