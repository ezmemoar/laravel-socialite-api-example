import { createDiscreteApi } from "naive-ui";
import { themeColor } from "../config/colors";

export const useNaiveDiscrete = () => {
  const { loadingBar, message } = createDiscreteApi(["loadingBar", "message"], {
    loadingBarProviderProps: {
      loadingBarStyle: {
        loading: {
          backgroundColor: themeColor.primary.DEFAULT,
        },
        error: {
          backgroundColor: themeColor.danger.DEFAULT,
        },
      },
    },
  });

  return { loadingBar, message };
};
