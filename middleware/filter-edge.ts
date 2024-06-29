import { useStore } from '~/store/index';
export default defineNuxtRouteMiddleware(async (to,from) => {
    const store = useStore();
    await useFetch('/api/edge_f', { method: 'GET', query: { 'categoryId': to.params.categoryId, 'edgeId': to.params.edgeId } })
        .then(res => {
            store.setCategoriesDetail(res.data._value);
        });

});