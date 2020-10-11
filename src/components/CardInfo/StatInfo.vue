<template>
  <span>{{ name }}: {{ value }}</span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { Stat } from "@/models/CardData";

@Component
export default class StatInfo extends Vue {
  @Prop() stat!: Stat;

  get name() {
    return this.stat.name;
  }

  get value() {
    return this.stat.value;
  }
}
</script>
