<template>
  <div class="row m-auto text-center">
    <div class="col-sm-2 fs-1 text-decoration-none">
      <NuxtLink class="text-decoration-none" :to="selectedLang.link">MEKMAR</NuxtLink>
    </div>
    <div class="col-sm-10">
      <Navbar expand="lg" theme="light" background-color="light">
    <Container type="fluid">
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList margin="e-auto b-2 b-lg-0">
          <NavItem>
            <NavLink :to="navbar_link.home">
              {{ navbar.home }}
            </NavLink>
          </NavItem>
          <NavItemDropdown>
            <NavItemDropdownToggle to="">{{ navbar.product }}</NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem v-for="item in navbar_link.categories" :key="item.id" :to="item.link">
                {{ item.title }}
              </DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
          <NavItemDropdown>
            <NavItemDropdownToggle to="">{{ navbar.info }}</NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem :to="navbar_link.about">
                {{ navbar.about }}
              </DropdownItem>
              <DropdownItem :to="navbar_link.catalog" target="_blank">
                {{ navbar.catalog }}
              </DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
          <NavItem>
            <NavLink :to="navbar_link.fabrication">
              {{ navbar.fabrication }}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink :to="navbar_link.videos">
              {{ navbar.videos }}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink :to="navbar_link.project">
              {{ navbar.project }}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink :to="navbar_link.contact">
              {{ navbar.contact }}
            </NavLink>
          </NavItem>
          <NavItemDropdown>
            <NavItemDropdownToggle to="">{{ navbar.usa }}</NavItemDropdownToggle>
            <DropdownMenu>
              <DropdownItem :to="navbar_link.usastock">
                {{ navbar.usastock }}
              </DropdownItem>
              <DropdownItem :to="navbar_link.usaabout">
                {{ navbar.usaabout }}
              </DropdownItem>
              <DropdownItem :to="navbar_link.usacontact">
                {{ navbar.usacontact }}
              </DropdownItem>
              <DropdownItem :to="navbar_link.usafaq">
                {{ navbar.usafaq }}
              </DropdownItem>
            </DropdownMenu>
          </NavItemDropdown>
          
          <BForm
          flex
        >
        <InputText v-model="search" :placeholder="search_placeholder" @keydown.prevent.enter="searchInput($event)" class="text-dark bg-light w-25 "/>
        <Select v-model="selectedLang" :options="langs" optionLabel="name" class="w-full md:w-56 bg-light text-dark ">
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center text-dark">
              {{ slotProps.value.name }}
            </div>

        </template>
        <template #option="slotProps">
              <a :href="slotProps.option.link" class="text-decoration-none text-light">{{ slotProps.option.name }}</a>
        </template>
        </Select>
          </BForm>

        </NavbarNavList>
        
      </NavbarCollapse>
    </Container>
  </Navbar>
    </div>

  </div>

</template>
<script lang="ts" setup>
import {ref} from 'vue';
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
const langs = [
  {'name':'English','link':'/',"status":"en"},
  {'name':'France','link':'/fr',"status":"fr"},
  {'name':'Spanish','link':'/es',"status":"es"},
  {'name':'Russian','link':'/ru',"status":"ru"},
];
const store = useStore();
let selectedLang = ref();
langs.forEach(x=>{
  if(x.status == store.getLang){
    selectedLang = ref(x);
  }
});

const search = ref("");

const searchInput = (event)=>{
  const router = useRouter();
  const search_link = store.getSearchLink;

  router.push(search_link + event.target._value.replaceAll(' ','-'));
};
const search_placeholder = store.getSearch;


</script>