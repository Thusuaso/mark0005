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
            <h3 class="header" style="font-weight: bold;">ما هو الرخام؟</h3>
                <p class="description" style="text-align: justify;">
                    <strong >البلاط الرخامي</strong> عبارة عن بلاط <strong > من الحجر الطبيعي </strong>مصنوع من<strong > الرخام</strong>، وهو صخرة متحولة تتشكل عندما يتعرض<strong > الحجر الجيري </strong> لضغط وحرارة شديدين. تشتهر كل بلاطة<strong > رخامية </strong>بعروقها الفريدة وتنوع ألوانها الغنية، وهي مميزة ومذهلة بصريًا. يسمح هيكلها البلوري بصقلها للحصول على لمعان عالي، مما يزيد من جاذبيتها الفاخرة لتصميماتك<strong > الداخلية </strong> و<strong >الخارجية. </strong>متوفر بتشطيبات متنوعة مثل<strong> المصقول، والشحذ، والمقلوب، والبلاط الرملي </strong> و<strong> البلاط الرخامي المطلي بالدغل </strong>يوفر تنوعًا في التصميم. يتم استخدامها على نطاق واسع في <strong > الأرضيات، وتكسية الجدران، وأسطح العمل </strong> و<strong> الحمامات </strong> لإضافة الأناقة إلى <strong> المساحات السكنية </strong> و<strong > التجارية </strong>. البلاط الرخامي مقاوم للحرارة، مما يجعله مناسبًا <strong > للمطابخ والمدافئ </strong> و<strong>للاستخدامات الخارجية </strong>وكذلك<strong > للديكورات الداخلية</strong>. يساعد الختم والصيانة المناسبة على حمايتهم من البقع والحفر. إن جمالها ومتانتها الخالدة يجعلها استثمارًا طويل الأمد في أي مشروع. باعتباره مادة طبيعية صديقة للبيئة، يعد الرخام خيارًا مستدامًا لتعزيز جماليات وقيمة ديكوراتك<strong > الداخلية </strong> و<strong > الخارجية.</strong>
            </p>



        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 2">
        <div class="col-sm-12">
            <h3 class="header">ما هو الترافرتين؟</h3>
            <p class="description" style="text-align: justify;">
                الترافرتين هو حجر طبيعي يتكون من خلال الترسيب السريع لكربونات الكالسيوم في الينابيع المعدنية، وخاصة الينابيع الساخنة. وهو نوع من الحجر الجيري ذو بنية مسامية، ويتميز غالبًا بألوانه الدافئة والترابية مثل البيج والكريمي والأسمر والصدأ. يمنحه نسيج الترافرتين الفريد وحفره الطبيعية سحرًا ريفيًا، على الرغم من أنه يمكن ملؤها للحصول على لمسة نهائية أكثر سلاسة. يتوفر الحجر الجيري في تشطيبات مثل المصقول أو المصقول أو المصقول أو المقلوب، وهو متعدد الاستخدامات لأنماط التصميم المختلفة. يتم استخدامه بشكل شائع في الأرضيات وتكسية الجدران والباحات ومحيط حمامات السباحة وأسطح الحمامات نظرًا لخصائصه المقاومة للانزلاق. بلاط الترافرتين متين ويمكنه تحمل العوامل الجوية، مما يجعله مثاليًا للتطبيقات الداخلية والخارجية. يعد الختم المناسب أمرًا ضروريًا لحماية الحجر الجيري من التلطيخ وامتصاص الرطوبة. إن جاذبيته الخالدة ودفئه الطبيعي يجعل من الحجر الجيري خيارًا شائعًا لتحقيق المساحات الكلاسيكية والأنيقة. باعتباره مادة صديقة للبيئة، يساهم الحجر الجيري في تصميمات مستدامة وممتعة من الناحية الجمالية.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">
                ما هو الحجر الجيري؟
            </h3>
            <p class="description" style="text-align: justify;">
                يتم تصنيع بلاط الحجر الجيري من الصخور الرسوبية التي تتشكل على مدى ملايين السنين من تراكم المواد العضوية مثل الأصداف والرواسب البحرية. يشتهر بلاط الحجر الجيري بألوانه الناعمة والمحايدة مثل الكريم والبيج والرمادي والأبيض، مما يخلق جمالية طبيعية وهادئة لديكوراتك. أنماطها الدقيقة وأنسجةها الناعمة تجعلها خيارًا متعدد الاستخدامات لكل من التصميمات المعمارية الحديثة والكلاسيكية. يُستخدم بلاط الحجر الجيري بشكل شائع في الأرضيات وتكسية الجدران والرصف الخارجي، مما يوفر مزيجًا من الجمال والأداء الوظيفي. وهي ذات قيمة خاصة لقدرتها على البقاء باردة تحت الأقدام، مما يجعلها مثالية للمناخات الدافئة والمناطق الخارجية. على الرغم من أنه أكثر ليونة من الأحجار الطبيعية الأخرى، إلا أن الحجر الجيري متين بما يكفي للتطبيقات السكنية والتجارية عند صيانته بشكل صحيح. يوصى بالختم المنتظم لحمايته من الرطوبة والبقع، خاصة في المناطق الرطبة أو ذات حركة المرور العالية. يعد بلاط الحجر الجيري خيارًا صديقًا للبيئة وخالدًا، مما يعزز المساحات بأناقتها الرائعة وجاذبيتها الطبيعية.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">
                ما هي الفسيفساء؟
            </h3>
            <p class="description" style="text-align: justify;">
                فسيفساء الرخام والحجر الجيري هي بلاطات زخرفية مصنوعة من الأحجار الطبيعية، وتحديداً الرخام والحجر الجيري والحجر الجيري. تم تصميم هذه الفسيفساء بدقة من خلال ترتيب قطع صغيرة من الحجر في أنماط أو أشكال معقدة، مما يجعلها خيارًا شائعًا لإضافة الأناقة والرقي إلى الديكورات الداخلية والخارجية المختلفة.

تحظى الفسيفساء الرخامية بتقدير كبير بسبب تشطيبها المصقول ومتانتها وجاذبيتها الفاخرة، وغالبًا ما تعرض أنماطًا خالدة من العروق بظلال من اللون الأبيض أو الرمادي أو الأسود. من ناحية أخرى، توفر فسيفساء الترافرتين والحجر الجيري سحرًا ريفيًا أكثر بألوانها الترابية وملمسها المسامي المميز، مما يخلق أجواء دافئة وطبيعية لتصميماتك المعمارية الداخلية والخارجية.

مثالية للبلاطات الخلفية والحمامات والمطابخ والجدران المميزة والرخام والحجر الجيري والفسيفساء من الحجر الجيري التي تجمع بين الأسلوب والوظيفة. إنها الخيار الأفضل لأصحاب المنازل والمصممين الذين يسعون إلى تعزيز تصميماتهم الأنيقة بمزيج من الجمال الكلاسيكي والعملية الحديثة.
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