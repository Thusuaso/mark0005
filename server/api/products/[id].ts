import api from '~/sql/api';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event,'id');
        const productsSql = `
    select mp.Id,mp.urunid,mp.kategori_id,mp.urunadi_en as name_en,mp.urunadi_fr as name_fr,mp.urunadi_es as name_es,mp.urunadi_ru as name_ru,mp.urunadi_ar as name_ar,
    (select top 1 mf.imagePath from MekmarCom_Fotolar mf where mf.urunid = mp.urunid order by mf.sira) as image,
    TRIM('/product/detail/' + TRIM(REPLACE(mp.urunadi_en),' ','-') + '/' + TRIM(STR(mp.urunid))) as link

    from MekmarCom_Products mp where mp.kategori_id='${id}' and mp.yayinla=1 
    order by mp.sira asc
    
    
    
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
    const colorFilterSql = `
    select 
    COUNT(mpc.renk_en) as Filtered,
    mpc.renk_en as name_en,
    mpc.renk_fr as name_fr,
    mpc.renk_es as name_es,
    mpc.renk_ru as name_ru,
    mpc.renk_ar as name_ar,
    mpc.ID as id,
    ('/product/filter/category/' + TRIM(STR(mk.Id)) +'/color/' + LOWER(TRIM(REPLACE(mpc.renk_en,'/','-'))) + '/' + TRIM(STR(mpc.ID))) as link
    
    from MekmarCom_UrunlerRenkList mur
    inner join MekmarCom_Products mp on mp.urunid = mur.UrunId
    inner join MekmarCom_Kategoriler mk on mk.Id = mp.kategori_id
    inner join MekmarCom_ProductsColor mpc on mpc.ID = mur.RenkId
    
    where mk.Id='${id}' and mp.yayinla=1
    
    group by mpc.renk_en,mpc.renk_fr,mpc.renk_es,mpc.renk_ru,mpc.ID,mk.Id,mpc.renk_ar
    order by COUNT(mpc.renk_en) desc
    `;
    const finishFilterSql = `
    select 
	COUNT(mf.finish_en) as Filtered,
	mf.finish_en as name_en,
	mf.finish_fr as name_fr,
	mf.finish_es as name_es,
	mf.finish_ru as name_ru,
    mf.finish_ar as name_ar,
    ('/product/filter/category/' + TRIM(STR(mk.Id))   + '/finish/' + LOWER(TRIM(REPLACE(mf.finish_en,' ','-')))) as link

from MekmarCom_Finish mf
inner join MekmarCom_Products mp on mp.urunid = mf.urunid
inner join MekmarCom_Kategoriler mk on mk.Id = mp.kategori_id
where mp.yayinla = 1 and mk.Id='${id}'
group by mf.finish_en,mf.finish_fr,mf.finish_es,mf.finish_ru,mk.Id,mf.finish_ar
order by COUNT(mf.finish_en) desc
    `;
    const edgeFilterSql = `
    
    select 
	COUNT(mkl.KenarEn) as Filtered,
	mkl.KenarEn as name_en,
	mkl.KenarFr as name_fr,
	mkl.KenarEs as name_es,
	mkl.KenarRu as name_ru,
    mkl.KenarAr as name_ar,
	('/product/filter/category/' + TRIM(STR(mp.kategori_id))   + '/edge/'+ LOWER(TRIM(mkl.KenarEn)) + '/' + TRIM(STR(mkl.ID))) as link


from MekmarCom_KenarFiltered mkf
inner join MekmarCom_KenarList mkl on mkl.ID = mkf.KenarId
inner join MekmarCom_Products mp on mp.urunid = mkf.UrunId

where mp.yayinla=1 and mp.kategori_id='${id}'
group by mkl.KenarEn,mkl.KenarFr,mkl.KenarEs,mkl.KenarRu,mkl.ID,mp.kategori_id,mkl.KenarAr
order by COUNT(mkl.KenarEn) desc
    `;
    const materialFilterSql = `
    select 
	COUNT(mml.MateryalEn) as Filtered,
	mml.MateryalEn as name_en,
	mml.MateryalFr as name_fr,
	mml.MateryalEs as name_es,
	mml.MateryalRu as name_ru,
    mml.MateryalAr as name_ar,
	('/product/filter/category/' + TRIM(STR(mp.kategori_id))   + '/material/'+ LOWER(TRIM(mml.MateryalEn)) + '/' + TRIM(STR(mml.ID))) as link


from MekmarCom_MateryalFiltered mmf
inner join MekmarCom_MateryalList mml on mml.ID = mmf.MateryalId
inner join MekmarCom_Products mp on mp.urunid = mmf.UrunId

where mp.yayinla=1 and mp.kategori_id='${id}'
group by mml.MateryalEn,mml.MateryalFr,mml.MateryalEs,mml.MateryalRu,mml.ID,mp.kategori_id,mml.MateryalAr
order by COUNT(mml.MateryalEn) desc
    `;
    const styleFilterSql = `
    select 
	COUNT(msl.StilEn) as Filtered,
	msl.StilEn as name_en,
	msl.StilFr as name_fr,
	msl.StilEs as name_es,
	msl.StilRu as name_ru,
    msl.StilAr as name_ar,
	('/product/filter/category/' + TRIM(STR(mp.kategori_id))   + '/style/'+ LOWER(TRIM(msl.StilEn)) + '/' + TRIM(STR(msl.ID))) as link


from MekmarCom_StilFiltered msf
inner join MekmarCom_StilList msl on msl.ID = msf.StilId
inner join MekmarCom_Products mp on mp.urunid = msf.UrunId

where mp.yayinla=1 and mp.kategori_id='${id}'
group by msl.StilEn,msl.StilFr,msl.StilEs,msl.StilRu,msl.ID,mp.kategori_id,msl.StilAr 
order by COUNT(msl.StilEn) desc
    `;
    const typeFilterSql = `
    select 
	COUNT(mtl.TurEn) as Filtered,
	mtl.TurEn as name_en,
	mtl.TurFr as name_fr,
	mtl.TurEs as name_es,
	mtl.TurRu as name_ru,
    mtl.TurAr as name_ar,
	('/product/filter/category/' + TRIM(STR(mp.kategori_id))   + '/type/'+ LOWER(TRIM(mtl.TurEn)) + '/' + TRIM(STR(mtl.ID))) as link


from MekmarCom_TurFiltered mtf
inner join MekmarCom_TurList mtl on mtl.ID = mtf.TurId
inner join MekmarCom_Products mp on mp.urunid = mtf.UrunId

where mp.yayinla=1 and mp.kategori_id='${id}'
group by mtl.TurEn,mtl.TurFr,mtl.TurEs,mtl.TurRu,mtl.ID,mp.kategori_id,mtl.TurAr
order by COUNT(mtl.TurEn) desc
    `;
    return new Promise(async (resolve, reject) => {
            (await api).query(productsSql, async(err, products) => {
        (await api).query(categoryFilterSql, async (err, category_f) => {
            (await api).query(colorFilterSql, async (err, color_f) => {
                (await api).query(finishFilterSql, async (err, finish_f) => {
                    (await api).query(edgeFilterSql, async (err, edge_f) => {
                        (await api).query(materialFilterSql, async (err, material_f) => {
                            (await api).query(styleFilterSql, async (err, style_f) => {
                                (await api).query(typeFilterSql, async (err, type_f) => {
                                    const data = {
                                        products: products?.recordset,
                                        category_f: category_f?.recordset,
                                        color_f: color_f?.recordset,
                                        finish_f: finish_f?.recordset,
                                        edge_f: edge_f?.recordset,
                                        material_f: material_f?.recordset,
                                        style_f: style_f?.recordset,
                                        type_f: type_f?.recordset,
                                    };
                                    resolve(data)
                                });
                            });
                        });
                    });
                });
           })
        });
    });
    });





});