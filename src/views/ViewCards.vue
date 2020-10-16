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

@Component({
  components: { CardInfo, BackButton },
})
export default class ViewCards extends Vue {
  mounted() {
    if (this.$route.params.id) {
      console.log("add card");
    } else {
      console.log("no add card");
    }
  }

  cardData: CardData[] = [
    {
      id: 0,
      title: "Card 1",
      imgurl:
        "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1458686012306-9N7QFP31LGPADKH2B5WQ/ke17ZwdGBToddI8pDm48kF7eaw33EkacYOryCnWb_0dZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEbp2JmVQlJTxJVSRYOVShHD4RSaKDI6Oafg7QZpiC7is221bnTVPq-SUAxNEJ31GA/17_-_Johnny_Lawrence_1024x1024.jpg",
      stats: [
        {
          id: 0,
          name: "Attack",
          value: "3",
        },
        {
          id: 1,
          name: "Defence",
          value: "4",
        },
        {
          id: 2,
          name: "Stat 3",
          value: "max",
        },
      ],
    },
    {
      id: 1,
      title: "Card 2",
      imgurl:
        "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_138.png",
      stats: [
        {
          id: 0,
          name: "Attack",
          value: "4",
        },
        {
          id: 3,
          name: "Stat 4",
          value: "above average",
        },
      ],
    },
  ];
}
</script>
