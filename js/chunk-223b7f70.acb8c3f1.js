(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-223b7f70"],{"107c":function(e,t,n){var c=n("d039"),a=n("da84"),l=a.RegExp;e.exports=c((function(){var e=l("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var c=n("2ba4"),a=n("c65b"),l=n("e330"),r=n("d784"),o=n("44e7"),d=n("825a"),i=n("1d80"),s=n("4840"),u=n("8aa5"),b=n("50c4"),p=n("577e"),m=n("dc4a"),O=n("4dae"),j=n("14c3"),f=n("9263"),h=n("9f7f"),g=n("d039"),E=h.UNSUPPORTED_Y,v=4294967295,x=Math.min,N=[].push,V=l(/./.exec),k=l(N),y=l("".slice),D=!g((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var l=p(i(this)),r=void 0===n?v:n>>>0;if(0===r)return[];if(void 0===e)return[l];if(!o(e))return a(t,l,e,r);var d,s,u,b=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),j=0,h=new RegExp(e.source,m+"g");while(d=a(f,h,l)){if(s=h.lastIndex,s>j&&(k(b,y(l,j,d.index)),d.length>1&&d.index<l.length&&c(N,b,O(d,1)),u=d[0].length,j=s,b.length>=r))break;h.lastIndex===d.index&&h.lastIndex++}return j===l.length?!u&&V(h,"")||k(b,""):k(b,y(l,j)),b.length>r?O(b,0,r):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var c=i(this),r=void 0==t?void 0:m(t,e);return r?a(r,t,c,n):a(l,p(c),t,n)},function(e,c){var a=d(this),r=p(e),o=n(l,a,r,c,l!==t);if(o.done)return o.value;var i=s(a,RegExp),m=a.unicode,O=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(E?"g":"y"),f=new i(E?"^(?:"+a.source+")":a,O),h=void 0===c?v:c>>>0;if(0===h)return[];if(0===r.length)return null===j(f,r)?[r]:[];var g=0,N=0,V=[];while(N<r.length){f.lastIndex=E?0:N;var D,B=j(f,E?y(r,N):r);if(null===B||(D=x(b(f.lastIndex+(E?N:0)),r.length))===g)N=u(r,N,m);else{if(k(V,y(r,g,N)),V.length===h)return V;for(var S=1;S<=B.length-1;S++)if(k(V,B[S]),V.length===h)return V;N=g=D}}return k(V,y(r,g)),V}]}),!D,E)},"14c3":function(e,t,n){var c=n("da84"),a=n("c65b"),l=n("825a"),r=n("1626"),o=n("c6b6"),d=n("9263"),i=c.TypeError;e.exports=function(e,t){var n=e.exec;if(r(n)){var c=a(n,e,t);return null!==c&&l(c),c}if("RegExp"===o(e))return a(d,e,t);throw i("RegExp#exec called on incompatible receiver")}},"8aa5":function(e,t,n){"use strict";var c=n("6547").charAt;e.exports=function(e,t,n){return t+(n?c(e,t).length:1)}},9263:function(e,t,n){"use strict";var c=n("c65b"),a=n("e330"),l=n("577e"),r=n("ad6d"),o=n("9f7f"),d=n("5692"),i=n("7c73"),s=n("69f3").get,u=n("fce3"),b=n("107c"),p=d("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,O=m,j=a("".charAt),f=a("".indexOf),h=a("".replace),g=a("".slice),E=function(){var e=/a/,t=/b*/g;return c(m,e,"a"),c(m,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),v=o.BROKEN_CARET,x=void 0!==/()??/.exec("")[1],N=E||x||v||u||b;N&&(O=function(e){var t,n,a,o,d,u,b,N=this,V=s(N),k=l(e),y=V.raw;if(y)return y.lastIndex=N.lastIndex,t=c(O,y,k),N.lastIndex=y.lastIndex,t;var D=V.groups,B=v&&N.sticky,S=c(r,N),M=N.source,I=0,C=k;if(B&&(S=h(S,"y",""),-1===f(S,"g")&&(S+="g"),C=g(k,N.lastIndex),N.lastIndex>0&&(!N.multiline||N.multiline&&"\n"!==j(k,N.lastIndex-1))&&(M="(?: "+M+")",C=" "+C,I++),n=new RegExp("^(?:"+M+")",S)),x&&(n=new RegExp("^"+M+"$(?!\\s)",S)),E&&(a=N.lastIndex),o=c(m,B?n:N,C),B?o?(o.input=g(o.input,I),o[0]=g(o[0],I),o.index=N.lastIndex,N.lastIndex+=o[0].length):N.lastIndex=0:E&&o&&(N.lastIndex=N.global?o.index+o[0].length:a),x&&o&&o.length>1&&c(p,o[0],n,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(o[d]=void 0)})),o&&D)for(o.groups=u=i(null),d=0;d<D.length;d++)b=D[d],u[b[0]]=o[b[1]];return o}),e.exports=O},"9f7f":function(e,t,n){var c=n("d039"),a=n("da84"),l=a.RegExp,r=c((function(){var e=l("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),o=r||c((function(){return!l("a","y").sticky})),d=r||c((function(){var e=l("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:d,MISSED_STICKY:o,UNSUPPORTED_Y:r}},ac1f:function(e,t,n){"use strict";var c=n("23e7"),a=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var c=n("825a");e.exports=function(){var e=c(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var c=n("83ab"),a=n("5e77").EXISTS,l=n("e330"),r=n("9bf2").f,o=Function.prototype,d=l(o.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=l(i.exec),u="name";c&&!a&&r(o,u,{configurable:!0,get:function(){try{return s(i,d(this))[1]}catch(e){return""}}})},cb08:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={class:"container",style:{"margin-top":"150px"}},l={class:"table mt-4"},r=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",null,"購買時間"),Object(c["createElementVNode"])("th",null,"Email"),Object(c["createElementVNode"])("th",null,"購買款項"),Object(c["createElementVNode"])("th",null,"應付金額"),Object(c["createElementVNode"])("th",null,"是否付款"),Object(c["createElementVNode"])("th",null,"編輯")])],-1),o=["textContent"],d={class:"list-unstyled"},i={class:"text-right"},s={class:"form-check form-switch"},u=["id","onUpdate:modelValue","onChange"],b=["for"],p={key:0},m={key:1},O={class:"btn-group"},j=["onClick"],f=["onClick"];function h(e,t,n,h,g,E){var v=Object(c["resolveComponent"])("OrderModal"),x=Object(c["resolveComponent"])("DelModal"),N=Object(c["resolveComponent"])("Pagination");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("table",l,[r,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(g.orders,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:t},[g.orders.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:0,class:Object(c["normalizeClass"])({"text-secondary":!e.is_paid})},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(E.createDate(e)),1),Object(c["createElementVNode"])("td",null,[e.user?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:0,textContent:Object(c["toDisplayString"])(e.user.email)},null,8,o)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("ul",d,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.products,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:t},Object(c["toDisplayString"])(e.product.title)+" 數量："+Object(c["toDisplayString"])(e.qty)+" "+Object(c["toDisplayString"])(e.product.unit),1)})),128))])]),Object(c["createElementVNode"])("td",i,Object(c["toDisplayString"])(e.total),1),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",s,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return E.updatePaid(e)}},null,40,u),[[c["vModelCheckbox"],e.is_paid]]),Object(c["createElementVNode"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",p,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",m,"未付款"))],8,b)])]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(t){return E.openModal(e)}}," 檢視 ",8,j),Object(c["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(t){return E.openDelOrderModal(e)}}," 刪除 ",8,f)])])],2)):Object(c["createCommentVNode"])("",!0)],64)})),128))])]),Object(c["createVNode"])(v,{tmpOrder:g.tmpOrder,ref:"orderModal",onUpdate:E.updatePaid},null,8,["tmpOrder","onUpdate"]),Object(c["createVNode"])(x,{ref:"delModal",item:g.tmpOrder,onDelItem:E.delOrder},null,8,["item","onDelItem"]),Object(c["createVNode"])(N,{pages:g.pages,onEmitPages:E.getOrders},null,8,["pages","onEmitPages"])])}var g=n("5530"),E=(n("ac1f"),n("1276"),n("99af"),n("4dcd")),v=n("6ff1"),x=(n("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),N={class:"modal-dialog modal-xl",role:"document"},V={class:"modal-content border-0"},k=Object(c["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(c["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["createElementVNode"])("span",null,"訂單細節")]),Object(c["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},D={class:"row"},B={class:"col-md-4"},S=Object(c["createElementVNode"])("h3",null,"用戶資料",-1),M={class:"table"},I={key:0},C=Object(c["createElementVNode"])("th",{style:{width:"100px"}},"姓名",-1),w=Object(c["createElementVNode"])("th",null,"Email",-1),_=Object(c["createElementVNode"])("th",null,"電話",-1),R=Object(c["createElementVNode"])("th",null,"地址",-1),$={class:"col-md-8"},T=Object(c["createElementVNode"])("h3",null,"訂單細節",-1),P={class:"table"},U=Object(c["createElementVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),A=Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",null,"下單時間")],-1),F=Object(c["createElementVNode"])("th",null,"付款時間",-1),L={key:0},K={key:1},Y=Object(c["createElementVNode"])("th",null,"付款狀態",-1),q={key:0,class:"text-success"},J={key:1,class:"text-muted"},z=Object(c["createElementVNode"])("th",null,"總金額",-1),X=Object(c["createElementVNode"])("h3",null,"選購商品",-1),G={class:"table"},H=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr")],-1),Q={class:"text-end"},W={class:"d-flex justify-content-end"},Z={class:"form-check"},ee={class:"form-check-label",for:"flexCheckDefault"},te={key:0},ne={key:1},ce={class:"modal-footer"},ae=Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function le(e,t,n,a,l,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",x,[Object(c["createElementVNode"])("div",N,[Object(c["createElementVNode"])("div",V,[k,Object(c["createElementVNode"])("div",y,[Object(c["createElementVNode"])("div",D,[Object(c["createElementVNode"])("div",B,[S,Object(c["createElementVNode"])("table",M,[l.orderData.user?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tbody",I,[Object(c["createElementVNode"])("tr",null,[C,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.orderData.user.name),1)]),Object(c["createElementVNode"])("tr",null,[w,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.orderData.user.email),1)]),Object(c["createElementVNode"])("tr",null,[_,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.orderData.user.tel),1)]),Object(c["createElementVNode"])("tr",null,[R,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.orderData.user.address),1)])])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",$,[T,Object(c["createElementVNode"])("table",P,[Object(c["createElementVNode"])("tbody",null,[Object(c["createElementVNode"])("tr",null,[U,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.orderData.id),1)]),A,Object(c["createElementVNode"])("tr",null,[F,Object(c["createElementVNode"])("td",null,[l.orderData.paid_date?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",L)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",K,"時間不正確"))])]),Object(c["createElementVNode"])("tr",null,[Y,Object(c["createElementVNode"])("td",null,[l.orderData.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("strong",q,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",J,"尚未付款"))])]),Object(c["createElementVNode"])("tr",null,[z,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])("$"+l.orderData.total),1)])])]),X,Object(c["createElementVNode"])("table",G,[H,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(l.orderData.products,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:e.id},[Object(c["createElementVNode"])("th",null,Object(c["toDisplayString"])(e.product.title),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(e.qty)+" / "+Object(c["toDisplayString"])(e.product.unit),1),Object(c["createElementVNode"])("td",Q,Object(c["toDisplayString"])("$"+e.final_total),1)])})),128))])]),Object(c["createElementVNode"])("div",W,[Object(c["createElementVNode"])("div",Z,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.orderData.is_paid=e})},null,512),[[c["vModelCheckbox"],l.orderData.is_paid]]),Object(c["createElementVNode"])("label",ee,[l.orderData.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",te,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",ne,"未付款"))])])])])])]),Object(c["createElementVNode"])("div",ce,[ae,Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(t){return e.$emit("update",l.orderData)})}," 修改付款狀態 ")])])])],512)}var re=n("e0ae"),oe={data:function(){return{status:{},modal:"",orderData:{},isPaid:!1}},computed:{changeType:function(){return function(){var e=new Date(16e9).toISOString().split("T");return e[0]}}},props:["tmpOrder"],emits:["update"],mixins:[re["a"]],watch:{tmpOrder:function(){this.orderData=this.tmpOrder}}},de=n("d959"),ie=n.n(de);const se=ie()(oe,[["render",le]]);var ue=se,be=n("1799"),pe={data:function(){return{orders:{},pages:{},tmpOrder:{}}},components:{Pagination:be["a"],OrderModal:ue,DelModal:v["a"]},computed:{createDate:function(){return function(e){var t=new Date(1e3*e.create_at).toISOString().split("T");return t[0]}}},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;E["a"].emit("loading");var n="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("farmerlin731","/admin/orders?page=").concat(t);this.$http.get(n).then((function(t){var n;e.orders=t.data.orders,e.pages=t.data.pagination,E["a"].emit("un-loading"),e.$pushToastMessage(t,"擷取訂單列表第 ".concat(null===(n=e.pages)||void 0===n?void 0:n.current_page," 頁"))})).catch((function(t){E["a"].emit("un-loading"),e.$pushToastMessage(t.response,"擷取訂單列表")}))},openModal:function(e){this.tmpOrder=Object(g["a"])({},e);var t=this.$refs.orderModal;t.openModal()},updatePaid:function(e){var t=this;E["a"].emit("loading");var n="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("farmerlin731","/admin/order/").concat(e.id),c={is_paid:e.is_paid};this.$http.put(n,{data:c}).then((function(e){var n,c=t.$refs.orderModal;c.hideModal(),t.getOrders(null===(n=t.pages)||void 0===n?void 0:n.current_page),t.$pushToastMessage(e,"更新付款狀態")})).catch((function(e){E["a"].emit("un-loading"),t.$pushToastMessage(e.response,"更新付款狀態")}))},openDelOrderModal:function(e){this.tmpOrder=Object(g["a"])({},e);var t=this.$refs.delModal;t.openModal()},delOrder:function(){var e=this;E["a"].emit("loading");var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("farmerlin731","/admin/order/").concat(this.tmpOrder.id);this.$http.delete(t).then((function(t){var n,c=e.$refs.delModal;c.hideModal(),e.$pushToastMessage(t,"刪除"),e.getOrders(null===(n=e.pages)||void 0===n?void 0:n.current_page)})).catch((function(t){E["a"].emit("un-loading"),e.$pushToastMessage(t.response,"刪除")}))}},mounted:function(){this.getOrders()}};const me=ie()(pe,[["render",h]]);t["default"]=me},d784:function(e,t,n){"use strict";n("ac1f");var c=n("e330"),a=n("6eeb"),l=n("9263"),r=n("d039"),o=n("b622"),d=n("9112"),i=o("species"),s=RegExp.prototype;e.exports=function(e,t,n,u){var b=o(e),p=!r((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),m=p&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[i]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!p||!m||n){var O=c(/./[b]),j=t(b,""[e],(function(e,t,n,a,r){var o=c(e),d=t.exec;return d===l||d===s.exec?p&&!r?{done:!0,value:O(t,n,a)}:{done:!0,value:o(n,t,a)}:{done:!1}}));a(String.prototype,e,j[0]),a(s,b,j[1])}u&&d(s[b],"sham",!0)}},fce3:function(e,t,n){var c=n("d039"),a=n("da84"),l=a.RegExp;e.exports=c((function(){var e=l(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-223b7f70.acb8c3f1.js.map