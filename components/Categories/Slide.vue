<template>
    <a :href="link">
        <CarouselItem>
            <CarouselItemImage width="800" height="250" :src="image" />
        </CarouselItem>
    </a>
</template>
<script lang="ts" setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required:true
    },
    header: {
        type: String,
        required:true
    },
    name: {
        type:String,
        required:true
    }
});
const { image,link,header,name } = props;
</script>