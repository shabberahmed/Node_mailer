const nodemailer = require("nodemailer");
const express=require('express');
const app=express()
app.use(express.json())

const sendEmail=async(req,res)=>{
    // let testAccount=await nodemailer.createTestAccount()
    // connect with smtp
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'zola.huel47@ethereal.email',
            pass: '3r26MU5fnfBJNgyMPe'
        }
    });
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "shabbersk3@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "is this mail?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log(info)
      res.json({info})

}
app.get('/',sendEmail)
app.listen(1001,()=>console.log('server started om 1001'))