<template>
    <h1 class="header mb-3">{{ item.header }}</h1>
    <div class="row">
        <SharedFancybox :options="{
        Carousel: {
            transition: 'slide'
        }
    }">
            <a class="fancybox ml-3 mb-3 col-sm-3" v-for="img of item.images" :key="img.id" :href="img.image"
                data-fancybox="gallery">
                <div class="customContainer ">
                    <div class="customElement">
                        <img class="lazyload" :src="img.image" />

                        <div class="card_title">
                            {{ img.title }}
                        </div>
                    </div>
                </div>
            </a>
        </SharedFancybox>
    </div>

</template>
<script lang="ts" setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});
const { item } = props;
</script>