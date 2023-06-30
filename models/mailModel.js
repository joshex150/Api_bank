const nodemailer = require("nodemailer");
require('dotenv').config();

const createTransporter = async () => {
//   let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.OUTLOOK_URI,
      pass: process.env.OUTLOOK_KEY,
    },
  });

  return transporter;
};

module.exports = createTransporter;
