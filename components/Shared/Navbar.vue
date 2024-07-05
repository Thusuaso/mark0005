<template>
  <Navbar expand="lg" theme="light" background-color="light">
    <Container type="fluid">
      <NavbarBrand>MEKMAR</NavbarBrand>
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
        <el-dropdown >
      <el-button type="primary">
        Language<el-icon class="el-icon--right"></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item><a href="/" class="text-decoration-none text-dark-emphasis">English</a></el-dropdown-item>

          <el-dropdown-item><a href="/fr" class="text-decoration-none text-dark-emphasis">France</a></el-dropdown-item>
          <el-dropdown-item><a href="/es" class="text-decoration-none text-dark-emphasis">Spanish</a></el-dropdown-item>
          <el-dropdown-item><a href="/ru" class="text-decoration-none text-dark-emphasis">Russian</a></el-dropdown-item>


        </el-dropdown-menu>
      </template>
          </el-dropdown>
      </BForm>

        </NavbarNavList>
        
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
<script lang="ts" setup>
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
</script>