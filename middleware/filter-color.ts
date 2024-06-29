import { useStore } from '~/store/index';
export default defineNuxtRouteMiddleware(async (to,from) => {
    const store = useStore();
    await useFetch('/api/color_f', { method: 'GET', query: { 'categoryId': to.params.categoryId, 'colorId': to.params.colorId } })
        .then(res => {
            store.setCategoriesDetail(res.data._value);
        });

});