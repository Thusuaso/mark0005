import { useStore } from '~/store/index';
export default defineNuxtRouteMiddleware(async (to, from) => {
    const store = useStore();
    await useFetch('/api/project-detail', {
        method:'GET',
        params: { 'id':to.params.id }
        
    }).then(res => {
        store.setProjectDetail(res.data._value);
    });
});
