const express = require('express');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const path = require('path');
require ('dotenv').config();

const PORT = process.env.PORT || 3000;

// server used to send send emails
const app = express();
app.use(express.static(path.resolve(__dirname,'../build')));
app.use(cors());
// app.use(bodyParser.json);
app.use(express.json());
app.use("/", router);



const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// bodyParser.urlencoded({extended:false}),

router.post("/connect", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contact Form Submission - Portfolio",
    html: `<h3>Name: ${name}</h3>
           <h4>Email: ${email}</h4>
           <h4>Phone: ${phone}</h4>
           <h4>Message: ${message}</h4>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

router.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
})

app.listen(PORT, () => console.log("Server Running"));