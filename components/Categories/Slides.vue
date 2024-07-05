<template>
  <!-- <Carousel control>
    <CarouselInner>
      <CategoriesSlide v-for="slide of slides" :key="slide.id" :image="slide.imagePath" :link="slide.link"
        :name="slide.name" :header="slide.title" />
    </CarouselInner>
  </Carousel> -->
  <Carousel :value="slides" :numVisible="1" :numScroll="1" :autoplayInterval="3000" orientation="horizontal"  :circular="true" :showIndicators="false" :showNavigators="false">
    <template #item="slotProps">
        <div class=" rounded   ">
            <div class="">
                <div class="relative mx-auto">
                    <img :src="slotProps.data.imagePath" :alt="slotProps.data.title" class="w-100" height="230" />
                </div>
            </div>
            <div class="mb-3 font-medium text-center">{{ slotProps.data.title }}</div>
           
        </div>
    </template>
</Carousel>
</template>
<script lang="ts" setup>
const props = defineProps({
  slides: {
    type: Array,
    required:true
  }
});
const { slides } = props;
</script>