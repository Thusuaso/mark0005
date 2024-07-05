<template>
        <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="photos" :responsiveOptions="responsiveOptions" :numVisible="7"
             :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.imagePath" :alt="slotProps.item.name" style="width: 75%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.imagePath" :alt="slotProps.item.name" style="display: block" />
            </template>
        </Galleria>

        <div v-if="except_photo" class="row m-auto text-center" >
            <div v-for="(image, index) of except_photo" :key="index" class="col-sm-4 mb-2">
                <img class="product_detail_photo" :src="image.imagePath" :alt="image.name"  @click="imageClick(index)" />
            </div>
        </div>

        
</template>
<script lang="ts" setup>
import {ref} from 'vue';
const props = defineProps({
    photos: {
        type: Array,
        required:true
    },
    except_photo:{
        type:Array,
        required:true
    }


});
const { photos,except_photo } = props;
const activeIndex = ref(0);
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const displayCustom = ref(false);

const imageClick = (index:any) => {
    activeIndex.value = index + 1;
    displayCustom.value = true;
};
</script>