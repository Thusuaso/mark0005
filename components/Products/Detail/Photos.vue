<template>
        <!-- <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="photos" :responsiveOptions="responsiveOptions" :numVisible="7"
             :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img class="galleria-img" :src="slotProps.item.imagePath" :alt="slotProps.item.name"  />
            </template>
            <template #thumbnail="slotProps">
                <img class="galleria-img" :src="slotProps.item.imagePath" :alt="slotProps.item.name"  />
            </template>
        </Galleria>

        <div v-if="except_photo" class="row m-auto text-center" >
            <div v-for="(image, index) of except_photo" :key="index" class="col-sm-4 mb-2">
                <img class="product_detail_photo" :src="image.imagePath" :alt="image.name"  @click="imageClick(index)" />
            </div>
        </div> -->
        <div class="row">
        <SharedFancybox :options="{
        Carousel: {
            transition: 'slide'
        }
    }">
            <a class="fancybox col-sm-4 mb-2" v-for="img of except_photo" :key="img.Id" :href="img.imagePath"
                data-fancybox="gallery">
                <div class="customContainer ">
                    <div class="customElement">
                        <img class="lazyload" :src="img.imagePath" />
                    </div>
                </div>
            </a>
        </SharedFancybox>
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
