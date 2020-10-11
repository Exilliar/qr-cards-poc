declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// needed to stop errors appearing on the qrcode-reader imports
declare module "vue-qrcode-reader"