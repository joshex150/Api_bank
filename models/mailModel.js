const nodemailer = require("nodemailer");
require('dotenv').config();

const createTransporter = async () => {
  try {
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
  } catch (error) {
    console.error("Error creating transporter:", error);
    throw error;
  }
};

module.exports = createTransporter;
