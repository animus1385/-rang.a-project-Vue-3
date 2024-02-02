<template>
    <div class="panel-statistic">
        <div class="panel-statistic__elem">
            <span class="panel-statistic__number">1720</span>
            <span class="panel-statistic__text"> запросов отправлено</span>
        </div>
        <div class="panel-statistic__elem">
            <span class="panel-statistic__number panel-statistic__number--green">142</span>
            <span class="panel-statistic__text"> прирост отзывов</span>
        </div>
        <div class="panel-statistic__elem">
            <span class="panel-statistic__number panel-statistic__number--red">22</span>
            <span class="panel-statistic__text"> негатива перехвачено</span>
        </div>
        <div class="panel-statistic__elem panel-statistic__elem--rating">
            <span class="panel-statistic__number">{{ rating }} </span>
            <div class="panel-statistic__reting-text">
                <vue3-star-ratings
                    :disableClick="true"
                    starColor="#FFEB3B"
                    inactiveColor="#D2D2D2"
                    v-model="rating"
                    starSize="13"
                ></vue3-star-ratings>
                <span class="panel-statistic__text"> 629 отзывов</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const rating = ref<Number>(4.5);
</script>
<style lang="scss" scoped>
@import './BasePanelStatistic.scss';
</style>
