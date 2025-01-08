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
                <h1 class="header mt-3">{{style_header}}</h1>

                <ol class="list-group list-group-numbered">
                    <div class="list-group-div" v-for="style in style_f" :key="style.Id">
                        <ProductsFilter :name="style.name" :value="style.Filtered" :link="style.link" />
                    </div>
                </ol>
            </div>
            <div class="container border mb-3"
                v-if="category_id == 5 || category_id == 6 || category_id == 9 || category_id == 11 || category_id ==18">
                <h1 class="header mt-3">{{ type_header }}</h1>

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
                    <ProductsCard :text="product.name" :image="product.image" :link="product.link" />
                </div>
            </div>
        </div>

    </div>
    <div class="row m-auto text-center" v-if="category_id == 1">
        <div class="col-sm-12">
            <h3 class="header" style="font-weight: bold;">Qué Es El Mármol?</h3>
                <p class="description" style="text-align: justify;">
                    Las <strong >baldosas de mármol</strong> son baldosas de <strong > piedra natural </strong> hechas de <strong > mármol</strong>, una roca metamórfica que se forma cuando la <strong > piedra caliza </strong> sufre una presión y un calor extremos. Conocidas por sus vetas únicas y sus ricas variaciones de color, cada baldosa de mármol es distinta y visualmente impresionante. Su estructura cristalina les permite pulirse hasta obtener un alto brillo, lo que aumenta su atractivo lujoso para sus diseños <strong> de interiores </strong> y <strong> exteriores. </strong>Disponibles en varios acabados como<strong> pulido, apomazado, pulido, pulido </strong>y <strong> abujardado, las baldosas de mármol </strong>ofrecen versatilidad en el diseño. Se utilizan ampliamente en<strong> pisos, revestimientos de paredes, encimeras</strong> y<strong> baños </strong>agregando elegancia a espacios<strong> residenciales </strong>y<strong> comerciales</strong>. Las baldosas de mármol son resistentes al calor, lo que las hace adecuadas para <strong>cocinas, chimeneas</strong>y <strong>aplicaciones en exteriores</strong> así como <strong>decoraciones de interiores</strong>. Un sellado y mantenimiento adecuados ayudan a protegerlos de las manchas y el grabado. Su belleza y durabilidad atemporales los convierten en una inversión a largo plazo en cualquier proyecto. Como material natural y ecológico, el mármol es una opción sostenible para mejorar la estética y el valor de sus decoraciones <strong> interiores </strong> y <strong> exteriores.</strong>

            </p>



        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 2">
        <div class="col-sm-12">
            <h3 class="header">¿Qué Es El Travertino?</h3>
            <p class="description" style="text-align: justify;">
                El travertino es una piedra natural que se forma mediante la rápida precipitación de carbonato de calcio en manantiales minerales, particularmente en aguas termales. Es un tipo de piedra caliza con una estructura porosa, a menudo caracterizada por sus tonos cálidos y terrosos como el beige, el crema, el tostado y el óxido. La textura única del travertino y sus hoyos naturales le dan un encanto rústico, aunque se pueden rellenar para obtener un acabado más suave. Disponible en acabados como pulido, cepillado o pulido, el travertino es versátil para varios estilos de diseño. Se usa comúnmente en pisos, revestimientos de paredes, patios, alrededores de piscinas y superficies de baños debido a sus propiedades antideslizantes. Las baldosas de travertino son duraderas y pueden resistir la intemperie, lo que las hace ideales para aplicaciones tanto en interiores como en exteriores. Un sellado adecuado es esencial para proteger el travertino de las manchas y la absorción de humedad. Su atractivo atemporal y su calidez natural hacen del travertino una opción popular para lograr espacios clásicos y elegantes. Como material ecológico, el travertino contribuye a diseños sostenibles y estéticamente agradables.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">
                ¿Qué Es La Piedra Caliza?
            </h3>
            <p class="description" style="text-align: justify;">
                Las baldosas de piedra caliza se elaboran a partir de una roca sedimentaria que se forma a lo largo de millones de años a partir de la acumulación de materiales orgánicos como conchas y sedimentos marinos. Reconocidos por sus colores suaves y neutros como crema, beige, gris y blanco, los azulejos de piedra caliza crean una estética relajante y natural para sus decoraciones. Sus patrones sutiles y texturas suaves los convierten en una opción versátil para diseños arquitectónicos tanto modernos como clásicos. Las baldosas de piedra caliza se utilizan comúnmente para pisos, revestimientos de paredes y pavimentos exteriores, y ofrecen una combinación de belleza y funcionalidad. Son particularmente valorados por su capacidad para mantenerse frescos bajo los pies, lo que los hace ideales para climas cálidos y áreas al aire libre. Aunque es más blanda que otras piedras naturales, la piedra caliza es lo suficientemente duradera para aplicaciones residenciales y comerciales cuando se mantiene adecuadamente. Se recomienda sellar regularmente para protegerlo de la humedad y las manchas, especialmente en áreas húmedas o de mucho tráfico. Las baldosas de piedra caliza son una opción ecológica y atemporal, que realzan los espacios con su discreta elegancia y atractivo natural.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">Qué son los mosaicos?
            </h3>
            <p class="description" style="text-align: justify;">
                Los mosaicos de mármol y travertino son azulejos decorativos elaborados a partir de piedras naturales, concretamente mármol, travertino y piedra caliza. Estos mosaicos se diseñan meticulosamente organizando pequeños trozos de piedra en patrones o formas intrincados, lo que los convierte en una opción popular para agregar elegancia y sofisticación a diversas decoraciones interiores y exteriores.

Los mosaicos de mármol son apreciados por su acabado pulido, durabilidad y atractivo lujoso, y a menudo muestran patrones de vetas atemporales en tonos de blanco, gris o negro. Los mosaicos de travertino y piedra caliza, por otro lado, ofrecen un encanto más rústico con sus tonos terrosos y su característica textura porosa, creando un ambiente cálido y natural para sus diseños arquitectónicos interiores y exteriores.

Ideales para salpicaduras, baños, cocinas y paredes destacadas, los mosaicos de mármol, travertino y piedra caliza combinan estilo con funcionalidad. Son la mejor opción para propietarios y diseñadores que buscan realzar sus diseños elegantes con una combinación de belleza clásica y practicidad moderna.
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">


import { useStore } from '~/store/index';
const router = useRouter();
const store = useStore();

await $fetch('/api/products/' + router.currentRoute._value.params.id)
    .then(async res => {
        await store.setCategoriesDetail(res);
    });


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
    strong{
        font-weight: bold;
        font-style: italic;
        color:#1e58c4;
    }
</style>