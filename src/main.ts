import { createApp } from 'vue';
import { Button, Row, Col, Tag, Icon } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(Button);
app.use(Row);
app.use(Col);
app.use(Tag);
app.use(Icon);

app.use(router).mount('#app');
