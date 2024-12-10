<template>
  <div class=" container row m-auto text-center" >
    <div class="col-sm-3 fs-1 text-decoration-none fw-light" >
      <NuxtLink class="text-decoration-none fw-light" :to="selectedLang.link" style="color:#1357bc;">
        <img class="logo_mekmar" src="https://cdn.mekmarimage.com/logo/Mekmar-Logo-b%C3%BCy%C3%BCk-yaz%C4%B1l%C4%B1-01.webp" alt="mekmar-logo"/>
      </NuxtLink>
    </div>
    <div class="col-sm-9"  >

      <nav class="navbar navbar-expand-lg " style="padding-top:17px;">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <InputText v-model="search" v-if="!usa_link_status" :placeholder="search_placeholder" @keydown.prevent.enter="searchInput($event)"
        @blur="searchInput($event)" 
      class="text-dark bg-light search_custom" />
      <InputText v-model="search_usa" v-else :placeholder="usa_search.usa_search" @keydown.prevent.enter="searchInputUsa($event)" 
      @blur="searchInputUsa($event)" 
      class="text-dark bg-light  search_custom"/>

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
              <NuxtLink  class="dropdown-item" tag="a" :to="navbar_link.faq">{{ navbar.faq }}</NuxtLink>
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
      <form class="d-flex" role="search" >
        <Select v-model="selectedLang" :options="langs" optionLabel="name"  class="w-full md:w-50" @change="changeLang($event)" dropdown>
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                    <img :alt="slotProps.value.name" :src="slotProps.value.img" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" width="18px" height="18px"/>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
              <a :href="slotProps.option.link" class="w-100">

                <img :alt="slotProps.option.name" :src="slotProps.option.img" :class="`flag flag-${slotProps.option.code.toLowerCase()}`" width="22px" height="22px"/>

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
  {'name':'Arabic','link':'/ar',"status":"ar","img":"https://cdn.mekmarimage.com/logo/ar-logo.png",code:'AR'},

]);
const store = useStore();
let selectedLang = ref();
langs.value.forEach(x=>{
  if(x.status == store.getLang){
    selectedLang = ref(x);
  }
});

const search = ref("");
const search_usa = ref('');
const router = useRouter();
const searchInput = (event:any)=>{
  
  const search_link = store.getSearchLink;
  let search_word = '';
  if(event.target._value == '' || event.target._value == ' ' || event.target._value == undefined || event.target._value == null){
    router.push('/');

  }else{
    search_word = event.target._value.trimStart().replaceAll(' ','_');
    router.push(search_link + search_word);

  }
};
const search_placeholder = store.getSearch;
let usa_link_status = ref(false);
const usa_search = store.getUsaSearch;
watch(() => router.currentRoute.value.fullPath, () => {
  let link = router.currentRoute.value.fullPath;
  link = link.split('/')[1];
  if(link == 'usa'){
    usa_link_status.value = true;
  }else{
    usa_link_status.value = false;
  }

});
let link = router.currentRoute.value.fullPath;
link = link.split('/')[1];
if(link == 'usa'){
  usa_link_status.value = true;
}else{
  usa_link_status.value = false;
}
const test = '';
const searchInputUsa = (event:any)=>{
  const search_link = store.getUsaSearch.usa_search_link;
  let search_word = '';
  if(event.target._value == '' || event.target._value == ' ' || event.target._value == undefined || event.target._value == null){
    router.push('/usa/stock');

  }else{
    search_word = event.target._value.trimStart().replaceAll(' ','_');
    router.push(search_link + search_word);
  }
  
}








</script>
<style scoped>
*{
  font-size:1vw;
}
.search_custom{
  margin-right:5px;width:10%;
}

@media screen and (max-width:576px) {
  *{
    font-size:16px;
  }
  .search_custom{
    width:60%;
  }
}

</style>

