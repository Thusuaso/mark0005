import { useStore } from '~/store/index';
export default defineNuxtRouteMiddleware(async (to, from) => {
    const store = useStore();
    await useFetch('/api/product_detail', { method: 'GET', query: { 'productId': to.params.productId } })
        .then(res => {
            store.setProductDetail(res.data._value);
        });
});