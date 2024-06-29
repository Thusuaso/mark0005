<template>
    <h3 class="header mb-3">{{ header }}</h3>
    <div class="row m-auto text-center">
        <div class="col-sm-3" v-for="vid in videos" :key="vid.id">
            <iframe :src="vid.url" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen style="width: 100%; height: auto"></iframe>
            <p class="videosTitle">
                {{ vid.name }}
            </p>
        </div>

    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    videos: {
        type: Object,
        required:true
    },
    header: {
        type: String,
        required: true
    },


});
const { videos, header } = props;
</script>