<template>
    <div class="row m-auto text-center">
        <SharedFancybox :options="{
                Carousel: {
                    transition: 'slide'
                }
            }">
            <a class="fancybox ml-3 mb-3 col-sm-4" data-fancybox="gallery" v-for="photo of photos" :key="photo.Id"
                :href="photo.imagePath">
                <ProductsDetailPhoto :image="photo.imagePath" :name="photo.name" />
            </a>
        </SharedFancybox>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    photos: {
        type: Array,
        required:true
    }
});
const { photos } = props;
</script>