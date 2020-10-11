<template>
  <div
    style="height: 100%"
    class="d-flex flex-column align-center justify-space-around"
  >
    <Button :style="buttonStyle" text="Add Card" :onClick="addCard" />
    <Button :style="buttonStyle" text="View Cards" :onClick="viewCards" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import router from "@/router";

import Button from "@/components/Button.vue";

@Component({
  components: { Button },
})
export default class Home extends Vue {
  buttonStyle = {
    height: "10rem",
    width: "15rem",
    fontSize: "1.5rem",
  };

  addCard() {
    router.push("/addCard");
  }
  viewCards() {
    console.log("view cards");
  }
}
</script>
