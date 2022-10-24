import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import { corsOptions } from "./config/corsOptions.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.post("/api/send_email", function (req, response) {
  const { name,to, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "hassnainmuhammad647@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from:"hassnainmuhammad647@gmail.com",
    name,
    to,
    subject,
    message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      response.json({ message: "email sended", email: info,response:info.response });
      console.log("Email Sent: " + info.response);
    }
  });
});
app.listen(process.env.PORT, () => {
  console.log(`connected to ${process.env.PORT}`);
});
