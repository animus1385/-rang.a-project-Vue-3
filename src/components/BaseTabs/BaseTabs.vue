<template>
    <div class="tabs">
        <ul class="tabs__list">
            <li class="tabs__elem" v-for="elem in btns" :key="elem.id">
                <BaseBtn
                    @click="e => changeBtn(e.target.textContent)"
                    class="tabs__btn"
                    :class="{
                        active: elem.active,
                    }"
                    >{{ elem.title }}</BaseBtn
                >
            </li>
        </ul>
        <VDatePicker class="calendar" v-model.range="range">
            <template #default="{ inputValue, inputEvents }">
                <button v-on="inputEvents.start" class="calendar__slot-date">
                    <span v class="calendar__btnt">{{ inputValue.start }}</span>
                    <span class="calendar__separator"> — </span>
                    <span class="calendar__btn">{{ inputValue.end }}</span>
                </button>
            </template>
        </VDatePicker>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BaseBtn from '@/ui/BaseBtn/BaseBtn.vue';
import { BtnTab } from '@/interface/BtnTab';
import { RangeStar } from '@/interface/RangeStar';

const range = ref<RangeStar>({
    start: new Date(2018, 9, 12),
    end: new Date(2022, 9, 16),
});

const btns = ref<Array<BtnTab>>([
    {
        id: 1,
        title: 'Вчера',
        active: false,
    },
    {
        id: 2,
        title: 'Неделя',
        active: false,
    },
    {
        id: 3,
        title: '30 дней',
        active: true,
    },
    {
        id: 4,
        title: '90 дней',
        active: false,
    },
    {
        id: 5,
        title: 'Год',
        active: false,
    },
]);

function changeBtn(value: string) {
    btns.value.map(e => {
        e.active = false;
        if (e.title == value) {
            e.active = true;

            return e;
        }
    });
}
</script>
<style scoped lang="scss">
@import './BaseTabs.scss';
</style>
