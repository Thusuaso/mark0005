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
            <h3 class="header" style="font-weight: bold;">Что такое мрамор?</h3>
                <p class="description" style="text-align: justify;">
                    <strong >Мраморная плитка</strong> — это <strong> натуральный камень</strong>, изготовленный из <strong> мрамора</strong>, метаморфической породы, образовавшейся в результате воздействия <strong> известняка </strong> на воздействие сильного давления и тепла. Каждая <strong > мраморная </strong> плитка, известная своими уникальными прожилками и богатыми цветовыми вариациями, уникальна и визуально ошеломляет. Их кристаллическая структура позволяет полировать их до зеркального блеска, что придает им роскошную привлекательность вашему <strong > интерьеру </strong> и <strong >экстерьеру. </strong>Доступна с различными вариантами отделки, такими как <strong> полированная, шлифованная, пескоструйная обработка </strong> и <strong> кованая мраморная плитка</strong>, обеспечивающая универсальность дизайна. Они широко используются в <strong> полах, облицовке стен, столешницах</strong> и <strong> ванных комнатах</strong>, придавая элегантность <strong> жилым </strong> и <strong > коммерческим помещениям</strong>. Мраморная плитка термостойка, что делает ее подходящей для <strong> кухонь, каминов </strong> и <strong>наружного применения</strong>, а также <strong > внутренней отделки</strong>. Правильная герметизация и уход помогают защитить их от пятен и травления. Их вневременная красота и долговечность делают их долгосрочной инвестицией в любой проект. Мрамор, как натуральный и экологически чистый материал, является экологически безопасным выбором для повышения эстетики и ценности вашего <strong > внутреннего </strong> и <strong > внешнего оформления.</strong>
            </p>



        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 2">
        <div class="col-sm-12">
            <h3 class="header">Что такое травертин?</h3>
            <p class="description" style="text-align: justify;">
                <strong> Травертин </strong> — это природный камень, образовавшийся в результате быстрого осаждения карбоната кальция в минеральных источниках, особенно в горячих источниках. Это разновидность <strong> известняка </strong> с пористой структурой, часто характеризующаяся теплыми, землистыми тонами, такими как бежевый, кремовый, коричневый и ржавый. Уникальная текстура травертина и естественные ямки придают ему деревенский шарм, хотя их можно заполнить для получения более гладкой поверхности. Доступны такие варианты отделки, как <strong> шлифованный</strong>, <strong> полированный</strong>, <strong> матовый</strong> или <strong> шлифованный</strong>, <strong> травертин </strong> универсальный для различных <strong> архитектурных стилей </strong>. Он обычно используется в <strong> полах</strong>, <strong> облицовке стен</strong>, <strong> патио</strong>, <strong>окружении бассейнов</strong> и <strong>поверхностях ванных комнат</strong>. благодаря своим <strong>противоскользящим</strong> свойствам. <strong>Травертиновая плитка</strong> долговечна и устойчива к атмосферным воздействиям, что делает ее идеальной для <strong>внутреннего</strong> и <strong>наружного</strong> применения. <strong>Правильная герметизация</strong> необходима для защиты <strong>травертина</strong> от пятен и впитывания влаги. Его вневременная привлекательность и естественная теплота делают <strong>травертин</strong> популярным выбором для создания классического и элегантного <strong>интерьера</strong> и <strong>экстерьера</strong>. Будучи экологически чистым материалом, травертин способствует созданию устойчивых и эстетически приятных идей и проектов домашнего декора для <strong>архитекторов</strong>, <strong>дизайнеров</strong> и конечных пользователей.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 3">
        <div class="col-sm-12">
            <h3 class="header">Что такое известняк?
            </h3>
            <p class="description" style="text-align: justify;">
                <strong>Известняковая плитка</strong> изготавливается из осадочной породы, которая образуется в течение миллионов лет в результате накопления органических материалов, таких как ракушки и морские отложения. <strong>Известняковая плитка </strong>, известная своими мягкими, нейтральными цветами, такими как кремовый, бежевый, серый и белый, создает успокаивающую и естественную эстетику для вашего <strong> интерьера</strong> и <strong>внешней отделки</strong>. Их тонкие узоры и гладкие текстуры делают их универсальным выбором как для современных, так и для классических архитектурных проектов. <strong>Известняковая плитка</strong> широко используется для <strong>напольных покрытий</strong>, <strong> облицовки стен</strong> и <strong>уличного мощения</strong>, предлагая сочетание красоты и функциональности. Они особенно ценятся за их способность сохранять прохладу под ногами, что делает их идеальными для использования в теплом климате и на открытых площадках. Доступны такие варианты отделки, как <strong>заточенный</strong>, <strong>матовый</strong>, <strong>кувыркающийся</strong>, <strong>пескоструйный</strong> и <strong>молотковый</strong>; <strong>известняк</strong> является лучшим выбором для различных <strong>архитектурных проектов</strong>. Он широко используется для <strong> напольных покрытий</strong>, <strong> облицовки стен</strong>, <strong> внутренних двориков</strong>, <strong> бассейнов</strong> и <strong> поверхностей для ванных комнат</strong> из-за его <strong>скольжения- стойкие</strong> свойства. Несмотря на то, что известняк более мягкий, чем другие природные камни, он достаточно прочен для использования в жилых помещениях и коммерческих целях при правильном уходе. Рекомендуется регулярно герметизировать поверхность, чтобы защитить ее от влаги и пятен, особенно во влажных помещениях или местах с интенсивным движением транспорта. <strong>Известняковая плитка</strong> - это экологичный и неподвластный времени выбор для <strong>архитекторов</strong> и <strong>дизайнеров</strong>, придающий помещениям сдержанную элегантность и естественную привлекательность.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 4">
        <div class="col-sm-12">
            <h3 class="header">Что такое мозаика из натурального камня?
            </h3>
            <p class="description" style="text-align: justify;">
                <strong>Мрамор</strong>, <strong>травертин</strong> и <strong>мозаика из известняка</strong> – это <strong>декоративная плитка</strong>, изготовленная из <strong>натуральных камней</strong> для украшения утонченный внешний вид <strong>интерьера</strong> и <strong>экстерьера</strong>. Эти <strong>мозаики</strong> тщательно разработаны путем объединения небольших кусочков камня в замысловатые узоры или формы, что делает их популярным выбором для придания элегантности различным <strong>архитектурным украшениям</strong>. <strong>Мраморная мозаика</strong> ценится за свою <strong>полированную поверхность</strong>, долговечность и роскошную привлекательность, часто демонстрируя неподвластные времени узоры с прожилками в оттенках белого, серого или черного цвета. С другой стороны, <strong>травертин</strong> и <strong>мозаика из известняка</strong> придают более деревенский шарм благодаря своим землистым тонам и характерной пористой текстуре, создавая теплую и естественную атмосферу в вашем <strong>интерьере. </strong> и <strong>внешний декор</strong>. Идеально подходит для <strong>фартуков</strong>, <strong>ванных комнат</strong>, <strong>кухонь</strong> и <strong>необычных стен</strong>, <strong>мрамора</strong>, <strong>травертин</strong> и <strong>мозаика из известняка</strong> сочетают стиль и функциональность. <strong>Мозаика из натурального камня</strong> — лучший выбор для <strong>домовладельцев</strong> и <strong>дизайнеров</strong>, стремящихся улучшить свой <strong>элегантный дизайн</strong>, сочетая в себе классику. красота и современная практичность. Мозаика может предложить красочные идеи оформления для <strong>жилых</strong> и <strong>коммерческих проектов</strong>.
            </p>
        </div>
    </div>
    <div class="row m-auto text-center" v-if="category_id == 5">
        <div class="col-sm-12">
            <h3 class="header">Что такое изделия из камня для улицы?</h3>
            <p class="description" style="text-align: justify;">
                
                <strong>Наружные каменные изделия</strong> - это натуральные или искусственные каменные материалы, специально разработанные для использования в <strong>наружных работах</strong>. Эти изделия изготавливаются таким образом, чтобы выдерживать различные погодные условия, включая дождь, воздействие солнца, мороз и интенсивное пешеходное движение, что делает их долговечными и универсальными решениями для открытых пространств. К распространенным изделиям из камня для наружных работ относятся <strong>брусчатка</strong>, <strong></strong>плитка, <strong>облицовочные материалы</strong> и <strong>камни для ландшафтного дизайна</strong>, изготовленные из таких материалов, как <strong>травертин</strong>, <strong>мрамор</strong>, <strong>гранит</strong>, <strong>известняк</strong> и <strong>сланец</strong>. Они часто используются для создания <strong>внутренних двориков</strong>, <strong>дорожек</strong>, <strong>ограждений для бассейнов</strong>, <strong>садовых ограждений</strong>, <strong>фасадов</strong> и других <strong>наружных элементов</strong>. Известные своей природной красотой, устойчивостью к скольжению и неприхотливостью в обслуживании, изделия из камня для наружных работ придают камню неподвластную времени эстетику, одновременно повышая функциональность и ценность наружных помещений. <strong>Мрамор</strong> и <strong>травертин</strong>, в частности, пользуются большим спросом для <strong>наружных проектов</strong> благодаря своей природной красоте и долговечности. <strong>Мрамор</strong> имеет роскошный полированный вид, идеально подходящий для изысканных открытых пространств, таких как <strong>внутренние дворики</strong> и <strong>садовые дорожки</strong>. <strong>Травертин</strong> с его текстурой в деревенском стиле и <strong>устойчивой к скольжению</strong> поверхностью идеально подходит для <strong>отделки бассейнов</strong>, <strong>дорожек</strong> и <strong>наружных лестниц</strong>, обеспечивая безопасность без ущерба для стиля. Оба материала от природы устойчивы к нагреванию, что делает их отличным выбором для использования в солнечную погоду. При надлежащей герметизации и уходе изделия из мрамора, травертина и известняка для наружного применения могут прослужить десятилетия, сохраняя свое очарование и повышая ценность любого объекта недвижимости.            
            
            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 6">
        <div class="col-sm-12">
            <h3 class="header">Что такое товары для ванной и кухни?</h3>
            <p class="description" style="text-align: justify;">
                <strong>Ванная</strong> и <strong>Кухня</strong> — самые популярные помещения, которые выбирают для элегантной отделки <strong>натуральным камнем</strong>. Преобразите свою <strong>ванную</strong> и <strong>кухню</strong> с помощью вечной красоты и долговечности изделий из <strong>натурального камня</strong>, изготовленных из <strong>мрамора</strong>, <strong>травертин</strong> и <strong>известняк</strong>. Эти изысканные материалы привносят нотку роскоши и изысканности, сочетая эстетическую привлекательность с практичной функциональностью. <strong>Мрамор</strong> – это самый распространенный <strong>натуральный камень</strong> для украшения <strong>ванных</strong> и <strong>кухонь</strong> с его элегантными прожилками и полированной отделкой, а также он придает роскоши <strong>столешницам</strong>, <strong>фартукам</strong>, <strong>тумбочкам</strong> и <strong>душевым поддонам</strong>.
                Его уникальные узоры гарантируют, что не будет двух одинаковых предметов, что сделает ваше пространство поистине единственным в своем роде. Хотя <strong>травертин</strong> известен своими землистыми тонами и текстурированной поверхностью, он придает деревенский, но изысканный шарм. Это идеальный материал для <strong>раковин</strong>, <strong>ванн</strong>, <strong>облицовки стен</strong> и <strong>полов</strong>, создавая теплую и уютную атмосферу. . В качестве еще одного варианта <strong>натурального камня</strong> для художественного дизайна <strong>известняк</strong> имеет нежную текстуру и блестит и используется в таких применениях, как <strong>душевые поддоны</strong>, раковины и <strong >кухонные острова</strong>, органично дополняющие современный и традиционный дизайн. Прочные и термостойкие <strong>столешницы</strong> превращают приготовление пищи в удовольствие, а элегантные <strong>каменные раковины</strong> и <strong>ванны</strong> превращают повседневную рутину в роскошные впечатления. <strong>Каменные душевые поддоны</strong> и <strong>ванны</strong>, сочетающие стиль и функциональность, повышают привлекательность любых <strong>жилых</strong> и <strong>коммерческих</strong> ванных комнат. с их гладким и безупречным внешним видом для украшения вашей ванной и кухни.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 7">
        <div class="col-sm-12">
            <h3 class="header">Что такое плитные изделия?
            </h3>
            <p class="description" style="text-align: justify;">
                Изысканный <strong>мрамор</strong>, <strong>травертин</strong> и <strong>плиты из натурального камня из известняка</strong> — один из лучших вариантов для создания потрясающих поверхностей. Украсьте свое пространство премиальными <strong>плитами из натурального камня</strong> из <strong>мрамора</strong>, <strong>травертина</strong> и <strong>известняка</strong>. Эти плиты идеально подходят для самых разных поверхностей. Они идеально подходят для создания роскошных <strong>кухонных столешниц</strong>, элегантных <strong>туалетов в ванной</strong>, прочных <strong>полов</strong> и ярких <strong>облицовка стен</strong>.
                Независимо от того, создаете ли вы гладкие <strong>стенки для душа</strong>, нестандартные <strong>мебельные столешницы</strong> или <strong>наружные поверхности патио</strong>, наши <strong>плиты из натурального камня</strong> обеспечивают неподвластную времени красоту и непревзойденная универсальность. Каждая плита тщательно отбирается с учетом ее уникальных рисунков, цветов и текстур, благодаря чему ваши поверхности будут такими же уникальными, как и ваш стиль. Благодаря своей долговечности и <strong>естественной</strong> элегантности <strong>мрамор</strong> придает полированную изысканность, <strong>травертин</strong> придает деревенский шарм, а <strong>известняк</strong> создает тонкий, изысканный вид. Эти <strong>плиты</strong> подходят как для <strong>жилых</strong>, так и для <strong>коммерческих</strong> помещений, преображая <strong>кухни</strong>, <strong>ванные комнаты</strong> , <strong>гостиные</strong>, <strong>офисы</strong> и даже <strong>открытые площадки</strong> в потрясающие произведения искусства. Изучите нашу коллекцию, чтобы найти идеальную <strong>плиту из натурального камня</strong> для вашего <strong>архитектурного проекта</strong> и создавать поверхности, которые выдержат испытание временем и придадут непревзойденную элегантность каждому уголку вашего пространства.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 8">
        <div class="col-sm-12">
            <h3 class="header">Что такое кварцевые изделия?</h3>
            <p class="description" style="text-align: justify;">
                <strong>Кварцевые плиты</strong> представляют собой элегантное сочетание естественной красоты и долговечности, что делает их универсальным выбором как для <strong>жилых</strong>, так и <strong>коммерческих объектов</strong>. Эти плиты, состоящие более чем на 90 % из натуральных кристаллов <strong>кварца</strong> в сочетании со смолами и пигментами, обладают исключительной прочностью и непористой <strong>поверхностью</strong>, устойчивой к образованию пятен, царапинам и нагреванию. Доступные в широком диапазоне цветов, узоров и отделок, <strong>кварцевые плиты</strong> могут имитировать внешний вид <strong>натурального камня</strong>, обеспечивая при этом повышенную консистенцию и минимальный уход. Независимо от того, используются ли они для <strong>кухонных столешниц</strong>, <strong>туалетов в ванной</strong> или <strong>облицовки стен</strong>, <strong>кварцевые плиты</strong> придают изысканный, полированный вид, который дополняет Как <strong>современный</strong>, так и <strong>классический дизайн</strong>. <strong>Кварцевые плиты</strong> также можно использовать для <strong>фартуков</strong>, <strong>столешниц</strong> или <strong>мебели</strong>, что придает <strong>изысканность и устойчивость < Strong>обеденные столы</strong>, <strong>журнальные столики</strong> и многое другое.
                Их неприхотливость в уходе и долговечность делают <strong>кварцевые плиты</strong> практичной и стильной инвестицией, особенно для <strong>кухонных столешниц</strong> и <strong>островов</strong>, гарантируя долговечность и красоту на долгие годы. приходить. Независимо от того, проектируете ли вы минималистичное пространство или смелый, эффектный <strong>интерьер</strong>, эти плиты легко адаптируются к вашему видению. Их единообразный внешний вид в сочетании с возможностью выбора различных <strong>профилей кромок</strong> и <strong>отделки</strong> (<strong>полированный</strong>, <strong>матовый</strong> или <strong>текстурированный</strong>), гарантирует, что они легко интегрируются в любой <strong>стиль архитектурного дизайна</strong>. Их неприхотливость в уходе и непреходящая красота делают их фаворитами среди <strong>домовладельцев</strong>, <strong>архитекторов</strong> и <strong>дизайнеров интерьера</strong>. Выбирая <strong>кварц</strong>, вы выбираете <strong>поверхность</strong>, которая выдержит испытание временем, сохранив при этом свою элегантность и функциональность.

            </p>
        </div>
    </div>
    <div class="row m-auto text-center " v-if="category_id == 9">
        <div class="col-sm-12">
            <h3 class="header">Что такое продукты?</h3>
            <p class="description" style="text-align: justify;">
                <strong>Натуральный камень</strong> привносит ощущение роскоши и вневременной красоты в <strong>кухню</strong> и <strong>ванную комнату</strong>. Созданные природой такие материалы, как <strong>травертин</strong>, <strong>мрамор</strong>, <strong>известняк</strong> и <strong>гранит</strong>, обеспечивают непревзойденную долговечность, элегантность и уникальность. характер для любого дизайна. Каждый кусок <strong>натурального камня</strong> – это единственное в своем роде произведение искусства с характерными узорами, прожилками и текстурами, которые придают характер и изысканность вашим <strong>жилым помещениям</strong>. Изделия из натурального камня, такие как <strong>раковины</strong>, <strong>столешницы</strong>, <strong>мозаика</strong> и <strong>плитка</strong>, долговечны и при правильном уходе могут выдерживают суровые условия ежедневного использования в местах с интенсивным движением людей, таких как <strong>кухни</strong> и <strong>ванные комнаты</strong>.
                Предпочитаете ли вы <strong>полированную</strong> изысканность <strong>мрамора</strong>, <strong>рустикальную</strong> теплоту <strong>травертина</strong> или современный минимализм <strong>известняк</strong>, изделия из натурального камня подходят для самых разных стилей дизайна. Вы можете использовать <strong>мрамор</strong>, <strong>травертин</strong> и <strong>раковины из известняка</strong>, <strong>душевые поддоны</strong> и даже <strong>ванны</strong>. чтобы улучшить <strong>ванную</strong> и <strong>кухню</strong>, придав ей роскошный <strong>дизайн интерьера</strong>. Вы также можете добавить нотку современности в свои <strong>внутренние</strong> и <strong>экстерьерные</strong> помещения с помощью <strong>мраморных туалетных столиков</strong>, <strong>душевых поддонов из травертина</strong> или <strong>известняковые туалетные столики</strong>. <strong>Натуральный камень</strong> превращает <strong>кухни</strong> и <strong>ванные комнаты</strong> в потрясающие функциональные помещения, излучающие изысканность. Независимо от того, проектируете ли вы <strong>жилые</strong> или <strong>коммерческие здания</strong>, <strong>натуральный камень</strong> — лучший выбор для создания изысканной эстетики на <strong>кухне</strong>. и <strong>ванные комнаты</strong>.

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