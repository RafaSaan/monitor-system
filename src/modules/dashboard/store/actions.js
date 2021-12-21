import systemApi from "@/api/systemApi";

export const loadEmployeeData = async ({ commit }) => {
  try {
    const { data } = await systemApi.get("/api/product");
    // console.log(data);

    commit("setEmployeeData", data);
  } catch (error) {
    console.log(error);
  }
};

export const editEmployeeData = async ({ _ }, data) => {
  try {
    const { id, dataToEdit } = data;

    await systemApi.put(`/api/product/${id}`, dataToEdit);
  } catch (error) {
    console.log(error);
    console.log(_);
  }
};
