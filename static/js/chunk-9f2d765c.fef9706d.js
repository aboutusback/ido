(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f2d765c"],{"2a26":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["withScopeId"])("data-v-dc26c52c");Object(a["pushScopeId"])("data-v-dc26c52c");var c={class:"container partner"},o={class:"content"},s={class:"lists"},d={class:"key"},i={class:"value flex-item"},u=Object(a["createTextVNode"])(" U"),l={key:0,class:"noData"};Object(a["popScopeId"])();var b=n((function(e,t,r,n,b,p){var h=Object(a["resolveComponent"])("Header");return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])(h,{title:e.t("index.我的團隊"),type:"back"},null,8,["title"]),Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",s,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.lists,(function(t,r){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"li",key:r},[Object(a["createVNode"])("div",d,Object(a["toDisplayString"])(t.user.substring(0,10))+"..."+Object(a["toDisplayString"])(t.user.substring(t.user.length-10,t.user.length)),1),Object(a["createVNode"])("div",i,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.t("index.支付")),1),Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(t.amount),1),u])])})),128)),e.noData?(Object(a["openBlock"])(),Object(a["createBlock"])("div",l,Object(a["toDisplayString"])(e.$t("暫無更多數據")),1)):Object(a["createCommentVNode"])("",!0)])])])})),p=r("5530"),h=r("1da1"),O=(r("96cf"),r("a9e3"),r("b680"),r("0418")),f=r("47e2"),j=r("5502"),v=r("01ea"),m=r("901e"),k=r.n(m),w=r("722f"),x=r("d835"),g=r("d399");g["a"].allowMultiple();var C={components:{Header:O["a"]},setup:function(){var e=Object(a["getCurrentInstance"])(),t=e.proxy,r=Object(j["b"])(),n=Object(f["a"])(),c=n.t,o=Object(a["reactive"])({t:c,address:Object(a["computed"])((function(){return r.state.accounts[0]})),web3:Object(a["computed"])((function(){return r.state.provider})),usdtContract:null,handleContract:null,backContract:null,lists:[],noData:!1,initContract:function(){o.usdtContract=new o.web3.eth.Contract(w,v["a"].usdtAddress),o.handleContract=new o.web3.eth.Contract(x,v["a"].HANDLE_a),o.backContract=new o.web3.eth.Contract(w,v["a"].backAddress),o.initData()},initData:function(){o.userOrderFetch()},userOrderFetch:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=g["a"].loading({duration:0}),e.prev=1,e.next=4,o.handleContract.methods.userOrder(o.address).call({from:o.address});case 4:if(a=e.sent,Number(a)){e.next=11;break}o.noData=!0,e.next=13;break;case 11:return e.next=13,o.ordersFetch(a);case 13:r.clear(),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](1),r.clear(),t.$errorformat(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));function r(){return e.apply(this,arguments)}return r}(),ordersFetch:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(r){var a,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=g["a"].loading({duration:0}),e.prev=1,e.next=4,o.handleContract.methods.orders(r).call({from:o.address});case 4:n=e.sent,c=n.leaderAddress,o.partnerFetch(c),a.clear(),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),a.clear(),t.$errorformat(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function r(t){return e.apply(this,arguments)}return r}(),partnerFetch:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(r){var a,n,c,s,d,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=g["a"].loading({duration:0}),e.prev=1,e.next=4,o.handleContract.methods.getGroupOrders(r).call();case 4:return n=e.sent,c=[],e.next=9,o.backContract.methods.decimals().call();case 9:if(s=e.sent,!n.length){e.next=27;break}d=0;case 12:if(!(d<n.length)){e.next=27;break}return e.prev=13,e.next=16,o.handleContract.methods.orders(n[d]).call({from:o.address});case 16:i=e.sent,i.amount=new k.a(i.amount).dividedBy(Math.pow(10,s)).toFixed(4),c.push(i),e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](13),t.$errorformat(e.t0);case 24:d++,e.next=12;break;case 27:o.lists=c,a.clear(),e.next=35;break;case 31:e.prev=31,e.t1=e["catch"](1),a.clear(),t.$errorformat(e.t1);case 35:case"end":return e.stop()}}),e,null,[[1,31],[13,21]])})));function r(t){return e.apply(this,arguments)}return r}()});o.address&&o.initContract(),Object(a["watch"])((function(){return o.address}),(function(e){e&&o.initContract()}));var s=Object(a["toRefs"])(o);return Object(p["a"])({},s)}};r("dbe9");C.render=b,C.__scopeId="data-v-dc26c52c";t["default"]=C},dbe9:function(e,t,r){"use strict";r("e674")},e674:function(e,t,r){}}]);
//# sourceMappingURL=chunk-9f2d765c.fef9706d.js.map