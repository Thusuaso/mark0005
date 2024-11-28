<template>

    <div class="row m-auto text-center">
        <div class="col-sm-3 filter-custom">
            <div class="container border mb-3">
                <h1 class="header mt-3">{{category_header}}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="category in category_f" :key="category.Id">
                        <ProductsFilter :name="category.name" :value="category.Filtered" :link="category.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3">
                <h1 class="header mt-3">{{color_header}}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="color in color_f" :key="color.Id">
                        <ProductsFilter :name="color.name" :value="color.Filtered" :link="color.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3">
                <h1 class="header mt-3">{{ area_header }}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="area in area_f" :key="area.Id">
                        <ProductsFilter :name="area.name" :value="area.Filtered" :link="area.link" />
                    </div>
                </ol>
            </div>



            

        </div>
        <div class="col-sm-9">
            <div class="row m-auto text-align">
                <div class="col-sm-4" v-for="product in products" :key="product?.Id">
                    <LazyProductsCard :text="product.name" :image="product?.image" :link="product.link" />
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">


import { useStore } from '~/store/index';
import {ref} from 'vue';
const router = useRouter();
const store = useStore();
await $fetch('/api/products/area/' + router.currentRoute._value.params.id)
    .then(async res => {
        await store.setProductColorDetail(res);
    });


import control from '~/lang/control';
const products = control.lang_category_products(store.getProductColor.products,store.getLang);
const category_f = control.lang_filter(store.getProductColor.category_f, store.getLang);
const color_f = control.lang_filter(store.getProductColor.color_f,store.getLang);
const area_f = control.lang_filter(store.getProductColor.area_f,store.getLang);
const filtered_header = store.getFilteredHeader;
const category_header = filtered_header.category;
const color_header = filtered_header.color;
const area_header = filtered_header.area;

</script>