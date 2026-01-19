<template>
  <div class="row m-auto">
    <div class="col-sm-3 mt-0 filter-custom">
      <div class="customContainer mb-2">
        <a :href="usastock.link">
          <div class="customElement">
            <img :src="usastock.img" :alt="usastock.alt" />
            <div class="card_title_3" style="font-size: 18px">
              {{ usastock.name }}
            </div>
          </div>
        </a>
      </div>
      <div class="customContainer mb-2">
        <a href="/catalog" target="_blank">
          <div class="customElement">
            <img
              src="/image/online-catalog-main-photo-mekmar.webp"
              alt="online-catalog"
            />
            <div class="card_title" style="font-size: 18px">ONLINE CATALOG</div>
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
          <LazyCategoriesCard
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
import { onMounted, onUnmounted, ref } from "vue";
const store = useStore();
const categories = store.getCategories;
const slides = store.getSlides;
const usastock = store.getUsaStockMainMenu;
// const session = sessionStorage.getItem("modal_section_visible");
// /*Visible Modal Section */

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
// const clearCookies = (event: any) => {
//   cookie.value = undefined;
// };
// onMounted(() => {
//   // Sadece istemci tarafında (tarayıcıda) çalışmalı
//   if (process.client) {
//     window.addEventListener("beforeunload", clearCookies);
//     console.log("beforeunload dinleyicisi eklendi.");
//   }
// });

// // 3. Bileşen kaldırılırken dinleyiciyi temizle
// onBeforeUnmount(() => {
//   if (process.client) {
//     window.removeEventListener("beforeunload", clearCookies);
//     console.log("beforeunload dinleyicisi kaldırıldı.");
//   }
// });
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Yarı saydam siyah arka plan */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Diğer her şeyin üstünde olmasını sağlar */
}

/* Modal İçerik Kutusu */
.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 650px;
  max-height: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* Modal Başlık Kısmı */
.modal-header {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
}

.modal-header h3 {
  margin: 0;
}

/* Modal İçerik Kısmı */
.modal-body {
  padding: 20px;
  line-height: 1.5;
}

/* Modal Alt Kısım */
.modal-footer {
  padding: 10px 20px;
  border-top: 1px solid #eee;
  text-align: right;
}

/* Kapatma Butonu (x işareti) */
.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #aaa;
  line-height: 1;
  padding: 0;
}

.close-btn:hover {
  color: #333;
}

/* Kapat Butonu */
.kapat-btn {
  padding: 8px 15px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.kapat-btn:hover {
  background-color: #c82333;
}

/* Açma Butonu Stili */
.open-btn {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}
</style>
