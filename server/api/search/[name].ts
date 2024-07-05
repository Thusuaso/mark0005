import api from '~/sql/api';
export default defineEventHandler(async (event) => {
    const name = getRouterParam(event,'name');
	const productsSql = `
select mp.Id,mp.urunid,mp.kategori_id,mp.urunadi_en as name_en,mp.urunadi_fr as name_fr,mp.urunadi_es as name_es,mp.urunadi_ru as name_ru,mp.urunadi_ar as name_ar,
    (select top 1 mf.imagePath from MekmarCom_Fotolar mf where mf.urunid = mp.urunid order by mf.sira) as image,
    TRIM('/product/detail/' + TRIM(REPLACE(mp.urunadi_en,' ','-')) + '/' + TRIM(STR(mp.urunid))) as link

    from MekmarCom_Products mp where mp.anahtarlar_en like '%' + '${name?.replaceAll('-',' ')}' +'%' and mp.yayinla=1
    
    
    
    `;
    const categoryFilterSql = `
    select 

	COUNT(mk.kategoriadi_en) as Filtered,
	mk.kategoriadi_en as name_en,
	mk.kategoriadi_fr as name_fr,
	mk.kategoriadi_es as name_es,
	mk.kategoriadi_ru as name_ru,
	('/product/' + TRIM(LOWER(mk.kategori_link))) + '/' + TRIM(LOWER(STR(mk.Id))) as link

from MekmarCom_Products mp 
inner join MekmarCom_Kategoriler mk on mk.Id = mp.kategori_id
where mp.yayinla=1
group by mk.kategoriadi_en,mk.kategoriadi_fr,mk.kategoriadi_es,mk.kategoriadi_ru,mk.Id,mk.kategori_link
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