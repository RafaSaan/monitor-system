import { computed } from "vue";
import { useStore } from "vuex";
const useEmployeeData = () => {
  const store = useStore();

  const loadEmployeeData = () => {
    const resp = store.dispatch("dashboard/loadEmployeeData");
    return resp;
  };
  const editEmployeeData = data => {
    const resp = store.dispatch("dashboard/editEmployeeData", data);
    return resp;
  };

  return {
    loadEmployeeData,
    allEmployeeData: computed(() => store.getters["dashboard/allEmployeeData"]),
    editEmployeeData,
  };
};

export default useEmployeeData;
