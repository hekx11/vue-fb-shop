import{S as h,u as p,m as y,_ as d,o as t,c as n,a as c,t as u,g as l,e as m,d as f,F as I,r as g,f as $,h as x}from"./index-8f1cda31.js";const k={components:{SvgIcon:h},props:{id:{type:String,required:!0,default:""},name:{type:String,required:!0,default:""},price:{type:Number,required:!0,default:0}},methods:{deleteItem(){p().deleteItemFromCart(this)}},data(){return{path:y}}};const V={class:"item"};function S(r,a,s,v,i,o){const _=m("svg-icon");return t(),n("div",V,[c("h3",null,u(s.name),1),c("p",null,"Price: $"+u(s.price),1),c("button",{onClick:a[0]||(a[0]=(...e)=>o.deleteItem&&o.deleteItem(...e))},[l(_,{type:"mdi",path:i.path},null,8,["path"])])])}const b=d(k,[["render",S],["__scopeId","data-v-9959636a"]]),B=f({components:{CartItem:b},computed:{cart(){return p().cart}}});const N={id:"container"};function q(r,a,s,v,i,o){const _=m("CartItem");return t(),n("div",N,[c("ul",null,[(t(!0),n(I,null,g(r.cart,(e,C)=>(t(),n("li",{key:C},[e?(t(),$(_,{key:0,id:e.id,name:e.name,price:e.price},null,8,["id","name","price"])):x("",!0)]))),128))])])}const w=d(B,[["render",q],["__scopeId","data-v-f11356bc"]]),F=f({__name:"CartView",setup(r){return(a,s)=>(t(),n("main",null,[l(w)]))}});const T=d(F,[["__scopeId","data-v-293ee9c8"]]);export{T as default};