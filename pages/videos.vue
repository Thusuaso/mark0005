<template>
    <div class="container row m-auto" style="width:99%;">

        <VideosCard :videos="videos.projects" :header="videos.title_1" />
        <VideosCard :videos="videos.production" :header="videos.title_2" />
        <VideosCard :videos="videos.informative" :header="videos.title_3" />

    </div>
</template>
<script setup lang="ts">
import { useStore } from '~/store/index';
const store = useStore();
const videos = store.getVideos;
</script>