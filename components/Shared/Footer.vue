<template>
    <div class="container" >
        <div class="row m-auto ">
            <div class="col-sm-4 ">
                <h3 class="header">{{ footer.about.header }}</h3>
                <p :class="
                lang == 'en' ? 'about-description-en':'' ||
                lang == 'ar' ? 'about-description-ar':'' ||
                lang=='ru' ? 'about-description-ru':'' || 
                lang == 'fr'? 'about-description-fr':'' ||
                lang == 'es'? 'about-description-es':'' 
                
                ">{{ footer.about.description }}</p>
                <ul v-if="lang!= 'ru'">
                    <li v-for="item of footer.about.items" :key="item.id" :class="
                        lang == 'en' ? 'about-value-en':'' || 
                        lang == 'ar' ? 'about-value-ar':'' ||
                        lang=='ru' ? 'about-value-ru':'' || 
                        lang == 'fr'? 'about-value-fr':'' ||
                        lang == 'es'? 'about-value-es':'' 
                        
                        ">{{ item.value }}
                    </li>
                </ul>
                <div v-else>
                    <p class="about-value-ru" v-for="item of footer.about.items" :key="item.id">{{ item.value }}</p>
                </div>
                <ul class="row m-auto text-center">
                    <li class="col-2" v-for="social of footer.about.socials" style="list-style-type: none;">
                        <a :href="social.link" target="_blank" style="color: #1357bc;">
                            <i :class="social.icon" class="text-decoration-none" ></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-4 ">
                <h3 class="header mb-2">{{ footer.news.header }}</h3>
                <div class=" flex justify-center">
        <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="footer.news.items" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.image" :alt="slotProps.item.name" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.image" :alt="slotProps.item.name" style="display: block" />
            </template>
        </Galleria>

        <div v-if="footer.news.items" class="row m-auto text-center" >
            <div v-for="(image, index) of footer.news.items" :key="index" class="col-4">
                <img :src="image.image" :alt="image.name" class="footer-news-img" @click="imageClick(index)" />
            </div>
        </div>
    </div>

            </div>
            <div class="col-sm-4">
                <h3 class="header mb-2">{{ footer.personal.header }}</h3>
                <div class="personalContainer" v-for="item in footer.personal.items" :key="item.id">
                    <div class="personalContainerLimited">
                        <div class="personalCardGrid">
                            <div class="personalCardColumnOne">
                                <img :src="item.image" :alt="item.name + '-mekmar'"/>
                            </div>
                            <div class="personalCardColumnTwo">
       
                                <div>{{ item.name }}</div>
                                <div>{{ item.job }}</div>
                                <div>
                                    <a :href="'mailto:'+item.email" class="text-decoration-none text-body-emphasis">
                                        <i class="fa fa-envelope" style="color: white;"></i>
                                        <span class="footer-span">{{ item.email }}</span>
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" :href="item.watsappLink" class="text-decoration-none">
                                        <i class="fa fa-whatsapp" style="color: white;"></i>
                                        <span class="footer-span">{{ item.whatsapp }}</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script lang="ts" setup>

const props = defineProps({
    footer: {
        type: Object,
        required: true
    },
    lang:{
        type:String,
        required:true
    }
});
const { footer } = props;

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











</script>
<style scoped> 
    
</style>