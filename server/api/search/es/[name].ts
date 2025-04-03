import api from '~/sql/api';
export default defineEventHandler(async (event) => {
    const name = getRouterParam(event,'name');
	const productsSql = `
        select mp.Id,mp.urunid,mp.kategori_id,mp.urunadi_en as name_en,mp.urunadi_fr as name_fr,mp.urunadi_es as name_es,mp.urunadi_ru as name_ru,mp.urunadi_ar as name_ar,
        (select top 1 mf.imagePath from MekmarCom_Fotolar mf where mf.urunid = mp.urunid order by mf.sira) as image,
    TRIM('/product/detail/' + TRIM(REPLACE(REPLACE(LOWER(mp.urunadi_en),' ','-'),'ı','i')) + '/' + TRIM(STR(mp.urunid))) as link

        from MekmarCom_Products mp where mp.anahtarlar_es like '%' + '${name?.replaceAll('_',' ')}' +'%' and mp.yayinla=1
        and mp.kategori_id in (
            1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                11,
                18
        )
        order by mp.kategori_id
    
    
    `;
    const categoryFilterSql = `
        select 

            COUNT(mk.kategoriadi_en) as Filtered,
            mk.kategoriadi_en as name_en,
            mk.kategoriadi_fr as name_fr,
            mk.kategoriadi_es as name_es,
            mk.kategoriadi_ru as name_ru,
            mk.kategoriadi_ar as name_ar,

            ('/product/' + TRIM(LOWER(mk.kategori_link))) + '/' + TRIM(LOWER(STR(mk.Id))) as link

        from MekmarCom_Products mp 
        inner join MekmarCom_Kategoriler mk on mk.Id = mp.kategori_id
        where mp.yayinla=1
        group by mk.kategoriadi_en,mk.kategoriadi_fr,mk.kategoriadi_es,mk.kategoriadi_ru,mk.Id,mk.kategori_link,mk.kategoriadi_ar
        order by mk.Id
    `;

    return new Promise(async (resolve, reject) => {
            (await api).query(productsSql, async(err, products) => {
        (await api).query(categoryFilterSql, async (err, category_f) => {
           const data = {
			'products':products?.recordset,
			'categories_f':category_f?.recordset
		   };
		   resolve(data);
        });
    });
    });





});