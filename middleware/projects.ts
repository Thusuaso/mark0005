import { useStore } from '~/store/index';


export default defineNuxtRouteMiddleware(async (to, from) => {
    const store = useStore();
    await useFetch('/api/project')
        .then(res => {
            if (res) {
                store.setProjects(res.data._value);
            }
        });




  });