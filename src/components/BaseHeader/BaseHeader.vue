<template>
    <header class="header">
        <a href="/" class="header__logo">
            <picture class="header__picture">
                <img svg-inline class="header__img" src="@/assets/svg/logo.svg" alt="logo" />
            </picture>
        </a>
        <CustomSelect :options="select1.options" :default="select1.default" class="select" />
        <a href="#" class="header__wigets">
            <img svg-inline class="header__wigets-icon" src="@/assets/svg/star.svg" /> Виджет «Хорошее место»</a
        >
        <CustomSelect :options="select2.options" :default="select2.default" class="select" />
        <CustomSelect :options="select3.options" :default="select3.default" class="select" />
    </header>
</template>
<script lang="ts" setup>
import CustomSelect from '@/ui/CustomSelect/CustomSelect.vue';
import { ref } from 'vue';
import { Select } from '@/interface/Select';

const select1 = ref<Select>({
    options: [
        'Лёгкая стоматология на Автозаводской',
        'Лёгкая стоматология на Автозаводской',
        'Лёгкая стоматология на Автозаводской',
        'Лёгкая стоматология на Автозаводской',
    ],
    default: 'Лёгкая стоматология на Автозаводской',
});
const select2 = ref<Select>({
    options: [
        'Поддержка',
        'Лёгкая стоматология на Автозаводской',
        'Лёгкая стоматология на Автозаводской',
        'Лёгкая стоматология на Автозаводской',
    ],
    default: 'Поддержка',
});
const select3 = ref<Select>({
    options: [
        'Константин К',
        'Лёгкая стоматология на Автозаводской',
        'Лёгкая стоматология на Автозаводской',
        'Лёгкая стоматология на Автозаводской',
    ],
    default: 'Константин К',
});
</script>
<style lang="scss" scoped>
@import './BaseHeader.scss';
</style>
