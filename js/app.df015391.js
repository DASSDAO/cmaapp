(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"034f":function(e,t,n){"use strict";var a=n("fb1c"),i=n.n(a);i.a},"1e5d":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("a114"),n("d14b"),n("1e5d"),n("7e6d");var a=n("2b0e"),i=n("d1e7"),s=n("e84f"),o=n("4487"),r=n("7051"),u=n("46a9"),p=n("32a1"),l=n("c563"),c=n("db7b"),d=n("482e"),m=n("5d8b"),f=n("52b5"),y=n("1180"),b=n("506f"),h=n("b8d9"),v=n("0388"),g=n("d3e7"),w=n("1c93"),_=n("1526"),A=n("a9a0"),M=n("6780");a["a"].use(s["a"],{config:{cordova:{backButtonExit:!0}},i18n:i["a"],components:{QLayoutFooter:o["a"],QLayout:r["a"],QPageContainer:u["a"],QPage:p["a"],QTabs:l["a"],QTab:c["a"],QBtn:d["a"],QInput:m["a"],QIcon:f["a"],QList:y["a"],QItem:b["a"],QItemMain:h["a"],QDialog:v["a"],QProgress:g["a"],QRating:w["a"]},directives:{Ripple:_["a"]},plugins:{Loading:A["a"],Dialog:M["a"]}});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},R=[];P._withStripped=!0;n("4917");var I=n("e7ea"),Q={name:"App",created:function(){console.log("----app created")},mounted:function(){console.log("----app mounted");this.global.isWebVersion&&this.isWXQQBrowser()&&this.$q.dialog({message:"请用手机自带浏览器(或谷歌，火狐，UC，360等手机浏览器)打开，微信和QQ里面不具备标准浏览器的功能，无法正常使用。若不是在微信和QQ里面使用请忽略该提示",color:"secondary"}),this.global.defaultProvider=new I["ethers"].providers.InfuraProvider(this.global.ethersNet,this.global.infuraPROJECTID),this.global.m3gameContract=new I["ethers"].Contract(this.global.m3gameAddress,this.global.m3gameABI,this.global.defaultProvider),this.global.nabContract=new I["ethers"].Contract(this.global.nabAddress,this.global.nabABI,this.global.defaultProvider)},methods:{isWXQQBrowser:function(){return null!==navigator.userAgent.match("MicroMessenger|MQQBrowser")}}},B=Q,x=(n("034f"),n("2877")),C=Object(x["a"])(B,P,R,!1,null,null,null);C.options.__file="App.vue";var k=C.exports,L=n("2f62"),D={},N=n("a709"),T=n("8d6f"),E=n("5781"),F={namespaced:!0,state:D,getters:N,mutations:T,actions:E};a["a"].use(L["a"]);var W=function(){var e=new L["a"].Store({modules:{example:F}});return e},z=n("8c4f"),V=[{path:"/",component:function(){return Promise.all([n.e("2d207327"),n.e("c92045f6"),n.e("50984092"),n.e("2d0a4887"),n.e("ed7fe5a8")]).then(n.bind(null,"f241"))}},{path:"/walletfirst",component:function(){return n.e("7933fb6e").then(n.bind(null,"d4c0"))}},{path:"/walletcreate",component:function(){return Promise.all([n.e("2d207327"),n.e("c92045f6"),n.e("50984092"),n.e("2d0a4887"),n.e("5298a240")]).then(n.bind(null,"41d7"))}},{path:"/ethtransfer",component:function(){return Promise.all([n.e("2d207327"),n.e("c92045f6"),n.e("50984092"),n.e("4fff5339")]).then(n.bind(null,"63d0"))}},{path:"/transfereth",component:function(){return Promise.all([n.e("2d207327"),n.e("c92045f6"),n.e("50984092"),n.e("2d0a4887"),n.e("4f7880f2")]).then(n.bind(null,"845e"))}},{path:"/receipteth",component:function(){return n.e("787323fa").then(n.bind(null,"7350"))}},{path:"/importwallet",component:function(){return Promise.all([n.e("2d207327"),n.e("c92045f6"),n.e("2d0a4887"),n.e("d9a73c08")]).then(n.bind(null,"33c5"))}},{path:"/invest",component:function(){return Promise.all([n.e("2d207327"),n.e("c92045f6"),n.e("7c339576")]).then(n.bind(null,"47b2"))}},{path:"/investdetail",component:function(){return Promise.all([n.e("2d207327"),n.e("c92045f6"),n.e("50984092"),n.e("64a5919d")]).then(n.bind(null,"1e34"))}},{path:"/withdrawreadme",component:function(){return Promise.all([n.e("2d207327"),n.e("ac30adfe")]).then(n.bind(null,"8b60"))}},{path:"/transferdetail",component:function(){return n.e("12e53db2").then(n.bind(null,"6302"))}},{path:"/registeens",component:function(){return Promise.all([n.e("2d207327"),n.e("c92045f6"),n.e("50984092"),n.e("5f3f2d96")]).then(n.bind(null,"2348"))}}];V.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var U,S,J,H,O,j,q,X=V,$=n("a65d"),K=n.n($),G=n("5938"),Y=n("f50e"),Z="0xA923e6992ffE1323CBfCC5903482a271741f09ff",ee="0x7a45c9c1b3cef3865b8c165e10e0e341692e55f9",te="homestead",ne=7122284,ae="1.5.1",ie=151,se=!0,oe="",re="",ue=.001,pe={ethAddress:"",lastEthbalance:"0.0000",lastMcoinBalance:"0.0000"},le="https://api2.bmob.cn/1/classes/",ce={"X-Bmob-Application-Id":"82b312a9c9155cf129c38fe9f60e2fe5","X-Bmob-REST-API-Key":"277543fc8062ea41172cfdc1bdd746c1","Content-Type":"application/json"},de="302e28323be84e288f504f5d1ad75cce",me="HTVDPVIB3UCKJVVVFHMJ9B9WPJWEWFRUS8",fe="homestead"===te?"https://api":"https://api-ropsten",ye="homestead"===te?"https://etherscan.io/":"https://ropsten.etherscan.io/",be="wallet",he="0x0000000000000000000000000000000000000000",ve=21e4,ge=3e3,we=.1,_e={referLevel3Num:3,referLevel4Num:4,referLevel5Num:5,week1Ratio:100,week2Ratio:200,week3Ratio:300,week4Ratio:400,totolApproveAmt:1e3,maxPerInvest:10,handlingFee:100,intervalHours:1e16,referDrawInterval:24,referAwardsRatio1:100,referAwardsRatio2:100,referAwardsRatio3:100,referAwardsRatio4:100,referAwardsRatio5:100},Ae={value:"",updatedAt:""},Me=!1;function Pe(e){function t(e){return e>9?e:"0"+e}var n=new Date(e),a=n.getFullYear(),i=t(n.getMonth()+1),s=t(n.getDate()),o=n.getHours();o=t(o);var r=t(n.getMinutes()),u=a+"-"+i+"-"+s+" "+o+":"+r;return u}var Re,Ie,Qe={m3gameABI:G,m3gameAddress:Z,defaultProvider:U,wallet:pe,ethersNet:te,etherscanAPIKey:me,etherscanAPIPrefix:fe,m3gameContract:S,mcoinPrice:ue,currentTab:be,emptyAddress:he,eventFromBlock:ne,convertUTCTimeToLocalTime:Pe,totalPrincipal:H,totalInterest:O,ethPrice:j,config:_e,gasLimit:ve,etherscanio:ye,taskInterval:ge,versionName:ae,versionCode:ie,downloadUrl:oe,referUrl:re,notify:Ae,infuraPROJECTID:de,isWebVersion:se,BmobRestAPIUrl:le,BmobRestAPIHeaders:ce,isGrayUser:Me,nabAddress:ee,nabContract:J,nabABI:Y,minPerInvest:we,ensname:q},Be=Qe,xe=Object(x["a"])(Be,Re,Ie,!1,null,null,null);xe.options.__file="Global.vue";var Ce=xe.exports;a["a"].prototype.global=Ce,a["a"].use(z["a"]),a["a"].use(K.a),window.toast=function(e){a["a"].toasted.show(e,{theme:"bubble",position:"top-center",duration:3e3})},console.log("----route-indexjs");var ke=function(){var e=new z["a"]({scrollBehavior:function(){return{y:0}},routes:X,mode:"hash",base:""});return e},Le=function(){var e="function"===typeof W?W():W,t="function"===typeof ke?ke({store:e}):ke;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(k)}};return{app:n,store:e,router:t}},De=n("a925"),Ne={failed:"Action failed",success:"Action was successful"},Te=(n("28a5"),{lang:"zh-hans",label:{clear:"清空",ok:"确定",cancel:"取消",close:"关闭",set:"设置",select:"选择",reset:"重置",remove:"移除",update:"更新",create:"创建",search:"搜索",filter:"过滤",refresh:"刷新"},date:{days:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),daysShort:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"一_二_三_四_五_六_七_八_九_十_十一_十二".split("_"),firstDayOfWeek:0,format24h:!1},pullToRefresh:{pull:"下拉刷新",release:"释放刷新",refresh:"正在刷新..."},table:{noData:"没有可用数据",noResults:"找不到匹配的数据",loading:"正在加载...",selectedRecords:function(e){return"已选择"+e+"行"},recordsPerPage:"每页的行数:",allRows:"全部",pagination:function(e,t,n){return e+"-"+t+" / "+n},columns:"列"},editor:{url:"URL",bold:"粗体",italic:"斜体",strikethrough:"删除线",underline:"下划线",unorderedList:"无序列表",orderedList:"有序列表",subscript:"下标",superscript:"上标",hyperlink:"超链接",toggleFullscreen:"全屏切换",quote:"引号",left:"左对齐",center:"居中对齐",right:"右对齐",justify:"两端对齐",print:"打印",outdent:"减少缩进",indent:"增加缩进",removeFormat:"清除样式",formatting:"格式化",fontSize:"字体大小",align:"对齐",hr:"插入水平线",undo:"撤消",redo:"重做",header1:"标题一",header2:"标题二",header3:"标题三",header4:"标题四",header5:"标题五",header6:"标题六",paragraph:"段落",code:"代码",size1:"非常小",size2:"比较小",size3:"正常",size4:"中等偏大",size5:"大",size6:"非常大",size7:"超级大",defaultFont:"默认字体"},tree:{noNodes:"没有可用节点",noResults:"找不到匹配的节点"}}),Ee={"en-us":Ne,"zh-cn":Te},Fe=function(e){var t=e.app,n=e.Vue;n.use(De["a"]),t.i18n=new De["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Ee})},We=n("bc3a"),ze=n.n(We),Ve=function(e){var t=e.Vue;t.prototype.$axios=ze.a},Ue=Le(),Se=Ue.app,Je=Ue.store,He=Ue.router;[Fe,Ve].forEach(function(e){e({app:Se,router:He,store:Je,Vue:a["a"],ssrContext:null})}),new a["a"](Se)},5781:function(e,t){},5938:function(e){e.exports=[{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referNums",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referAwards",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"referLastdrawTi",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"totalInvest",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"refermap",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"getStatus",outputs:[{name:"_status",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"tAlreadyDrawById",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcctBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contrDrawAcct",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getConfigInfo",outputs:[{name:"_referLevel3Num",type:"uint256"},{name:"_referLevel4Num",type:"uint256"},{name:"_referLevel5Num",type:"uint256"},{name:"_week1Ratio",type:"uint256"},{name:"_week2Ratio",type:"uint256"},{name:"_week3Ratio",type:"uint256"},{name:"_week4Ratio",type:"uint256"},{name:"_totolApproveAmt",type:"uint256"},{name:"_minPerInvest",type:"uint256"},{name:"_maxPerInvest",type:"uint256"},{name:"_handlingFee",type:"uint256"},{name:"_referDrawInterval",type:"uint256"},{name:"_intervalHours",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReferRatio",outputs:[{name:"_referAwardsRatio1",type:"uint256"},{name:"_referAwardsRatio2",type:"uint256"},{name:"_referAwardsRatio3",type:"uint256"},{name:"_referAwardsRatio4",type:"uint256"},{name:"_referAwardsRatio5",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"referWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"inverstAgain",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"refer",type:"address"}],name:"inverstFirst",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"id",type:"uint256"},{name:"amt",type:"uint256"}],name:"investWithdraw",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"amt",type:"uint256"}],name:"contrDraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"number",type:"uint256"}],name:"buyMCoin",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"inverstor",type:"address"},{indexed:!1,name:"investid",type:"uint256"},{indexed:!1,name:"amt",type:"uint256"},{indexed:!1,name:"time",type:"uint256"}],name:"investEvent",type:"event"}]},"7e6d":function(e,t,n){},"8d6f":function(e,t){},a709:function(e,t){},f50e:function(e){e.exports=[{constant:!1,inputs:[{name:"name",type:"string"}],name:"registeNameByEth",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"ensname",type:"string"},{name:"recipient",type:"address"},{name:"mobile",type:"string"},{name:"name",type:"string"},{name:"payMethod1",type:"string"},{name:"payMethod2",type:"string"},{name:"payMethod3",type:"string"}],name:"registeNameWithNotify",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"name",type:"string"}],name:"getAddress",outputs:[{name:"_address",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_address",type:"address"}],name:"getName",outputs:[{name:"name",type:"string"}],payable:!1,stateMutability:"view",type:"function"}]},fb1c:function(e,t,n){}},[[0,"runtime","vendor"]]]);