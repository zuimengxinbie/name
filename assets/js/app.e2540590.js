(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)o=r[u],i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"2edb":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v("order1")])])}],n=(s("cadf"),s("551c"),s("097d"),{created:function(){var t=this.$route.query.index;console.log(t)}}),o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"37f9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v("index（首页）")]),s("router-link",{attrs:{to:{name:"detail"}}},[t._v("跳转")])],1)},i=[],n={},o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),i=(s("df49"),s("e7bd")),n=s("0c29"),o=s("cd5d"),r=s("6f24"),c=s("2696"),l=s("7c8a"),d=s("ae0c"),u=s("47fe"),m=s("1cf7"),p=s("7add"),v=s("84d6"),h=s("d2c1"),g=s("291f"),f=s("7ced"),_=s("09ad"),b=s("81c3"),x=s("6fe1"),C=s("a801"),y=s("031d"),M=s("63b4"),w=s("9173"),k=s("8344"),T=s("664d"),$=s("0124"),O=s("9736"),L=s("1cc1"),P=s("e231"),S=s("aea1"),E=s("5f4e"),I=s("0679"),j=s("2799"),z=s("bdd9"),A=s("a2d2"),B=s("ba90"),G=s("36b6"),N=s("0f85");a["a"].use(i["a"]),a["a"].use(n["a"]),a["a"].use(o["a"]),a["a"].use(r["a"]),a["a"].use(c["a"]),a["a"].use(l["a"]),a["a"].use(d["a"]),a["a"].use(u["a"]),a["a"].use(m["a"]),a["a"].use(p["a"]),a["a"].use(v["a"]),a["a"].use(h["a"]),a["a"].use(g["a"]),a["a"].use(f["a"]),a["a"].use(_["a"]),a["a"].use(b["a"]),a["a"].use(x["a"]),a["a"].use(C["a"]),a["a"].use(y["a"]),a["a"].use(M["a"]),a["a"].use(w["a"]),a["a"].use(k["a"]),a["a"].use(T["a"]),a["a"].use($["a"]),a["a"].use(O["a"]),a["a"].use(L["a"]),a["a"].use(P["a"]),a["a"].use(S["a"]),a["a"].use(E["a"]),a["a"].use(I["a"]),a["a"].use(j["a"]),a["a"].use(z["a"]),a["a"].use(A["a"]),a["a"].use(B["a"]),a["a"].use(G["a"]),a["a"].use(N["a"]);var q=s("d847"),D=s.n(q),U=s("795b"),H=s.n(U),F=s("bc3a"),R=s.n(F),W={baseURL:"https://thl.lecuntao.com/index.php/minapi",timeout:6e4},J=R.a.create(W);J.interceptors.request.use(function(t){return t},function(t){return H.a.reject(t)}),J.interceptors.response.use(function(t){return t},function(t){return H.a.reject(t)}),Plugin.install=function(t,e){t.axios=J,window.axios=J,D()(t.prototype,{axios:{get:function(){return J}},$axios:{get:function(){return J}}})},a["a"].use(Plugin);Plugin;var V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},K=[],Q=(s("034f"),s("2877")),Y={},Z=Object(Q["a"])(Y,V,K,!1,null,null,null),X=Z.exports,tt=s("8c4f");s("37f9"),s("7be8"),s("9522"),s("6b51"),s("dc3f"),s("ff23"),s("63cc"),s("f168"),s("2edb"),s("d33a"),s("7d28");a["a"].use(tt["a"]);var et=new tt["a"]({routes:[{path:"/",name:"index",component:function(){return Promise.resolve().then(s.bind(null,"37f9"))}},{path:"/detail",name:"detail",component:function(){return Promise.resolve().then(s.bind(null,"7be8"))}},{path:"/cart",name:"cart",component:function(){return Promise.resolve().then(s.bind(null,"9522"))}},{path:"/confirm",name:"confirm",component:function(){return Promise.resolve().then(s.bind(null,"6b51"))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(s.bind(null,"dc3f"))}},{path:"/personal",name:"personal",component:function(){return Promise.resolve().then(s.bind(null,"ff23"))}},{path:"/personal2",name:"personal2",component:function(){return Promise.resolve().then(s.bind(null,"63cc"))}},{path:"/coupon",name:"coupon",component:function(){return Promise.resolve().then(s.bind(null,"d33a"))}},{path:"/order1",name:"order1",component:function(){return Promise.resolve().then(s.bind(null,"2edb"))}},{path:"/address",name:"address",component:function(){return Promise.resolve().then(s.bind(null,"f168"))}},{path:"/lianxi",name:"lianxi",component:function(){return Promise.resolve().then(s.bind(null,"7d28"))}}]});(function(t,e){var s=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",i=function(){var t=s.clientWidth;t&&(s.style.fontSize=t>=750?"100px":t/750*100+"px")};t.addEventListener&&(e.addEventListener(a,i,!1),i())})(document,window);var st={errcode:40029,errmsg:"invalid code, hints: [ req_id: OeIAV8yFe-rlSj8 ]"},at={avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/VPpxxrWBKOHeAdaUobvUicArAPP3ttaAicVwP1MP1WicTBb3Jhevic10lU5go3wauGUMCKPthmSfxiat7vkm1wtWWSw/132",city:"Changzhi",country:"China",gender:1,language:"zh_CN",nickName:"浮浅 Superficial°",province:"Shanxi"},it=JSON.parse(localStorage.getItem("userMsg")),nt=localStorage.getItem("role"),ot={store_id:241,store_sn:"00000241",store_name:"太原小店区真武路汇泰丽城",store_face:"/uploads/store/93aebe74455e8d6886315e3f919c0f2f.jpg",fen:"11",buy:"37",province:"山西省",city:"太原市",area:"小店区",area_desc:"小店区真武路与正阳街交叉口向东50米汇泰丽城二号楼二单元17层1701号",server_time:1550453433,add_phone:"18635101203",supply_phone:"13546444694"},rt="https://thl.lecuntao.com";function ct(){this.shopMsg=null,this.userMsg=null}var lt,dt,ut={session:st,userInfo:at,userMsg:it,shopMsg:ot,role:nt,config:rt,clear:ct},mt=ut,pt=Object(Q["a"])(mt,lt,dt,!1,null,null,null),vt=pt.exports,ht=s("7212"),gt=s.n(ht);s("dfa4");a["a"].config.productionTip=!1,a["a"].prototype.GLOBAL=vt,a["a"].use(gt.a),new a["a"]({router:et,render:function(t){return t(X)}}).$mount("#app")},"5d0c":function(t,e,s){"use strict";var a=s("8d8d"),i=s.n(a);i.a},"615a":function(t,e,s){"use strict";var a=s("78be"),i=s.n(a);i.a},"63cc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v("personal2")])])}],n=(s("cadf"),s("551c"),s("097d"),{}),o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"64a9":function(t,e,s){},"6b51":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v("confirm")])])}],n=(s("cadf"),s("551c"),s("097d"),{created:function(){var t=this.$route.query.type;console.log(t)}}),o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"78be":function(t,e,s){},"7be8":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainc"},[s("div",{staticClass:"choice-content"},[t.nozhibo?s("span",{staticClass:"choice-item",class:[1==t.index?"active":""],attrs:{"data-index":"1"},on:{click:t.choiceItem}},[t._v("直采直播")]):t._e(),s("span",{staticClass:"choice-item",class:[2==t.index?"active":""],attrs:{"data-index":"2"},on:{click:t.choiceItem}},[t._v("基本信息")]),s("span",{staticClass:"choice-item",class:[3==t.index?"active":""],attrs:{"data-index":"3"},on:{click:t.choiceItem}},[t._v("购买记录")])]),t.nozhibo&&1==t.index?s("div",{staticClass:"details-item detail-color"},[t.goodsMsg?s("div",{staticClass:"goods-zb"},[s("img",{staticClass:"goodsimg",attrs:{src:t.config+t.goodsMsg.banner}}),s("div",{staticClass:"goods-text"},[s("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsMsg.goods_name))]),s("div",{staticClass:"claim-time"},[t._v("提货时间："+t._s(t.takeTime))]),s("div",{staticClass:"goods-price"},[s("span",{staticClass:"color-icon"},[t._v("￥")]),t._v(t._s(t.goodsMsg.shop_price)+"\n                    "),s("span",{staticClass:"s-text"},[t._v("￥"+t._s(t.goodsMsg.predict_price))])])]),s("button",{staticClass:"buy-goods",attrs:{"data-type":"1","data-url":t.nums},on:{click:t.viewTap}},[t._v("立即购买")])]):t._e(),t.goodsMsg?s("div",{staticClass:"buy-msg"},[t._v("目前共\n            "),s("span",{staticClass:"buy-color"},[t._v(t._s(t.goodsMsg.client_num))]),t._v("人参与购买，商品共销售"+t._s(t.goodsMsg.sale)+"份\n        ")]):t._e(),t._l(t.zbList,function(e){return t.zbList?s("div",{staticClass:"zb-item"},[s("div",{staticClass:"zb-time"},[t._v(t._s(e.create_time))]),s("div",{staticClass:"zb-text"},[t._v(t._s(e.content))]),s("div",{staticClass:"zb-img-content"},t._l(e.images,function(e){return s("a",{attrs:{target:"_blank",href:t.config+e}},[s("img",{staticClass:"zb-img-item",attrs:{"data-index":"0","data-key":"0",src:t.config+e}})])}),0),s("span",{staticClass:"praise-btn",class:["false"!=e.zan?"active":""],attrs:{"data-index":0},on:{click:t.likeFn}},[t._v("赞")]),s("div",{staticClass:"praise-content"},[s("div",{staticClass:"praise-people"},[s("span",{staticClass:"icon"}),t._l(e.user,function(e,a){return s("span",{staticClass:"praise-text"},[t._v("\n                          "+t._s(0==a?e.nickname:","+e.nickname)+"\n                    ")])})],2)])]):t._e()}),s("div",{staticClass:"look-details",attrs:{"data-index":"2"},on:{click:t.choiceItem}},[t._v("-点击查看商品详情-")])],2):t._e(),2==t.index?s("div",{staticClass:"details-item"},[s("div",{staticClass:"lunbo"},[s("div",{staticClass:"d-picture"},[s("div",{staticClass:"swiper-container"},[t.goodsMsg?s("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOption}},[t._l(t.goodsMsg.images,function(e){return s("swiper-slide",{staticClass:"swiper-slide"},[s("img",{staticClass:"swiper-img",attrs:{src:t.config+e.url,alt:""}})])}),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1),s("div",{staticClass:"gohome-page",on:{click:t.backHome}}),s("div",{staticClass:"gopers-page",attrs:{"data-url":"personal"},on:{click:t.viewTap}})])]),t.goodsMsg?s("div",{staticClass:"goodsMsg-tip1"},[s("div",{staticClass:"left-msg"},[s("span",{staticClass:"rmb-icon"},[t._v("￥")]),s("span",{staticClass:"price"},[t._v(t._s(t.goodsMsg.shop_price))]),s("span",{staticClass:"s-text"},[t._v("￥"+t._s(t.goodsMsg.predict_price))])]),s("div",{staticClass:"right-msg"},[s("span",{staticClass:"r-msg-text"},[t._v(t._s(t.goodsMsg.die?"已结束":t.goodsMsg.sale_time-t.timenum>t.serverTime?"距优选开始还剩":"距优选结束还剩"))]),s("span",{staticClass:"r-msg-time"},[t._v(t._s(t.goodsMsg.die?"00:00:00":t.intervalTime))])])]):t._e(),t.goodsMsg?s("div",{staticClass:"goodsMsg-tip2"},[s("div",{staticClass:"goodsTip-name"},[t._v(t._s(t.goodsMsg.goods_name))]),s("div",{staticClass:"follow-msg"},[t._v(t._s(t.goodsMsg.goods_explain)+"\n                "),s("span",{staticClass:"text"},[t._v("关注人数："+t._s(t.goodsMsg.click))])])]):t._e(),t.goodsMsg?s("div",{staticClass:"tip-time tip-top"},[t._v("开团时间："+t._s(t.saleTime)+"\n            "),s("div",{staticClass:"right-tip"},[t._v("已售\n                "),s("span",{staticClass:"text"},[t._v(t._s(t.goodsMsg.sale))]),t._v("份"+t._s(999999999==t.goodsMsg.stock?"":"/限量"+t.goodsMsg.stock+"份")+"\n            ")])]):t._e(),s("div",{staticClass:"tip-time tip-bottom"},[t._v("提货时间："+t._s(t.takeTime))]),t.goodsMsg?s("div",{staticClass:"choice-num"},[s("span",{staticClass:"left-num"},[t._v("数量")]),s("div",{staticClass:"num-content"},[s("button",{staticClass:"minus",class:[1==t.nums?"active":""],attrs:{disabled:t.nums<=1,"data-num":"-1"},on:{click:t.changeNum}},[t._v("-\n                ")]),s("span",{staticClass:"nums"},[t._v(t._s(t.nums))]),s("button",{staticClass:"add",class:[t.nums>=t.goodsMsg.max?"active":""],attrs:{disabled:t.nums>=t.goodsMsg.max,"data-num":"1"},on:{click:t.changeNum}},[t._v("+\n                ")])])]):t._e(),t.goodsMsg?s("div",{staticClass:"goods-details1"},[t._m(0),s("div",{staticClass:"table-content"},[s("div",{staticClass:"table-tr"},[s("div",{staticClass:"table-td td-1"},[t._v("供应商：")]),s("div",{staticClass:"table-td td-2"},[t._v(t._s(t.goodsMsg.company))])]),s("div",{staticClass:"table-tr"},[s("div",{staticClass:"table-td td-1"},[t._v("品牌：")]),s("div",{staticClass:"table-td td-2"},[t._v(t._s(t.goodsMsg.brand))])]),s("div",{staticClass:"table-tr"},[s("div",{staticClass:"table-td td-1"},[t._v("规格：")]),s("div",{staticClass:"table-td td-2"},[t._v(t._s(t.goodsMsg.standard))])]),s("div",{staticClass:"table-tr"},[s("div",{staticClass:"table-td td-1"},[t._v("产地：")]),s("div",{staticClass:"table-td td-2"},[t._v(t._s(t.goodsMsg.place))])])])]):t._e(),t.goodsMsg?s("div",{staticClass:"goods-details2"},[t._m(1),s("div",{staticClass:"details-text"},[s("div",{domProps:{innerHTML:t._s(t.goodsMsg.desc)}})])]):t._e(),t._m(2),t._m(3)]):t._e(),3==t.index?s("div",{staticClass:"details-item"},[1==t.buyPeople.length?s("div",{staticClass:"cart-empty"},[t._m(4),s("div",{staticClass:"empty-text"},[t._v("暂没有购买记录")]),s("div",{staticClass:"empty-look",attrs:{"data-index":"2"},on:{click:t.choiceItem}},[t._v("-点击查看商品详情-")])]):t._e(),t.goodsMsg?s("div",{staticClass:"buy-people-content"},[s("div",{staticClass:"buy-tips"},[t._v("目前共\n                "),s("span",{staticClass:"text"},[t._v(t._s(t.goodsMsg.client_num))]),t._v("人参与购买，商品共销售"+t._s(t.goodsMsg.sale)+"份\n            ")]),t._l(t.buyPeople,function(e){return t.buyPeople?s("div",{staticClass:"people-item"},[s("div",{staticClass:"flex-item"},[s("img",{staticClass:"user-head",attrs:{src:e.face||t.config+"/youxuan/icons/logo.png",alt:""}}),s("span",{staticClass:"user-name"},[t._v(t._s(e.nickname))])]),s("div",{staticClass:"flex-item middle"},[s("span",{staticClass:"text"},[t._v(t._s(e.buy_num))]),t._v("份\n                ")]),s("div",{staticClass:"flex-item right"},[t._v(t._s(e.pay_time))])]):t._e()})],2):t._e()]):t._e(),t.goodsMsg?s("div",{staticClass:"sellOut-tip",class:[t.isSellOut||t.goodsMsg.die?"disabled":""]},[t._v("\n        "+t._s(t.goodsMsg.die?"活动已结束":"该商品已售罄")+"\n    ")]):t._e(),t.goodsMsg?s("div",{staticClass:"btm-msg"},[s("div",{staticClass:"cart-msg icon-cart",attrs:{"data-url":"cart"},on:{click:t.viewTap}},[t.cartNum>0?s("span",{staticClass:"num-tip"},[t._v(t._s(t.cartNum))]):t._e()]),s("button",{staticClass:"joinCart-btn",class:[t.isSellOut||t.goodsMsg.die?"disabled":""],attrs:{"data-type":"2"},on:{click:t.viewTap}},[t._v("加入购物车\n        ")]),s("button",{staticClass:"buy-btn",class:[t.isSellOut||t.goodsMsg.die?"disabled":""],attrs:{"data-type":"1","data-url":t.nums},on:{click:t.viewTap}},[t._v("立即购买\n        ")])]):t._e()])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-title"},[s("span",{staticClass:"title-icon"},[t._v("商品详细")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-title"},[s("span",{staticClass:"title-icon"},[t._v("商品详细")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-step"},[s("div",{staticClass:"step-title"},[t._v("订购流程")]),s("div",{staticClass:"step-content"},[s("div",{staticClass:"step-text"},[t._v("在线付款")]),s("div",{staticClass:"text"},[t._v("提交订单，微信支付付款")]),s("div",{staticClass:"step-text"},[t._v("等待收货")]),s("div",{staticClass:"text"},[t._v("成功付款后，我们将及时安排发货")]),s("div",{staticClass:"step-text"},[t._v("门店提货")]),s("div",{staticClass:"text"},[t._v("发货后，在发货时间到所选门店自提")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-tip"},[s("img",{staticClass:"fdd-img",attrs:{src:"https://thl.lecuntao.com/youxuan/icons/fdd-img.png"}}),s("div",{staticClass:"tip-text"},[t._v("省钱拼好货 就上太好乐")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"empty-img"},[s("img",{staticClass:"shoppingImg",attrs:{src:"https://thl.lecuntao.com/youxuan/icons/shopping.png"}})])}],n=s("e814"),o=s.n(n),r=(s("a481"),s("c5f6"),s("ac6a"),s("f4992")),c=s.n(r),l=function(t){var e=Date.parse(new Date),s=e-t,a=o()(s/864e5),i=o()(s/36e5),n=o()(s/6e4),r=o()(a/30),c=o()(r/12);return c?c+"年前":r?r+"个月前":a?a+"天前":i?i+"小时前":n?n+"分钟前":"刚刚"};s("3b2b");Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]<10?"0"+e[s]:e[s]:("00"+e[s]).substr((""+e[s]).length)));return t};var d=s("ec5c"),u={components:{SwiperSlide:d["a"]},name:"detail",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},autoplay:!0},config:this.GLOBAL.config,index:2,gid:"",shopid:"",keys:"",fddImg:"",shoppingImg:"",isSellOut:!1,cartNum:0,serverTime:Math.floor((new Date).getTime()/1e3),serverTime_h:"",timenum:0,intervalTime:"--:--:--",saleTime:"",takeTime:"",nums:1,nozhibo:!1,zbList:[],goodsMsg:null,intTime:0,buyPeople:[]}},created:function(){this.getGoods()},mounted:function(){},methods:{viewTap:function(t){var e=this,s=t.target.dataset.url,a=t.target.dataset.type,i=this.GLOBAL.role,n=this.GLOBAL.userMsg;if(console.log(i,n),!i||!n||1==i&&!n.uid||2==i&&!n.store_id)return this.toast=this.$createToast({txt:"请登录",time:600,type:"txt"}),this.toast.show(),void setTimeout(function(){e.$router.push({name:"login"})},600);if(a){var o=this.goodsMsg;if(o.die){var r=o.sale_time-this.timenum>this.serverTime?"优选还未开始":"优选已结束";return this.toast=this.$createToast({txt:r,time:1e3,type:"txt"}),void this.toast.show()}if(o.start_sale_time>this.serverTime_h)return this.toast=this.$createToast({txt:o.start_sale_time+"点 开售哦",time:1e3,type:"txt"}),void this.toast.show();if(this.isSellOut)return this.toast=this.$createToast({txt:"该商品已售罄",time:1e3,type:"txt"}),void this.toast.show();if(1==a){if(this.nums>o.people_max)return this.toast=this.$createToast({txt:"每人限购 "+o.people_max+"份",time:1e3,type:"txt"}),void this.toast.show();var l=[{copy_id:o.copy_id,id:o.id,img:o.banner,goods_name:o.goods_name,standard:o.standard,take_time:new Date(1e3*o.take_time).format("MM月dd日"),shop_price:o.shop_price,predict_price:o.predict_price,max:o.max}];localStorage.setItem("order",c()(l)),this.$router.push({path:"confirm",query:{type:1,num:s}})}else if(2==a){if(o.cart_num>=o.stock)return this.toast=this.$createToast({txt:"库存只剩"+o.stock+"份了",time:1e3,type:"txt"}),void this.toast.show();if(this.cartNum+this.nums>o.people_max)return this.toast=this.$createToast({txt:"每人限购 "+o.people_max+"份",time:1e3,type:"txt"}),void this.toast.show();var d=this.nums-0,u={copy_id:o.copy_id,num:d},m=this.$createToast({time:1e4});m.show(),this.axios.get("/cart/addcart",{params:{role:i,cart:u,access_token:n.access_token}}).then(function(t){var s=t.data;if(m.hide(),0==s.error_code){var a=e.cartNum-0+d,i={cartNum:a,keys:e.keys?e.keys:"-1"};localStorage.setItem("refresh",2),localStorage.setItem("cartNum",c()(i)),e.cartNum=a,e.mesg=e.$createToast({txt:"成功添入购物车",time:1e3,type:"txt"}),e.mesg.show()}else e.info=e.$createToast({txt:"添加失败",type:"txt"}),e.info.show()}).catch(function(t){e.toast=e.$createToast({txt:" 请求错误：addcart",type:"txt"}),e.toast.show()})}}else-1!=s.indexOf("personal")&&2==i?this.$router.push({name:"personal2"}):this.$router.push({name:s})},backHome:function(){this.$router.push({name:"index"})},choiceItem:function(t){var e=t.target.dataset.index;e!=this.index&&(this.index=e,3==e&&0==this.buyPeople.length&&this.getBuyPeople())},changeNum:function(t){var e=Number(t.target.dataset.num),s=this.nums+e;s==this.goodsMsg.max&&(this.toast=this.$createToast({txt:"商品库存 "+s+"件",time:1e3,type:"txt"}),this.toast.show()),this.nums=s},getGoods:function(){var t=this,e=this.GLOBAL.role,s=this.GLOBAL.userMsg,a=this.$createToast({time:1e4});a.show(),this.axios.get("/goods/goodsDetail",{params:{role:e||"",access_token:s?s.access_token:"",id:5857,store:34}}).then(function(e){var s=e.data;if(a.hide(),0==s.error_code){var i=s.data,n=[];if(i.tv.length>0){t.nozhibo=!0,t.index=1,n=i.tv;for(var o=n.length,r=0;r<o;r++)n[r].create_time=l(1e3*n[r].create_time),n[r].user.length>0&&!n[r].user[0].face&&n[r].user.shift(),n[r].store&&n[r].store.length>0&&(n[r].user=n[r].user.concat(n[r].store))}i.desc=i.desc.replace(/<img/gi,'<img class="html-img"'),i.desc=i.desc.replace(/src="/gi,'src="'+t.config),i.desc=i.desc.replace(/<p/gi,'<p class="html-p"'),i.max=999999999==i.stock?999999999:i.stock-i.sale,t.serverTime=i.server_time,t.saleTime=new Date(1e3*i.putaway_time).format("MM月dd日 hh:mm"),t.takeTime=new Date(1e3*i.take_time).format("MM月dd日 hh:mm"),t.goodsMsg=i,t.zbList=n,t.cartNum=i.cart_num||0,t.isSellOut=i.max<=0,t.setTime()}else t.info=t.$createToast({txt:"查询失败",type:"txt"}),t.info.show()}).catch(function(e){t.toast=t.$createToast({txt:" 数据请求错误",type:"txt"}),t.toast.show()})},getBuyPeople:function(){var t=this,e=this.$createToast({time:1e4});e.show(),this.axios.get("/goods/goodsclient",{params:{id:4800,store:411}}).then(function(s){var a=s.data;if(e.hide(),0==a.error_code){for(var i=a.data,n=0,o=i.length;n<o;n++)i[n].pay_time=new Date(1e3*i[n].pay_time).format("yyyy-MM-dd hh:mm:ss");t.buyPeople=i}else t.info=t.$createToast({txt:"商品ID不能为空",type:"txt",time:1e3}),t.info.show()}).catch(function(e){t.toast=t.$createToast({txt:" 数据请求错误",type:"txt"}),t.toast.show()})},setTime:function(){var t=this;if(this.timeFn(),this.goodsMsg.die)return this.goodsMsg.die=!0,this.toast=this.$createToast({txt:"活动已结束",time:1e3,type:"txt"}),void this.toast.show();var e=setInterval(function(){t.timeFn()},1e3);this.intTime=e},timeFn:function(){var t=this.timenum,e=this.goodsMsg.sale_time-this.serverTime-t,s=new Date(1e3*(this.serverTime-0+t)).format("h");if(e<=0&&(e=this.goodsMsg.end_sale_time-this.serverTime-t),e<=0)return clearInterval(this.intTime),this.goodsMsg.die=!0,void(this.intervalTime="00:00:00");var a=o()(e/3600),i=o()(e%3600/60),n=o()(e%60);this.serverTime_h=s,this.timenum=t+1,this.intervalTime=(a<10?"0"+a:a)+":"+(i<10?"0"+i:i)+":"+(n<10?"0"+n:n)},likeFn:function(t){var e=this,s=t.target.dataset.index,a=this.zbList[s],i=this.GLOBAL.userMsg,n=this.GLOBAL.userInfo;if(!i)return this.toast=this.$createToast({txt:"请登录",time:600,type:"txt"}),this.toast.show(),void setTimeout(function(){e.$router.push({name:"login"})},600);if("true"!=a.zan){var o=this.$createToast({time:1e4});o.show(),this.axios.get("/goods/clicktv",{params:{role:1,access_token:"d2b9746aa13cfc81e2c75cec378ba405",id:a.info_id}}).then(function(t){var a=t.data,i=a.error_msg;if(o.hide(),0==a.error_code){var r=e.zbList;r[s].zan="true",r[s].user.push({nickname:n.nickName}),e.zbList=r;var c=e.$createToast({txt:"点赞成功",type:"correct"});c.show()}else{var l=e.$createToast({txt:i,type:"correct"});l.show()}}).catch(function(t){e.toast=e.$createToast({txt:"请求错误：clicktv",type:"txt"}),e.toast.show()})}}},computed:{}},m=u,p=(s("5d0c"),s("2877")),v=Object(p["a"])(m,a,i,!1,null,"a59dd8ae",null);e["default"]=v.exports},"7d28":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("cube-button",{on:{click:t.showAlert}},[t._v("Dialog - alert")])],1)},i=[],n={methods:{showAlert:function(){this.$createDialog({type:"confirm",title:"退出登录",content:"确认退出当前账号？"}).show()}}},o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"8d8d":function(t,e,s){},9522:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v("cart")])])}],n=(s("cadf"),s("551c"),s("097d"),{}),o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},d33a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v("coupon")])])}],n=(s("cadf"),s("551c"),s("097d"),{}),o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},dc3f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v("login")]),s("div",{on:{click:t.login}},[t._v("登陆")])])},i=[],n=s("f4992"),o=s.n(n),r={methods:{login:function(){var t=this,e={uid:22,username:null,mobile:"18135515998",password:null,openid:"o6Tip5ZasBj8qV-lC64AUN9AnYrU",nickname:"浮浅 Superficial°",face:"https://wx.qlogo.cn/mmopen/vi_32/4RpI6twXUMZAPia2MZmYxUP83UuPzCDqsNE0icCQzs0ibT023vxPshOHQbTuWOpIdtzgJwibbG9lSTcSKGbC9NEOTQ/132",role:"customer",create_time:"2018-11-24 09:01:12",last_time:1550451279,store_id:8,com_id:1,remarks:null,ban:0,is_login:"1",area_id:null,access_token:"d2b9746aa13cfc81e2c75cec378ba405"},s={store_id:241,store_sn:"00000241",store_name:"太原小店区真武路汇泰丽城",store_face:"/uploads/store/93aebe74455e8d6886315e3f919c0f2f.jpg",fen:"11",buy:"37",province:"山西省",city:"太原市",area:"小店区",area_desc:"小店区真武路与正阳街交叉口向东50米汇泰丽城二号楼二单元17层1701号",server_time:1550453433,add_phone:"18635101203",supply_phone:"13546444694"},a=1,i=1;this.GLOBAL.shopMsg=s,this.GLOBAL.userMsg=e,this.GLOBAL.role=a,localStorage.setItem("userMsg",o()(e)),localStorage.setItem("role",a),localStorage.setItem("refresh",i),this.toast=this.$createToast({txt:"已登录",time:1e3,type:"txt"}),this.toast.show(),setTimeout(function(){t.$router.push({name:"index"})},1e3)}}},c=r,l=s("2877"),d=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=d.exports},f168:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[t._v("address")])])}],n=(s("cadf"),s("551c"),s("097d"),{}),o=n,r=s("2877"),c=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},ff23:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainc"},[s("div",{staticClass:"content-item"},[s("div",{staticClass:"user-content"},[s("img",{staticClass:"user-head",attrs:{src:t.userMsg.face}}),s("div",{staticClass:"user-msg"},[s("div",{staticClass:"user-name"},[t._v(t._s(t.userMsg.nickname||""))]),s("div",{staticClass:"user-mobile"},[t._v(t._s(t.userMsg.mobile||""))])]),s("span",{staticClass:"qricon",attrs:{"data-url":"/uploads/store/code-50.jpg"},on:{click:t.predivImg}})]),s("div",{staticClass:"personal-list"},[s("router-link",{staticClass:"personal-item order-all",attrs:{tag:"div",to:{path:"order1",query:{index:"1"}}}},[t._v("\n                全部订单\n            ")]),s("router-link",{staticClass:"personal-item order1",attrs:{tag:"div",to:{path:"order1",query:{index:2}}}},[t._v("未付款\n            ")]),s("router-link",{staticClass:"personal-item order2",attrs:{tag:"div",to:{path:"order1",query:{index:3}}}},[t._v("待提货\n            ")]),s("router-link",{staticClass:"personal-item order3",attrs:{tag:"div",to:{path:"order1",query:{index:4}}}},[t._v("已提货\n            ")]),s("router-link",{staticClass:"personal-item address",attrs:{tag:"div",to:{name:"address"}}},[t._v("我的自提点 "),s("span",{staticClass:"right-text"},[t._v(t._s(t.shopMsg.store_name))])]),s("router-link",{staticClass:"personal-item discount",attrs:{tag:"div",to:{name:"coupon"}}},[t._v("我的优惠券")])],1),s("div",{staticClass:"btns-content"},[s("button",{staticClass:"go-shopping",on:{click:t.backHome}},[t._v("去购物")]),s("button",{staticClass:"quit-btn",on:{click:t.logOut}},[t._v("退出当前账号")])])])])},i=[],n={name:"personal",data:function(){return{config:this.GLOBAL.config,qrcode:"",userMsg:{},shopMsg:{}}},created:function(){this.userMsg=this.GLOBAL.userMsg,this.shopMsg=this.GLOBAL.shopMsg},mounted:function(){},methods:{viewTap:function(t){var e=t.target.dataset.url;this.$router.push({name:e})},backHome:function(){localStorage.setItem("refresh",1),this.$router.push({name:"index"})},predivImg:function(t){var e=this.config+t.target.dataset.url;window.open(e)},logOut:function(){var t=this;this.$createDialog({type:"confirm",title:"退出登录",content:"确认退出当前账号？",onConfirm:function(){t.GLOBAL.clear(),console.log(t.GLOBAL.userMsg,t.GLOBAL.shopMsg),localStorage.removeItem("userMsg"),localStorage.removeItem("role"),localStorage.setItem("refresh",1),t.toast=t.$createToast({txt:"已退出",time:1e3,type:"txt"}),t.toast.show(),setTimeout(function(){t.$router.push({name:"index"})},1e3)},onCancel:function(){console.log("点击了取消")}}).show()}},computed:{}},o=n,r=(s("615a"),s("2877")),c=Object(r["a"])(o,a,i,!1,null,"41895080",null);e["default"]=c.exports}});
//# sourceMappingURL=app.e2540590.js.map