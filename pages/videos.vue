<template>
    <div class="">

        <VideosCard :videos="videos.projects" :header="videos.title_1" />
        <hr style="padding-bottom:10px;"/>
        <VideosCard :videos="videos.production" :header="videos.title_2" />
        <hr />
        <VideosCard :videos="videos.informative" :header="videos.title_3" />

    </div>
</template>
<script setup lang="ts">
import { useStore } from '~/store/index';
const store = useStore();
const videos = store.getVideos;
</script>