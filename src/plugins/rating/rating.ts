import { App } from 'vue';
import vue3StarRatings from 'vue3-star-ratings';

export function rating(app: App) {
    app.component('vue3-star-ratings', vue3StarRatings);
}
