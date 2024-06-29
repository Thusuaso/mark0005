import { useStore } from '~/store/index';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const store = useStore();
    await useFetch('/api/category-detail', { method: 'GET', query: { 'id': to.params.id } })
        .then(res => {
            store.setCategoriesDetail(res.data._value);
        });
});