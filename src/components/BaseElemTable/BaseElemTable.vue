<template>
    <div class="table-elem">
        <div class="table-elem__sites">
            <label class="table-elem__toggle" :for="`toggle-${options.id}`">
                <input type="checkbox" :id="`toggle-${options.id}`" class="table-elem__toggle-checkbox" />
                <div class="table-elem__toggle-bg"></div>
            </label>
            <img class="table-elem__icon" :src="options.iconCompany" :alt="options.company" />
            <a :href="options.companyLink" class="table-elem__company">{{ options.company }}</a>
        </div>
        <div class="table-elem__rating-review">
            <div class="table-elem__sub-elem">
                <span class="table-elem__cell">{{ options.startReviewProc }}</span>
                <span class="table-elem__text">{{ options.startReviewcount }}</span>
            </div>
            <div class="table-elem__sub-elem">
                <span class="table-elem__cell">{{ options.lastReviewProc }}</span>
                <span class="table-elem__text">{{ options.lastReviewCount }}</span>
            </div>
        </div>
        <div class="table-elem__grow-review">
            <span class="table-elem__text-top">+{{ options.growReview }}</span>
            <span class="table-elem__text">+{{ options.growRating }}</span>
        </div>
        <div class="table-elem__bad-review-now" v-if="options.reviewAll">
            <span class="table-elem__cell">{{ procentBadReview }}%</span>
            <span class="table-elem__text">
                <span>{{ options.badReviewAllNow ? options.badReviewAllNow : 0 }} отзывов</span>
                <span> из {{ options.reviewAll }}</span>
            </span>
        </div>
        <div class="table-elem__bad-review-now" v-else>
            <span class="table-elem__cell"></span>
            <span class="table-elem__text">Нет озывов </span>
        </div>
        <div class="table-elem__place-in-city">
            <span>{{ options.placeCity }}</span>
            <img svg-inline src="@/assets/svg/arrowUp.svg" alt="" />
            <img svg-inline src="@/assets/svg/arrowDown.svg" alt="" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, type PropType } from 'vue';
import { ElemTable } from '@/interface/ElemTable';

const { options } = defineProps({
    options: Object as PropType<ElemTable>,
});

const procentBadReview = computed(() => {
    if (options.badReviewAllNow && options.reviewAll) {
        return Math.floor((options.badReviewAllNow * 100) / options.reviewAll);
    }
});
</script>
<style lang="scss" scoped>
@import './BaseElemTable.scss';
</style>
