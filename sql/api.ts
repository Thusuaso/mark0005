import mssql from 'mssql';

const sql = {
    user:'userEC52E044DE',
    password:'POlb33D8PQlo68S',
    database:'Yeni_Mekmar_DB',
    server:'94.73.151.2',
    options: {
        encrypt: false, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
};
const api = mssql.connect(sql);

export default api;