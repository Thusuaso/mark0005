<template>
    <h3 class="header mb-3">{{ project_name.toUpperCase() }}</h3>
    <div class="row m-auto text-center">
        <div class="col-sm-6">
            <div class="row m-auto text-center">

                <SharedFancybox :options="{
                    Carousel: {
                        transition: 'slide'
                    }
                }">
                    <div class="row m-auto text-center">


                    </div>
                    <a class="fancybox ml-3 mb-3 col-sm-6" v-for="item of photos" :key="item.id" :href="item.ImageLink"
                        data-fancybox="gallery" >

                            <div class="customContainer ">
                                <div class="customElement">
                                    <img :src="item.ImageLink" style="width:100%;height:250px;" />
                                    <p class="card_title">{{ item.ProductName }}</p>

                                </div>
                        </div>
                    </a>


                </SharedFancybox>


            </div>
        </div>
        <div class="col-sm-6">
                        <iframe v-if="video" class="iframe-video" :src="video" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <img v-else
                  src="https://cdn.mekmarimage.com/galleria-project_photos/project-gif.gif"
                  class="iframe-video"
                />
            <div class="form-floating " style="margin-bottom:34px;">
                <textarea class="form-control text-justify" placeholder="Leave a comment here"
                    id="floatingTextareaDisabled" disabled v-model="description" style="height:250px;"></textarea>
                <label for="floatingTextareaDisabled">{{ description_ }}</label>
            </div>
            <div class="row m-auto text-center">
                <div class="col-sm-6" v-for="suggested in suggesteds" :key="suggested.id">
                    <ProjectsCard :link="suggested.link" :image="suggested.Image" :text="suggested.name"
                        :country="suggested.country" />
                </div>
            </div>
        </div>

    </div>

</template>
<script lang="ts" setup>

import { useStore } from '~/store/index';

import control from '~/lang/control';
const store = useStore();
const router = useRouter();
await $fetch('/api/projects/detail/' + router.currentRoute._value.params.id)
    .then(res => {
        store.setProjectDetail(res);
    });
const photos = store.getProjectDetail.photos;
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

</script>