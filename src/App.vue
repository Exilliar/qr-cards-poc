<template>
  <v-app>
    <Header />
    <v-main>
      <BackButton />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/TheHeader.vue";
import BackButton from "./components/BackButton.vue";

@Component({
  components: { Header, BackButton },
})
export default class App extends Vue {}
</script>
