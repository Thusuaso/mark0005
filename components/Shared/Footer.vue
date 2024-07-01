<template>
    <div class=" m-auto">
        <div class="row m-auto ">
            <div class="col-sm-4 ">
                <h3 class="header">{{ footer.about.header }}</h3>
                <p class="about-description">{{ footer.about.description }}</p>
                <ul>
                    <li v-for="item of footer.about.items" :key="item.id" class="about-description">{{ item.value }}
                    </li>
                </ul>
            </div>
            <div class="col-sm-4 ">
                <h3 class="header mb-2">{{ footer.news.header }}</h3>
                <div class="row m-auto text-center">
                    <SharedFancybox :options="{
                    Carousel: {
                        transition: 'slide'
                    }
                }">
                        <a class="fancybox ml-3 mb-5 col-4" v-for="item of footer.news.items" :key="item.id"
                            :href="item.jpegb" data-fancybox="gallery">
                            <img :src="item.jpegb" style="width:100%;height:auto;" />
                        </a>
                    </SharedFancybox>
                    <!-- <MazGallery :images="images" :height="345" /> -->
                </div>

            </div>
            <div class="col-sm-4">
                <h3 class="header mb-2">{{ footer.personal.header }}</h3>
                <div class="personalContainer" v-for="item in footer.personal.items" :key="item.id">
                    <div class="personalContainerLimited">
                        <div class="personalCardGrid">
                            <div class="personalCardColumnOne">
                                <img :src="item.image" />
                            </div>
                            <div class="personalCardColumnTwo">
                                <div>{{ item.name }}</div>
                                <div>{{ item.job }}</div>
                                <div>{{ item.email }}</div>
                                <div>{{ item.whatsapp }}</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script lang="ts" setup>
import MazGallery, { type MazGalleryImage } from 'maz-ui/components/MazGallery'

const props = defineProps({
    footer: {
        type: Object,
        required: true
    }
});
const { footer } = props;

const images: MazGalleryImage[] = footer.news.items;
</script>
