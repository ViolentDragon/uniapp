"use strict";const t=require("../utils/http.js");exports.getGoodsService=e=>t.http({method:"GET",url:"/goods",data:{id:e}});
