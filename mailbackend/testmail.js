const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: '10ff5494a4e8ab4a67af20c9fd34e5c4-29561299-c3843b01',
    domain: 'sandbox4269621a196542b0a407745512a13ed8.mailgun.org'
  }
};
const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: 'demouserkb@gamil.com',
  to: 'kbcdefgh33@gmail.com',
  subject: 'testmail',
  html: '<h2>Hello KB </h2>'
}

transporter.sendMail(mailOptions, function(err, data){
  if(err){
    console.log("Error "+err)
  } else{
    console.log("mail sent"+data)
  }
});

