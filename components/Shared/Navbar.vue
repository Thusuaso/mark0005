<template>
  <div class=" container row m-auto text-center">
    <div class="col-sm-2 fs-1 text-decoration-none fw-light" >
      <NuxtLink class="text-decoration-none fw-light" :to="selectedLang.link" style="color:#1357bc;">
        <img class="logo_mekmar" src="https://cdn.mekmarimage.com/logo/Mekmar%20Logo%20b%C3%BCy%C3%BCk%20yaz%C4%B1l%C4%B1-01.png"/>
      </NuxtLink>
    </div>
    <div class="col-sm-10" >

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink class="nav-link" tag="a" :to="navbar_link.home">{{ navbar.home }}</NuxtLink>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ navbar.product }}
          </a>
            
             
          <ul class="dropdown-menu">

            <div class="row m-auto text-center" style="width:550px;">
              <div class="col-4" style="border-right: 1px solid gray">
                <h3 class="header border-bottom">{{ navbar.categories }}</h3>
                <li v-for="item in navbar_link.categories" :key="item.id" >
                  <NuxtLink  class="dropdown-item" tag="a" :to="item.link">{{ item.title }}</NuxtLink>
                </li>
              </div>
              <div class="col-4" style="border-right: 1px solid gray">
                <h3 class="header border-bottom">{{ navbar.colors }}</h3>

                <li v-for="item in navbar_link.colors" :key="item.id">
                  <NuxtLink  class="dropdown-item" tag="a" :to="item.link">{{ item.title }}</NuxtLink>
                </li>
              </div>
              <div class="col-4" >
                <h3 class="header border-bottom">{{ navbar.areas }}</h3>

                <li v-for="item in navbar_link.areas" :key="item.id">
              <NuxtLink  class="dropdown-item" tag="a" :to="item.link">{{ item.title }}</NuxtLink>
            </li>
              </div>
            </div>  


          </ul>

          
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ navbar.info }}
          </a>
          <ul class="dropdown-menu">
            <li >
              <NuxtLink  class="dropdown-item" tag="a" :to="navbar_link.about">{{ navbar.about }}</NuxtLink>
            </li>
            <li >
              <NuxtLink  class="dropdown-item" tag="a" :to="navbar_link.catalog" target="_blank">{{ navbar.catalog }}</NuxtLink>
            </li>

          </ul>
          
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" tag="a" :to="navbar_link.fabrication">{{ navbar.fabrication}}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" tag="a" :to="navbar_link.videos">{{ navbar.videos}}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" tag="a" :to="navbar_link.project">{{ navbar.project}}</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" tag="a" :to="navbar_link.contact">{{ navbar.contact}}</NuxtLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ navbar.usa }}
          </a>
          <ul class="dropdown-menu">
            <li >
              <NuxtLink  class="dropdown-item" tag="a" :to="navbar_link.usastock">{{ navbar.usastock }}</NuxtLink>
            </li>
            <li >
              <NuxtLink  class="dropdown-item" tag="a" :to="navbar_link.usaabout">{{ navbar.usaabout }}</NuxtLink>
            </li>
            <li >
              <NuxtLink  class="dropdown-item" tag="a" :to="navbar_link.usacontact">{{ navbar.usacontact }}</NuxtLink>
            </li>
            <li >
              <NuxtLink  class="dropdown-item" tag="a" :to="navbar_link.usafaq">{{ navbar.usafaq }}</NuxtLink>
            </li>

          </ul>
          
        </li>

      </ul>
      <form class="d-flex" role="search">
        <InputText v-model="search" :placeholder="search_placeholder" @keydown.prevent.enter="searchInput($event)" class="text-dark bg-light w-50 " style="margin-right:5px;"/>
        <Select v-model="selectedLang" :options="langs" optionLabel="name"  class="w-full md:w-50" @change="changeLang($event)">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                    <img :alt="slotProps.value.label" :src="slotProps.value.img" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
              <a :href="slotProps.option.link">

                <img :alt="slotProps.option.name" :src="slotProps.option.img" :class="`flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 22px" />

              </a>

              

            </template>
        </Select>
      </form>
    </div>
  </div>
</nav>
    
    
    </div>

  </div>

</template>
<script lang="ts" setup>
import {ref,onMounted} from 'vue';
import {useStore} from '~/store/index';
const props = defineProps({
  navbar: {
    type: Object,
    required: true
  },
  navbar_link: {
    type: Object,
    required: true
  }
});
const { navbar, navbar_link } = props;
const langs = ref([
  {'name':'English','link':'/',"status":"en","img":"https://cdn.mekmarimage.com/logo/en-flag.png",code:'EN'},
  {'name':'France','link':'/fr',"status":"fr","img":"https://cdn.mekmarimage.com/logo/fr-flag.png",code:'FR'},
  {'name':'Spanish','link':'/es',"status":"es","img":"https://cdn.mekmarimage.com/logo/es-flag.png",code:'ES'},
  {'name':'Russian','link':'/ru',"status":"ru","img":"https://cdn.mekmarimage.com/logo/ru-flag.png",code:'RU'},
  {'name':'Arabic','link':'/ar',"status":"ar","img":"https://cdn.mekmarimage.com/logo/ar-flag.png",code:'AR'},

]);
const store = useStore();
let selectedLang = ref();
langs.value.forEach(x=>{
  if(x.status == store.getLang){
    selectedLang = ref(x);
  }
});

const search = ref("");
const router = useRouter();
const searchInput = (event:any)=>{
  
  const search_link = store.getSearchLink;

  router.push(search_link + event.target._value.replaceAll(' ','-'));
};
const search_placeholder = store.getSearch;










</script>