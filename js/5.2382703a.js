(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{dab3:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=this,t=r.$createElement,o=r._self._c||t;return o("q-page",{staticClass:"col"},[o("div",{staticClass:"q-pa-md items-start q-gutter-sm"},[o("q-card",{staticClass:"bg-standard"},[o("q-card-actions",[o("q-btn",{attrs:{color:"purple",label:"Key"},on:{click:function(){e.$q.notify("secret key is: "+e.key)}}}),o("q-btn",{attrs:{color:"black",label:"Encrypt"},on:{click:r.encrpt}}),o("q-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:r.cipherText,expression:"cipherText",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(){e.$q.notify("You just copied the ciphered text")},expression:"() => {this.$q.notify('You just copied the ciphered text');}",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(){e.$q.notify({color:"negative",position:"top",message:"Failed to copy texts",icon:"report_problem"})},expression:"() => {this.$q.notify({color: 'negative',position: 'top',message: 'Failed to copy texts',icon: 'report_problem',});}",arg:"error"}],attrs:{color:"primary",label:"Copy"}})],1),o("q-separator"),o("q-card-section",[o("q-input",{attrs:{label:"original",autogrow:""},model:{value:r.result,callback:function(e){r.result=e},expression:"result"}}),o("q-input",{attrs:{label:"cipher",autogrow:"",readonly:""},model:{value:r.cipherText,callback:function(e){r.cipherText=e},expression:"cipherText"}})],1),o("q-separator"),o("q-card-section",[o("qrcode-capture",{on:{decode:r.onDecode}})],1),o("q-separator"),o("q-card-section",[o("qrcode-drop-zone",{on:{decode:r.onDecode,init:r.logErrors}},[o("qrcode-stream",{on:{decode:r.onDecode,init:r.onInit}})],1)],1)],1)],1)])},a=[],c=t("c973"),n=t.n(c),i=t("6d12"),s=t("b178"),l={name:"PageIndex",components:{QrcodeStream:i["QrcodeStream"],QrcodeDropZone:i["QrcodeDropZone"],QrcodeCapture:i["QrcodeCapture"]},data(){return{key:"",result:"",error:"",cipherText:"",file:null}},created(){this.key=Math.floor(Math.random()*Math.floor(1e3)).toString(),s["a"].create("secret key is: "+this.key)},methods:{decrypt(e){var r=this.CryptoJS.AES.decrypt(this.cipherText,e),t=r.toString(this.CryptoJS.enc.Utf8);s["a"].create("original text is: "+t)},encrpt(){this.cipherText=this.CryptoJS.AES.encrypt(this.result,this.key).toString()},onDecode(e){this.result=e,s["a"].create("Qr Code decoded."),this.encrpt()},logErrors(e){e.catch(console.error)},onInit(e){var r=this;return n()((function*(){try{yield e}catch(t){"NotAllowedError"===t.name?r.error="ERROR: you need to grant camera access permisson":"NotFoundError"===t.name?r.error="ERROR: no camera on this device":"NotSupportedError"===t.name?r.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===t.name?r.error="ERROR: is the camera already in use?":"OverconstrainedError"===t.name?r.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===t.name&&(r.error="ERROR: Stream API is not supported in this browser")}}))()}}},p=l,d=t("2877"),u=Object(d["a"])(p,o,a,!1,null,null,null);r["default"]=u.exports}}]);