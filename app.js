"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./common/vendor.js"),o=require("./stores/index.js");require("./stores/modules/member.js"),require("./stores/modules/address.js"),Math;const s=e.defineComponent({__name:"App",setup:o=>(e.onLaunch((()=>{console.log("App Launch")})),e.onShow((()=>{console.log("App Show")})),e.onHide((()=>{console.log("App Hide")})),()=>{})});function n(){const n=e.createSSRApp(s);return n.use(o.pinia),{app:n}}n().app.mount("#app"),exports.createApp=n;
