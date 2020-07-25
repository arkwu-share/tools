<template>
  <q-page class="col">
    <div class="q-pa-md items-start q-gutter-sm">
      <q-card class="bg-standard">
      <q-card-actions>
      <q-btn color="purple" label="Key" @click="prompt = true" />
      <q-btn color="black" label="Decrypt" @click="decrypt" />
      <q-btn color="primary" label="Copy" v-clipboard:copy="original" v-clipboard:success="onCopy" v-clipboard:error="onError" />
      <q-btn color="standar" text-color="black" label="Load" @click="loadFromClipboard" />
        <q-dialog v-model="prompt" persistent @hide="loadFromClipboard">
          <q-card>
            <q-card-section>
              <div class="text-h6">Key</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <q-input dense v-model="key" type="number" autofocus @keyup.enter="prompt = false" />
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Set" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-card-actions>
      <q-separator />
      <q-card-section>
      <q-input v-model="original" label="original text" autogrow />
      </q-card-section>
      <q-separator />
      <q-card-section>
      <q-input v-model="cipherText" label="ciphered text" autogrow readonly />
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";

export default {
  name: 'PageIndex',
  data () {
    return {
      key: '',
      original: '',
      error: '',
      cipherText: '',
      prompt: true
    }
  },
  methods: {
    showKey() {
      Notify.create('secret key is: ' + this.key)
    },
    loadFromClipboard() {
        let _this = this
        navigator.clipboard.readText().then(
          (value) => {
            console.log('value in clipboard is ' + value)
            _this.cipherText = value
          }
        )
    },
    decrypt() {
      var bytes = this.CryptoJS.AES.decrypt(this.cipherText, this.key);
      var text = bytes.toString(this.CryptoJS.enc.Utf8)
      this.original = text
      // Notify.create('original text is: ' + text)
    },
    onCopy: function (e) {
      Notify.create('You just copied original text')
    },
    onError: function (e) {
      alert('Failed to copy texts')
    },
  }
}
</script>
