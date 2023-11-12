import { GlobalThemeOverrides } from "naive-ui";
import { themeColor } from "../config/colors";

export const customTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: themeColor.primary.DEFAULT,
    primaryColorHover: themeColor.primary.dark,
    primaryColorPressed: themeColor.primary.darker,
    primaryColorSuppl: themeColor.primary.darker,

    infoColor: themeColor.info.DEFAULT,
    infoColorHover: themeColor.info.dark,
    infoColorPressed: themeColor.info.darker,
    infoColorSuppl: themeColor.info.darker,

    successColor: themeColor.success.DEFAULT,
    successColorHover: themeColor.success.dark,
    successColorPressed: themeColor.success.darker,
    successColorSuppl: themeColor.success.darker,

    warningColor: themeColor.warning.DEFAULT,
    warningColorHover: themeColor.warning.dark,
    warningColorPressed: themeColor.warning.darker,
    warningColorSuppl: themeColor.warning.darker,

    errorColor: themeColor.danger.DEFAULT,
    errorColorHover: themeColor.danger.dark,
    errorColorPressed: themeColor.danger.darker,
    errorColorSuppl: themeColor.danger.darker,
  },
};

export const setNaiveUiOverrideStyle = () => {
  const meta = document.createElement("meta");
  meta.name = "naive-ui-style";
  document.head.appendChild(meta);
};
