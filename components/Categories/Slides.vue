<template>
  <!-- <Carousel control>
    <CarouselInner>
      <CategoriesSlide v-for="slide of slides" :key="slide.id" :image="slide.imagePath" :link="slide.link"
        :name="slide.name" :header="slide.title" />
    </CarouselInner>
  </Carousel> -->
  <Carousel  class="carousel-custom" :value="slides" :numVisible="1" :numScroll="1" :autoplayInterval="3000" orientation="horizontal"  :circular="true" :showIndicators="false" :showNavigators="false">
    <template #item="slotProps">
      <a :href="slotProps.data.link" class="text-decoration-none text-secondary">
        <div class="rounded categories-slide">

<div class="">
    <div class="relative mx-auto ">
        <img :src="slotProps.data.imagePath" :alt="slotProps.data.title" class="w-100 " height="230" />
    </div>
</div>
<h1 class="mb-3 font-medium text-center fs-6">{{ slotProps.data.title }}</h1>

        </div>
      </a>  
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