import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import { getToken } from "@/assets/utils/auth";
const whiteList = ["/login", "/register"];

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login" || to.path === "/register") {
      next({ path: "/" });
    } else {
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          await store.dispatch("user/getInfo");
          next();
        } catch (error) {
          await store.dispatch("user/resetToken");
          Message.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1 || to.path.startsWith('/detail')) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach(() => {
  // finish progress bar
});
