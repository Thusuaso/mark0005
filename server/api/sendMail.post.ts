import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return new Promise((resolve,reject) => {
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
    })
    const html = `
    <table class="table" style="border:1px solid gray;">
  <thead>
    <tr>
      <th scope="col" style="border:1px solid gray;">Name</th>
      <th scope="col" style="border:1px solid gray;">Email</th>
      <th scope="col" style="border:1px solid gray;">Phone</th>
      <th scope="col" style="border:1px solid gray;">Message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid gray;">${body.name}</td>
      <td style="border:1px solid gray;">${body.email}</td>
      <td style="border:1px solid gray;">${body.phone}</td>
      <td style="border:1px solid gray;padding:5px;">${body.description}</td>
    </tr>

  </tbody>
</table>

    `
        const options = {
            from: 'goz@mekmar.com',
            to: 'export@mekmar.com',
            subject: 'Mekmar.com Contact',
            html: html,
        };
        transporter.sendMail(options).then((res: { response: string; })=>{
        if(res.response== '250 message sent ok '){
          resolve(true);
        }else{
          reject(false)
        }
      
      })
    });
    
})