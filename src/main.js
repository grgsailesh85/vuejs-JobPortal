import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router); // ✅ Use router before mounting
app.mount("#app"); // ✅ Mount the app only once
