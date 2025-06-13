<template>
  <div class="dropdown">
    <button
      class="btn btn-light dropdown-toggle p-1"
      type="button"
      id="languageDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img :src="selected.flag" :alt="selected.code" class="flag-icon" />
    </button>
    <ul class="dropdown-menu lang-menu" aria-labelledby="languageDropdown">
      <li v-for="lang in languages" :key="lang.code">
        <a
          class="dropdown-item d-flex align-items-center lang-item"
          :href="lang.link"
        >
          <img :src="lang.flag" :alt="lang.code" class="flag-icon me-2" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const cookie = useCookie("language");
const languages = [
  { code: "en", flag: "/flags/en.png", link: "/" },
  { code: "fr", flag: "/flags/fr.png", link: "/fr" },
  { code: "es", flag: "/flags/es.png", link: "/es" },
  { code: "ru", flag: "/flags/ru.png", link: "/ru" },
  { code: "ar", flag: "/flags/ar.png", link: "/ar" },
];
console.log("cookie", cookie);
let selected = ref();
if (cookie.value == "en") {
  selected.value = languages[0];
} else if (cookie.value == "fr") {
  selected.value = languages[1];
} else if (cookie.value == "es") {
  selected.value = languages[2];
} else if (cookie.value == "ru") {
  selected.value = languages[3];
} else if (cookie.value == "ar") {
  selected.value = languages[4];
}

function selectLanguage(lang) {
  selected.value = lang;
}
</script>

<style scoped>
.flag-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
}
/* Düğmeyi küçültelim */
.lang-toggle {
  padding: 4px 6px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lang-menu {
  width: 48px; /* Küçük ve dar açılır menü */
  padding: 4px;
  border-radius: 6px;
  min-width: unset !important; /* Bootstrap varsayılanını geçersiz kıl */
}

.lang-item {
  padding: 4px;
  display: flex;
  justify-content: center;
}
</style>
