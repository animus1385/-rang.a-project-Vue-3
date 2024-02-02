import { createPinia } from 'pinia';
import { App } from 'vue';

export function pinia(app: App) {
    app.use(createPinia());
}
