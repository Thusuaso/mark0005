<template>
    <h3 class="header mb-3">{{ header }}</h3>
        <!-- <div class="row text-center overflow-x-scroll" style="height:250px;">
        <div class="col-3" v-for="vid in videos" :key="vid.id" >
            <iframe :src="vid.url" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen ></iframe>
            <p class="videosTitle">
                {{ vid.name }}
            </p>
        </div>

    </div> -->
    <MazCarousel>

    <MazCard
      v-for="vid in videos" :key="vid.id"
      style="min-width: 400px;text-align:center;"
      noScrollBtn
    >

    <template #default>
        <iframe :src="vid.url" frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen style="width:350px;"></iframe>
                <p style="margin-bottom: 0;">
            {{ vid.name }}

        </p>

    </template>
    <template #content>

    </template>


    </MazCard>
  </MazCarousel>

</template>
<script lang="ts" setup>
import MazCarousel from 'maz-ui/components/MazCarousel';

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
<style scoped>

</style>