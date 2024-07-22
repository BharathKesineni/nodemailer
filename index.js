const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});
// console.log("Email Address:", process.env.EMAIL_ADDRESS);
// console.log("Email Password:", process.env.EMAIL_PASSWORD);

const options = {
  from: "bharath.kesineni@brainvire.com",
  to: "leela.oduri@brainvire.com",
  subject: "Test Email",
  text: "This is a test email",
  html: `<h1>Hello welcome to our application</h1>"
  <img src='cid:food' width='200px'>
  <button>Click Here </button>
  `,
  attachments: [
    {
      filename: "para.jpg",
      path: "https://images.pexels.com/photos/10148059/pexels-photo-10148059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cid: "food",
    },
  ],
};
console.log(/options/, options);

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Email sent: " + info.response);
  }
});
