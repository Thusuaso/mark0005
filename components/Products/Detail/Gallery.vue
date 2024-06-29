<template>
    <CarouselItem>
        <CarouselItemImage width="800" :src="image" :alt="name" style="object-fit:fill;border-radius:10px;height:620px;"/>
    </CarouselItem>


</template>
<script lang="ts" setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type:String,
        required: true
    }
});
const { image,name } = props;
</script>