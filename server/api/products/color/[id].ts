import api from '~/sql/api';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event,'id');
    const productColorList = `
        select mp.Id,mp.urunid,mp.kategori_id,mp.urunadi_en as name_en,mp.urunadi_fr as name_fr,mp.urunadi_es as name_es,mp.urunadi_ru as name_ru,mp.urunadi_ar as name_ar,
    (select top 1 mf.imagePath from MekmarCom_Fotolar mf where mf.urunid = mp.urunid order by mf.sira) as image,
    TRIM('/product/detail/' + TRIM(REPLACE(mp.urunadi_en,' ','-')) + '/' + TRIM(STR(mp.urunid))) as link

    from MekmarCom_Products mp 
	inner join MekmarCom_UrunlerRenkList ur on ur.UrunId = mp.urunid
	inner join MekmarCom_ProductsColor pc on pc.ID = ur.RenkId
	where mp.yayinla=1 and ur.RenkId='${id}'

    order by mp.sira asc

    `;
    const productCategoryFilterList = `
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
    const productAreaFilterList = `
select
            COUNT(ma.ID) as Filtered,
			 mar.Areas as name_en,
				mar.Areas_fr as name_fr,
				mar.Areas_es as name_es,
				mar.Areas_ru as name_ru,
            ('/product/area/'+ LOWER(REPLACE(mar.Areas,' ','-')) + '/' + TRIM(STR(ma.AreaId)) ) as link

        from MekmarCom_Products mp 
        inner join MekmarCom_ProductAreas ma on ma.UrunId = mp.urunid
		inner join MekmarCom_Areas mar on mar.ID = ma.AreaId
        where mp.yayinla=1 
        group by ma.AreaId,mar.Areas,mar.Areas_fr,mar.Areas_es,mar.Areas_ru
        order by COUNT(ma.ID) desc
    `;
    const productColorFilterList = `
        select 
    COUNT(mpc.renk_en) as Filtered,
    mpc.renk_en as name_en,
    mpc.renk_fr as name_fr,
    mpc.renk_es as name_es,
    mpc.renk_ru as name_ru,
	('/product/color/' + LOWER(REPLACE(mpc.renk_en,'/','-')) +'/' + TRIM(STR(mur.RenkId))) as link,
    mpc.ID as Id
    
    from MekmarCom_UrunlerRenkList mur
    inner join MekmarCom_Products mp on mp.urunid = mur.UrunId
    inner join MekmarCom_ProductsColor mpc on mpc.ID = mur.RenkId
    
    where  mp.yayinla=1
    
    group by mpc.renk_en,mpc.renk_fr,mpc.renk_es,mpc.renk_ru,mpc.ID,mur.RenkId
    order by COUNT(mpc.renk_en) desc
    `;  



    return new Promise(async (resolve, reject) => {
            (await api).query(productColorList, async (err, products) => {
                (await api).query(productCategoryFilterList,async(err,category_f)=>{
                    (await api).query(productAreaFilterList,async(err,area_f)=>{
                        (await api).query(productColorFilterList,async (err,color_f)=>{
                            const data = {
                                products:products?.recordset,
                                category_f:category_f?.recordset,
                                area_f:area_f?.recordset,
                                color_f:color_f?.recordset
                            }
                            await resolve(data);
                        })

                    });
                })
            });
    });

});