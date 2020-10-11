<template>
  <v-btn :color="buttonColor" @click="onClick">
    {{ text }}
  </v-btn>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() text!: string;
  @Prop() color!: string;
  @Prop() onClick!: () => any;

  buttonColor = this.color ? this.color : "secondary";
}
</script>
