(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{c93f:function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("q-page",{staticClass:"col"},[a("div",{staticClass:"q-pa-md items-start q-gutter-md"},[a("q-card",{staticClass:"bg-standard"},[a("q-card-actions",[a("q-btn",{attrs:{color:"primary",flat:""},on:{click:e.load}},[e._v("Load from clipboard")])],1),a("q-btn-toggle",{attrs:{"no-caps":"","toggle-color":"purple",color:"white","text-color":"black",options:[{label:"Low",value:"L"},{label:"Medium",value:"M"},{label:"Quartile",value:"Q"},{label:"High",value:"H"}]},model:{value:e.level,callback:function(l){e.level=l},expression:"level"}}),a("q-separator"),a("q-card-section",[a("qrcode-vue",{attrs:{value:e.value,size:e.size,level:e.level}})],1),a("q-separator"),a("q-card-section",[a("q-input",{attrs:{filled:"",autogrow:""},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1)],1)],1)])},o=[],r=a("d7b0"),s={name:"PageIndex",data(){return{value:"Hello World...",size:250,level:"M"}},components:{QrcodeVue:r["a"]},methods:{load(){let e=this;navigator.clipboard.readText().then(l=>{console.log("value in clipboard is "+l),e.value=l})}}},c=s,n=a("2877"),i=Object(n["a"])(c,t,o,!1,null,null,null);l["default"]=i.exports}}]);