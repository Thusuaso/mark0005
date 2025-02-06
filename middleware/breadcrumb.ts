import {useStore} from '~/store/index';
export default defineNuxtRouteMiddleware((to, from) => {
    const store = useStore();
    console.log(to);
    console.log(from);
})