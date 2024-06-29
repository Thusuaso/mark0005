<template>
    <img class="product-img" :src="image"  :alt="name" />
</template>
<script setup lang="ts">
const props = defineProps({
    image: {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});
const { image, name } = props;
</script>