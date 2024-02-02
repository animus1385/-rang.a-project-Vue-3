import type { App } from 'vue';
import { defineAsyncComponent } from 'vue';

export function toolTipPlugin(app: App) {
    app.component(
        'ToolTip',
        defineAsyncComponent(() => import('@/ui/ToolTip/ToolTip.vue')),
    );
}
