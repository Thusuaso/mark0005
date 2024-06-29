<template>
    <Carousel control fade>
        <CarouselInner>
            <ProductsDetailGallery v-for="photo in photos" :key="photo.Id" :image="photo.imagePath"
                :name="photo.name" />

        </CarouselInner>
    </Carousel>
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