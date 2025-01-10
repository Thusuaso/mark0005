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
                <strong> الترافرتين </strong> هو حجر طبيعي يتكون من خلال الترسيب السريع لكربونات الكالسيوم في الينابيع المعدنية، وخاصة الينابيع الساخنة. وهو نوع من <strong> الحجر الجيري </strong> ذو بنية مسامية، ويتميز غالبًا بألوانه الترابية الدافئة مثل البيج والكريمي والأسمر والصدأ. يمنحه نسيج الترافرتين الفريد وحفره الطبيعية سحرًا ريفيًا، على الرغم من أنه يمكن ملؤها للحصول على لمسة نهائية أكثر سلاسة. متوفر بتشطيبات مثل <strong> مصقول</strong>، أو <strong> مصقول</strong>، أو <strong> مصقول</strong> أو <strong> متدحرج</strong>، أو <strong> حجر جيري </strong> متعدد الاستخدامات لمختلف أنماط التصميم المعماري. يُستخدم بشكل شائع في <strong> الأرضيات</strong>، و<strong> تكسية الجدران</strong>، و<strong> الأفنية</strong>، و<strong> محيط حمامات السباحة</strong> و<strong>أسطح الحمامات</strong>. نظرًا لخصائصه <strong>المقاومة للانزلاق</strong>. <strong>بلاط الترافرتين</strong> متين ويمكنه تحمل عوامل الطقس، مما يجعله مثاليًا للتطبيقات <strong>الداخلية</strong> و<strong>الخارجية</strong>. يعد <strong>الإغلاق المناسب</strong> أمرًا ضروريًا لحماية <strong>الحجر الجيري</strong> من التلطخ وامتصاص الرطوبة. إن جاذبيته الخالدة ودفئه الطبيعي يجعلان من <strong>الحجر الجيري</strong> خيارًا شائعًا لتحقيق ديكورات <strong>داخلية</strong> و<strong>خارجية</strong> كلاسيكية وأنيقة. باعتباره مادة صديقة للبيئة، يساهم الحجر الجيري في أفكار وتصميمات ديكور منزلي مستدامة وممتعة من الناحية الجمالية <strong>للمهندسين المعماريين</strong> و<strong>المصممين</strong> والمستخدمين النهائيين.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">
                ما هو الحجر الجيري؟
            </h3>
            <p class="description" style="text-align: justify;">
                <strong>بلاط الحجر الجيري</strong> مصنوع من الصخور الرسوبية التي تتشكل على مدى ملايين السنين من تراكم المواد العضوية مثل الأصداف والرواسب البحرية. يشتهر <strong>بلاط الحجر الجيري</strong> بألوانه الناعمة والمحايدة مثل الكريم والبيج والرمادي والأبيض، مما يخلق جمالية هادئة وطبيعية <strong>للديكورات الداخلية</strong> و<strong>الخارجية</strong>. قوي>. إن أنماطها الدقيقة وأنسجتها الناعمة تجعلها خيارًا متعدد الاستخدامات لكل من التصميمات المعمارية <strong>الحديثة</strong> و<strong>الكلاسيكية</strong>. يُستخدم <strong>بلاط الحجر الجيري</strong> بشكل شائع في <strong>الأرضيات</strong>، و<strong>تكسية الجدران</strong> و<strong>رصف الأماكن الخارجية</strong>، مما يوفر مزيجًا من الجمال والأداء الوظيفي. وهي ذات قيمة خاصة لقدرتها على البقاء باردًا تحت الأقدام، مما يجعلها مثالية <strong>للأجواء الدافئة</strong> و<strong>للمناطق الخارجية</strong>. متوفر بتشطيبات مثل <strong>مصقول</strong>، و<strong>مصقول</strong>، و<strong>متدحرج</strong>، و<strong>مسفوع بالرمل</strong>، و<strong>مطرق بالشجيرات</strong>؛ يعد <strong>الحجر الجيري</strong> الخيار الأفضل لمختلف <strong>التصميمات المعمارية</strong>. يُستخدم بشكل شائع في <strong>الأرضيات</strong>، و<strong>تكسية الجدران</strong>، و<strong>الباحات</strong>، و<strong>محيط حمامات السباحة</strong>، و<strong>أسطح الحمام</strong> نظرًا لخصائصه <strong>المقاومة للانزلاق</strong>. على الرغم من أنه أكثر ليونة من الأحجار الطبيعية الأخرى، إلا أن الحجر الجيري متين بدرجة كافية للاستخدام <strong>السكني</strong> و<strong>التجاري</strong> عند صيانته بشكل صحيح.يوصى بالإغلاق المنتظم لحمايته من الرطوبة والبقع، خاصة في المناطق الرطبة أو ذات حركة المرور العالية. يُعد <strong>بلاط الحجر الجيري</strong> خيارًا صديقًا للبيئة وخالدًا <strong>للمهندسين المعماريين</strong> و<strong>للمصممين</strong>، حيث يعمل على تحسين المساحات بأناقتها البسيطة وجاذبيتها الطبيعية.            
            
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">
                ما هي الفسيفساء الحجرية الطبيعية؟
            </h3>
            <p class="description" style="text-align: justify;">
                <strong>الرخام</strong> و<strong>الحجر الجيري</strong> و<strong>فسيفساء الحجر الجيري</strong> هي <strong>بلاطات زخرفية</strong> مصنوعة من <strong>أحجار طبيعية</strong> لإضافة المزيد مظهر متطور <strong>للتصميمات الداخلية</strong> و<strong>الخارجية</strong>. تم تصميم هذه <strong>الفسيفساء</strong> بدقة من خلال ترتيب قطع صغيرة من الحجر في أنماط أو أشكال معقدة، مما يجعلها خيارًا شائعًا لإضافة الأناقة إلى مختلف <strong>الزخارف المعمارية</strong>. <strong>الفسيفساء الرخامية</strong> تحظى بتقدير كبير بسبب <strong>التشطيب المصقول</strong> والمتانة والجاذبية الفاخرة، وغالبًا ما تعرض أنماط عروق خالدة بظلال من اللون الأبيض أو الرمادي أو الأسود. من ناحية أخرى، توفر <strong>الحجر الجيري</strong> و<strong>فسيفساء الحجر الجيري</strong> سحرًا ريفيًا أكثر بألوانها الترابية وملمسها المسامي المميز، مما يخلق أجواء دافئة وطبيعية <strong>لداخلك </strong> و <strong>الديكورات الخارجية</strong>. مثالية <strong>للبلاطات الخلفية</strong>، و<strong>للحمامات</strong>، و<strong>للمطابخ</strong>، و<strong>للجدران المميزة</strong>، و<strong>للرخام</strong>، <strong> يجمع كل من الحجر الجيري القوي</strong> و<strong>فسيفساء الحجر الجيري</strong> بين الأسلوب والوظيفة. <strong>فسيفساء الحجر الطبيعي</strong> هي الخيار الأفضل <strong>لأصحاب المنازل</strong> و<strong>المصممين</strong> الذين يسعون إلى تحسين <strong>تصميماتهم الأنيقة</strong> بمزيج من التصاميم الكلاسيكية. الجمال والتطبيق العملي الحديث. يمكن أن تقدم الفسيفساء أفكارًا للديكورات الملونة للمشاريع <strong>السكنية</strong> و<strong>التجارية</strong>.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 5">
        <div class="col-sm-12">
            <h3 class="header">ما هي منتجات الحجر في الهواء الطلق؟</h3>
            <p class="description" style="text-align: justify;">
                <strong>المنتجات الحجرية الخارجية</strong> هي مواد حجرية طبيعية أو مصنعة مصممة خصيصًا للاستخدام في <strong>التطبيقات الخارجية</strong>. تم تصميم هذه المنتجات لتحمل الظروف الجوية المختلفة، بما في ذلك المطر والتعرض لأشعة الشمس والصقيع وحركة السير الكثيفة، مما يجعلها حلولًا متينة ومتعددة الاستخدامات <strong>للمساحات الخارجية</strong>. تشمل منتجات الحجر الخارجية الشائعة <strong>الأرضيات</strong>، و<strong></strong>البلاط، و<strong>المواجهة</strong>، و<strong>الكسوة</strong>، و<strong>أحجار تنسيق الحدائق</strong>، مصنوعة من مواد مثل <strong>الحجر الجيري</strong>، و<strong>الرخام</strong>، و<strong>الجرانيت</strong>، و<strong>الحجر الجيري</strong>، و<strong>الأردواز</strong>. يتم استخدامها بشكل متكرر لإنشاء <strong>الباحات</strong>، و<strong>الممرات</strong>، و<strong>محيط حمامات السباحة</strong>، و<strong>جدران الحدائق</strong>، و<strong>الواجهات</strong>.، و<strong>ميزات خارجية</strong> أخرى. تشتهر <strong>المنتجات الحجرية الخارجية</strong> بجمالها الطبيعي، <strong>ومقاومتها للانزلاق</strong>، وقلة صيانتها، مما يضيف جمالية خالدة مع تعزيز وظائف وقيمة <strong>المناطق الخارجية</strong>.يحظى <strong>الرخام</strong> و<strong>الحجر الجيري</strong>، على وجه الخصوص، بشعبية كبيرة في <strong>المشاريع الخارجية</strong> نظرًا لجمالهما الطبيعي وقوتهما الدائمة. يقدم <strong>الرخام</strong> مظهرًا فاخرًا مصقولًا، وهو مثالي للمساحات الخارجية المتطورة مثل <strong>الباحات</strong> و<strong>ممرات الحدائق</strong>. يعتبر <strong>الحجر الجيري</strong>، بملمسه الريفي وسطحه <strong>المقاوم للانزلاق</strong>، مثاليًا <strong>لمحيط حمامات السباحة</strong>، و<strong>الممرات</strong>، <strong>قوية>سلالم خارجية</strong>، مما يضمن السلامة دون المساس بالأناقة. كلتا المادتين مقاومتان للحرارة بشكل طبيعي، مما يجعلها اختيارًا ممتازًا للبيئات المشمسة. عند إغلاقها وصيانتها بشكل صحيح، يمكن أن تستمر منتجات <strong>الرخام</strong> و<strong>الحجر الجيري</strong> و<strong>الحجر الجيري الخارجي</strong> لعقود من الزمن، مما يحافظ على سحرها ويعزز قيمة أي عقار.

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