<template>

  <SharedNavbar :navbar="navbar" :navbar_link="navbar_link" />
  <div class="mt-4 container">
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

const test = '';


</script>
<style>

</style>