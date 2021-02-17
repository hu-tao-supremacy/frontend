import { createApp } from 'vue';
import { Button } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(Button);

app.use(router).mount('#app');
