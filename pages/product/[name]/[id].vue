<template>

    <div class="row m-auto text-center ">
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
    <div class="row m-auto text-center " v-if="category_id == 1">
        <div class="col-sm-12">
            <h3 class="header" style="font-weight: bold;">What Is Marble ?</h3>
                <p class="description" style="text-align: justify;">
                    <strong >Marble tiles</strong> are <strong > natural stone </strong>tiles made from<strong > marble</strong>, a metamorphic rock formed when<strong > limestone </strong> undergoes extreme pressure and heat. Known for their unique veining and rich color variations, each<strong > marble </strong>tile is distinct and visually stunning. Their crystalline structure allows them to be polished to a high gloss, adding to their luxurious appeal to your<strong > interior </strong>and <strong >exterior designs. </strong>Available in various finishes like<strong> polished, honed, tumbled, sanblasted </strong>and <strong > bushhammered, marble tiles </strong>offer versatility in design. They are widely used in<strong > flooring, wall cladding, countertops</strong> and<strong> bathrooms </strong>adding elegance to<strong> residential </strong>and<strong > commercial spaces</strong>. Marble tiles are heat-resistant, making them suitable for<strong > kitchens, fireplaces </strong>and <strong>outdoor applications </strong>as well as<strong > inside decorations</strong>. Proper sealing and maintenance help protect them from stains and etching. Their timeless beauty and durability make them a long-term investment in any project. As a natural, eco-friendly material, marble is a sustainable choice for enhancing the aesthetics and value of a your<strong > inside </strong>and<strong > outside decorations.</strong>
                </p>



        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 2">
        <div class="col-sm-12">
            <h3 class="header">What Is Travertine?</h3>
            <p class="description" style="text-align: justify;">
                <strong> Travertine </strong> is a natural stone formed through the rapid precipitation of calcium carbonate in mineral springs, particularly hot springs. It is a type of <strong> limestone </strong> with a porous structure, often characterized by its warm, earthy tones like beige, cream, tan, and rust. Travertine’s unique texture and natural pits give it a rustic charm, though these can be filled for a smoother finish. Available in finishes such as <strong> honed</strong>, <strong> polished</strong>,<strong> brushed</strong> or <strong> tumbled</strong>, <strong> travertine </strong> is versatile for various <strong> architectural design </strong>styles. It is commonly used in <strong> flooring</strong>, <strong> wall cladding</strong>, <strong> patios</strong>, <strong>pool surrounds</strong> and <strong>bathroom surfaces</strong> due to its <strong>slip-resistant</strong> properties. <strong>Travertine tiles</strong> are durable and can withstand weathering, making them ideal for both <strong>indoor</strong> and <strong>outdoor</strong> applications. <strong>Proper sealing</strong> is essential to protect <strong>travertine</strong> from staining and moisture absorption. Its timeless appeal and natural warmth make <strong>travertine</strong> a popular choice for achieving classic and elegant <strong>interior</strong> and <strong>exterior decorations</strong>. As an eco-friendly material, travertine contributes to sustainable and aesthetically pleasing home décor ideas and designs for the <strong>architects</strong>, <strong>designers</strong> and final users.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">What Is Limestone?
            </h3>
            <p class="description" style="text-align: justify;">
                <strong>Limestone tiles</strong> are crafted from a sedimentary rock that forms over millions of years from the accumulation of organic materials such as shells and marine sediments. Renowned for their soft, neutral colors like cream, beige, gray, and white, <strong>limestone tiles</strong> create a calming and natural aesthetic for your <strong>interior</strong> and <strong>exterior decorations</strong>. Their subtle patterns and smooth textures make them a versatile choice for both <strong>modern</strong> and <strong>classic architectural designs</strong>. <strong>Limestone tiles</strong> are commonly used for <strong>flooring</strong>, <strong>wall cladding</strong> and <strong>outdoor paving</strong>, offering a blend of beauty and functionality. They are particularly valued for their ability to stay cool underfoot, making them ideal for <strong>warm climates</strong> and <strong>outdoor areas</strong>. Available in finishes such as <strong>honed</strong>, <strong>brushed</strong>, <strong>tumbled</strong>, <strong>sandblasted</strong> and <strong>bushhammered</strong>; <strong>limestone</strong> is a top choice for various <strong>architectural designs</strong>. It is commonly used in <strong>flooring</strong>, <strong>wall cladding</strong>, <strong>patios</strong>, <strong>pool surrounds</strong>, and <strong>bathroom surface</strong> due to its <strong>slip-resistant</strong> properties. Although softer than other natural stones, limestone is durable enough for <strong>residential</strong> and <strong>commercial applications</strong> when properly maintained. Regular sealing is recommended to protect it from moisture and staining, especially in wet or high-traffic areas. <strong>Limestone tiles</strong> are an eco-friendly and timeless choice for <strong>architects</strong> and <strong>designers</strong>, enhancing spaces with their understated elegance and natural appeal.            
            
            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">What Is Natural Stone Mosaic?</h3>
            <p class="description" style="text-align: justify;">
                <strong>Marble</strong>, <strong>travertine</strong> and <strong>limestone mosaics</strong> are <strong>decorative tiles</strong> crafted from <strong>natural stones</strong> to add sophisticated looks to <strong>interior</strong> and <strong>exterior designs</strong>. These <strong>mosaics</strong> are meticulously designed by arranging small pieces of stone into intricate patterns or shapes, making them a popular choice for adding elegance to various <strong>architectural decorations</strong>. <strong>Marble mosaics</strong> are prized for their <strong>polished finish</strong>, durability, and luxurious appeal, often showcasing timeless veining patterns in shades of white, gray, or black. <strong>Travertine</strong> and <strong>limestone mosaics</strong>, on the other hand, offer a more rustic charm with their earthy tones and characteristic porous texture, creating a warm and natural ambiance for your <strong>inside</strong> and <strong>outside decorations</strong>. Ideal for <strong>backsplashes</strong>, <strong>bathrooms</strong>, <strong>kitchens</strong>, and <strong>feature walls</strong>, <strong>marble</strong>, <strong>travertine</strong> and <strong>limestone mosaics</strong> combine style with functionality. <strong>Natural stone mosaics</strong> are a top choice for <strong>homeowners</strong> and <strong>designers</strong> seeking to enhance their <strong>elegant designs</strong> with a blend of classical beauty and modern practicality. Mosaics can offer a colorful decorations ideas for  <strong>residential</strong> and <strong>commercial projects</strong>.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 5">
        <div class="col-sm-12">
            <h3 class="header">What Is Outdoor Stone Products?</h3>
            <p class="description" style="text-align: justify;">
                <strong>Outdoor stone products</strong> are natural or manufactured stone materials specifically designed for use in <strong>exterior applications</strong>. These products are crafted to withstand varying weather conditions, including rain, sun exposure, frost, and heavy foot traffic, making them durable and versatile solutions for <strong>outdoor spaces</strong>. Common outdoor stone products include <strong>pavers</strong>, <strong></strong>tiles, <strong>coping</strong>, <strong>cladding</strong>, and <strong>landscaping stones</strong>, made from materials like <strong>travertine</strong>, <strong>marble</strong>, <strong>granite</strong>, <strong>limestone</strong>, and <strong>slate</strong>. They are frequently used for creating <strong>patios</strong>, <strong>pathways</strong>, <strong>pool surrounds</strong>, <strong>garden walls</strong>, <strong>facades</strong>, and other <strong>outdoor features</strong>. Known for their natural beauty, <strong>slip resistance</strong>, and low maintenance, <strong>outdoor stone products</strong> add a timeless aesthetic while enhancing the functionality and value of <strong>exterior areas</strong>. <strong>Marble</strong> and <strong>travertine</strong>, in particular, are highly sought-after for <strong>outdoor projects</strong> due to their natural beauty and enduring strength. <strong>Marble</strong> offers a luxurious, polished look, perfect for sophisticated outdoor spaces such as <strong>patios</strong> and <strong>garden pathways</strong>. <strong>Travertine</strong>, with its rustic texture and <strong>slip-resistant</strong> surface, is ideal for <strong>pool surrounds</strong>, <strong>walkways</strong>, and <strong>outdoor staircases</strong>, ensuring safety without compromising style. Both materials are naturally resistant to heat, making them an excellent choice for sunny environments. When properly sealed and maintained, <strong>marble</strong>, <strong>travertine</strong> and <strong>limestone outdoor</strong> products can last for decades, maintaining their charm and enhancing the value of any property.
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