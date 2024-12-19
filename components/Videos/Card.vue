<template>
    <h1 class="header" style="margin-bottom:10px;">{{ header }}</h1>
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

    <div class="scrollmenu">
        <a v-for="vid in videos" :key="vid.id">
            <iframe :src="vid.url" frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen ></iframe>
            <p class="videosTitle">
                {{ vid.name }}
            </p>

        </a>
        
    </div>

    <!-- <MazCarousel
    no-scroll-btn
    >

    <MazCard

      v-for="vid in videos" :key="vid.id"
      style="min-width: 400px;text-align:center;"


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
  </MazCarousel> -->

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
div.scrollmenu {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}


</style>