<template>
    <h1 class="header mb-3">{{ detail.name.toUpperCase() }}</h1>
    <div class="row m-auto text-center mb-3">
        <div class="col-sm-6 mt-3">
            <ProductsDetailGalleries :photos="photos" />
        </div>
        <div class="col-sm-6 first">
            <MazTabs >
                <MazTabsBar :items="tabs" style="box-shadow: 2px 2px 2px gray;"/>

                <MazTabsContent>
                    <MazTabsContentItem :tab="1" class="maz-py-5">
                        <ProductsDetailDescription :desc="detail.desc" :hash="controlString_2(detail.hash)"
                            :category="controlString(detail.category)" :stone="controlString(detail.stone)"
                            :code="controlString(detail.urunkod)" :desc_header="product.description"
                            :hash_header="product.hastags" :code_header="product.tab_1_code"
                            :stone_header="product.tab_1_stonetype" :country_header="product.tab_1_country"
                            :variation_header="product.tab_1_varitaion" :country="'TURKEY'"
                            :variation="controlString(variation)" />
                    </MazTabsContentItem>
                    <MazTabsContentItem :tab="2" class="maz-py-5">
                        <ProductsDetailApplication :application="application" :specification="specification"
                            :specification_header="product?.specification"
                            :test_report_header="product?.tab_2_test_report" :test_report="detail?.testrapor" />
                    </MazTabsContentItem>
                    <MazTabsContentItem :tab="3" class="maz-py-5">
                        <div class=" m-auto text-center">
                            <ProductsDetailSize v-for="size in sizes" :key="size" :size="size.ebat" :unit="detail.birim"
                                :price="size.fiyat" />

                        </div>
                    </MazTabsContentItem>
                </MazTabsContent>
            </MazTabs>
        </div>
    </div>
    <hr/>
    <div class="row m-auto text-center mb-3">
        <div class="col-sm-12">
            <ProductsDetailPhotos :photos="photos" :except_photo="except_photo"/>
        </div>
    </div>
    <h3 class="header mb-3 mt-4">{{ product.benzerurun_title }}</h3>
    <div class="row m-auto text-center">
        <div class="col-sm-3" v-for="sim in similar" :key="sim.id">
            <ProductsCard :link="sim.link" :image="sim.image" :text="sim.name" />
        </div>
    </div>
    <h3 class="header mb-3 mt-3">{{ product.onerilenurun_title }}</h3>
    <div class="row m-auto text-center">
        <div class="col-sm-3" v-for="sug in suggested" :key="sug.id">
            <ProductsCard :link="sug.link" :image="sug.image" :text="sug.name" />
        </div>
    </div>
</template>
<script setup lang="ts">

import { useStore } from '~/store/index';
import control from '~/lang/control';
import { ref,onMounted } from 'vue';
const store = useStore();
const router = useRouter();
store.setLoading(ref(true));
await $fetch('/api/products/detail/' + router.currentRoute._value.params.productId)
    .then(async res => {
        if (res) {
            await store.setProductDetail(res);
            await store.setLoading(ref(false));
        }


    });
const detail = control.product_detail(store.getProductDetail.detail[0], store.getLang);
const photos = store.getProductDetail.photos;
const except_photo = store.getProductDetail.except;
const sizes = store.getProductDetail.sizes;
const product = store.getProduct;
const similar = store.getSimilar;
const suggested = control.lang_category_products(store.getProductDetail.suggested,store.getLang);
const tabs = [
    { label: product.tab_1, disabled: false },
    { label: product.tab_2, disabled: false },
    { label: product.tab_3, disabled: false },
];
const variation = control.lang_project_variation(store.getVariation, detail?.kategori_id);
const application = control.lang_application(store.getApplication,detail?.kategori_id);
const specification = control.lang_specification(store.getSpecification, detail?.kategori_id);
function controlString(value:any) {
    if (value) {
        return value.toUpperCase();
    }else{
        return "";
    }
};
function controlString_2(value:any) {
    if (value) {
        return value
    }else{
        return "";
    }
};
const size_control = (event:any)=>{
    if(event == ' ' || event == '' || event == undefined || event == null){
        return 'sqm';
    }else{
        return event;
    }
};



</script>


