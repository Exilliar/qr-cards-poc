<template>
  <div>
    <!-- <QRReader :style="{ width: '50%' }" :onCodeRead="onCodeRead" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import QRReader from "@/components/qr-reader.vue";

import { QrcodeData } from "@/models/qrCodeData";

@Component({
  // components: { QRReader },
})
export default class Home extends Vue {
  styleObject = {
    width: "50%",
  };

  onCodeRead(data: QrcodeData) {
    console.log("data:", data);
  }
}
</script>
