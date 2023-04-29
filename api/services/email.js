const nodemailer = require('nodemailer')
const handlebars = require('handlebars')

let transporter = nodemailer.createTransport({
    service:"outlook",
    host: "smtp.outlook.es",
    port: 2525,
    auth: {
      user: "saveyourmoney@outlook.es",
      pass: "Contrasinal1."
    }
  });


  let codeBlock = '<!DOCTYPE html>'+
                    '<html>'+
                    '<body>'+
                    '<div class="">' +
                    '<p>Your new password is: {{password}}</p>' +
                    '</div>'+
                    '</body>'+
                    '</html>'

  

 function sendEmail(direction, password){
    let text = "This is your new password: " + password

    transporter.sendMail({
        from: 'saveyourmoney@outlook.es',
        to: direction,
        subject: "Recover",
        text: text
    });
 }

 module.exports =  {
    sendEmail
}