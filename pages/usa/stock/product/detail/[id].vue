<template>
    <h1 class="header mb-3">{{header.toUpperCase()}}</h1>
    <div class="row m-auto text-center">
        <div class="col-sm-5">
            <SharedFancybox :options="{
        Carousel: {
            transition: 'slide'
        }
    }">
            <a class="fancybox ml-3 mb-3 col-sm-4" 
                data-fancybox="gallery" :href="first_photo">
                <div class="customContainer " style="height:450px;">
                    <div class="customElement" style="height:450px;">
                        <img class="lazyload" :src="first_photo" style="height:450px;" />


                    </div>
                </div>
            </a>
                        </SharedFancybox>
        </div>
        <div class="col-sm-7">

            <div class="row m-auto text-center">
                <div class="col-sm-6">
                    <p class="border border-info bg-dark bg-gradient rounded text-light p-1"><span>{{ usa.sku }}: </span><span>{{ detail.SkuNo }}</span></p>
                </div>
                <div class="col-sm-6">
                    <p class="border border-info bg-dark bg-gradient rounded text-light p-2">
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" :style="{width:oran + '%'}">{{ oran }}%</div>
                        </div>
                    </p>

                </div> 

            </div>
            <div class="row m-auto text-center">
                <div class="col-sm-6">
                    <p class="border border-info bg-dark bg-gradient rounded text-light p-1"><span>{{ usa.sale_price }}: </span><span>${{ detail.Fiyat }}/sqft</span></p>
                </div>
                <div class="col-sm-6">
                    <p class="border border-info bg-dark bg-gradient rounded text-light p-1"><span>{{ usa.in_stock }}: </span><span>{{ detail.Stok_Sqft }} {{ usa.available }}</span></p>
                </div>
            </div>
            <div class="row m-auto text-center">
                <div class="col-sm-6">
                    <p class="border border-info bg-dark bg-gradient rounded text-light p-1"><span>{{ usa.surface }}: </span><span>{{ detail.Surface }} & {{ detail.Edge }}</span></p>

                </div>
                <div class="col-sm-6">
                    <p class="border border-info bg-dark bg-gradient rounded text-light p-1"><span>{{ usa.size }}: </span><span>{{ detail.Size }}</span></p>

                </div>

            </div>
            <div class="row m-auto text-center">
                <div class="col-sm-6">
                    <p class="border border-info bg-dark bg-gradient rounded text-light p-1"><span>{{ usa.per_box }}: </span><span>{{ detail.box_detail }}</span></p>
                </div>
                <div class="col-sm-6">
                    <p class="border border-info bg-dark bg-gradient rounded text-light p-1"><span>{{ usa.per_crate }}: </span><span>{{ detail.crate_detail }}</span></p>

                </div>

            </div>
            <hr/>
            <div class="header mb-3">
        {{ usa.description }}
            </div>
            <p class="description">
                {{ detail.description }}
            </p>
            <hr/>
            <div class="header mb-3">
                {{ usa.delivery_terms }}
            </div>
            <p class="description">
                {{ usa.delivery_terms_desc }}
            </p>
        </div>
    </div>
    <hr/>
    <div class="row m-auto text-center">
        <SharedFancybox :options="{
        Carousel: {
            transition: 'slide'
        }
    }">
            <a class="fancybox ml-3 mb-3 col-sm-4" v-for="img of photos.splice(1)" :key="img.id" :href="img.image"
                data-fancybox="gallery">
                <div class="customContainer ">
                    <div class="customElement">
                        <img class="lazyload" :src="img.image" />


                    </div>
                </div>
            </a>
        </SharedFancybox>

    </div>
</template>

<script setup lang="ts">
    import {useStore} from '~/store/index';
    import control from '~/lang/control';
    const store = useStore();
    const router = useRouter();
    let product = await useFetch('/api/usa/product/detail/' + router.currentRoute._value.params.id);
    let detail = control.lang_usa_detail_product(product.data._value.detail,store.getLang);
    let header = detail.name;
    let photos = product.data._value.photos;
    let usa = store.getUsa;
    let oran = parseInt((detail.Stok_Sqft/ detail.MaxStock) * 100);
    if(oran > 100){
        oran = 100;
    };
    const first_photo = photos[0].image;
</script>