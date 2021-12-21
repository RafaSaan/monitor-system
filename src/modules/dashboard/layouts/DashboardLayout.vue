<template>
  <div class="admin">
    <div
      class="dasboard d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    >
      <h2 class="text-center">Admin</h2>
      <ul class="nav nav-pills flex-column mb-auto">
        <li><a href="#" class="nav-link text-white">Main</a></li>
        <li><a href="#" class="nav-link text-white">Details</a></li>
        <li><a href="#" class="nav-link text-white">Create</a></li>
        <li><a href="#" class="nav-link text-white">Logout</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
// import { useStore } from "vuex";
// import axios from "axios";
import useAuth from "@/composables/useAuth";
export default {
  name: "dashboard",

  setup() {
    // const store = useStore();
    // const token = computed(() => store.state.auth.token);

    // axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;

    // const setUser = () => {
    //   const resp = store.dispatch("auth/setUser");
    //   return resp;
    // };
    const { setUser } = useAuth();
    setUser();

    // const setUser = async () => {
    //   await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    //   const { data } = await axios.get("http://localhost:8000/api/user");
    //   console.log(data);
    // };
    // setUser();
  },
};
</script>

<style>
h1 {
  margin: 0;
}
.dasboard {
  width: 17.5rem;
  height: calc(100vh - 48px);
}
</style>
