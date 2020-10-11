<template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/TheHeader.vue";
import Button from "./components/Button.vue";

@Component({
  components: { Header },
})
export default class App extends Vue {}
</script>
