<template>
  <v-app>
    <Header />
    <v-main>
      <Button text="this is a test" :onClick="buttonClick" />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/TheHeader.vue";
import Button from "./components/Button.vue";

@Component({
  components: { Header, Button },
})
export default class App extends Vue {
  buttonClick() {
    console.log("clicked");
  }
}
</script>
