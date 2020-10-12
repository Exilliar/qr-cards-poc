<template>
  <v-row class="text-subtitle-1" style="color: black">
    <v-col cols="7" style="padding: 0" class="pl-2 pb-2">{{ name }}:</v-col>
    <v-col cols="5" style="padding: 0">{{ value }}</v-col>
  </v-row>
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
