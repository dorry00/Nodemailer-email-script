const express = require("express");
// const nodemailer = require("nodemailer");
const port = 4000
const app = express()



const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type:"OAuth2",
		user: 'dorryelmah@gmail.com',
		pass: 'rice00elma',
		clientId:"575026129506-9phoimr2jeksm7lnidj90c0d0c4scr17.apps.googleusercontent.com",
        clientSecret:"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",
        refreshToken:"1//04IyQqeV-ZQf-CgYIARAAGAQSNwF-L9Ir15AGRKIlItZEj1_KmUtdNJG9Arl-wv1kb0VcjIVtYUZ9qCSpUypb3lmQCBZN2NgLk-o"
	}
});

let mailDetails = {
	from: 'dorryelmah@gmail.com',
	to: 'doriceawinja00@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log('Email sent successfully');
	}
});

// const transporter = nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user:"dorryelmah@gmail.com",
//         pass:"rice00elma"
//     }
// })
// const message = {
//     from:"dorryelmah@gmail.com",
//     to:"doriceawinja00@gmail.com",
//     subject:"nodemailer practice",
//     text:"Heu dorice am just practicing for nodemailer ignore this email"
// }

// transporter.sendMail(message, (err,data)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("email send succesfully ")

//     }

// })
app.listen( port , ()=>{
    console.log(`server at ${port}`)
})