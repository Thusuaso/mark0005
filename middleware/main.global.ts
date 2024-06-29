import { useStore } from '~/store/index';
import en from '~/assets/data/en.json';
import fr from '~/assets/data/fr.json';
import es from '~/assets/data/es.json';
import ru from '~/assets/data/ru.json';
import { ref } from 'vue';
export default defineNuxtRouteMiddleware(async (to, from) => {

  const store = useStore();
  
    const langs = to.path.split('/')[1];
  const cookie = useCookie('language');
  const cookieUser = useCookie('user');
  if (cookieUser.value == null || cookieUser.value == undefined || cookieUser.value == '' || cookieUser.value == ' ') {
    store.setAuthStatus(ref(false));
  } else {
    store.setAuthStatus(ref(true));
  }
    if (langs == 'fr') {
      cookie.value = 'fr';
      await store.setMainStorage(fr);
      await store.setLang('fr');


    } else if (langs == 'es') {
            cookie.value = 'es';
      await store.setMainStorage(es);
      await store.setLang('es');
      
    }
      else if (langs == 'ru') {
            cookie.value = 'ru';
      await store.setMainStorage(ru);
      await store.setLang('ru');
      
    }
    
    else {
        cookie.value = 'en';
      await store.setMainStorage(en);
      await store.setLang('en');
      


  };



  });