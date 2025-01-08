<template>

    <div class="row m-auto text-center">
        <div class="col-sm-3 filter-custom">
            <div class="container border mb-3">
                <h1 class="header mt-3">{{ category_header }}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="category in category_f" :key="category.Id">
                        <ProductsFilter :name="category.name" :value="category.Filtered" :link="category.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3"
                v-if="category_id == 1 || category_id == 2 || category_id == 3 || category_id == 4 || category_id == 5 || category_id == 6 || category_id == 7 || category_id == 8 || category_id == 9 || category_id == 10 || category_id ==11">
                <h1 class="header mt-3">{{ color_header }}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="color in color_f" :key="color.Id">
                        <ProductsFilter :name="color.name" :value="color.Filtered" :link="color.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3"
                v-if="category_id == 1 || category_id == 2 || category_id == 3 || category_id == 4|| category_id ==8">
                <h1 class="header mt-3">{{ finish_header }}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="finish in finish_f" :key="finish.Id">
                        <ProductsFilter :name="finish.name" :value="finish.Filtered" :link="finish.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3" v-if="category_id == 2">
                <h1 class="header mt-3">{{ edge_header }}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="edge in edge_f" :key="edge.Id">
                        <ProductsFilter :name="edge.name" :value="edge.Filtered" :link="edge.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3" v-if="category_id == 4 || category_id == 7">
                <h1 class="header mt-3">{{ material_header }}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="material in material_f" :key="material.Id">
                        <ProductsFilter :name="material.name" :value="material.Filtered" :link="material.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3" v-if="category_id == 2">
                <h1 class="header mt-3">{{ style_header }}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="style in style_f" :key="style.Id">
                        <ProductsFilter :name="style.name" :value="style.Filtered" :link="style.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3"
                v-if="category_id == 5 || category_id == 6 || category_id == 9 || category_id == 11 || category_id ==18">
                <h1 class="header mt-3">{{type_header}}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="type in type_f" :key="type.Id">
                        <ProductsFilter :name="type.name" :value="type.Filtered" :link="type.link" />
                    </div>
                </ol>
            </div>
        </div>
        <div class="col-sm-9">
            <div class="row m-auto text-align">
                <div class="col-sm-4" v-for="product in products" :key="product.Id">
                    <ProductsCards :text="product.name" :image="product.image" :link="product.link" />
                </div>
            </div>
        </div>

    </div>
    <div class="row m-auto text-center" v-if="category_id == 1">
        <div class="col-sm-12">
            <h3 class="header" style="font-weight: bold;">What Is Marble ?</h3>
                <p class="description" style="text-align: justify;">
                    <strong >Marble tiles</strong> are <strong > natural stone </strong>tiles made from<strong > marble</strong>, a metamorphic rock formed when<strong > limestone </strong> undergoes extreme pressure and heat. Known for their unique veining and rich color variations, each<strong > marble </strong>tile is distinct and visually stunning. Their crystalline structure allows them to be polished to a high gloss, adding to their luxurious appeal to your<strong > interior </strong>and <strong >exterior designs. </strong>Available in various finishes like<strong> polished, honed, tumbled, sanblasted </strong>and <strong > bushhammered, marble tiles </strong>offer versatility in design. They are widely used in<strong > flooring, wall cladding, countertops</strong> and<strong> bathrooms </strong>adding elegance to<strong> residential </strong>and<strong > commercial spaces</strong>. Marble tiles are heat-resistant, making them suitable for<strong > kitchens, fireplaces </strong>and <strong>outdoor applications </strong>as well as<strong > inside decorations</strong>. Proper sealing and maintenance help protect them from stains and etching. Their timeless beauty and durability make them a long-term investment in any project. As a natural, eco-friendly material, marble is a sustainable choice for enhancing the aesthetics and value of a your<strong > inside </strong>and<strong > outside decorations.</strong>
                </p>



        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 2">
        <div class="col-sm-12">
            <h3 class="header">What Is Travertine?</h3>
            <p class="description" style="text-align: justify;">
                Travertine is a natural stone formed through the rapid precipitation of calcium carbonate in mineral springs, particularly hot springs. It is a type of limestone with a porous structure, often characterized by its warm, earthy tones like beige, cream, tan, and rust. Travertine’s unique texture and natural pits give it a rustic charm, though these can be filled for a smoother finish. Available in finishes such as honed, polished, brushed, or tumbled, travertine is versatile for various design styles. It is commonly used in flooring, wall cladding, patios, pool surrounds, and bathroom surfaces due to its slip-resistant properties. Travertine tiles are durable and can withstand weathering, making them ideal for both indoor and outdoor applications. Proper sealing is essential to protect travertine from staining and moisture absorption. Its timeless appeal and natural warmth make travertine a popular choice for achieving classic and elegant spaces. As an eco-friendly material, travertine contributes to sustainable and aesthetically pleasing designs.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">What Is Limestone?
            </h3>
            <p class="description" style="text-align: justify;">
                Limestone tiles are crafted from a sedimentary rock that forms over millions of years from the accumulation of organic materials such as shells and marine sediments. Renowned for their soft, neutral colors like cream, beige, gray, and white, limestone tiles create a calming and natural aesthetic for your decorations. Their subtle patterns and smooth textures make them a versatile choice for both modern and classic architectural designs. Limestone tiles are commonly used for flooring, wall cladding, and outdoor paving, offering a blend of beauty and functionality. They are particularly valued for their ability to stay cool underfoot, making them ideal for warm climates and outdoor areas. Although softer than other natural stones, limestone is durable enough for residential and commercial applications when properly maintained. Regular sealing is recommended to protect it from moisture and staining, especially in wet or high-traffic areas. Limestone tiles are an eco-friendly and timeless choice, enhancing spaces with their understated elegance and natural appeal.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">What Is Mosaics?
            </h3>
            <p class="description" style="text-align: justify;">
                Marble and travertine mosaics are decorative tiles crafted from natural stones, specifically marble, travertine and limestone. These mosaics are meticulously designed by arranging small pieces of stone into intricate patterns or shapes, making them a popular choice for adding elegance and sophistication to various interior and exterior decorations.

Marble mosaics are prized for their polished finish, durability, and luxurious appeal, often showcasing timeless veining patterns in shades of white, gray, or black. Travertine and limestone mosaics, on the other hand, offer a more rustic charm with their earthy tones and characteristic porous texture, creating a warm and natural ambiance for your inside and outside architectural designs.

Ideal for backsplashes, bathrooms, kitchens, and feature walls, marble, travertine and limestone mosaics combine style with functionality. They are a top choice for homeowners and designers seeking to enhance their elegant designs with a blend of classical beauty and modern practicality.
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import ProductsCards from '~/components/Products/Card.vue';

import { useStore } from '~/store/index';
import {ref} from 'vue';
const router = useRouter();
const store = useStore();
let textContinuesBoolean = ref(false);
await $fetch('/api/products/' + router.currentRoute._value.params.id)
    .then(async res => {
        await store.setCategoriesDetail(res);
    });

const textContinueClick = ()=>{
    textContinuesBoolean.value = !textContinuesBoolean.value;
};


import control from '~/lang/control';
const products = control.lang_category_products(store.getCategoriesDetail.products,store.getLang);
const category_f = control.lang_filter(store.getCategoriesDetail.category_f, store.getLang);
const color_f = control.lang_filter(store.getCategoriesDetail.color_f,store.getLang);
const finish_f = control.lang_filter(store.getCategoriesDetail.finish_f,store.getLang);
const edge_f = control.lang_filter(store.getCategoriesDetail.edge_f, store.getLang);
const material_f = control.lang_filter(store.getCategoriesDetail.material_f, store.getLang);
const style_f = control.lang_filter(store.getCategoriesDetail.style_f, store.getLang);
const type_f = control.lang_filter(store.getCategoriesDetail.type_f, store.getLang);

const category_id = router.currentRoute._value.params.id

const filtered_header = store.getFilteredHeader;
const category_header = filtered_header.category;
const color_header = filtered_header.color;
const edge_header = filtered_header.edge;
const style_header = filtered_header.style;
const material_header = filtered_header.material;
const type_header = filtered_header.type;
const finish_header = filtered_header.finish;
</script>

<style scoped>
    .text_continue{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .text_continue_reset{
        clear: both;
    }
    strong{
        font-weight: bold;
        font-style: italic;
        color:#1e58c4;
    }
</style>