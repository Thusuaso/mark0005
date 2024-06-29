import { useStore } from '~/store/index';
export default defineNuxtRouteMiddleware(async (to,from) => {
    const store = useStore();
    await useFetch('/api/finish_f', { method: 'GET', query: { 'categoryId': to.params.categoryId, 'finishName': to.params.finishName } })
        .then(res => {
            store.setCategoriesDetail(res.data._value);
        });

});