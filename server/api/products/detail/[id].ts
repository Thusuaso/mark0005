import api from '~/sql/api';
export default defineEventHandler(async (event) => {
    const productId = getRouterParam(event,'id');
    const productDetailSql = `
        select 

	mp.Id,
	mp.urunid,
	mp.kategori_id,
	mp.urunadi_en,
	mp.aciklama_en,
	mp.anahtarlar_en,
	mp.urunadi_fr,
	mp.aciklama_fr,
	mp.anahtarlar_fr,
	mp.urunadi_es,
	mp.aciklama_es,
	mp.anahtarlar_es,
	mp.urunadi_ru,
	mp.aciklama_ru,
	mp.anahtarlar_ru,
	mp.urunadi_ar,
	mp.aciklama_ar,
	mp.anahtarlar_ar,
	mp.urunkod,
	mp.testrapor,
	mp.keywords_en,
	mp.keywords_fr,
	mp.keywords_es,
	mp.keywords_ru,
	mp.keywords_ar,
	(select mk.kategoriadi_en from MekmarCom_Kategoriler mk where mk.Id = mp.kategori_id) as kategori_en,
	(select mk.kategoriadi_fr from MekmarCom_Kategoriler mk where mk.Id = mp.kategori_id) as kategori_fr,
	(select mk.kategoriadi_es from MekmarCom_Kategoriler mk where mk.Id = mp.kategori_id) as kategori_es,
	(select mk.kategoriadi_ru from MekmarCom_Kategoriler mk where mk.Id = mp.kategori_id) as kategori_ru,
	(select mk.kategoriadi_ar from MekmarCom_Kategoriler mk where mk.Id = mp.kategori_id) as kategori_ar,

	(select mk.kategoriadi_en from MekmarCom_Kategoriler mk where mk.Id = mp.stonetype) as stone_type_en,
	(select mk.kategoriadi_fr from MekmarCom_Kategoriler mk where mk.Id = mp.stonetype) as stone_type_fr,
	(select mk.kategoriadi_es from MekmarCom_Kategoriler mk where mk.Id = mp.stonetype) as stone_type_es,
	(select mk.kategoriadi_ru from MekmarCom_Kategoriler mk where mk.Id = mp.stonetype) as stone_type_ru,
	(select mk.kategoriadi_ar from MekmarCom_Kategoriler mk where mk.Id = mp.stonetype) as stone_type_ar





from MekmarCom_Products mp
where mp.urunid='${productId}'


    `;
    const productPhotosSql = `
        select 

	mf.Id,
	mf.name,
	mf.uzanti,
	mf.imagePath,
	mf.macPath,
	mf.sira

from MekmarCom_Fotolar mf
where mf.urunid='${productId}'
order by mf.sira 
    `;
	const productPhotosExceptFirstSql = `
		select 

		mf.Id,
		mf.name,
		mf.uzanti,
		mf.imagePath,
		mf.macPath,
		mf.sira

	from MekmarCom_Fotolar mf
	where mf.urunid='${productId}' and mf.sira != 1
	order by mf.sira 
	`;
    const productSizesSql = `
        select 

	me.Id,
	me.urunid,
	me.ebat,
	me.birim,
	me.fiyat,
	me.sira

from MekmarCom_Ebatlar me
where me.urunid='${productId}' 
order by me.sira
    `;
	const productSuggestedSql = `
		select 

	mp.urunadi_en as name_en,
	mp.urunadi_fr as name_fr,
	mp.urunadi_es as name_es,
	mp.urunadi_ru as name_ru,
	mp.urunadi_ar as name_ar,
	(select top 1 mf.imagePath from MekmarCom_Fotolar mf where mf.urunid = mo.onerilenurunid order by mf.sira) as image,
	(select top 1 mf.name from MekmarCom_Fotolar mf where mf.urunid = mo.onerilenurunid order by mf.sira) as imageName,
	TRIM('/product/detail/' + TRIM(REPLACE(mp.urunadi_en,' ','-')) + '/' + TRIM(STR(mp.urunid))) as link

	 
from MekmarCom_OnerilenUrunler mo
inner join MekmarCom_Products mp on mp.urunid = mo.onerilenurunid
where mo.urunid = '${productId}' and mp.yayinla=1
	`;
    return new Promise(async (resolve, reject) => {
            (await api).query(productDetailSql, async (err, detail) => {
                (await api).query(productPhotosSql, async (err, photos) => {
					(await api).query(productSizesSql, async (err, sizes) => {
						(await api).query(productSuggestedSql, async (err, suggested) => {
							(await api).query(productPhotosExceptFirstSql,async(err,photosExceptFirst)=>{
								const data = {
									'detail': detail?.recordset,
									'photos': photos?.recordset,
									'sizes': sizes?.recordset,
									'suggested':suggested?.recordset,
									'except':photosExceptFirst?.recordset
								}
							   await resolve(data)
							});
							                         
						})

                    });
                });
            });
    });

});