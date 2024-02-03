<template>
    <div class="custom-select" @blur="open = false">
        <div class="custom-select__selected" :class="{ open: open }" @click="openSelect">
            {{ selected }}
            <div class="custom-select__icon"></div>
        </div>
        <div class="custom-select__items" :class="{ hide: !open }">
            <div class="custom-select__item" v-for="(option, i) in options" :key="i" @click="changeElem(option)">
                {{ option }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Select } from '@/interface/Select';

const props = defineProps<Select>();

const emit = defineEmits(['input']);
const open = ref<boolean>(false);

const selected = ref<String>(props.default ? props.default : props.options.length > 0 ? props.options[0] : null);

const openSelect = () => {
    open.value = !open.value;
};

const changeElem = (elem: String) => {
    selected.value = elem;
    open.value = false;
};
</script>
<style lang="scss" scoped>
@import './CustomSelect.scss';
</style>
