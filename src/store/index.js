import { createStore } from "vuex";
import dashboard from "../modules/dashboard/store";
import auth from "../modules/auth/store";

export default createStore({
  modules: {
    auth,
    dashboard,
  },
});
