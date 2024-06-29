import api from '~/sql/api';
export default defineEventHandler(async (event) => {

    return new Promise(async (resolve, reject) => {
            const username = getQuery(event).username;
        const usernameControlSql = `
            select * from MekmarCom_Musteriler mm
where mm.kullaniciadi='${username}'
        `;
        (await api).query(usernameControlSql, (err, control) => {
            if (control?.recordset.length > 0) {
                resolve(true); 

            } else {
                resolve(false);
            }
        });
    });
});