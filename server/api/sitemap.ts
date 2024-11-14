export default defineSitemapEventHandler(async (e) => {
    const posts = await Promise.all([
      {
        _path: '/product/marble/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/travertine/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/limestone/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/mosaics/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/outdoor/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/bath-and-kitchen/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/slabs/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/quartz/8',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/by-product/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/installation-materials/11',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/plasterboard/18',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/grey/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/black/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/beige/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/yellow/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/green/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/blue/8',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/red-pink-purple/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/color/multicolor/10',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/living-room/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/kitchen/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/bathroom/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/landscape/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/garage/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/pool/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/facede/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/wall/8',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/area/floor/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/al-greishi-villa-project/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/alawadhi-project/10',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/adams-project/11',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/kaddour-project/16',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/golyan-project/17',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/beauchamp-project/18',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/vallinis-project/19',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/jackson-project/20',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/al-sabouni-project/21',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/bader-project/25',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/mbı-project/26',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/johnson-project/27',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/littoral-project/28',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/besse-project/29',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/nader-project/30',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/kirry-project/31',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/homayoun-project/32',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/mansour-project/1032',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/hotel-verdi-project/1033',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/khajavi-project/1034',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/andersen-project/1035',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/eislend-project/1036',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/mtt-project/1037',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/hoga-project/1041',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/wall-project/1042',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/al-mahruqi-project/1044',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/san-project/1045',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/crb-project/1046',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/lily-project/1047',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/dgcell-project/1048',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/braun-project/1049',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/tmrp-project/1050',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/randolph-project/1052',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/duo-project/1053',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/gebing-project/1054',
        modifiedAt: new Date(),
      },
      {
        _path: '/project/detail/durham-project/1055',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/emperador-light-marble/451',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/blanco-ivory-marble/274',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/turkish-lilac-marble/395',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/cloudy-grey-marble/941',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/imperial-carrara-marble/979',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/palisandro-marble/942',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bianco-ibiza-marble/229',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/alaska-grey-marble/954',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/diana-royal-marble-/437',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/calacatta-giallo-marble/687',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/nero-marquina-marble-/483',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/crema-marfil-marble/477',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/solaris-blue-marble/681',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/dolomite-white-marble/540',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/tundra-grey-marble/244',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/lucid-grey-marble/940',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/ocean-grey-marble/585',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bluestone-tumbled/750',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/storm-grey-marble/619',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/armani-brown-marble/957',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/turkish-calacatta-marble/686',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/calacatta-gold-marble/685',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bluestone-natural/749',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/salome-marble/785',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/puffin-grey-marble/545',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/sofita-beige-marble/292',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/savannah-grey-marble/761',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/oasis-grey-marble/688',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/asgrey-marble/684',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bluestone-sandblasted-/746',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/cappuccino-light-marble/230',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/emperador-dark-marble/218',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/mende-white-line-marble/754',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/siena-gold-marble-/672',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/carrara-white-marble/475',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/emperador-tiger-marble/217',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/coffee-royal-marble/476',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bianco-ibiza-antique-marble/786',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/burdur-beige-marble/389',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/tundra-blue-marble/242',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bluestone/537',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/ottoman-beige-marble/312',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/latte-cream-marble-/435',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/emperador-beige-marble/275',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/pasha-white-marble/696',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/toros-black-marble/279',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/equator-white-marble/396',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/botticino-cream-marble-antique/336',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bluestone-antique/647',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/basalt/579',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/tundra-light-marble/487',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/royal-beige-marble/237',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/afyon-sugar-marble/420',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/adranos-white-marble/288',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/rosso-alicante-marble/486',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bianco-ibiza-sandblasted-marble/401',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/cappuccino-medium-marble/241',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bianco-ibiza-marble-bamboo/748',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/rosso-levanto-marble/536',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/pietra-grey-marble/485',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/leonardo-vein-cut-travertine/879',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/silver-vein-cut-travertine/201',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-vein-cut-travertine-honed/41',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/walnut-vein-cut-travertine/39',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/noche-vein-cut-travertine/46',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/yellow-vein-cut-travertine/390',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-vein-cut-travertine-natural/547',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-vein-cut-travertine-polished/546',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/mina-rustic-vein-cut-travertine/973',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/leonardo-cross-cut-travertine/891',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-travertine/33',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/valencia-travertine/948',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/silver-grey-travertine/43',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/yellow-gold-travertine/34',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/noche-travertine/37',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/noche-travertine-pattern-set/801',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/red-travertine/40',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/walnut-travertine/45',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/noche-rustic-travertine/416',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-natural-pattern-set-travertine/42',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-pattern-set-travertine/49',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/scabos-pattern-set-travertine/236',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/silver-grey-pattern-set-travertine/120',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/gold-travertine-pattern-set/119',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/volcano-pattern-set-travertine/48',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/walnut-pattern-set-travertine/698',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/ivory-rustic-pattern-set-travertine/588',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/tuscany-mix-pattern-set-travertine/760',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/mina-rustic-pattern-set-travertine/206',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/scott-rustic-pattern-set-travertine/210',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/storm-noche-pattern-set-travertine/693',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-travertine-pillowed-pattern-set/381',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/yellow-antique-travertine/391',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-antique-travertine/122',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/nesco-antique-travertine/587',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/licom-antique-travertine/480',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/silver-grey-antique-travertine/270',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/noche-antique-travertine/202',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/silver-splitface-travertine/484',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-splitface-travertine/213',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/rustic-splitface-travertine/212',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/turkish-mocha-cream-limestone/949',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-limestone/332',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/perla-limestone/787',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/jerusalem-limestone-/333',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/seagrass-limestone/337',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/classic-travertine-paver/415',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/silver-grey-travertine-paver/317',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bluestone-sandblasted-paver/964',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/noche-travertine-paver/200',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/gold-travertine-paver/199',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/tundra-grey-marble-paver/971',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/licom-travertine-paver/966',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bluestone-natural-paver/969',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/bluestone-tumbled-paver/970',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/walnut-travertine-paver/100',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/tundra-light-marble-paver/535',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/shellstone-limestone-paver/980',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/grey-crazy-paver/951',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/beige-crazy-paver/952',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/white-crazy-paver/854',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/black-angel-pebble/498',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/snow-flakes-pebble/499',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/dolomite-pebble/490',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/nyx-pebble/500',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/green-angel-pebble/501',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/rainbow-pebble/502',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/granite-pebble/503',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/rosso-laguna-pebble/504',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/tiger-gneiss-pebble/505',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/lilac-pebble/506',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/egean-brown-pebble/507',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/angel-sparks-pebble/508',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/basalt-pebble/509',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/river-green-pebble/512',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/river-gravels/520',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/yellow-slate/495',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/black-angel-flagstone/853',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/river-rock-stone/519',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/meteora-rock-stone/494',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/pipeline-rock-stone/496',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/spaghetti-rock-stone/493',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/nyx-natural-birdbath/856',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/lilac-natural-birdbath/857',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/rainbow-natural-birdbath/858',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/white-natural-birdbath/859',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/black-angel-birdbath/860',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/angel-sparks-birdbath/862',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/black-angel-column/521',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/rosso-laguna-column/522',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/lilac-column/523',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/white-column/524',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/nyx-column/525',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-101/659',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-107/665',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-114/756',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-115/802',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-3/28',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-10/60',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-27/68',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-27/68',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/vessel-sink-model-6/53',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-105/663',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-38/76',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-2/27',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-1/25',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-103/661',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-106/664',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-109/667',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-102/660',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-110/668',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-113/751',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-37/75',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-112/695',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-104/662',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-7/54',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-5/52',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-8/55',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-34/72',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-21/63',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-11/58',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-22/64',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-9/56',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-24/66',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-23/65',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-26/883',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-14/61',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-28/69',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vessel-Sink-Model-36/74',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-44/80',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-40/903',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-46/81',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-53/78',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-49/82',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-50/83',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-42/77',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Farmer-Sink-Model-56/936',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Shower-Tray-Model-101/920',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Shower-Tray-Model-102/921',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Shower-Tray-Model-62/85',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Shower-Tray-Model-66/86',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Shower-Tray-Model-70/87',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Shower-Tray-Model-63/84',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Shower-Tray-Model-64/890',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Ibiza-Marble-Countertop/398',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Travertine-Countertop/400',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Beige-Marble-Countertop/399',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Emperador-Marble-Countertop/397',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bathtub-Model-56/88',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bathtub-Model-57/89',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bathtub-Model-101/932',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bathtub-Model-102/933',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bathtub-Model-103/934',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bathtub-Model-104/935',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bathtub-Model-105/937',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bathtub-Model-106/974',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Ibiza-Marble-Slab/109',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Vein-Cut-Travertine-Slab/102',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Travertine-Slab/101',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Limestone-Slab/462',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Royal-Beige-Marble-Slab/379',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Turkish-Lilac-Marble-Slab/365',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Black-Eagle-White-Marble-Slab/581',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Baiyulan-Beige-Marble-Slab/586',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Puffin-Grey-Vein-Cut-Marble-Slab/590',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Puffin-Grey-Marble-Slabs/592',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Ocean-Grey-Marble-Slab/596',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bluestone-Slab/646',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Tundra-Light-Marble-Slab/674',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Blue-River-Marble-Slab/915',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Latte-Cream-Marble-Slab/675',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Crema-Marfil-Marble-Slab/694',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Pasha-White-Marble-Slab/631',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Giallo-Marble-Slab/939',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Savannah-Grey-Marble-Slab/583',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Afyon-Sugar-Marble-Slab/597',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Astan-Grey-Marble-Slab/914',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Equator-White-Marble-Slab/403',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Storm-Grey-Marble-Slab/676',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Lilac-Dark-Marble-Slab/917',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Sugar-Violet-Marble-Slab/840',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Verde-Guatemala-Marble-Slab/938',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Pasha-Vita-Marble-Slab/632',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Emperador-Light-Marble-Slab/460',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Blanco-Ivory-Marble-Slab/375',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Persian-Silver-Travertine-Slab/580',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Platinum-White-Marble-Slabs/591',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Rosso-Alicante-Marble-Slab/679',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Oasis-River-Marble-Slab/673',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Toros-Black-Marble-Slab/593',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Massa-Blanca-Marble-Slab/680',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Emperador-Dark-Marble-Slab/248',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Coffee-Royal-Marble-Slab/533',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Silver-Vein-Cut-Travertine-Slab/394',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Solaris-Blue-Marble-Slab/682',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Asgrey-Marble-Slab/683',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Burdur-Beige-Marble-Slab/691',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Gold-Travertine-Slab/762',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Diana-Royal-Marble-Slab/532',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Silver-Grey-Travertine-Slab/266',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Red-Travertine-Slab/107',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Tundra-Grey-Marble-Slab/454',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Cappuccino-Light-Marble-Slab/692',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Cappucino-Medium-Marble-Slab/376',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Mende-White-Marble-Slab/699',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Noche-Travertine-Slab/252',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Imperial-Brown-Marble-Slab/584',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Olive-Maroon-Marble-Slab/629',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Sofita-Beige-Marble-Slab/465',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Ottoman-Beige-Marble-Slab/238',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Turkish-Calacatta-Marble-Slab/442',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Gold-Marble-Slab/670',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Nero-Marquina-Marble-Slabs/594',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Olive-Brown-Marble-Slab/763',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Pietra-Grey-Marble-Slab/648',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Dolomite-White-Marble-Slab/463',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Salome-Marble-Slab/655',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Rosso-Levanto-Marble-Slab/443',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Adranos-White-Marble-Slab/377',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Perla-Limestone-Slab/755',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Fantasy-White-Marble-Slab/794',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Carrara-White-Marble-Slab/419',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Emperador-Beige-Marble-Slab/795',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Jerusalem-Limestone-Slab/455',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Leonardo-Vein-Cut-Travertine-Slab/796',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Siena-Gold-Marble-Slab/671',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Vein-Cut-Resin-Travertine-Slab/106',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Onyx-Cross-Cut-Slab/656',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Onyx-Honey-Comb-Slab/657',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Onyx-Vein-Cut-Slab/658',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Tundra-Blue-Marble-Slab/254',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Venato-Marble-Slab/110',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Noche-Vein-Cut-Travertine-Slab/479',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Yellow-Vein-Cut-Travertine-Slab/269',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Golden-River-Marble-Slab/439',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Palisandro-Marble-Slab/943',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Turkish-Moca-Cream-Limestone-Slab/950',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Elsa-Quartz-Slab/701',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Galaxy-Quartz-Slab/702',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Gereme-Quartz-Slab/703',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Efesus-Quartz-Slab/704',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Karia-Quartz-Slab/705',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Magnolia-Quartz-Slab/706',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Truva-Grey-Quartz-Slab/707',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Venato-Quartz-Slab/708',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Irlana-Quartz-Slab/709',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Helene-Quartz-Slab/851',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Artistic-Black-Quartz-Slab/764',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Erin-Quartz-Slab/765',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Lea-Quartz-Slab/766',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Sue-Quartz-Slab/767',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Vela-Quartz-Slab/768',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Mina-Quartz-Slab/910',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Fantasy-Quartz-Slab/772',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Ice-White-Quartz-Slab/773',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Idea-Quartz-Slab/774',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Magnet-Quartz-Slab/776',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Naris-Quartz-Slab/777',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Night-Quartz-Slab/778',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kafkas-Quartz-Slab/909',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Peak-Quartz-Slab/779',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Regnis-Quartz-Slab/780',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Riyana-Quartz-Slab/781',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Alya-Quartz-Slab/889',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Scarlet-Quartz-Slab/782',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Versatile-Quartz-Slab/783',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Mystral-Grey-Quartz-Slab/898',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Polar-Breeze-Quartz-Slab/899',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Gloria-Quartz-Slab/900',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Milas-Quartz-Slab/901',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Alba-Vela-Quartz-Slab/902',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Mystic-Brown-Quartz/975',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Astoria-Quartz/976',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Linda-Quartz/977',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Storm-Quartz/978',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Rivera-Quartz-Slab/981',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Tender-Quartz-Slab/982',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Hidra-Quartz-Slab/983',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Ariston-Quartz-Slab/984',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Crystal-White-Quartz-Slab/985',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Calacatta-Oro-Quartz-Slab/986',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Ibiza-Marble-Stairs/382',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Vein-Cut-Travertine-Stairs/953',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Diana-Royal-Marble-Stairs/958',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Emperador-Dark-Marble-Stairs/383',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Travertine-Stairs/384',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Gold-Travertine-Stairs/264',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Turkish-Lilac-Marble-Stairs/955',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Silver-Travertine-Stairs/956',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Noche-Vein-Cut-Travertine-Stairs/972',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bluestone-Stairs/959',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Vanilla-Beige-Marble-Stairs/960',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Turkish-Lilac-Marble-Fireplace/962',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Ibiza-Marble-Fireplace/965',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Limestone-Fireplace/963',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Travertine-Fireplace/968',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Ibiza-Marble-Square-Table-Top/757',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Ibiza-Marble-Round-Table-Top/538',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Toros-Black-Marble-Square-Table-Top/759',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Nero-Marquina-Marble-Round-Table-Top/758',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Nero-Marquina-Marble-Ellipse-Table-Top/539',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Emperador-Beige-Marble-Vase/905',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Ibiza-Marble-Vase/904',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Travertine-Balustrade/209',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Bianco-Ibiza-Marble-Balustrade/464',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Classic-Travertine-Flowerpot/907',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Silver-Travertine-Flowerpot/906',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Fountain-Oslo/837',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Drains/797',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Medallion-Dahlia/884',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Medallion-Magnolia/886',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Medallion-Poinciana/885',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Fountain-Rome/833',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Fountain-Madrid/838',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Fountain-Paris/832',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Fountain-Beirut/651',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Fountain-Moscow/836',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Fountain-Muscat/653',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Fountain-London/839',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Fountain-Riyadh/649',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Baseboard-Molding/203',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Baseboard-Tuli/531',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Pencil-Molding/204',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Molding-Dora/406',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Molding-Ogee-2/404',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Molding-Ogee-1/265',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Molding-Tilt/407',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Molding-Cup/208',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Molding-Rope/207',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-Tile-Adhesive-1051/444',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-White-Tile-Adhesive-1052/445',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-Technoflex-Adhesive-1054/446',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-Technopool-Adhesive-1062/908',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-Grout---2000-Fuga/634',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-Grout---2200-Ultra-Fuga/635',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-Grout---2300-Fuga-Flex/636',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-Grout---2500-Ultra-Fuga-Flex/637',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Kalekim-Grout---2900-Fugapool/639',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Sealing---Maxiseal-VH72/633',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Polish---Maximax-VH44/700',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Cleaner---Maxiclean-VHT62/925',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Standard-Plasterboard/926',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Fire-Resistant-Plasterboard/927',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Water-Resistant-Plasterboard/928',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Water-&-Fire-resistand-Plasterboard/929',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Incombustible-Class-A1-Plasterboard/930',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-51/325',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-G-H515/789',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-51/803',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-H315/791',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-HX44/817',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-C-D44/790',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-P-44/829',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-CB-BB/828',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-M-22/181',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-N-D22/190',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-S-RP/814',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-C-H24/359',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-M-MP/788',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-WG-R/827',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-S-P16/848',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-C-RV/826',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-R/261',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CC-44/127',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CC-24/124',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MT-W-3D22/372',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MT-C-3D31/374',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TB-C-P26/743',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-Y-PZ15/392',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-S-PZ15/410',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-C-PZ26/346',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-P16/731',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-C-R/931',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TB-Y-P26/744',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-S-P26/771',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-Y-3D22/263',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-C-PZ15/816',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-PY-IMP/434',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-C-44/182',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CW-S/724',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MS-WG-P16/849',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-C-24/174',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-WBL-B/323',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-HX44/271',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Limestone-Mosaic-LP-LB-LN/717',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-&-Limestone-Mosaic-DP-LBS-LN/718',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-LN/578',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-H515/716',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-H27/589',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TU-S-H315/710',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-MP/627',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-24/168',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-S-24/713',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-LM/623',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-G-LM/721',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-&-Limestone-Mosaic-DP-WG-LM/722',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-R/144',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-CN-515/819',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-PG-R/823',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-M3-24/139',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-HX22/714',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Limestone-Mosaic-LP-W-AR/729',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-G-PQ/622',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-G-24/329',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-WBL-BB/135',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-WBL-T/149',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-PQ/805',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-GB-B/811',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CCB-B/807',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-S-HX44/620',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-PG-HX44/799',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-FS/726',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-S-FS/725',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CC-MD/728',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-B-24/793',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MS-W-44/159',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-S-44/178',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CB-LF/723',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-BL-C27/800',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-C27/896',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-C27/897',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-22/134',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CCY-T/128',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CCB-O/813',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-&-Travertine-Mosaic-DP-WS-HX44/624',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-W-HX44/808',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-WG-SKY/727',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-M3-D44/720',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-OP/628',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-C-MP/712',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-N-MP/830',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-CC-51/193',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-Y-515/844',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-S-515/845',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-M3-22/141',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-CN-22/821',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-P-515/847',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-C-515/846',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-C-D22/175',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-M3-24/742',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-N-D22/831',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-G-44/327',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-44/136',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-M3-44/138',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-G-RP/326',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-24/262',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TF-C-44/544',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-C-3D22/373',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-C-22/166',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-C-51/358',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-N-51/189',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-C-RP/349',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-CN-B/177',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-N-44/820',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-C-52/348',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-N-22/188',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-N-H24/191',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TT-N-24/357',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-S-24/158',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-N-51/162',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-C-51/343',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TV-C-V44/338',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TS-C-24/150',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Travertine-Mosaic-TV-C-44/172',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-PS-HX44/944',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-PS-LN/947',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-PS-C27/945',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Marble-Mosaic-MP-PS-RP/946',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132607/552',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132608/553',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132609/554',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132610/555',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132611/556',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132617/559',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132619/560',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132620/561',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132621/562',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132622/563',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132623/564',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132624/565',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132627/568',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132629/569',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132644/571',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132645/572',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132647/573',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132648/574',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132649/575',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132663/576',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132664/577',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132591/894',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132606/551',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132603/548',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132605/550',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132604/549',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/detail/Glass-Mosaic-GL132626/567',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/finish/honed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/finish/polished',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/finish/brushed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/finish/tumbled',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/finish/sandblasted',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/finish/brushed-&-sandblasted',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/finish/bamboo',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/finish/filled',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/finish/unfilled',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/finish/splitface',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/3/finish/brushed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/3/finish/honed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/3/finish/polished',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/finish/polished',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/finish/matt',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/finish/tumbled',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/finish/splitface',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/finish/brushed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/finish/tumbled-group',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/finish/paver',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/finish/landscape',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/finish/splitface',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/finish/rock-group',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/finish/column-group',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/finish/tumbled',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/finish/river-group',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/finish/sink',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/finish/vessel-sink',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/finish/farmer-sink',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/finish/bathtub',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/finish/pedestal-sink',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/finish/shower-tray',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/finish/countertop',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/finish/marble',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/finish/travertine',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/finish/bookmatched',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/finish/limestone',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/finish/onyx',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/finish/brushed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/finish/honed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/finish/polished',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/finish/brushed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/finish/polished',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/finish/honed',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/stairs',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/fountain',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/molding',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/table-top',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/fireplace',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/medallion',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/vase',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/flowerpot',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/balustrade',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/finish/drain',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/finish/grouting',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/finish/tile-adhesives',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/finish/tile-cleaner',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/finish/tile-sealers',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/finish/polished',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/18/finish/fireproof',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/18/finish/waterproof',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/18/finish/standard',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/color/grey/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/color/beige/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/color/blue/8',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/color/black/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/color/yellow/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/1/color/red-pink-purple/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/color/beige/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/color/grey/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/color/yellow/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/color/multicolor/10',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/color/red-pink-purple/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/color/green/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/3/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/3/color/green/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/color/beige/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/color/blue/8',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/color/grey/2',
        modifiedAt: new Date(),
      },      {
        _path: '/product/filter/category/4/color/multicolor/10',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/color/yellow/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/color/green/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/color/black/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/yellow/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/beige/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/black/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/grey/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/red-pink-purple/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/blue/8',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/green/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/color/multicolor/10',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/color/beige/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/color/grey/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/color/black/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/color/red-pink-purple/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/color/yellow/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/color/grey/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/color/beige/4',
        modifiedAt: new Date(),
      },      {
        _path: '/product/filter/category/7/color/yellow/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/color/red-pink-purple/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/color/blue/8',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/color/black/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/color/green/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/color/grey/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/color/black/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/color/beige/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/8/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/color/beige/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/color/brown/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/color/grey/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/color/black/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/color/red-pink-purple/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/color/yellow/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/color/white/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/edge/straight/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/edge/chiseled/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/edge/tumbled/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/material/marble/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/material/travertine/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/4/material/glass/3',
        modifiedAt: new Date(),
      },      {
        _path: '/product/filter/category/4/material/limestone/11',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/material/marble/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/material/travertine/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/material/limestone/11',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/7/material/onyx/10',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/style/cross cut/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/2/style/vein cut/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/type/paver/22',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/type/pebble/24',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/type/column/27',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/type/birdbath/25',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/5/type/crazy paver/23',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/type/sink/1',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/type/bathtub/4',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/type/shower tray/3',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/6/type/countertop/2',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/stairs/7',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/fountain/5',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/molding/6',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/tabletop/8',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/fireplace/9',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/medallion/10',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/balustrade/11',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/flowerpot/12',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/9/type/vase/28',
        modifiedAt: new Date(),
      },      {
        _path: '/product/filter/category/9/type/drain/14',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/type/grout/29',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/type/adhesive/16',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/type/sealer/17',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/type/cleaner/18',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/11/type/polish/30',
        modifiedAt: new Date(),
      },
      {
        _path: '/product/filter/category/18/type/plasterboard/31',
        modifiedAt: new Date(),
      },
      



    ]);
    return posts.map((p) => {
      return {
        loc: p._path,
        lastmod: p.modifiedAt,
      };
    });
  });
  