<template>
    <h1 class="header mb-3">{{ project_name.toUpperCase() }}</h1>
    <div class="row m-auto text-center">
        <div class="col-sm-6">
            <div class="row m-auto text-center">
                <div v-for="(image, index) of photos" :key="index.id" class="col-sm-6 mb-3">
                <div class="customContainer ">
                                <div class="customElement">
                                    <img :src="image.ImageLink" :alt="image.name" style="cursor: pointer" @click="imageClick(index)" />
                                    <div class="card_title">{{ image.name }}</div>

                                </div>
                        </div>
            </div>


            </div>
        </div>
        <div class="col-sm-6 mt-2">
                        <iframe v-if="video" class="iframe-video" :src="video" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <img v-else
                  src="https://cdn.mekmarimage.com/galleria-project_photos/project-gif.gif"
                  class="iframe-video"
                />
            <div class="form-floating " >
                <textarea class="form-control text-justify" placeholder="Leave a comment here"
                    id="floatingTextareaDisabled" disabled v-model="description" style="height:250px;margin-bottom:6px;text-wrap:balance;text-align:justify;line-height: normal;background-color:white;margin-top:7px;"></textarea>

            </div>
            <div class="row m-auto text-center" style="margin-top:5px;">
                <h3 class="custom_header header " style="font-weight: bold;margin-top:2px;">{{ suggested_header }}</h3>

                <div class="col-sm-6" v-for="suggested in suggesteds" :key="suggested.id">
                    <ProjectsCardSuggested :link="suggested.link" :image="suggested.Image" :text="suggested.name"
                        :country="suggested.country" style="border:3px solid gray;"/>
                </div>
            </div>
        </div>

    </div>
    <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="photos" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.ImageLink" :alt="slotProps.item.name" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.ImageLink" :alt="slotProps.item.name" style="display: block" />
            </template>
        </Galleria>

</template>
<script lang="ts" setup>

import { useStore } from '~/store/index';

import control from '~/lang/control';
const store = useStore();
const router = useRouter();
await $fetch('/api/projects/detail/' + router.currentRoute._value.params.id)
    .then(async res => {
        await store.setProjectDetail(res);
    });
const photos = control.lang_project_detail_photos(store.getProjectDetail.photos,store.getLang);
let video = '';
if (store.getProjectDetail.video.length > 0) {
    video = store.getProjectDetail.video[0].VideosLink;

}else{

    video = '';
}
const description = control.lang_project_desc(store.getProjectDetail.description[0], store.getLang);
const suggesteds = control.lang_project(store.getProjectDetail.suggested,store.getLang);
const description_ = store.getProjectDescription;
const project_name = control.lang_project_detail_name(store.getProjectDetail.description[0], store.getLang);
const activeIndex = ref(0);
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const displayCustom = ref(false);

const imageClick = (index:any) => {
    activeIndex.value = index;
    displayCustom.value = true;
};
const suggested_header = store.getProjectsSuggestedHeader;

</script>
<style scoped>
.custom_header{
    color:gray;
    animation:custom_header_color 6s 2s infinite ;
}
@keyframes custom_header_color {
    40%{
        color:#63b32e;
    }
    80%{
        color:#0087cc;
    }
}
</style>