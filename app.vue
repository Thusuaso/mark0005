<template>
  <a class="customBannerA" href="https://www.mekmar.com/product/detail/Valencia-Travertine/948" >
    <div class="customBanner m-auto text-center" style="">
      Please check travertine tile from brand new quarry! With 22 years of experience, Mekmar offers: Philadelphia Travertine!
    </div>
  </a>

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
  width:86%;background-color: red;color:white;text-decoration: none;
  animation: card_title_color_change 3s infinite alternate-reverse;

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