<template>
  <div>
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
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    stats: [
      {
        id: 0,
        name: "Stat 1",
        value: 3,
      },
      {
        id: 1,
        name: "Stat 2",
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
