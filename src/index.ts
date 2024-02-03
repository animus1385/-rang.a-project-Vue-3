import * as App from './App.vue';
import VCalendar from 'v-calendar';
import { createApp, defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';
import vue3StarRatings from 'vue3-star-ratings';

import 'v-calendar/style.css';
import './assets/styles/main.scss';

const app = createApp(App);

app.use(VCalendar, {});
app.use(createPinia());

app.component('vue3-star-ratings', vue3StarRatings);

app.component(
    'ToolTip',
    defineAsyncComponent(() => import('@/ui/ToolTip/ToolTip.vue')),
);

app.mount('#app');
