<template>
  <div class="row m-auto">
    <div class="col-sm-3 mt-0 filter-custom">
      <div class="customContainer mb-2">
        <a :href="usastock.link">
          <div class="customElement">
            <img :src="usastock.img" :alt="usastock.alt" />
            <div class="card_title_3" style="font-size: 16px">
              {{ usastock.name }}
            </div>
          </div>
        </a>
      </div>
      <div class="customContainer mb-2">
        <a href="/ru/catalog" target="_blank">
          <div class="customElement">
            <img
              src="/image/online-catalog-main-photo-mekmar.webp"
              alt="online-catalog"
              loading="lazy"
            />
            <div class="card_title" style="font-size: 18px">ОНЛАЙН-КАТАЛОГ</div>
          </div>
        </a>
      </div>
      <!-- <CategoriesSlides :slides="slides.slide3" /> -->

      <CategoriesSlides :slides="slides.slide1" />
      <CategoriesSlides :slides="slides.slide2" />
    </div>
    <div class="col-sm-9">
      <div class="row m-auto">
        <div class="col-sm-4" v-for="category of categories" :key="category.id">
          <CategoriesCard
            :link="category.link"
            :image="category.image"
            :text="category.name"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <SharedPopUp v-show="isVisible" v-if="session != 'false' && !isMobile" />
  <SharedPopUpMobile v-show="isVisible" v-if="session != 'false' && isMobile" /> -->
</template>
<script setup lang="ts">
import { useStore } from "~/store/index";
const store = useStore();
const categories = store.getCategories;
const slides = store.getSlides;
const usastock = store.getUsaStockMainMenu;
/*Session and Banner */
// const session = sessionStorage.getItem("modal_section_visible");
// if (session == "false") {
//   sessionStorage.setItem("modal_section_visible", "false");
// }
let isVisible = ref(true);
let isMobile = ref(false);
const handleKeydown = (event: any) => {
  // Basılan tuşun 'Escape' (ESC) olup olmadığını kontrol edin
  if (event.key === "Escape") {
    closeModal();
  }
};
const closeModal = () => {
  // Yalnızca modal açıksa kapatma olayını gönderin
  isVisible.value = false;
  // cookie.value = "false";
  sessionStorage.setItem("modal_section_visible", "false");
};
onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});

if (process.client) {
  isMobile.value = window.innerWidth <= 768 ? true : false;
}
/*Session and Banner */
</script>
