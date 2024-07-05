<template>
                <h3 class="header mb-3">{{usa.about_header}}</h3>

    <div class="row m-auto">
        <div class="col-sm-12">
            <div class="m-auto text-left w-75">
                <ul class="list-group">
                    <li v-for="about of abouts" :key="about" class="list-group-item">» {{about}}</li>

                </ul>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
    import {useStore} from '~/store/index';
    const store = useStore();
    const usa = store.getUsa;
    const abouts = store.getUsa.about;

</script>
