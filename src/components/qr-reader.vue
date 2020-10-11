<template>
  <v-container>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
    <qrcode-capture @decode="onDecode"></qrcode-capture>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { QrcodeStream, QrcodeCapture } from "vue-qrcode-reader";

import { QrcodeData } from "@/models/qrCodeData";

@Component({
  components: { QrcodeStream, QrcodeCapture },
})
export default class QRReader extends Vue {
  @Prop() onCodeRead!: (data: QrcodeData) => any;

  onDecode(data: string) {
    try {
      this.onCodeRead(JSON.parse(data));
    } catch (e) {
      console.log("not json");
      console.error(e);
    }
  }
}
</script>
