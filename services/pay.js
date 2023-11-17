"use strict";const t=require("../utils/http.js");exports.getPayWxPayMiniPayService=a=>t.http({method:"GET",url:"/pay/wxPay/miniPay",data:a});
