(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{1662:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"col"},[a("div",{staticClass:"q-pa-md items-start q-gutter-sm"},[a("q-card",{staticClass:"bg-standard"},[a("q-card-section",[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"File",counter:""},on:{input:e.onInput},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){t.stopPropagation(),e.file=null}}})]},proxy:!0}]),model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),a("q-separator"),a("q-card-section",{scopedSlots:e._u([{key:"hint",fn:function(){return[e._v("Please select a file")]},proxy:!0}])},[a("q-btn",{staticClass:"full-width",attrs:{color:"standard","text-color":"black",label:"Clear"},on:{click:e.clear}})],1),a("q-card-section",[a("q-list",{attrs:{bordered:"",padding:""}},[a("q-item-label",{attrs:{header:""}},[e._v("Request result from file.io")]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"bg-teal-1 text-grey-8",attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[e._v("Link")]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(this.link))])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.key,expression:"key",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",[e._v("Key")]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(this.key))])],1)],1),a("q-item",{staticClass:"text-orange"},[a("q-item-section",[a("q-item-label",[e._v("Expiry")]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(this.expiry))])],1)],1)],1)],1)],1)],1)])},r=[],o=a("b178"),s={name:"Ephemeral",data(){return{response:"",key:"",link:"",expiry:"",file:null}},created(){},methods:{onCopy:function(e){o["a"].create("You just copied original text")},onError:function(e){alert("Failed to copy texts")},onUploaded:function(e){console.log(e)},onInput:function(){var e=new FormData;e.append("file",this.file),console.log(this.file),this.$axios.post("https://file.io/?expires=1d",e,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{this.response=e,this.key=e.data.key,this.link=e.data.link,this.expiry=e.data.expiry,o["a"].create("File uploaded.")}).catch(e=>{this.$q.notify({color:"negative",position:"top",message:e,icon:"report_problem"})})},clear:function(){this.file=null,this.response="",this.key="",this.link="",this.expiry=""}}},l=s,n=a("2877"),c=Object(n["a"])(l,i,r,!1,null,null,null);t["default"]=c.exports}}]);