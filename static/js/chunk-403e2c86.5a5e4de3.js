(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-403e2c86"],{"4f36":function(e,t,r){},d84d:function(e,t,r){"use strict";r("4f36")},da44:function(e,t,r){"use strict";r.r(t);r("a9e3");var a=r("7a23"),n=Object(a["withScopeId"])("data-v-0708bc10");Object(a["pushScopeId"])("data-v-0708bc10");var c={class:"container record"},o={class:"lists"},d={key:0,class:"li"},i={class:"title flex-middle"},s={class:"left flex-item"},u={class:"right"},l={class:"p"},p={class:"key"},m={class:"value flex-item"},b={class:"p"},h={class:"key"},f={class:"value flex-item"},v={class:"p"},O={class:"key"},x={class:"value flex-item"},j={class:"p"},g={class:"key"},w={class:"value flex-item"},k={key:1,class:"noData"};Object(a["popScopeId"])();var y=n((function(e,t,r,y,C,N){var F=Object(a["resolveComponent"])("Header"),A=Object(a["resolveComponent"])("van-button");return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])(F,{title:e.t("index.購買記錄"),type:"back"},null,8,["title"]),Object(a["createVNode"])("div",o,[e.dataOrders.isExist?(Object(a["openBlock"])(),Object(a["createBlock"])("div",d,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",s,Object(a["toDisplayString"])(e.t("index.IDO訂單/支付{key}",{key:e.dataOrders.amount+"U"})),1),Object(a["createVNode"])("div",u,[e.dataOrders.leaderAddress===e.rooterAddress||Number(e.groupFinishTime)||e.idoTotalGroup!==e.idoTotalAmount?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(A,{key:0,size:"mini",type:"primary",class:"btn","loading-text":e.$t("index.退回"),loading:e.btnInherit.loading,disabled:e.btnInherit.loading,onClick:t[1]||(t[1]=function(t){return e.inheritHandle()})},{default:n((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("index.退回")),1)]})),_:1},8,["loading-text","loading","disabled"]))])]),Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",p,Object(a["toDisplayString"])(e.t("index.已領取")),1),Object(a["createVNode"])("div",m,Object(a["toDisplayString"])(e.dataOrders.receiveProfit)+" Back",1)]),Object(a["createVNode"])("div",b,[Object(a["createVNode"])("div",h,Object(a["toDisplayString"])(e.t("index.待領取")),1),Object(a["createVNode"])("div",f,Object(a["toDisplayString"])(e.dataOrders.earned)+" Back",1)]),Object(a["createVNode"])("div",v,[Object(a["createVNode"])("div",O,Object(a["toDisplayString"])(e.t("index.待釋放")),1),Object(a["createVNode"])("div",x,Object(a["toDisplayString"])(e.dataOrders.release)+" Back",1)]),Object(a["createVNode"])("div",j,[Object(a["createVNode"])("div",g,Object(a["toDisplayString"])(e.t("index.購買時間")),1),Object(a["createVNode"])("div",w,Object(a["toDisplayString"])(e.$dateformat(e.dataOrders.time)),1)])])):Object(a["createCommentVNode"])("",!0),e.dataOrders.isExist?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",k,Object(a["toDisplayString"])(e.$t("暫無更多數據")),1))])])})),C=r("5530"),N=r("1da1"),F=(r("b680"),r("5319"),r("ac1f"),r("b0c0"),r("96cf"),r("0418")),A=r("47e2"),T=r("5502"),V=r("6c02"),B=r("01ea"),R=r("901e"),D=r.n(R),S=r("722f"),I=r("d835"),$=r("d399");$["a"].allowMultiple();var _={components:{Header:F["a"]},setup:function(){var e=Object(a["getCurrentInstance"])(),t=e.proxy,r=Object(T["b"])(),n=Object(V["d"])(),c=Object(A["a"])(),o=c.t,d=Object(a["reactive"])({t:o,address:Object(a["computed"])((function(){return r.state.accounts[0]})),web3:Object(a["computed"])((function(){return r.state.provider})),handleContract:null,usdtContract:null,backContract:null,dataOrders:{release:"0",earned:"",amount:"",isExist:"",leaderAddress:"",receiveProfit:"0.0000",time:"",user:""},btnInherit:{loading:!1},rooterAddress:"",idoTypeActions:[],groupFinishTime:"0",idoTotalGroup:"1",idoTotalAmount:"0",initContract:function(){d.usdtContract=new d.web3.eth.Contract(S,B["a"].usdtAddress),d.backContract=new d.web3.eth.Contract(S,B["a"].backAddress),d.handleContract=new d.web3.eth.Contract(I,B["a"].HANDLE_a),d.initData()},initData:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.getRootAddress();case 2:return e.next=4,d.remainingGet();case 4:return e.next=6,d.idoTypesFetch(0);case 6:return e.next=8,d.idoTypesFetch(1);case 8:d.userOrderFetch();case 9:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),userOrderFetch:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=$["a"].loading({duration:0}),e.prev=1,e.next=4,d.handleContract.methods.userOrder(d.address).call({from:d.address});case 4:if(a=e.sent,Number(a)){e.next=10;break}e.next=12;break;case 10:return e.next=12,d.ordersFetch(a);case 12:r.clear(),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](1),r.clear(),t.$errorformat(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));function r(){return e.apply(this,arguments)}return r}(),ordersFetch:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(r){var a,n,c,o,i,s,u,l,p,m,b,h,f,v,O,x,j,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=$["a"].loading({duration:0}),e.prev=1,e.next=4,d.usdtContract.methods.decimals().call();case 4:return n=e.sent,e.next=7,d.backContract.methods.decimals().call();case 7:return c=e.sent,e.next=10,d.handleContract.methods.orders(r).call({from:d.address});case 10:return o=e.sent,i=o.amount,s=o.isExist,u=o.leaderAddress,l=o.receiveProfit,p=o.time,m=o.user,e.next=15,d.handleContract.methods.earned(d.address).call();case 15:return b=e.sent,h="",e.next=19,d.handleContract.methods.groupIdoType(u).call({from:d.address});case 19:for(f=e.sent,v=d.idoTypeActions,O=0;O<v.length;O++)v[O].uint===Number(f)&&(h=new D.a(v[O]._profit).dividedBy(v[O]._idoUsdtNumber).toFixed());x=h,j=new D.a(i).multipliedBy(x).toFixed(),d.rooterAddress!==d.address&&(j=new D.a(j).multipliedBy(.92).toFixed()),g=new D.a(j).minus(b).minus(l).toFixed(),b=new D.a(b).dividedBy(Math.pow(10,c)).toFixed(4),g=new D.a(g).dividedBy(Math.pow(10,c)).toFixed(4),l=new D.a(l).dividedBy(Math.pow(10,c)).toFixed(4),i=new D.a(i).dividedBy(Math.pow(10,n)).toFixed(4),d.dataOrders={release:g,earned:b,amount:i,isExist:s,leaderAddress:u,receiveProfit:l,time:p,user:m},d.groupFinishTimeFetch(),a.clear(),e.next=41;break;case 37:e.prev=37,e.t0=e["catch"](1),a.clear(),t.$errorformat(e.t0);case 41:case"end":return e.stop()}}),e,null,[[1,37]])})));function r(t){return e.apply(this,arguments)}return r}(),getRootAddress:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.handleContract.methods.rootAddress().call({from:d.address});case 3:if(r=e.sent,r){e.next=7;break}return e.abrupt("return",Object($["a"])(o("index.頂點未設置")));case 7:d.address,d.rooterAddress=r,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),t.$errorformat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));function r(){return e.apply(this,arguments)}return r}(),inheritHandle:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d.btnInherit.loading=!0,e.prev=2,e.next=5,d.handleContract.methods.redeem().estimateGas({from:d.address});case 5:return e.sent,e.next=9,d.handleContract.methods.redeem().send({from:d.address});case 9:d.btnInherit.loading=!1,Object($["a"])({message:o("index.Success"),onClose:function(){n.replace({name:"Idob"})}}),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](2),d.btnInherit.loading=!1,t.$errorformat(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));function r(){return e.apply(this,arguments)}return r}(),idoTypesFetch:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(r){var a,n,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=$["a"].loading({duration:0}),e.prev=1,e.next=4,d.handleContract.methods.idoTypes(r).call({from:d.address});case 4:return n=e.sent,e.next=7,d.backContract.methods.decimals().call();case 7:return c=e.sent,e.next=10,d.usdtContract.methods.decimals().call();case 10:i=e.sent,n._idoUsdtNumber=new D.a(n.idoUsdtNumber).dividedBy(Math.pow(10,i)).toFixed(),n._profit=new D.a(n.profit).dividedBy(Math.pow(10,c)).toFixed(),n.uint=r,0===r&&(n.name=o("index.普通節點")),1===r&&(n.name=o("index.超級節點")),d.idoTypeActions[r]=n,a.clear(),e.next=26;break;case 21:e.prev=21,e.t0=e["catch"](1),a.clear(),t.$errorformat(e.t0);case 26:case"end":return e.stop()}}),e,null,[[1,21]])})));function r(t){return e.apply(this,arguments)}return r}(),groupFinishTimeFetch:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(d.dataOrders.leaderAddress){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,d.handleContract.methods.groupFinishTime(d.dataOrders.leaderAddress).call();case 6:r=e.sent,Number(r),d.groupFinishTime=r,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](3),t.$errorformat(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));function r(){return e.apply(this,arguments)}return r}(),remainingGet:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=$["a"].loading({duration:0}),e.prev=1,e.next=4,d.handleContract.methods.idoTotalAmount().call({from:d.address});case 4:return a=e.sent,e.next=7,d.handleContract.methods.idoTotalGroup().call({from:d.address});case 7:n=e.sent,d.idoTotalAmount=a,d.idoTotalGroup=n,r.clear(),e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](1),r.clear(),t.$errorformat(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));function r(){return e.apply(this,arguments)}return r}()});d.address&&d.initContract(),Object(a["watch"])((function(){return d.address}),(function(e){e&&d.initContract()}));var i=Object(a["toRefs"])(d);return Object(C["a"])({},i)}};r("d84d");_.render=y,_.__scopeId="data-v-0708bc10";t["default"]=_}}]);
//# sourceMappingURL=chunk-403e2c86.5a5e4de3.js.map