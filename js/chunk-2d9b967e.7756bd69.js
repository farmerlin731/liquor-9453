(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d9b967e"],{"133b":function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-77539a7c"),e=e(),Object(n["popScopeId"])(),e},o={class:"container"},r={key:0,class:"tip"},l=Object(n["createTextVNode"])(" 您的購物車空無一物～ "),i=a((function(){return Object(n["createElementVNode"])("i",{class:"bi bi-emoji-dizzy"},null,-1)})),s=a((function(){return Object(n["createElementVNode"])("br",null,null,-1)})),d=a((function(){return Object(n["createElementVNode"])("b",null,[Object(n["createElementVNode"])("i",{class:"bi bi-droplet-half",style:{color:"brown"}}),Object(n["createTextVNode"])(" 酒單此處去 "),Object(n["createElementVNode"])("i",{class:"bi bi-droplet-half",style:{color:"brown"}})],-1)})),u=[d],m={key:1,class:"checklout mt-5"},b={class:"mt-4"},f={class:"text-end"},p={class:"table align-middle"},O=a((function(){return Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th"),Object(n["createElementVNode"])("th",null,"圖片"),Object(n["createElementVNode"])("th",null,"品名"),Object(n["createElementVNode"])("th",{style:{width:"150px"}},"數量/單位"),Object(n["createElementVNode"])("th",null,"單價")])],-1)})),j=a((function(){return Object(n["createElementVNode"])("tr",null,null,-1)})),V=["onClick"],h=["src"],v={key:0,class:"text-success"},N={class:"input-group input-group-sm"},E={class:"input-group mb-3"},g=["onUpdate:modelValue","onBlur"],y={class:"input-group-text",id:"basic-addon2"},k={class:"text-end"},x={key:0,class:"text-success"},C=a((function(){return Object(n["createElementVNode"])("td",{colspan:"3",class:"text-end"},"總計",-1)})),B={class:"text-end"},w={key:0},S=a((function(){return Object(n["createElementVNode"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1)})),D={class:"text-end text-success"},q={class:"my-5 row justify-content-center"},T={class:"mb-3"},U=a((function(){return Object(n["createElementVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1)})),$={class:"mb-3"},_=a((function(){return Object(n["createElementVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1)})),z={class:"mb-3"},A=a((function(){return Object(n["createElementVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1)})),F={class:"mb-3"},I=a((function(){return Object(n["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1)})),M={class:"mb-3"},R=a((function(){return Object(n["createElementVNode"])("label",{for:"message",class:"form-label"},"留言",-1)})),J=a((function(){return Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("button",{class:"btn btn-success"},"送出訂單")],-1)}));function L(e,t,c,a,d,L){var X,G=Object(n["resolveComponent"])("Field"),H=Object(n["resolveComponent"])("ErrorMessage"),K=Object(n["resolveComponent"])("Form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[0==(null===(X=d.cartData.carts)||void 0===X?void 0:X.length)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createElementVNode"])("h4",null,[l,i,s,Object(n["createElementVNode"])("button",{class:"btn btn-outline-danger mt-5",onClick:t[0]||(t[0]=function(){return L.toShopping&&L.toShopping.apply(L,arguments)})},u)])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",m,[Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-danger",type:"button",onClick:t[1]||(t[1]=function(){return L.deleteCartAll&&L.deleteCartAll.apply(L,arguments)})}," 清空購物車 ")]),Object(n["createElementVNode"])("table",p,[O,Object(n["createElementVNode"])("tbody",null,[d.cartData.carts?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[j,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(d.cartData.carts,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:e.id},[Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return L.deleteCart(e)}}," x ",8,V)]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("img",{src:e.product.imageUrl,style:{width:"100px","background-color":"wheat"},alt:""},null,8,h)]),Object(n["createElementVNode"])("td",null,[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.product.title)+" ",1),e.coupon?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",v," 已套用優惠券 ")):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",N,[Object(n["createElementVNode"])("div",E,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":function(t){return e.qty=t},onBlur:function(t){return L.updateCart(e)},min:"1",type:"number",class:"form-control"},null,40,g),[[n["vModelText"],e.qty,void 0,{number:!0}]]),Object(n["createElementVNode"])("span",y,Object(n["toDisplayString"])(e.product.unit),1)])])]),Object(n["createElementVNode"])("td",k,[e.final_total!=e.total?(Object(n["openBlock"])(),Object(n["createElementBlock"])("small",x,"折扣價：")):Object(n["createCommentVNode"])("",!0),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.final_total),1)])])})),128))],64)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("tfoot",null,[Object(n["createElementVNode"])("tr",null,[C,Object(n["createElementVNode"])("td",B,Object(n["toDisplayString"])(d.cartData.total),1)]),d.cartData.final_total!=d.cartData.total?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",w,[S,Object(n["createElementVNode"])("td",D,Object(n["toDisplayString"])(d.cartData.final_total),1)])):Object(n["createCommentVNode"])("",!0)])])]),Object(n["createElementVNode"])("div",q,[Object(n["createVNode"])(K,{ref:"form",class:"col-md-6",onSubmit:L.submitOrder},{default:Object(n["withCtx"])((function(e){var c=e.errors;return[Object(n["createElementVNode"])("div",T,[U,Object(n["createVNode"])(G,{id:"name",name:"姓名",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:d.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.form.user.name=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(H,{name:"姓名",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",$,[_,Object(n["createVNode"])(G,{id:"tel",name:"電話",type:"tel",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["電話"]}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:d.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return d.form.user.tel=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(H,{name:"電話",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",z,[A,Object(n["createVNode"])(G,{id:"address",name:"地址",type:"text",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:d.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return d.form.user.address=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(H,{name:"地址",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",F,[I,Object(n["createVNode"])(G,{id:"email",name:"email",type:"email",class:Object(n["normalizeClass"])(["form-control",{"is-invalid":c["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:d.form.user.email,"onUpdate:modelValue":t[5]||(t[5]=function(e){return d.form.user.email=e})},null,8,["class","modelValue"]),Object(n["createVNode"])(H,{name:"email",class:"invalid-feedback"})]),Object(n["createElementVNode"])("div",M,[R,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=function(e){return d.form.message=e})},null,512),[[n["vModelText"],d.form.message]])]),J]})),_:1},8,["onSubmit"])])]))])}c("99af");var X=c("4dcd"),G={data:function(){return{cartData:{carts:[]},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){var e=this;X["a"].emit("loading");var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("farmerlin731","/cart");this.$http.get(t).then((function(t){X["a"].emit("un-loading"),e.cartData=t.data.data})).catch((function(e){X["a"].emit("un-loading"),alert("CART ERROR"),console.dir(e)}))},updateCart:function(e){var t=this;X["a"].emit("loading");var c={product_id:e.id,qty:e.qty},n="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("farmerlin731","/cart/").concat(e.id);this.$http.put(n,{data:c}).then((function(){t.getCart()})).catch((function(e){console.dir(e),X["a"].emit("un-loading")}))},deleteCart:function(e){var t=this;X["a"].emit("loading");var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("farmerlin731","/cart/").concat(e.id);this.$http.delete(c).then((function(){t.getCart(),X["a"].emit("update-qty")})).catch((function(e){console.dir(e),X["a"].emit("un-loading")}))},deleteCartAll:function(){var e=this;X["a"].emit("loading");var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("farmerlin731","/carts");this.$http.delete(t).then((function(){e.getCart(),X["a"].emit("update-qty")})).catch((function(e){console.dir(e),X["a"].emit("un-loading")}))},toShopping:function(){this.$router.push("/products")},submitOrder:function(){var e=this;this.$emit("next");var t=this.form,c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("farmerlin731","/order");this.$http.post(c,{data:t}).then((function(t){X["a"].emit("update-qty"),e.$router.push("/orders/".concat(t.data.orderId))})).catch((function(t){alert(t.data.message),e.getCart()}))}},mounted:function(){this.getCart()}},H=(c("bfa3"),c("d959")),K=c.n(H);const P=K()(G,[["render",L],["__scopeId","data-v-77539a7c"]]);t["default"]=P},"1dde":function(e,t,c){var n=c("d039"),a=c("b622"),o=c("2d00"),r=a("species");e.exports=function(e){return o>=51||!n((function(){var t=[],c=t.constructor={};return c[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,c){"use strict";var n=c("a04b"),a=c("9bf2"),o=c("5c6c");e.exports=function(e,t,c){var r=n(t);r in e?a.f(e,r,o(0,c)):e[r]=c}},"847f":function(e,t,c){},"99af":function(e,t,c){"use strict";var n=c("23e7"),a=c("da84"),o=c("d039"),r=c("e8b5"),l=c("861d"),i=c("7b0b"),s=c("07fa"),d=c("8418"),u=c("65f0"),m=c("1dde"),b=c("b622"),f=c("2d00"),p=b("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",V=a.TypeError,h=f>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),v=m("concat"),N=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:r(e)},E=!h||!v;n({target:"Array",proto:!0,forced:E},{concat:function(e){var t,c,n,a,o,r=i(this),l=u(r,0),m=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?r:arguments[t],N(o)){if(a=s(o),m+a>O)throw V(j);for(c=0;c<a;c++,m++)c in o&&d(l,m,o[c])}else{if(m>=O)throw V(j);d(l,m++,o)}return l.length=m,l}})},b0c0:function(e,t,c){var n=c("83ab"),a=c("5e77").EXISTS,o=c("e330"),r=c("9bf2").f,l=Function.prototype,i=o(l.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(s.exec),u="name";n&&!a&&r(l,u,{configurable:!0,get:function(){try{return d(s,i(this))[1]}catch(e){return""}}})},bfa3:function(e,t,c){"use strict";c("847f")}}]);
//# sourceMappingURL=chunk-2d9b967e.7756bd69.js.map