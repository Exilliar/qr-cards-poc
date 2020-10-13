<template>
  <v-card outlined elevation="4">
    <modal name="view-image" height="auto" width="100%" classes="viewImage">
      <v-img :src="imgurl" max-height="500" max-width="300" />
    </modal>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-img
            :src="imgurl"
            :lazy-src="imgurl"
            max-width="150"
            max-height="250"
            alt="Card image"
            class="pr-1"
          />
        </v-col>
        <v-col cols="6">
          <div class="d-flex flex-column">
            <StatInfo v-for="stat in stats" :key="stat.id" :stat="stat" />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
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

  modalStyle = {
    display: "flex",
    justifyContent: "center",
  };

  viewImage() {
    this.$modal.show("view-image");
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
<style>
.viewImage {
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding: 3rem;
}
</style>
