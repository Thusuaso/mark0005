import api from '~/sql/api';
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {

    return new Promise(async (resolve, reject) => {
            const username = getQuery(event).username;
        const usernameControlSql = `
            select * from MekmarCom_Musteriler mm
where mm.kullaniciadi='${username}'
        `;
        const transporter = nodemailer.createTransport({
            host:'mail.mekmar.com',
            port: 465,
            secure: true,
            auth: {
              user: "goz@mekmar.com",
              pass: "_bwt64h-3SR_-G2O",
            },
            tls: {
              // do not fail on invalid certs
              rejectUnauthorized: false,
            },
          });
          const html = `
          <table class="table" style="border:1px solid gray;">
        <thead>
          <tr>
            <th scope="col" style="border:1px solid gray;">Username</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid gray;">${username}</td>
          </tr>
      
        </tbody>
      </table>
      
          `
          const options = {
            from: 'goz@mekmar.com',
            to: 'bilgiislem@mekmar.com',
            subject: 'Mekmar.com Logged In',
            html: html,
        };
        (await api).query(usernameControlSql, (err, control) => {
            if (control?.recordset.length > 0) {
                transporter.sendMail(options).then((res: { response: string; })=>{
                    if(res.response== '250 message sent ok '){
                      resolve(true);
                    }else{
                        resolve(false)
                    }
                  
                  })
            } else {
                resolve(false);
            }
        });
    });
});