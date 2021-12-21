<template>
  <div class="makeData text-center">
    <h3 class="pt-3">Crear Datos.</h3>
    <p class="pt-2">
      En esta vista podras simular los datos aquivalentes a un dia de trabajo
    </p>
    <p class="pt-2">
      Se crearan aleatoriamente la cantidad de productos terminados de cada uno
      de los empleados.
    </p>
    <p class="pt-2 text-success fs-4" v-if="isComplete">
      Los datos se han creado correctamente!
    </p>

    <button
      type="button"
      class="btn btn-primary m-2"
      @click="createRandomData"
      v-if="!isComplete"
    >
      Crear Datos
    </button>
    <router-link
      to="/login"
      type="button"
      class="btn btn-success m-2"
      v-if="isComplete"
      >Siguente</router-link
    >
  </div>
</template>

<script>
import { ref } from "vue";

import useEmployeeData from "@/composables/useEmployeeData";

export default {
  name: "makeData",

  setup() {
    const isComplete = ref(false);

    const { loadEmployeeData, allEmployeeData, editEmployeeData } =
      useEmployeeData();

    loadEmployeeData();

    const createRandomData = () => {
      isComplete.value = true;

      for (let i = 0; i < allEmployeeData.value.length; i++) {
        const { name, id } = allEmployeeData.value[i];

        const randomNumberProducts = (min, max) => {
          const randomNumber =
            Math.floor(Math.random() * (max - min + 1)) + min;
          return randomNumber;
        };

        const dataToEdit = {
          name: name,
          total: randomNumberProducts(45, 55),
        };

        editEmployeeData({ id, dataToEdit });
      }
    };

    return {
      createRandomData,
      isComplete,
    };
  },
};
</script>

<style></style>
