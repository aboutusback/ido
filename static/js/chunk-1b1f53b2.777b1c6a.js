(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b1f53b2"],{"012f":function(e,t,n){"use strict";n("5dd6")},"2a26":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),i=Object(a["withScopeId"])("data-v-43c71f40");Object(a["pushScopeId"])("data-v-43c71f40");var s={class:"container partner"},r={class:"content"},u={class:"lists"},p={class:"key"},o={class:"value flex-item"},d=Object(a["createTextVNode"])(" U"),y={key:0,class:"noData"};Object(a["popScopeId"])();var l=i((function(e,t,n,i,l,c){var m=Object(a["resolveComponent"])("Header");return Object(a["openBlock"])(),Object(a["createBlock"])("div",s,[Object(a["createVNode"])(m,{title:e.t("index.我的團隊"),type:"back"},null,8,["title"]),Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",u,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.lists,(function(t,n){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"li",key:n},[Object(a["createVNode"])("div",p,Object(a["toDisplayString"])(t.user.substring(0,10))+"..."+Object(a["toDisplayString"])(t.user.substring(t.user.length-10,t.user.length)),1),Object(a["createVNode"])("div",o,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.t("index.支付")),1),Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(t.amount),1),d])])})),128)),e.noData?(Object(a["openBlock"])(),Object(a["createBlock"])("div",y,Object(a["toDisplayString"])(e.$t("暫無更多數據")),1)):Object(a["createCommentVNode"])("",!0)])])])})),c=n("5530"),m=n("1da1"),b=(n("96cf"),n("a9e3"),n("b680"),n("0418")),f=n("47e2"),T=n("5502"),v=n("01ea"),w=n("901e"),M=n.n(w),O=n("722f"),h=n("d835"),k=n("d399");k["a"].allowMultiple();var j={components:{Header:b["a"]},setup:function(){var e=Object(a["getCurrentInstance"])(),t=e.proxy,n=Object(T["b"])(),i=Object(f["a"])(),s=i.t,r=Object(a["reactive"])({t:s,address:Object(a["computed"])((function(){return n.state.accounts[0]})),web3:Object(a["computed"])((function(){return n.state.provider})),usdtContract:null,handleContract:null,backContract:null,lists:[],noData:!1,initContract:function(){r.usdtContract=new r.web3.eth.Contract(O,v["a"].usdtAddress),r.handleContract=new r.web3.eth.Contract(h,v["a"].HANDLE_a),r.backContract=new r.web3.eth.Contract(O,v["a"].backAddress),r.initData()},initData:function(){r.userOrderFetch()},userOrderFetch:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=k["a"].loading({duration:0}),e.prev=1,e.next=4,r.handleContract.methods.userOrder(r.address).call({from:r.address});case 4:if(a=e.sent,Number(a)){e.next=11;break}r.noData=!0,e.next=13;break;case 11:return e.next=13,r.ordersFetch(a);case 13:n.clear(),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](1),n.clear(),t.$errorformat(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));function n(){return e.apply(this,arguments)}return n}(),ordersFetch:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(n){var a,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=k["a"].loading({duration:0}),e.prev=1,e.next=4,r.handleContract.methods.orders(n).call({from:r.address});case 4:i=e.sent,s=i.leaderAddress,r.partnerFetch(s),a.clear(),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),a.clear(),t.$errorformat(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function n(t){return e.apply(this,arguments)}return n}(),partnerFetch:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(n){var a,i,s,u,p,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=k["a"].loading({duration:0}),e.prev=1,e.next=4,r.handleContract.methods.getGroupOrders(n).call();case 4:return i=e.sent,s=[],e.next=9,r.backContract.methods.decimals().call();case 9:if(u=e.sent,!i.length){e.next=27;break}p=0;case 12:if(!(p<i.length)){e.next=27;break}return e.prev=13,e.next=16,r.handleContract.methods.orders(i[p]).call({from:r.address});case 16:o=e.sent,o.amount=new M.a(o.amount).dividedBy(Math.pow(10,u)).toFixed(4),s.push(o),e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](13),t.$errorformat(e.t0);case 24:p++,e.next=12;break;case 27:r.lists=s,a.clear(),e.next=35;break;case 31:e.prev=31,e.t1=e["catch"](1),a.clear(),t.$errorformat(e.t1);case 35:case"end":return e.stop()}}),e,null,[[1,31],[13,21]])})));function n(t){return e.apply(this,arguments)}return n}()});r.address&&r.initContract(),Object(a["watch"])((function(){return r.address}),(function(e){e&&r.initContract()}));var u=Object(a["toRefs"])(r);return Object(c["a"])({},u)}};n("012f");j.render=l,j.__scopeId="data-v-43c71f40";t["default"]=j},"5dd6":function(e,t,n){},d835:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"inputs":[{"internalType":"uint256","name":"payAmount","type":"uint256"},{"internalType":"address","name":"leaderAddress","type":"address"},{"internalType":"uint256","name":"_idoType","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"payAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Invest","type":"event"},{"inputs":[{"internalType":"address","name":"_bIdoAddress","type":"address"}],"name":"openBIdo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_idoTotalGroup","type":"uint256"}],"name":"setIdoTotalGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"bool","name":"_isExist","type":"bool"},{"internalType":"uint256","name":"_idoUsdtNumber","type":"uint256"},{"internalType":"uint256","name":"_profit","type":"uint256"}],"name":"setIdoType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_liquifyAddress","type":"address"}],"name":"setLiquifyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_lock","type":"string"},{"internalType":"bool","name":"open","type":"bool"}],"name":"setLock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_unlockTime","type":"uint256"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takeIntroProfit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takeProfit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"aIdoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bIdoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"leaderAddress","type":"address"}],"name":"earnedGroup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"earnedIntro","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getGroupInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGroupNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"leaderAddress","type":"address"}],"name":"getGroupOrders","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"getOrderInfo","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"leaderAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"receiveProfit","type":"uint256"}],"internalType":"struct order","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"groupAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"groupFinishTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"groupIdoType","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"groupOrders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoTotalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoTotalGroup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoTotalProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoTotalUsdtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idoTypes","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"idoUsdtNumber","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"introRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"introSpot","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"introSpotReceive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"itemAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"itemUsdtRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"leaderList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquifyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"lock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"orderIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"orders","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"leaderAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"receiveProfit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receivedProfit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"redeemList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlockPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')}}]);
//# sourceMappingURL=chunk-1b1f53b2.777b1c6a.js.map