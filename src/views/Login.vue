<template>
  <v-card>
    <v-card-title>
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" v-model="username" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <Button text="Register" color="success" :onClick="submit" />
      <v-spacer></v-spacer>
      <Button text="Login" color="info" :onClick="submit" />
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import Button from "@/components/Button.vue";
import { Vue, Component } from "vue-property-decorator";
import Axios from "axios";
import router from "@/router";

import store from "@/store";

@Component({
  components: { Button },
})
export default class Login extends Vue {
  baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://qr-cards-api.rorywebber.co.uk/"
      : "http://localhost:8000/";
  axios = Axios.create({
    baseURL: this.baseUrl,
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  });

  username = "";

  mounted() {
    console.log("store:", store.state.id);
  }

  submit() {
    this.axios.get(`account/${this.username}`).then((res) => {
      console.log(res);
      store.dispatch("updateId", res.data.id);
      router.push({
        name: "Home",
      });
    });
  }
}
</script>
