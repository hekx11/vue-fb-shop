import{u as p,_,o,c as n,a as t,t as i,p as f,b as v,d as u,F as S,r as g,e as y,f as I,g as C}from"./index-8f1cda31.js";const $={props:{id:{type:String,required:!0,default:""},name:{type:String,required:!0,default:""},price:{type:Number,required:!0,default:0}},methods:{addToCart(){const e=p();e.addToCart({id:this.id,name:this.name,price:this.price}),console.log(e.cartCount),console.log(e.items[0].id)}}};const b=e=>(f("data-v-a57d6a56"),e=e(),v(),e),x={class:"item"},T=b(()=>t("img",{src:"https://picsum.photos/200",alt:"item"},null,-1)),k={class:"descr"};function B(e,s,a,l,m,c){return o(),n("div",x,[t("div",null,[T,t("div",k,[t("h3",null,i(a.name),1),t("p",null,"$"+i(a.price),1)])]),t("button",{class:"itemButton",onClick:s[0]||(s[0]=(...d)=>c.addToCart&&c.addToCart(...d))},"Add to cart")])}const V=_($,[["render",B],["__scopeId","data-v-a57d6a56"]]),w=u({components:{ShopItem:V},computed:{items(){return p().items}}});const q={id:"container"};function N(e,s,a,l,m,c){const d=y("ShopItem");return o(),n("div",q,[(o(!0),n(S,null,g(e.items,(r,h)=>(o(),I(d,{key:h,id:r.id,name:r.name,price:r.price},null,8,["id","name","price"]))),128))])}const F=_(w,[["render",N],["__scopeId","data-v-fb356915"]]),A=u({__name:"ShopView",setup(e){return(s,a)=>(o(),n("main",null,[C(F)]))}});const E=_(A,[["__scopeId","data-v-bd4cf2af"]]);export{E as default};