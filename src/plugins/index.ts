import { toolTipPlugin } from './tooltips/tooltips';
import { calendar } from './calendar/calendar';
import { pinia } from './pinia/pinia';
import { App } from 'vue';
import { rating } from './rating/rating';

export function plugins(app: App) {
    calendar(app);
    pinia(app);
    toolTipPlugin(app);
    rating(app);
}
