const nodemailer = require("nodemailer");
const createTransporter = require("../models/mailModel");

const sendEmail = async (sender, recipient, subject, text) => {
  const mailOptions = {
    from: sender,
    to: recipient,
    subject: subject,
    text: text,
  };

  try {
    const transporter = await createTransporter();
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
