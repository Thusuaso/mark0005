import { useStore } from '~/store/index';
export default defineNuxtRouteMiddleware(async (to,from) => {
    const store = useStore();
    await useFetch('/api/type_f', { method: 'GET', query: { 'categoryId': to.params.categoryId, 'typeId': to.params.typeId } })
        .then(res => {
            store.setCategoriesDetail(res.data._value);
        });

});