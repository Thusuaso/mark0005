<template>
    <div class="row m-auto text-center">
        <div class="col-sm-3 filter-custom">
            <div class="border">
                <h3 class="header mb-3 mt-3">{{ usage_header }}</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="usage in usages" :key="usage.Id">
                        <UsaFilter :link="usage.link" :name="usage.name" :value="usage.products"/>
                    </div>
                </ol>
            </div>
            <div class="border">
                <h3 class="header mb-3 mt-3">{{ categories_header }}</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="category in categories" :key="category.Id">
                        <UsaFilter :link="category.link" :name="category.name_en" :value="category.products"/>
                    </div>
                </ol>
            </div>
            <div class="border">
                <h3 class="header mb-3 mt-3">{{ colors_header }}</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="color in colors" :key="color.Id">
                        <UsaFilter :link="color.link" :name="color.name" :value="color.products"/>
                    </div>
                </ol>
            </div>
            <div class="border">
                <h3 class="header mb-3 mt-3">{{ sizes_header }}</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="size in sizes" :key="size.Id">
                        <UsaFilter :link="size.link" :name="size.name_en" :value="size.products"/>
                    </div>
                </ol>
            </div>
            <div class="border">
                <h3 class="header mb-3 mt-3">{{ mosaics_header }}</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="mosaic in mosaics" :key="mosaic.Id">
                        <UsaFilter :link="mosaic.link" :name="mosaic.name_en" :value="mosaic.products"/>
                    </div>
                </ol>
            </div>



        </div>
        <div class="col-sm-9">
            <h3 class="header mb-3">{{ usa_header }}</h3>
            <div class="row m-auto text-center">
                <div class="col-sm-4" v-for="product of products" :key="product?.ID">
                    <UsaCard :text="product?.name" :image="product?.image" :link="product?.link" :price="product.Fiyat" :stock="product.Stok_Sqft" :size="product.Size"/>
                </div>
            </div>

        </div>

    </div>
</template>
<script setup lang="ts">
import control from '~/lang/control';
import {useStore} from '~/store/index';
const store = useStore();
const router = useRouter();
let search_params = router.currentRoute.value.params.name;

const usa = await useFetch(`/api/usa/search/${search_params}`)

const products = control.lang_usa_product(usa.data._value.products,store.getLang);
const categories = usa.data._value.category;
const colors = control.lang_usa_filter(usa.data._value.color,store.getLang);
const sizes = usa.data._value.size;
const usages = control.lang_usa_filter(usa.data._value.usage,store.getLang);
const mosaics = usa.data._value.mosaic;
const usa_header = store.getUsa.stock_header;
const usage_header = store.getUsa.usage;
const categories_header = store.getUsa.categories;
const colors_header = store.getUsa.colors;
const sizes_header = store.getUsa.sizes;
const mosaics_header = store.getUsa.mosaics;




</script>