<template>
  <div>
    <BackButton />
    <div class="d-flex justify-center" style="width: 100%">
      <QrReader style="width: 90%" :onCodeRead="onCodeRead" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import BackButton from "@/components/BackButton.vue";
import QrReader from "@/components/QrReader.vue";
import { QrcodeData } from "@/models/qrCodeData";
import router from "@/router";

@Component({
  components: { BackButton, QrReader },
})
export default class AddCard extends Vue {
  onCodeRead(data: QrcodeData) {
    router.push({
      name: "viewCards",
      params: {
        id: data.id.toString(),
      },
    });
  }
}
</script>
