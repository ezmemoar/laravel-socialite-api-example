import base from "axios";
import { useNaiveDiscrete } from "../composables/useNaiveDiscrete";

export const axios = base.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axios.interceptors.request.use(
  (config) => config,
  (err) => {
    const { message } = useNaiveDiscrete();
    message.error(err);
  },
);
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    const { message } = useNaiveDiscrete();
    message.error(err);
  },
);
