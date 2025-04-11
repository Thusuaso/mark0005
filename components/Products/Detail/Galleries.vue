<template>
    <div class="product_gallery">
        <Galleria :value="photos"  :numVisible="5" :circular="true" 
            :showItemNavigators="true" :showThumbnails="false" style="border:none;">
            <template #item="slotProps">
                
                <img :src="slotProps.item.imagePath" :alt="slotProps.item.name" style="width: 100%; display: block;height:450px;border:none;cursor:pointer" @click="imageClickVisible"/>
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.imagePath" :alt="slotProps.item.name" style="display: block;border:none;cursor:pointer" @click="imageClickVisible" />
            </template>
        </Galleria>


        <Galleria v-model:visible="image_click_visible" :value="photos" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true"  :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.imagePath" :alt="slotProps.item.name" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.imagePath" :alt="slotProps.item.name" style="display: block" />
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
let image_click_visible = ref(false);
const responsiveOptions = ref([
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const imageClickVisible = ()=>{
    image_click_visible.value = true;
};
</script>