import App from './App.vue';
import { createApp } from 'vue';
import { plugins } from './plugins';
import './assets/styles/main.scss';

const app = createApp(App);

plugins(app);

app.mount('#app');
