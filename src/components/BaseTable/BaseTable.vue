<template>
    <div class="table">
        <h2 class="table__title">
            Динамика рейтинга и отзывов за 30 дней
            <ToolTip  class="ml-[5px]" text="Всплывающая подсказка про активность" />
        </h2>
        <div class="table__content">
            <slot name="head"></slot>
            <div class="table__head">
                <div class="table__head-elem">
                    <span class="table__label">
                        <span>Площадки и их активность</span>
                        <ToolTip text="Всплывающая подсказка про активность" />
                    </span>
                </div>
                <div class="table__head-elem">
                    <span class="table__label">Рейтинг и отзывы</span>
                    <span class="table__head-sub-elem">1 янв</span>
                    <span class="table__head-sub-elem">31 фев</span>
                </div>
                <div class="table__head-elem">
                    <span class="table__label"> Прирост отзывов и рейтинга</span>
                </div>
                <div class="table__head-elem">
                    <span class="table__label">Доля негативных отзывов на сегодня</span>
                </div>
                <div class="table__head-elem">
                    <span class="table__label">Место в городе</span>
                </div>
            </div>
            <div class="table__body"><slot /></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ToolTip from '@/ui/ToolTip/ToolTip.vue';
</script>
<style scoped lang="scss">
@import './BaseTable.scss';
</style>
