(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"264d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"col"},[r("div",{staticClass:"q-pa-md items-start q-gutter-sm"},[r("q-card",{staticClass:"bg-standard"},[r("q-card-actions",[r("q-btn",{attrs:{color:"purple",label:"Key"},on:{click:function(t){e.prompt=!0}}}),r("q-btn",{attrs:{color:"black",label:"Decrypt"},on:{click:e.decrypt}}),r("q-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.original,expression:"original",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{color:"primary",label:"Copy"}}),r("q-btn",{attrs:{color:"standard","text-color":"black",label:"Load"},on:{click:e.loadFromClipboard}}),r("q-dialog",{attrs:{persistent:""},on:{hide:e.loadFromClipboard},model:{value:e.prompt,callback:function(t){e.prompt=t},expression:"prompt"}},[r("q-card",[r("q-card-section",[r("div",{staticClass:"text-h6"},[e._v("Key")])]),r("q-card-section",{staticClass:"q-pt-none"},[r("q-input",{attrs:{dense:"",type:"number",autofocus:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.prompt=!1}},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}})],1),r("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Set"}})],1)],1)],1)],1),r("q-separator"),r("q-card-section",[r("q-input",{attrs:{label:"original text",autogrow:""},model:{value:e.original,callback:function(t){e.original=t},expression:"original"}})],1),r("q-separator"),r("q-card-section",[r("q-input",{attrs:{label:"ciphered text",autogrow:"",readonly:""},model:{value:e.cipherText,callback:function(t){e.cipherText=t},expression:"cipherText"}})],1)],1)],1)])},o=[],i=r("b178"),l={name:"PageIndex",data(){return{key:"",original:"",error:"",cipherText:"",prompt:!0}},methods:{showKey(){i["a"].create("secret key is: "+this.key)},loadFromClipboard(){let e=this;navigator.clipboard.readText().then(t=>{console.log("value in clipboard is "+t),e.cipherText=t})},decrypt(){console.log(this.cipherText);var e=this.CryptoJS.AES.decrypt(this.cipherText,this.key),t=e.toString(this.CryptoJS.enc.Utf8);console.log(t),this.original=t},onCopy:function(e){i["a"].create("You just copied original text")},onError:function(e){alert("Failed to copy texts")}}},n=l,c=r("2877"),s=Object(c["a"])(n,a,o,!1,null,null,null);t["default"]=s.exports}}]);