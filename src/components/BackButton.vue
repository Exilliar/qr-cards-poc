<template>
  <Button text="<-- Back" :onClick="back" class="ma-4" :style="buttonStyle" />
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Button from "./Button.vue";
import router from "@/router";

@Component({
  components: { Button },
})
export default class BackButton extends Vue {
  buttonStyle = {
    width: "9rem",
    fontSize: "1.1rem",
  };
  back() {
    router.push("/");
  }
}
</script>
