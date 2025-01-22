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
                El <strong>travertino</strong> es una piedra natural que se forma mediante la rápida precipitación de carbonato de calcio en manantiales minerales, particularmente en aguas termales. Es un tipo de <strong>piedra caliza</strong> con una estructura porosa, a menudo caracterizada por sus tonos cálidos y terrosos como el beige, el crema, el tostado y el óxido. La textura única del travertino y sus hoyos naturales le dan un encanto rústico, aunque se pueden rellenar para obtener un acabado más suave. Disponible en acabados como <strong>apomazado</strong>, <strong>pulido</strong>,<strong>cepillado</strong> o <strong>pulido</strong>, el <strong>travertino</strong> es versátil para varios estilos de<strong> diseño arquitectónico</strong>. Se utiliza comúnmente en <strong>pisos</strong>, <strong>revestimientos de paredes</strong>, <strong>patios</strong>, <strong>alrededores de piscinas</strong> y <strong>superficies de baños</strong>. Por sus propiedades <strong>antideslizantes</strong>. Las <strong>baldosas de travertino</strong> son duraderas y pueden resistir la intemperie, lo que las hace ideales para aplicaciones <strong>interiores</strong> y <strong>exteriores</strong>. El <strong>sellado adecuado</strong> es esencial para proteger el <strong>travertino</strong> de las manchas y la absorción de humedad. Su atractivo atemporal y su calidez natural hacen del <strong>travertino</strong> una opción popular para lograr decoraciones <strong>interiores</strong> y <strong>exteriores</strong> clásicas y elegantes. Como material ecológico, el travertino contribuye a ideas y diseños de decoración del hogar sostenibles y estéticamente agradables para los <strong>arquitectos</strong>, <strong>diseñadores</strong> y usuarios finales.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">
                ¿Qué Es La Piedra Caliza?
            </h3>
            <p class="description" style="text-align: justify;">
                    <strong>Las baldosas de piedra caliza </strong> están hechas de una roca sedimentaria que se forma durante millones de años a partir de la acumulación de materiales orgánicos como conchas y sedimentos marinos. Reconocidas por sus colores suaves y neutros como crema, beige, gris y blanco, <strong>las baldosas de piedra caliza</strong> crean una estética relajante y natural para sus <strong>decoraciones interiores</strong> y <strong>exteriores</strong>. Sus patrones sutiles y texturas suaves los convierten en una opción versátil tanto para diseños arquitectónicos <strong>modernos</strong> como <strong>clásicos</strong>. <strong>Las baldosas de piedra caliza</strong> se usan comúnmente para <strong>pisos</strong>, <strong>revestimientos de paredes</strong> y <strong>pavimentos para exteriores</strong>, ofreciendo una combinación de belleza y funcionalidad. Son particularmente valorados por su capacidad para mantenerse frescos bajo los pies, lo que los hace ideales para <strong>climas cálidos</strong> y <strong>áreas al aire libre</strong>. Disponible en acabados como <strong>pulido</strong>, <strong>cepillado</strong>, <strong>caído</strong>, <strong>arenado</strong> y <strong>abujardado</strong>; <strong>la piedra caliza </strong> es la mejor opción para varios <strong>diseños arquitectónicos</strong>. Se usa comúnmente en <strong>pisos</strong>, <strong>revestimientos de paredes</strong>, <strong>patios</strong>, <strong>alrededores de piscinas </strong> y <strong>superficies de baños</strong> debido a sus <strong> propiedades antideslizantes</strong>. Aunque es más blanda que otras piedras naturales, la piedra caliza es lo suficientemente duradera para <strong>aplicaciones residenciales</strong> y <strong>comerciales</strong> cuando se mantiene adecuadamente. Se recomienda un sellado regular para protegerlo de la humedad y las manchas, especialmente en áreas húmedas o de alto tráfico. <strong>Las baldosas de piedra caliza</strong> son una opción ecológica y atemporal para <strong>arquitectos</strong> y <strong>diseñadores</strong>, que realzan los espacios con su elegancia discreta y atractivo natural.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">Qué Es El Mosaico De Piedra Natural?
            </h3>
            <p class="description" style="text-align: justify;">
                Los mosaicos de <strong>mármol</strong>, <strong>travertino</strong> y <strong>piedra caliza</strong> son <strong>azulejos decorativos</strong> elaborados a partir de <strong>piedras naturales</strong> para añadir miradas sofisticadas a los diseños de <strong>interiores</strong> y <strong>exteriores</strong>. Estos <strong>mosaicos</strong> están diseñados meticulosamente organizando pequeños trozos de piedra en patrones o formas intrincados, lo que los convierte en una opción popular para agregar elegancia a diversas <strong>decoraciones arquitectónicas</strong>. Los <strong>mosaicos de mármol</strong> son apreciados por su <strong>acabado pulido</strong>, durabilidad y atractivo lujoso, y a menudo muestran patrones de vetas atemporales en tonos de blanco, gris o negro. Los mosaicos de <strong>travertino</strong> y <strong>piedra caliza</strong>, por otro lado, ofrecen un encanto más rústico con sus tonos terrosos y su característica textura porosa, creando un ambiente cálido y natural para su <strong>interior. </strong> y <strong>decoración exterior</strong>. Ideal para <strong>salpicaderos</strong>, <strong>baños</strong>, <strong>cocinas</strong> y <strong>paredes destacadas</strong>, <strong>mármol</strong>, los<strong>mosaicos</strong> de travertino y piedra caliza combinan estilo con funcionalidad. Los <strong>mosaicos de piedra natural</strong> son la mejor opción para <strong>propietarios</strong> y <strong>diseñadores</strong> que buscan realzar sus <strong>diseños elegantes</strong> con una combinación de elementos clásicos. belleza y practicidad moderna. Los mosaicos pueden ofrecer ideas de decoración coloridas para <strong>proyectos residenciales</strong> y <strong>comerciales</strong>.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 5">
        <div class="col-sm-12">
            <h3 class="header">Qué son los productos de piedra para exteriores?</h3>
            <p class="description" style="text-align: justify;">
                <strong>Los productos de piedra para exteriores </strong> son materiales de piedra naturales o fabricados específicamente diseñados para su uso en <strong>aplicaciones exteriores</strong>. Estos productos están diseñados para soportar diferentes condiciones climáticas, incluida la lluvia, la exposición al sol, las heladas y el tráfico peatonal intenso, lo que los convierte en soluciones duraderas y versátiles para <strong>espacios al aire libre</strong>. Los productos comunes de piedra para exteriores incluyen <strong>adoquines</strong>, <strong>baldosas</strong>, <strong>cofia</strong>, <strong>revestimiento</strong> y <strong>piedras para paisajismo</strong>, hechas de materiales como <strong>travertino</strong>, <strong>mármol</strong>, <strong>granito</strong>,<strong>piedra caliza</strong> y <strong>pizarra</strong>. Se utilizan con frecuencia para crear <strong>patios</strong>, <strong>caminos</strong>, <strong>alrededores de piscinas</strong>, <strong>muros de jardín</strong>, <strong>fachadas</strong> y otras <strong>características al aire libre </strong>. Conocidos por su belleza natural, <strong>resistencia al deslizamiento</strong> y bajo mantenimiento, los <strong>productos de piedra para exteriores</strong> agregan una estética atemporal al tiempo que mejoran la funcionalidad y el valor de <strong>áreas exteriores</strong>. El <strong>mármol</strong> y el <strong>travertino</strong>, en particular, son muy buscados para <strong>proyectos al aire libre</strong> debido a su belleza natural y resistencia duradera. El <strong>mármol</strong> ofrece un aspecto lujoso y pulido, perfecto para espacios exteriores sofisticados como <strong>patios</strong> y <strong>senderos de jardín</strong>. El <strong> travertino</strong>, con su textura rústica y superficie <strong>antideslizante</strong>, es ideal para <strong>bordes de piscinas</strong>, <strong>pasillos</strong> y <stron>escaleras exteriores</stron>, lo que garantiza la seguridad sin comprometer el estilo. Ambos materiales son naturalmente resistentes al calor, lo que los convierte en una excelente opción para entornos soleados. Cuando se sellan y mantienen adecuadamente, los productos de <strong>mármol</strong>, <strong>travertino</strong> y <strong>piedra caliza para exteriores</strong> pueden durar décadas, manteniendo su encanto y mejorando el valor de cualquier propiedad.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 6">
        <div class="col-sm-12">
            <h3 class="header">Qué Son Los Productos De Baño y Cocina?</h3>
            <p class="description" style="text-align: justify;">
                El <strong>Baño</strong> y la <strong>Cocina</strong> son las zonas más elegidas para decorar con elegancia la <strong>piedra natural</strong>. Transforme sus espacios de <strong>baño</strong> y <strong>cocina</strong> con la belleza y durabilidad atemporales de los productos de <strong>piedra natural</strong> elaborados a partir de <strong>mármol</strong>, <strong>travertino</strong> y <strong>piedra caliza</strong>. Estos exquisitos materiales aportan un toque de lujo y sofisticación, combinando atractivo estético con funcionalidad práctica.
                El <strong>mármol</strong> es la <strong>piedra natural</strong> más habitual para decorar tus <strong>baños</strong> y <strong>cocinas</strong> con sus elegantes vetas y su acabado pulido, y añade un toque lujoso a <strong>encimeras</strong>, <strong>salpicaderos</strong>, <strong>tocadores</strong> y <strong>platos de ducha</strong>. Sus patrones únicos garantizan que no haya dos piezas iguales, lo que hace que su espacio sea verdaderamente único. Si bien el <strong>travertino</strong> es conocido por sus tonos terrosos y su superficie texturizada, proporciona un encanto rústico pero refinado. Es un material ideal para <strong>lavabos</strong>, <strong>bañeras</strong>, <strong>revestimientos de paredes</strong> y <strong>suelos</strong>, creando un ambiente cálido y acogedor. . Como otra opción de <strong>piedra natural</strong> para un diseño artístico, la <strong>piedra caliza</strong> tiene texturas sutiles y brillos en aplicaciones como <strong>platos de ducha</strong>, lavabos y <strong>platos de ducha</strong>. <strong>islas de cocina</strong> al mismo tiempo que complementan a la perfección diseños modernos y tradicionales. Mientras que las <strong>encimeras</strong> duraderas y resistentes al calor hacen que cocinar sea un placer, los elegantes <strong>fregaderos</strong> y <strong>bañeras</strong> de piedra convierten las rutinas diarias en experiencias lujosas. Los <strong>platos de ducha</strong> y <strong>bañeras</strong> de piedra, diseñados para ofrecer estilo y funcionalidad, realzan el atractivo de cualquier baño <strong>residencial</strong> y <strong>comercial</strong>. con su apariencia elegante y perfecta para la decoración de su baño y cocina.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 7">
        <div class="col-sm-12">
            <h3 class="header">Qué Son Los Productos De Losa?
            </h3>
            <p class="description" style="text-align: justify;">
                Las exquisitas losas de piedra natural de <strong>mármol</strong>, <strong>travertino</strong> y <strong>caliza</strong> son una de las mejores opciones para conseguir superficies impresionantes. Mejore sus espacios con <strong>losas de piedra natural</strong> de primera calidad hechas de <strong>mármol</strong>, <strong>travertino</strong> y <strong>piedra caliza</strong>. Perfectas para una amplia gama de superficies, estas losas son ideales para crear lujosas <strong>encimeras de cocina</strong>, elegantes <strong>tocadores de baño</strong>, <strong>pisos</strong> duraderos y <strong>suelos</strong> llamativos <strong>revestimiento de paredes</strong>.

                Ya sea diseñando elegantes <strong>paredes de ducha</strong>, <strong>encimeras de muebles</strong> personalizados o superficies de <strong>patios al aire libre</strong>, nuestras <strong>losas de piedra natural</strong> brindan una belleza atemporal y versatilidad inigualable. Cada losa se selecciona cuidadosamente por sus patrones, colores y texturas únicos, lo que garantiza que sus superficies sean tan distintivas como su estilo. Con su durabilidad y elegancia <strong>natural</strong>, el <strong>mármol</strong> ofrece una sofisticación pulida, el <strong>travertino</strong> añade encanto rústico y la <strong>piedra caliza</strong> crea un Aspecto sutil y refinado. Estas <strong>losas</strong> son aptas tanto para espacios <strong>residenciales</strong> como <strong>comerciales</strong>, transformando <strong>cocinas</strong>, <strong>baños</strong> , <strong>salas de estar</strong>, <strong>oficinas</strong> e incluso <strong>áreas al aire libre</strong> en impresionantes obras de arte. Explore nuestra colección para encontrar la <strong>losa de piedra natural</strong> perfecta para sus <strong>diseños arquitectónicos</strong> y cree superficies que resistan el paso del tiempo y al mismo tiempo agreguen una elegancia inigualable a cada rincón de su espacio.
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