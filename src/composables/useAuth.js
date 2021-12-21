import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();

  const login = data => {
    const resp = store.dispatch("auth/login", data);
    return resp;
  };
  const setUser = () => {
    const resp = store.dispatch("auth/setUser");
    return resp;
  };

  return {
    login,
    setUser,
  };
};

export default useAuth;
