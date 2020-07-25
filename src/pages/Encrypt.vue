<template>
  <q-page class="col">
    <div class="q-pa-md items-start q-gutter-sm">
      <q-card class="bg-standard">
        <q-card-actions>
          <q-btn color="purple" label="Key" @click="showKey" />
          <q-btn color="black" label="Encrypt" @click="encrpt" />
          <q-btn
            color="primary"
            label="Copy"
            v-clipboard:copy="cipherText"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          />
        </q-card-actions>
        <q-separator />
        <q-card-section>
          <q-input v-model="result" label="original" autogrow />
          <q-input v-model="cipherText" label="cipher" autogrow readonly />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <qrcode-stream @decode="onDecode" @init="onInit" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { Notify } from "quasar";

export default {
  name: "PageIndex",
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
  },
  data() {
    return {
      key: "",
      result: "",
      error: "",
      cipherText: "",
    };
  },
  created() {
    this.key = Math.floor(Math.random() * Math.floor(1000)).toString();
    Notify.create("secret key is: " + this.key);
  },
  methods: {
    showKey() {
      Notify.create("secret key is: " + this.key);
    },
    decrypt(value) {
      var bytes = this.CryptoJS.AES.decrypt(this.cipherText, value);
      var text = bytes.toString(this.CryptoJS.enc.Utf8);
      Notify.create("original text is: " + text);
    },
    encrpt() {
      this.cipherText = this.CryptoJS.AES.encrypt(
        this.result,
        this.key
      ).toString();
    },
    onCopy: function (e) {
      Notify.create("You just copied ciphered text");
    },
    onError: function (e) {
      alert("Failed to copy texts");
    },
    onDecode(result) {
      this.result = result;
      this.encrpt();
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    },
  },
};
</script>
