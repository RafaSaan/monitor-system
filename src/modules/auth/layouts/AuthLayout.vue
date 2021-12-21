<template>
  <div class="auth d-flex align-items-center flex-column">
    <h2 class="mt-4">Bienvenido.</h2>
    <form class="auth__form mt-3 d-flex flex-column" @submit.prevent="onLogin">
      <div class="mb-3">
        <label for="code" class="form-label">Usuario</label>
        <input
          type="text"
          class="form-control"
          id="user"
          name="user"
          placeholder="Usuario"
          autocomplete="off"
          required
          v-model="loginData.name"
        />
      </div>
      <div class="mb-3">
        <label for="product" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
          v-model="loginData.password"
        />
      </div>

      <button class="btn btn-dark">Ingresar</button>
    </form>
  </div>
</template>

<script>
import useAuth from "@/composables/useAuth";

import { useRouter } from "vue-router";

export default {
  name: "authLayout",

  setup() {
    const router = useRouter();

    const loginData = {
      name: "ignacio hernandez",
      password: "12345",
    };

    const { login } = useAuth();

    const onLogin = async () => {
      await login(loginData);
      router.push("/dashboard");
    };

    return {
      onLogin,
      loginData,
    };
  },
};
</script>

<style>
.auth__form {
  width: 20rem;
}
</style>
