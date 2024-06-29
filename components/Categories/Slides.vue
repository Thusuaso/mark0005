<template>
  <Carousel control>
    <CarouselInner>
      <CategoriesSlide v-for="slide of slides" :key="slide.id" :image="slide.imagePath" :link="slide.link"
        :name="slide.name" :header="slide.title" />
    </CarouselInner>
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