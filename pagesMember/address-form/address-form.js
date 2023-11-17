"use strict";const e=require("../../common/vendor.js"),r=require("../../services/address.js");if(require("../../utils/http.js"),require("../../stores/index.js"),require("../../stores/modules/member.js"),require("../../stores/modules/address.js"),!Array){(e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.js")+(()=>"../../node-modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.js"))();const s=e.defineComponent({__name:"address-form",props:{id:null},setup(s){const a=s,o=e.ref({receiver:"",contact:"",fullLocation:"",provinceCode:"",cityCode:"",countyCode:"",address:"",isDefault:0});e.index.setNavigationBarTitle({title:a.id?"修改地址":"新建地址"});const i=e=>{o.value.fullLocation=e.detail.value.join(" ");const[r,s,a]=e.detail.code;Object.assign(o.value,{provinceCode:r,cityCode:s,countyCode:a})},t=e=>{o.value.isDefault=e.detail.value?1:0},l={receiver:{rules:[{required:!0,errorMessage:"请输入收货人姓名"}]},contact:{rules:[{required:!0,errorMessage:"请输入联系方式"},{pattern:/^1[3-9]\d{9}$/,errorMessage:"手机号格式不正确"}]},countyCode:{rules:[{required:!0,errorMessage:"请选择所在地区"}]},address:{rules:[{required:!0,errorMessage:"请选择详细地址"}]}},u=e.ref(),d=async()=>{var s,i;try{null==(i=(s=u.value).validate)||i.call(s),a.id?await r.putMemberAddressModifyService(a.id,o.value):await r.postMemberAddressService(o.value),e.index.showToast({title:a.id?"修改地址":"添加地址",icon:"success"}),setTimeout((()=>{e.index.navigateBack()}),400)}catch(t){e.index.showToast({title:"输入完整信息",icon:"error"})}};return e.onLoad((()=>{(async()=>{if(a.id){const e=await r.getMemberAddressDetailService(a.id);Object.assign(o.value,e.result)}})()})),(r,s)=>e.e({a:o.value.receiver,b:e.o((e=>o.value.receiver=e.detail.value)),c:e.p({name:"receiver"}),d:o.value.contact,e:e.o((e=>o.value.contact=e.detail.value)),f:e.p({name:"contact"}),g:o.value.fullLocation},o.value.fullLocation?{h:e.t(o.value.fullLocation)}:{},{i:o.value.fullLocation.split(" "),j:e.o(i),k:e.p({name:"fullLocation"}),l:o.value.address,m:e.o((e=>o.value.address=e.detail.value)),n:e.p({name:"address"}),o:1===o.value.isDefault,p:e.o(t),q:e.p({name:"isDefault"}),r:e.sr(u,"1da73b34-0",{k:"formRef"}),s:e.p({rules:l,modelValue:o.value}),t:e.o(d)})}});wx.createPage(s);
