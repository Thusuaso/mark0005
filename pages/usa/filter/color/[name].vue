<template>
    <div class="row m-auto text-center">
        <div class="col-sm-3">
            <div class="border">
                <h3 class="header mb-3 mt-3">Usage Areas</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="usage in usages" :key="usage.Id">
                        <UsaFilter :link="usage.link" :name="usage.name" :value="usage.products"/>
                    </div>
                </ol>
            </div>
            <div class="border">
                <h3 class="header mb-3 mt-3">Categories</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="category in categories" :key="category.Id">
                        <UsaFilter :link="category.link" :name="category.name_en" :value="category.products"/>
                    </div>
                </ol>
            </div>
            <div class="border">
                <h3 class="header mb-3 mt-3">Colors</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="color in colors" :key="color.Id">
                        <UsaFilter :link="color.link" :name="color.name" :value="color.products"/>
                    </div>
                </ol>
            </div>
            <div class="border">
                <h3 class="header mb-3 mt-3">Sizes</h3>
                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="size in sizes" :key="size.Id">
                        <UsaFilter :link="size.link" :name="size.name_en" :value="size.products"/>
                    </div>
                </ol>
            </div>
            <div class="border">
                <h3 class="header mb-3 mt-3">Mosaics</h3>
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
    import {useStore} from '~/store/index';
    import control from '~/lang/control';

    const store = useStore();
    const router = useRouter();
    const colorFilter = await useFetch('/api/usa/filter/color/' + router.currentRoute._value.params.name);
    const products = control.lang_usa_product(colorFilter.data._value.products,store.getLang);
    const categories = colorFilter.data._value.category;
    const colors = control.lang_usa_filter(colorFilter.data._value.color,store.getLang);
    const sizes = colorFilter.data._value.size;
    const usages = control.lang_usa_filter(colorFilter.data._value.usage,store.getLang);
    const mosaics = colorFilter.data._value.mosaic;
    const usa_header = store.getUsa.stock_header;

</script>