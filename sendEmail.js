var nodemailer = require('nodemailer');

//username替换为邮箱名，%40后面是邮件服务器的地址，比如163.com，password替换为邮箱密码（或独立密码，如果有设置的话），@后面填SMTP服务器地址，如163的smtp地址为smtp.163.com
// var transport = nodemailer.createTransport('smtps://username%40163.com:password@smtp.163.com');
var transport = nodemailer.createTransport('smtps://1046788379%40qq.com:ffhsoilytoyobfci@smtp.qq.com'); //is good
var mailOptions = {
  from: '1046788379@qq.com',  //发件人
  to: '550695739@qq.com',  //收件人，可以设置多个
  subject: '大家好，我是张勇',  //邮件主题
  text: '666666666666666',  //邮件文本
  html: '大家好，我是张勇<h2>ok</h2><img src="https://img02.sogoucdn.com/app/a/100520093/0e0fd862f51611ae-a90dafa354d6f346-8c5e984ebb81866a54d1daf9b24810c6.jpg"/><script>alert(1)</script>'  //html格式文本
};

transport.sendMail(mailOptions, function(err, info){
    if(err){
      return console.log(err);
    }
    console.log('Message sent: ' + info.response);
  });
