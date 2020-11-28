<template>
  <div>
    <BackButton />
    <div style="width: 100%" class="d-flex align-center pt-2 flex-column">
      <CardInfo
        v-for="data in cardData"
        :key="data.id"
        style="width: 75%"
        :card="data"
        class="mt-2"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import CardInfo from "@/components/CardInfo/CardInfo.vue";
import BackButton from "@/components/BackButton.vue";

import { CardData } from "@/models/CardData";

import Axios from "axios";

import store from "@/store";

@Component({
  components: { CardInfo, BackButton },
})
export default class ViewCards extends Vue {
  axios = Axios.create({
    baseURL: "http://127.0.0.1:8000/account/" + store.state.id.toString(),
  });

  cardData: CardData[] = [];

  async mounted() {
    if (this.$route.params.id) {
      await this.axios.patch("card/" + this.$route.params.id);
    }

    this.axios.get("card").then((res) => {
      this.cardData = res.data;
    });
  }
}
</script>
