<script setup lang="ts">
import { onMounted, ref, onUpdated, onUnmounted } from 'vue';
import tippy, { Instance, Props } from 'tippy.js';
import { Tooltip } from '@/interface/Tooltip';

import 'tippy.js/dist/tippy.css';

const props = defineProps<Tooltip>();

const tooltip = ref<HTMLElement>(null);

let tippyInstance: Instance = null;

const options: Partial<Props> = {
    content: props.text,
};

function initTippy() {
    if (tippyInstance) tippyInstance.destroy();
    tippyInstance = tippy(tooltip.value, options);
}

onMounted(initTippy);
onUpdated(initTippy);
onUnmounted(() => tippyInstance.destroy());
</script>

<template>
    <span class="tooltip" ref="tooltip">
        <img svg-inline class="icon" src="@/assets/svg/info.svg" alt="example" />
    </span>
</template>

<style scoped lang="scss">
@import './ToolTip.scss';
</style>
