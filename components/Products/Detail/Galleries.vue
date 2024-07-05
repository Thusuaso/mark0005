<template>
    <div class="product_gallery">
        <Galleria :value="photos"  :numVisible="5" :circular="true" 
        :showItemNavigators="true" :showThumbnails="false">
        <template #item="slotProps">
            
            <img :src="slotProps.item.imagePath" :alt="slotProps.item.name" style="width: 100%; display: block;height:450px;" />
        </template>
        <template #thumbnail="slotProps">
            <img :src="slotProps.item.imagePath" :alt="slotProps.item.name" style="display: block;" />
        </template>
    </Galleria>
    </div>

</template>
<script setup lang="ts">
const props = defineProps({
    photos: {
        type: Array,
        required: true
    }
});
const { photos } = props;

</script>