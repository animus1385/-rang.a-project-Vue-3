<script setup lang="ts">
import { ElemTable } from '@/interface/ElemTable';
import data from '@/components/BaseTable/company.json';
import BaseTabs from '@/components/BaseTabs/BaseTabs.vue';
import BaseTable from '@/components/BaseTable/BaseTable.vue';
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue';
import BaseSidebar from '@/components/BaseSidebar/BaseSidebar.vue';
import BaseElemTable from '@/components/BaseElemTable/BaseElemTable.vue';
import BasePanelStatistic from '@/components/BasePanelStatistic/BasePanelStatistic.vue';

const elems: ElemTable[] = data;
</script>

<template>
    <BaseHeader />
    <main class="content">
        <div class="container">
            <BaseSidebar />
            <section class="analitic-panel">
                <h1 class="analitic-panel__title">Аналитика по Автозаводской</h1>
                <BaseTabs />
                <BaseTable>
                    <template #head>
                        <BasePanelStatistic />
                    </template>
                    <BaseElemTable v-for="elem in elems" :key="elem.id" :options="elem" />
                </BaseTable>
            </section>
        </div>
    </main>
</template>
