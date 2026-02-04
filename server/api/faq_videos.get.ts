import api from "~/sql/api";

export default defineEventHandler(async (event) => {
  return new Promise(async (resolve, reject) => {
    const faqVideosSql = `
              select ID,Url,Title_En,Title_Fr,Title_Es,Title_Ru,Title_Ar from Mekmar_Com_Faq_Videos

          `;

    (await api).query(faqVideosSql, async (err, result) => {
      if (result?.recordset.length > 0) {
        resolve(result?.recordset);
      } else {
        resolve(false);
      }
    });
  });
});
