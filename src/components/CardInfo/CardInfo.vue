<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text class="d-flex">
      <img :src="imgurl" alt="Card image" height="10rem" />
      <div v-for="stat in stats" :key="stat.id" class="d-flex flex-column">
        <StatInfo :stat="stat" />
      </div>
    </v-card-text>
    <v-card-actions>
      <Button text="View" :onClick="viewImage" />
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import { CardData } from "@/models/CardData";

import StatInfo from "./StatInfo.vue";
import Button from "../Button.vue";

@Component({
  components: { StatInfo, Button },
})
export default class CardInfo extends Vue {
  @Prop() card!: CardData;

  viewImage() {
    console.log("view image");
  }

  get title() {
    return this.card.title;
  }

  get imgurl() {
    return this.card.imgurl;
  }

  get stats() {
    return this.card.stats;
  }
}
</script>
