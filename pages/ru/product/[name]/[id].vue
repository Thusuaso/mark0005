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
            <h3 class="header">Что такое мраморная плитка?</h3>
                <p class="description" style="text-align: justify;">
                    Мраморная плитка — это плитка из натурального камня, изготовленная из мрамора, метаморфической породы, образовавшейся, когда известняк подвергается экстремальному давлению и нагреву. Каждая мраморная плитка, известная своими уникальными прожилками и богатыми цветовыми вариациями, уникальна и визуально ошеломляет. Их кристаллическая структура позволяет полировать их до блеска, что придает им роскошную привлекательность. Мраморная плитка, доступная в различных вариантах отделки, таких как полированная, шлифованная, обработанная пескоструйной обработкой и кованая, обеспечивает универсальность дизайна. Они широко используются в напольных покрытиях, облицовке стен, столешницах и ванных комнатах, придавая элегантность жилым и коммерческим помещениям. Мраморная плитка термостойка, что делает ее подходящей для кухонь, каминов и наружного применения. Правильная герметизация и уход помогают защитить их от пятен и травления. Их вневременная красота и долговечность делают их долгосрочной инвестицией в любой проект. Как натуральный, экологически чистый материал, мрамор является экологически чистым выбором для повышения эстетики и ценности пространства.

            </p>



        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 2">
        <div class="col-sm-12">
            <h3 class="header">Что такое травертин?</h3>
            <p class="description" style="text-align: justify;">
                Травертин — это природный камень, образовавшийся в результате быстрого осаждения карбоната кальция в минеральных источниках, особенно в горячих источниках. Это тип известняка с пористой структурой, часто характеризующийся теплыми, землистыми тонами, такими как бежевый, кремовый, коричневый и ржавый. Уникальная текстура травертина и естественные ямки придают ему деревенский шарм, хотя их можно заполнить для получения более гладкой поверхности. Доступный в таких вариантах отделки, как шлифованный, полированный, матовый или шлифованный, травертин универсален для различных стилей дизайна. Его обычно используют для полов, облицовки стен, патио, вокруг бассейнов и поверхностей в ванных комнатах из-за его противоскользящих свойств. Травертиновые плитки долговечны и устойчивы к атмосферным воздействиям, что делает их идеальными для внутреннего и наружного применения. Правильная герметизация необходима для защиты травертина от пятен и впитывания влаги. Его неподвластная времени привлекательность и естественная теплота делают травертин популярным выбором для создания классических и элегантных помещений. Будучи экологически чистым материалом, травертин способствует созданию устойчивых и эстетически приятных проектов.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">Что такое известняк?
            </h3>
            <p class="description" style="text-align: justify;">
                Плитка из известняка изготавливается из осадочной породы, которая формируется на протяжении миллионов лет в результате накопления органических материалов, таких как ракушки и морские отложения. Плитка из известняка, известная своими мягкими нейтральными цветами, такими как кремовый, бежевый, серый и белый, создает успокаивающую и естественную эстетику для вашего декора. Их тонкие узоры и гладкая текстура делают их универсальным выбором как для современных, так и для классических архитектурных проектов. Плитка из известняка обычно используется для полов, облицовки стен и уличного мощения, предлагая сочетание красоты и функциональности. Их особенно ценят за способность сохранять прохладу под ногами, что делает их идеальными для теплого климата и открытых площадок. Хотя известняк мягче, чем другие натуральные камни, он достаточно прочен для жилых и коммерческих помещений при правильном уходе. Рекомендуется регулярно герметизировать его для защиты от влаги и пятен, особенно во влажных местах или в местах с интенсивным движением транспорта. Плитка из известняка — это экологически чистый и вневременной выбор, который украшает пространство своей сдержанной элегантностью и естественной привлекательностью.

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