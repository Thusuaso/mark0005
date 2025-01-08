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
                    <ProductsCard :text="product.name" :image="product.image" :link="product.link" />
                </div>
            </div>
        </div>

    </div>
    <div class="row m-auto text-center" v-if="category_id == 1">
        <div class="col-sm-12">
            <h3 class="header" style="font-weight: bold;">Qu'est-ce Que Le Marbre ?</h3>
                <p class="description" style="text-align: justify;">
                    Les <strong>carreaux en marbre</strong> sont des carreaux de <strong>pierre naturelle</strong> fabriqués à partir de<strong> marbre</strong>, une roche métamorphique formée lorsque le<strong> calcaire </strong> subit une pression et une chaleur extrêmes. Connus pour leurs veines uniques et leurs riches variations de couleurs, chaque carrelage en marbre est distinct et visuellement époustouflant. Leur structure cristalline leur permet d'être polis jusqu'à obtenir un brillant élevé, ajoutant ainsi leur attrait luxueux à vos designs <strong>intérieurs</strong> et <strong>extérieurs. </strong>Disponibles dans diverses finitions telles que <strong>polies, aiguisées, polies, sablées </strong>et <strong>bouchardées, les carreaux de marbre </strong>offrent une polyvalence de conception. Ils sont largement utilisés dans les <strong> revêtements de sol, les revêtements muraux, les comptoirs</strong> et les <strong> salles de bains </strong>, ajoutant de l'élégance aux <strong> espaces résidentiels </strong>et<strong> commerciaux</strong>. Les carreaux de marbre sont résistants à la chaleur, ce qui les rend adaptés aux <strong>cuisines, cheminées </strong>et aux <strong>applications extérieures</strong> ainsi qu'aux <strong>décorations intérieures</strong>. Une étanchéité et un entretien adéquats aident à les protéger des taches et de la gravure. Leur beauté intemporelle et leur durabilité en font un investissement à long terme dans tout projet. En tant que matériau naturel et respectueux de l'environnement, le marbre est un choix durable pour rehausser l'esthétique et la valeur de vos décorations<strong> intérieures </strong>et<strong> extérieures.</strong>

                </p>



        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 2">
        <div class="col-sm-12">
            <h3 class="header">Qu’est-ce Que le Travertin ?</h3>
            <p class="description" style="text-align: justify;">
                Le travertin est une pierre naturelle formée par la précipitation rapide du carbonate de calcium dans les sources minérales, en particulier les sources chaudes. C'est un type de calcaire à structure poreuse, souvent caractérisé par ses tons chauds et terreux comme le beige, la crème, le beige et la rouille. La texture unique du travertin et ses creux naturels lui confèrent un charme rustique, même s'ils peuvent être remplis pour une finition plus lisse. Disponible dans des finitions telles que adoucie, polie, brossée ou polie, le travertin est polyvalent pour différents styles de design. Il est couramment utilisé dans les revêtements de sol, les revêtements muraux, les patios, les abords de piscines et les surfaces de salles de bains en raison de ses propriétés antidérapantes. Les carreaux de travertin sont durables et peuvent résister aux intempéries, ce qui les rend idéaux pour les applications intérieures et extérieures. Une bonne étanchéité est essentielle pour protéger le travertin des taches et de l’absorption de l’humidité. Son attrait intemporel et sa chaleur naturelle font du travertin un choix populaire pour créer des espaces classiques et élégants. En tant que matériau écologique, le travertin contribue à des conceptions durables et esthétiques.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">
                Qu’est-ce Que le Calcaire ?
            </h3>
            <p class="description" style="text-align: justify;">
                Les carreaux de calcaire sont fabriqués à partir d'une roche sédimentaire qui se forme sur des millions d'années à partir de l'accumulation de matières organiques telles que des coquillages et des sédiments marins. Réputés pour leurs couleurs douces et neutres comme le crème, le beige, le gris et le blanc, les carreaux de pierre calcaire créent une esthétique apaisante et naturelle pour vos décorations. Leurs motifs subtils et leurs textures douces en font un choix polyvalent pour les conceptions architecturales modernes et classiques. Les carreaux de pierre calcaire sont couramment utilisés pour les revêtements de sol, les revêtements muraux et les pavages extérieurs, offrant un mélange de beauté et de fonctionnalité. Ils sont particulièrement appréciés pour leur capacité à rester frais sous les pieds, ce qui les rend idéaux pour les climats chauds et les espaces extérieurs. Bien que plus douce que les autres pierres naturelles, la pierre calcaire est suffisamment durable pour des applications résidentielles et commerciales lorsqu’elle est correctement entretenue. Un scellement régulier est recommandé pour le protéger de l’humidité et des taches, en particulier dans les zones humides ou à fort trafic. Les carreaux de pierre calcaire sont un choix écologique et intemporel, valorisant les espaces par leur élégance discrète et leur attrait naturel.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">Qu’est-ce que les mosaïques ?
            </h3>
            <p class="description" style="text-align: justify;">
                Les mosaïques de marbre et de travertin sont des carreaux décoratifs fabriqués à partir de pierres naturelles, notamment de marbre, de travertin et de calcaire. Ces mosaïques sont méticuleusement conçues en disposant de petits morceaux de pierre selon des motifs ou des formes complexes, ce qui en fait un choix populaire pour ajouter de l'élégance et de la sophistication à diverses décorations intérieures et extérieures.

Les mosaïques de marbre sont appréciées pour leur finition polie, leur durabilité et leur attrait luxueux, présentant souvent des motifs veinés intemporels dans des tons de blanc, de gris ou de noir. Les mosaïques de travertin et de calcaire, quant à elles, offrent un charme plus rustique avec leurs tons terreux et leur texture poreuse caractéristique, créant une ambiance chaleureuse et naturelle pour vos conceptions architecturales intérieures et extérieures.

Idéales pour les dosserets, les salles de bains, les cuisines et les murs décoratifs, les mosaïques de marbre, de travertin et de pierre calcaire allient style et fonctionnalité. Ils constituent un choix de premier ordre pour les propriétaires et les designers qui cherchent à rehausser leurs créations élégantes avec un mélange de beauté classique et de fonctionnalité moderne.
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