import { createApp } from "vue";
import { createPinia } from "pinia";
import { setNaiveUiOverrideStyle } from "./plugins/naiveUi";
import router from "./plugins/vueRouter";

import App from "./App.vue";

import "./tailwind.css";

setNaiveUiOverrideStyle();

createApp(App).use(createPinia()).use(router).mount("#app");
