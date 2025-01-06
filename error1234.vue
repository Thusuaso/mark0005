<template>
    <div>
        <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>

        </div>
    </div>
    </div>
</template>
<script setup lang="ts">
    const router = useRouter();
    const lang = useCookie('language');
    let page = ref('/');
    let timer = ref(3000);

    setTimeout(() => {  
        if(lang.value.trim() == 'en'){
        page.value = '/';
        router.push('/')

    }else if (lang.value.trim() == 'fr'){
        page.value == '/fr';
        router.push('/fr')

    } else if (lang.value.trim() == 'es'){
        page.value == '/es';
        router.push('/es')

    } else if (lang.value.trim() == 'ru'){
        page.value == '/ru';
        router.push('/ru')

    }else if (lang.value.trim() == 'ar'){
        page.value == '/ar';
        router.push('/ar')

    };
    }, timer);
    


</script>