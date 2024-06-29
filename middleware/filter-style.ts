import { useStore } from '~/store/index';
export default defineNuxtRouteMiddleware(async (to,from) => {
    const store = useStore();
    await useFetch('/api/style_f', { method: 'GET', query: { 'categoryId': to.params.categoryId, 'styleId': to.params.styleId } })
        .then(res => {
            store.setCategoriesDetail(res.data._value);
        });

});