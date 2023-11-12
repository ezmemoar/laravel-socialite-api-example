import { ref } from "vue";
import { axios } from "../plugins/axios";
import { User } from "../interfaces/user.interface";

export const userServices = () => {
  const loading = ref(false);

  const getUsers = async (params: User) =>
    await axios.get("/users", { params });

  return { loading, getUsers };
};
