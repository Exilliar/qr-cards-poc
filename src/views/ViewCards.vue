<template>
  <div></div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ViewCards extends Vue {
  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>
