<template>
  <div class="row container m-auto text-center">
    <div class="col-sm-12">
      <a class="customBannerA " href="https://www.mekmar.com/product/detail/philadelphia-travertine/948" v-show="lang=='en'">
      <div class="customBanner" style="" >
        Please check the brand new travertine selection! With 23 years of experience, <strong>Mekmar</strong> offers: <strong>Philadelphia Travertine!</strong>
      </div>
    </a>
    </div>

  </div>
  <div class="row container m-auto text-center">
    <div class="col-sm-12">
      <a class="customBannerA" href="https://www.mekmar.com/fr/product/detail/philadelphia-travertine/948" v-show="lang=='fr'">
    <div class="container customBanner m-auto text-center" style="" >
      Veuillez consulter la toute nouvelle sélection de travertin ! Avec 23 ans d'expérience, <strong>Mekmar</strong> vous propose : <strong>Philadelphia Travertin!</strong>
    </div>
  </a>
    </div>
  </div>
  <div class="row container m-auto text-center">
    <div class="col-sm-12">
      <a class="customBannerA" href="https://www.mekmar.com/es/product/detail/philadelphia-travertine/948" v-show="lang=='es'">
    <div class="container customBanner m-auto text-center" style="" >
      ¡Consulte la nueva selección de travertino! Con 23 años de experiencia, <strong>Mekmar</strong> ofrece: <strong>¡Travertino Filadelfia!</strong>    
    </div>
  </a>
    </div>
  </div>
  <div class="container row m-auto text-center">
    <div class="col-sm-12">
      <a class="customBannerA" href="https://www.mekmar.com/ru/product/detail/philadelphia-travertine/948" v-show="lang=='ru'">
    <div class="container customBanner m-auto text-center" style="" >
      Пожалуйста, ознакомьтесь с новым выбором травертина! Имея 23-летний опыт работы, <strong>Mekmar</strong> предлагает: <strong>Филадельфийский травертин!</strong>
    </div>
  </a>
    </div>
  </div>
  <div class="container row m-auto text-center">
    <div class="col-sm-12">
      <a class="customBannerA" href="https://www.mekmar.com/ar/product/detail/philadelphia-travertine/948" v-show="lang=='ar'">
        <div class="container customBanner m-auto text-center" style="" >
          يرجى التحقق من اختيار الحجر الجيري الجديد! مع 23 عامًا من الخبرة، تقدم <strong>مكمار</strong>: <strong>فيلادلفيا ترافرتين!</strong>
        </div>
      </a>
    </div>
  </div>



  <SharedNavbar :navbar="navbar" :navbar_link="navbar_link"/>
  <div class="mt-2 container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <hr />
  <SharedFooter :footer="footer" :lang="lang"/>


</template>
<script lang="ts" setup>
import { useStore } from '~/store/index';
const store = useStore();
const navbar = store.getNavbar;
const navbar_link = store.getNavbarLinks;
const footer = store.getFooter;
const lang = store.getLang;

  




</script>
<style scoped>
.customBannerA{
  text-decoration: none;
}
.customBanner{
  width:99%;background-color: red;color:white;text-decoration: none;
  animation: card_title_color_change 3s infinite alternate-reverse;
  border-radius: 3px;
}

.customBannerA:hover .customBanner{
  color:#990000;
}



  @keyframes card_title_color_change {
    from{
        background-color: #0087cc;
    }
    to{
        background-color: #63b32e;
    }
}
</style>