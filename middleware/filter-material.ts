import { useStore } from '~/store/index';
export default defineNuxtRouteMiddleware(async (to,from) => {
    const store = useStore();
    await useFetch('/api/material_f', { method: 'GET', query: { 'categoryId': to.params.categoryId, 'materialId': to.params.materialId } })
        .then(res => {
            store.setCategoriesDetail(res.data._value);
        });

});