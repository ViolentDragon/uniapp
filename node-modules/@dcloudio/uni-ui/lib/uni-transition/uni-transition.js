"use strict";const t=require("../../../../../common/vendor.js"),i={name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},i="";for(let s in t){i+=this.toLine(s)+":"+t[s]+";"}return i},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(i={}){i.duration&&(this.durationTime=i.duration),this.animation=t.createAnimation(Object.assign(this.config,i),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,i={}){if(this.animation){for(let i in t)try{"object"==typeof t[i]?this.animation[i](...t[i]):this.animation[i](t[i])}catch(s){console.error(`方法 ${i} 不存在`)}return this.animation.step(i),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:i,transform:s}=this.styleInit(!1);void 0!==i&&(this.opacity=i),this.transform=s,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=t.createAnimation(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:i}=this.styleInit(!1);this.opacity=t||1,this.transform=i,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let i={transform:""},s=(t,s)=>{"fade"===s?i.opacity=this.animationType(t)[s]:i.transform+=this.animationType(t)[s]+" "};return"string"==typeof this.modeClass?s(t,this.modeClass):this.modeClass.forEach((i=>{s(t,i)})),i},tranfromInit(t){let i=(t,i)=>{let s=null;"fade"===i?s=t?0:1:(s=t?"-100%":"0","zoom-in"===i&&(s=t?.8:1),"zoom-out"===i&&(s=t?1.2:1),"slide-right"===i&&(s=t?"100%":"0"),"slide-bottom"===i&&(s=t?"100%":"0")),this.animation[this.animationMode()[i]](s)};return"string"==typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((s=>{i(t,s)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}};const s=t._export_sfc(i,[["render",function(i,s,a,e,o,n){return{a:o.isShow,b:o.animationData,c:t.n(a.customClass),d:t.s(n.transformStyles),e:t.o(((...t)=>n.onClick&&n.onClick(...t)))}}]]);wx.createComponent(s);
