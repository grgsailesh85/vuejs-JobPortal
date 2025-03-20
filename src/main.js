import { createApp } from "vue";
import App from "./App.vue";
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import router from "./router";

import "./assets/main.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router); // ✅ Use router before mounting
app.use(Toast)
app.mount("#app"); // ✅ Mount the app only once
