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
                Le <strong> travertin </strong> est une pierre naturelle formée par la précipitation rapide du carbonate de calcium dans les sources minérales, en particulier les sources chaudes. Il s'agit d'un type de <strong> calcaire </strong> à structure poreuse, souvent caractérisé par ses tons chauds et terreux comme le beige, la crème, le beige et la rouille. La texture unique du travertin et ses creux naturels lui confèrent un charme rustique, même s'ils peuvent être remplis pour une finition plus lisse. Disponible dans des finitions telles que <strong> adouci</strong>, <strong> poli</strong>, <strong> brossé</strong> ou <strong> dégringolé</strong>, le <strong> travertin </strong> est polyvalent pour différents styles de <strong> conception architecturale</strong>. Il est couramment utilisé dans les <strong> revêtements de sol</strong>, les <strong> revêtements muraux</strong>, les <strong> patios</strong>, les <strong>bords de piscine</strong> et les <strong>surfaces de salles de bains</strong>. En raison de ses propriétés <strong>antidérapantes</strong>. Les <strong>carreaux de travertin</strong> sont durables et peuvent résister aux intempéries, ce qui les rend idéaux pour les applications <strong>intérieures</strong> et <strong>extérieures</strong>. <strong>Une bonne étanchéité</strong> est essentielle pour protéger le <strong>travertin</strong> des taches et de l’absorption de l’humidité. Son attrait intemporel et sa chaleur naturelle font du <strong>travertin</strong> un choix populaire pour réaliser des décorations <strong>intérieures</strong> et <strong>extérieures</strong> classiques et élégantes. En tant que matériau respectueux de l'environnement, le travertin contribue à des idées et des designs de décoration d'intérieur durables et esthétiquement agréables pour les <strong>architectes</strong>, les <strong>designers</strong> et les utilisateurs finaux.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">
                Qu’est-ce Que le Calcaire ?
            </h3>
            <p class="description" style="text-align: justify;">
                 <strong>Les carreaux de calcaire</strong> sont fabriqués à partir d'une roche sédimentaire qui se forme au cours de millions d'années à partir de l'accumulation de matières organiques telles que des coquillages et des sédiments marins. Réputés pour leurs couleurs douces et neutres comme la crème, le beige, le gris et le blanc, <strong>les carreaux de calcaire </strong> créent une esthétique apaisante et naturelle pour vos <strong>décorations intérieures</strong> et <strong>extérieures </strong>. Leurs motifs subtils et leurs textures lisses en font un choix polyvalent pour les conceptions architecturales <strong>modernes</strong> et <strong>classiques</strong>. <strong>Les carreaux de calcaire </strong> sont couramment utilisés pour <strong>les revêtements de sol</strong>, <strong>les revêtements muraux</strong> et <strong>les pavages extérieurs</strong>, offrant un mélange de beauté et de fonctionnalité. Ils sont particulièrement appréciés pour leur capacité à rester au frais sous les pieds, ce qui les rend idéaux pour les <strong>climats chauds</strong> et les <strong>espaces extérieurs</strong>. Disponible dans des finitions telles que <strong>aiguisé</strong>, <strong>brossé</strong>, <strong>dégringolé</strong>, <strong>sablé</strong > et <strong>bouchardé</strong>; <strong>le calcaire </strong> est un excellent choix pour diverses <strong>conceptions architecturales</strong>. Il est couramment utilisé dans les<strong > revêtements de sol </strong>,<strong>revêtements muraux </strong>,<strong>patios </strong>,<strong>abords de piscine </strong> et <strong>surface de la salle de bain</strong> en raison de ses propriétés <strong>antidérapantes</strong>. Bien que plus doux que les autres pierres naturelles, le calcaire est suffisamment durable pour les applications résidentielles et commerciales lorsqu'il est correctement entretenu. Un scellage régulier est recommandé pour le protéger de l'humidité et des taches, en particulier dans les zones humides ou à fort trafic. <strong>Les carreaux de calcaire </strong> sont un choix écologique et intemporel pour <strong > les architectes </strong> et <strong>les designers</strong>, mettant en valeur les espaces avec leur élégance discrète et leur attrait naturel.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">Qu’est-ce que les mosaïques ?
            </h3>
            <p class="description" style="text-align: justify;">
                <strong>Les mosaiques de marbre</strong>, de <strong>travertin</strong> et de <strong>calcaire</strong> sont des <strong>carreaux décoratifs</strong> fabriqués à partir de <strong>pierres naturelles</strong> pour ajouter un look sophistiqué aux designs <strong>intérieurs</strong> et <strong>extérieurs</strong>. Ces <strong>mosaïques</strong> sont méticuleusement conçues en disposant de petits morceaux de pierre selon des motifs ou des formes complexes, ce qui en fait un choix populaire pour ajouter de l'élégance à diverses <strong>décorations architecturales</strong>. <strong>Les mosaïques en marbre</strong> sont appréciées pour leur <strong>finition polie</strong>, leur durabilité et leur attrait luxueux, présentant souvent des motifs de veines intemporels dans des tons de blanc, de gris ou de noir. <strong>Les mosaïques en travertin</strong> et <strong>en pierre calcaire</strong>, quant à elles, offrent un charme plus rustique avec leurs tons terreux et leur texture poreuse caractéristique, créant une ambiance chaleureuse et naturelle pour votre <strong>intérieur </strong> et <strong>décorations extérieures</strong>. Idéal pour les <strong>dosserets</strong>, les <strong>salles de bains</strong>, les <strong>cuisines</strong> et les <strong>murs caractéristiques</strong>, <strong>marbre</strong>, <strong>les travertin</strong> et les <strong>mosaïques en pierre calcaire</strong> allient style et fonctionnalité. Les <strong>mosaïques en pierre naturelle</strong> sont un choix de premier ordre pour les <strong>propriétaires</strong> et les <strong>designers</strong> qui cherchent à rehausser leurs <strong>designs élégants</strong> avec un mélange de styles classiques. beauté et praticité moderne. Les mosaïques peuvent offrir des idées de décorations colorées pour des projets <strong>résidentiels</strong> et <strong>commerciaux</strong>.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 5">
        <div class="col-sm-12">
            <h3 class="header">Qu'est-ce Que Les Produits En Pierre D'extérieur ?</h3>
            <p class="description" style="text-align: justify;">
                <strong>Les produits en pierre d'extérieur</strong> sont des matériaux en pierre naturels ou manufacturés spécialement conçus pour être utilisés dans des <strong >applications extérieures</strong>. Ces produits sont conçus pour résister à diverses conditions météorologiques, y compris la pluie, l'exposition au soleil, le gel et la circulation piétonnière intense, ce qui en fait des solutions durables et polyvalentes pour les <strong>espaces extérieurs</strong>. Les produits en pierre d'extérieur courants comprennent<strong>pavés</strong>, <strong>carreaux</strong>, <strong>margelles</strong>, <strong>revêtement</strong> et <strong>pierres d'aménagement paysager</strong>, fabriquées à partir de matériaux comme <strong>travertin</strong>, <strong>marbre</strong>, <strong>granit</strong>, <strong>calcaire</strong> et <strong>ardoise</strong>. Ils sont fréquemment utilisés pour créer des <strong>patios</strong>, des<strong>allées</strong>, des<strong>entourages de piscines</strong>, des<strong>murs de jardin</strong>, des<strong>façades</strong> et d'autres <strong>éléments extérieurs</strong>. Reconnus pour leur beauté naturelle, leur <strong>résistance au glissement</strong> et leur faible entretien, les <strong>produits d'extérieur en pierre</strong> ajoutent une esthétique intemporelle tout en améliorant la fonctionnalité et la valeur des <strong>espaces extérieurs</strong>. le <strong>marbre</strong> et le <strong>travertin</strong>, en particulier, sont très recherchés pour les <strong>projets extérieurs</strong> en raison de leur beauté naturelle et de leur résistance durable. <strong>Le marbre</strong> offre un aspect luxueux et poli, parfait pour les espaces extérieurs sophistiqués tels que les <strong>patios</strong> et les <strong>allées de jardin</strong>. <strong>Le travertin</strong>, avec sa texture rustique et sa surface <strong>antidérapante</strong>, est idéal pour <strong>les abords de piscine</strong>, <strong>les allées</strong> et <strong>les escaliers extérieurs</strong>, assurant la sécurité sans compromettre le style. Les deux matériaux sont naturellement résistants à la chaleur, ce qui en fait un excellent choix pour les environnements ensoleillés. Lorsqu'ils sont correctement scellés et entretenus, les produits <strong>marble</strong>, <strong>travertin</strong> et <strong>limestone outdoor</strong> peuvent durer des décennies, conservant leur charme et augmentant la valeur de toute propriété.
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