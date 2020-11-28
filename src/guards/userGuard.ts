import store from "@/store";
import router from "@/router";

export const userGuard = (to: any, from: any, next: any) => {
  // If the account is authenticated, continue with the route
  if (store.state.id !== -1) {
    return next();
  }

  // Oterhwise, log in
  router.push({ name: "login" });
};
