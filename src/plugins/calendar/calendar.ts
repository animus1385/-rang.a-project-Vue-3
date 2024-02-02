import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import type { App } from 'vue';

export function calendar(app: App) {
    app.use(VCalendar, {});
}
