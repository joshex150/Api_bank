const nodemailer = require("nodemailer");

const createTransporter = async () => {
//   let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: 'joshex150@gmail.com',
      pass: 'ofhvygptxhjvript',
    },
  });

  return transporter;
};

module.exports = createTransporter;
