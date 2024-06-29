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
          <NavItem>
            <NavLink :to="navbar_link.usastock">
              {{ navbar.usastock }}
            </NavLink>
          </NavItem>
        </NavbarNavList>
        <BForm flex >
          <Dropdown>
    <DropdownToggle button="secondary">
      Dropdown button
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem href="/">
          English
        </DropdownItem>
        <DropdownItem href="/fr">France</DropdownItem>
        <DropdownItem href="/es">Spanish</DropdownItem>
        <DropdownItem href="/ru">Russian</DropdownItem>

      </DropdownMenu>
    </Dropdown>
        </BForm>
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