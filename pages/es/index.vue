

<template>
  <div class="row m-auto">
    <div class="col-sm-3 mt-0 filter-custom">
      <!-- <div class="customContainer mb-2">
        <a :href="usastock.link">
        <div class="customElement">
            
                <img  :src="usastock.img" :alt="usastock.alt" />
                <div class="card_title_3" style="font-size:14px;">
                    {{ usastock.name }}
                </div>
        </div>
      </a>

    </div> -->
    <div class="customContainer mb-2">
          <a href="https://cdn.mekmarimage.com/category/Mekmar-Catalog.pdf" target="_blank">
          <div class="customElement">
              
                  <img  src="/image/online-catalog-main-photo-mekmar.webp" alt="online-catalog" loading="lazy"/>
                  <div class="card_title" style="font-size:18px;">
                    CATÁLOGO EN LÍNEA
                  </div>
          </div>
        </a>

      </div>
      <CategoriesSlides :slides="slides.slide1" />
      <CategoriesSlides :slides="slides.slide2" />
      <CategoriesSlides :slides="slides.slide3" />

    </div>
    <div class="col-sm-9">
      <div class="row m-auto">
        <div class="col-sm-4" v-for="category of categories" :key="category.id">
          <CategoriesCard :link="category.link" :image="category.image" :text="category.name" />
        </div>

      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '~/store/index';
const store = useStore();
const categories = store.getCategories;
const slides = store.getSlides;
const usastock = store.getUsaStockMainMenu;

</script>
