// import something here
import VueClipboard from 'vue-clipboard2'
import VueCryptojs from 'vue-cryptojs'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ Vue }) => {
  console.log('loading component')
  VueClipboard.config.autoSetContainer = true // add this line
  Vue.use(VueClipboard)
  Vue.use(VueCryptojs)
}
