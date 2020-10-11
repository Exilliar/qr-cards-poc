<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <span :style="textStyle">Card Collector</span>
    </div>
  </v-app-bar>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  textStyle = {
    fontSize: "2rem",
    fontWeight: "400",
  };
}
</script>
