<template>
    <div v-for="item in fabrication.items" :key="item.id" class="mb-3">
        <FabricationCard :item="item" />
    </div>
</template>
<script lang="ts" setup>
import { useStore } from '~/store/index';
const store = useStore();
const fabrication = store.getFabrication;
</script>