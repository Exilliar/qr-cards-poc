<template>
  <div style="width: 100%" class="d-flex justify-center pt-2">
    <CardInfo style="width: 75%" :card="cardData" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import CardInfo from "@/components/CardInfo/CardInfo.vue";
import { CardData } from "@/models/CardData";

@Component({
  components: { CardInfo },
})
export default class ViewCards extends Vue {
  // mounted() {
  //   console.log(this.$route.params.id);
  // }

  cardData: CardData = {
    id: 1,
    title: "Card 1",
    imgurl:
      "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1458686012306-9N7QFP31LGPADKH2B5WQ/ke17ZwdGBToddI8pDm48kF7eaw33EkacYOryCnWb_0dZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEbp2JmVQlJTxJVSRYOVShHD4RSaKDI6Oafg7QZpiC7is221bnTVPq-SUAxNEJ31GA/17_-_Johnny_Lawrence_1024x1024.jpg",
    stats: [
      {
        id: 0,
        name: "Attack",
        value: 3,
      },
      {
        id: 1,
        name: "Defence",
        value: 4,
      },
      {
        id: 2,
        name: "Stat 3",
        value: "max",
      },
    ],
  };
}
</script>
