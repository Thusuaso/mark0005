const project = {
    lang_project(payload: any, lang: any) {
        let data: { name: any; country: any;link:any }[] = [];
        if (lang == 'en') {
            payload.forEach((x: { ProjectName: any; CountryName: any;Link:any }) => {
                data.push({  ...x,'name': x.ProjectName, 'country': x.CountryName,'link':x.Link });  
            });
        } else if (lang == 'fr') {
                        payload.forEach((x: { ProjectName_Fr: any; CountryName_Fr: any;Link:any }) => {
                data.push({  ...x,'name': x.ProjectName_Fr, 'country': x.CountryName_Fr, 'link':'/fr'+x.Link });  
            });
        }
        else if (lang == 'es') {
                        payload.forEach((x: { ProjectName_Es: any; CountryName_Es: any;Link:any }) => {
                data.push({  ...x,'name': x.ProjectName_Es, 'country': x.CountryName_Es, 'link':'/es' +x.Link  });  
            });
        }
        else if (lang == 'ru') {
                        payload.forEach((x: { ProjectName_Ru: any; CountryName_Ru: any;Link:any }) => {
                data.push({  ...x,'name': x.ProjectName_Ru, 'country': x.CountryName_Ru, 'link':'/ru'+x.Link  });  
            });
        }
        return data;

    },
    lang_project_desc(payload: any, lang: any) {
        let desc = '';
        if (lang == 'en') {
            desc = payload.ProjectInformation;
        } else if (lang == "fr") {
            desc = payload.ProjectInformation_Fr;
        }else if (lang == "es") {
            desc = payload.ProjectInformation_Es;
        }else if (lang == "ru") {
            desc = payload.ProjectInformation_Ru;
        }

        return desc;
    },
    lang_project_detail_name(payload: any, lang: any) {
        let name = '';
        if (lang == 'en') {
            name = payload.ProjectName + '-' + payload.CountryName;
        }else if (lang == 'fr') {
            name = payload.ProjectName_Fr + '-' + payload.CountryName_Fr;
        }else if (lang == 'es') {
            name = payload.ProjectName_Es+ '-' + payload.CountryName_Es;
        }else if (lang == 'ru') {
            name = payload.ProjectName_Ru + '-' + payload.CountryName_Ru;
        };

        
        return name;
    },
    lang_category_products(payload: any, lang: any) {
        let data: { name: any;link:any }[] = [];
        if (lang == 'en') {
            payload.forEach((x: { name_en: any;link:any }) => {
                data.push({...x, 'name': x.name_en,'link':x.link  });
            });
        }       else if (lang == 'fr') {
            payload.forEach((x: { name_fr: any;link:any }) => {
                data.push({...x, 'name': x.name_fr,'link':'/fr' +x.link  });
            });
        }else if (lang == 'es') {
            payload.forEach((x: { name_es: any;link:any }) => {
                data.push({...x, 'name': x.name_es,'link':'/es'+x.link  });
            });
        }else if (lang == 'ru') {
            payload.forEach((x: { name_ru: any;link:any }) => {
                data.push({...x, 'name': x.name_ru,'link':'/ru'+x.link  });
            });
        };
        return data;
    },
    lang_filter(payload: any, lang: any) {
        let data: any[] = [];
        if (lang == 'en') {
            payload.forEach((x: any) => {
                data.push({...x, 'name': x.name_en, 'link':x.link });
            });
        }        else if (lang == 'fr') {
            payload.forEach((x: any) => {
                data.push({...x, 'name': x.name_fr, 'link':'/fr' + x.link});
            });
        }        else if (lang == 'es') {
            payload.forEach((x: any) => {
                                data.push({...x, 'name': x.name_es, 'link':'/es' + x.link});

            });
        }        else if (lang == 'ru') {
            payload.forEach((x: any) => {
                                                data.push({...x, 'name': x.name_ru, 'link':'/ru' + x.link});

            });
        };
        return data;
    },
    product_detail(payload: any, lang: any) {
        let data = {};
        if (lang == 'en') {
            data = { 'name': payload.urunadi_en, 'desc': payload.aciklama_en, 'keys': payload.anahtarlar_en, 'hash': payload.keywords_en, 'category': payload.kategori_en, 'stone': payload.stone_type_en, ...payload };
        }        else if (lang == 'fr') {
            data = { 'name': payload.urunadi_fr, 'desc': payload.aciklama_fr, 'keys': payload.anahtarlar_fr, 'hash': payload.keywords_fr, 'category': payload.kategori_fr, 'stone': payload.stone_type_fr, ...payload };
        } else if (lang == 'es') {
            data = { 'name': payload.urunadi_es, 'desc': payload.aciklama_es, 'keys': payload.anahtarlar_es, 'hash': payload.keywords_es, 'category': payload.kategori_es, 'stone': payload.stone_type_es, ...payload };
        }else if (lang == 'ru') {
            data = { 'name': payload.urunadi_ru, 'desc': payload.aciklama_ru, 'keys': payload.anahtarlar_ru, 'hash': payload.keywords_ru, 'category': payload.kategori_ru, 'stone': payload.stone_type_ru, ...payload };
        };
        return data;
    },
    lang_project_variation(payload: any, category: any) {
        let variation = '';
        if (category == 1) {
            variation = payload.var_1;
        } else if (category == 2) {
            variation = payload.var_2;
        }
        else if (category == 3) {
            variation = payload.var_1;
        }
                else if (category == 4) {
            variation = payload.var_1;
        }else if (category == 5) {
            variation = payload.var_1;
        }
        else if (category ==6) {
            variation = payload.var_1;
        }
        else if (category ==7) {
            variation = payload.var_1;
        }else if (category ==8) {
            variation = payload.var_1;
        }else if (category ==11) {
            variation = payload.var_1;
        }
        return variation;
    },
    lang_application(payload: any, category: any) {
        if (category == 1) {
            return payload.marble;
        } else if (category == 2) {
            return payload.travertine;
        } else if (category == 3) {
            return payload.limestone;
        } else if (category == 4) {
            return payload.mosaic;
        } else if (category == 7) {
            return payload.slab;
        } else if (category == 8) {
            return payload.quartz
        }else if (category == 5) {
            return payload.outdoor
        } else if (category == 9) {
            return payload.byproducts;
        } else if (category == 11) {
            return payload.installation;
        }
    },
    lang_specification(payload: any, category: any) {
        if (category == 1) {
            return payload.marble;
        } else if (category == 2) {
            return payload.travertine;
        } else if (category == 3) {
            return payload.limestone;
        } else if (category == 4) {
            return payload.mosaic;
        } else if (category == 7) {
            return payload.slab;
        } else if (category == 8) {
            return payload.quartz
        }else if (category == 5) {
            return payload.outdoor
        } else if (category == 6) {
            return payload.bath;
        }
    }

}
export default project;